import { ExecutionContext, createParamDecorator } from '@nestjs/common';

enum ESearchType {
  EQUAL = 'eq',
  LIKE = 'cont',
}

interface SearchParam {
  table: string;
  column: string;
  searchType: ESearchType;
}

export interface ISearchQuery {
  query: string;
  params: any;
}

export const SearchQuery = createParamDecorator((data: any, ctx: ExecutionContext): ISearchQuery => {
  const request = ctx.switchToHttp().getRequest();
  const query = request.query;
  const queries = [];
  const params: any = {};
  Object.keys(query).forEach((key) => {
    const value = query[key];
    const searchKeys = validateSearchKey(key, value);
    if (!searchKeys) return;

    switch (searchKeys.searchType) {
      case ESearchType.EQUAL:
        queries.push(`${searchKeys.table}.${searchKeys.column} = :${key}`);
        params[key] = value;
        break;
    }
  });

  return queries.length > 0 ? { query: queries.join(' AND '), params } : { query: '', params };
});

const validateSearchKey = (key: string, value: any): SearchParam | false => {
  const [table, column, searchType] = key.split('_');

  if (!table || !column || !searchType || !Object.values(ESearchType).some((type) => type === searchType)) return false;
  if (value === null || value === undefined) return false;

  return { table, column, searchType } as SearchParam;
};
