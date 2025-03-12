export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  bytea: { input: any; output: any; }
  citext: { input: any; output: any; }
  json: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  lquery: { input: any; output: any; }
  ltree: { input: any; output: any; }
  ltxtquery: { input: any; output: any; }
  numeric: { input: number; output: number; }
  smallint: { input: any; output: any; }
  timestamp: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

export type Activate_Organization_Features_Input = {
  category_ids: Array<Scalars['String']['input']>;
  organization_id: Scalars['uuid']['input'];
};

/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequests = {
  __typename?: 'authProviderRequests';
  id: Scalars['uuid']['output'];
  options?: Maybe<Scalars['jsonb']['output']>;
};


/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequestsOptionsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate = {
  __typename?: 'authProviderRequests_aggregate';
  aggregate?: Maybe<AuthProviderRequests_Aggregate_Fields>;
  nodes: Array<AuthProviderRequests>;
};

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_Fields = {
  __typename?: 'authProviderRequests_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthProviderRequests_Max_Fields>;
  min?: Maybe<AuthProviderRequests_Min_Fields>;
};


/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Append_Input = {
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export type AuthProviderRequests_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  _not?: InputMaybe<AuthProviderRequests_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  options?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.provider_requests" */
export enum AuthProviderRequests_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProviderRequestsPkey = 'provider_requests_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthProviderRequests_Delete_At_Path_Input = {
  options?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthProviderRequests_Delete_Elem_Input = {
  options?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthProviderRequests_Delete_Key_Input = {
  options?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "auth.provider_requests" */
export type AuthProviderRequests_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate max on columns */
export type AuthProviderRequests_Max_Fields = {
  __typename?: 'authProviderRequests_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type AuthProviderRequests_Min_Fields = {
  __typename?: 'authProviderRequests_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "auth.provider_requests" */
export type AuthProviderRequests_Mutation_Response = {
  __typename?: 'authProviderRequests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviderRequests>;
};

/** on_conflict condition type for table "auth.provider_requests" */
export type AuthProviderRequests_On_Conflict = {
  constraint: AuthProviderRequests_Constraint;
  update_columns?: Array<AuthProviderRequests_Update_Column>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.provider_requests". */
export type AuthProviderRequests_Order_By = {
  id?: InputMaybe<Order_By>;
  options?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.provider_requests */
export type AuthProviderRequests_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Prepend_Input = {
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

/** input type for updating data in table "auth.provider_requests" */
export type AuthProviderRequests_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Streaming cursor of the table "authProviderRequests" */
export type AuthProviderRequests_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthProviderRequests_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviderRequests_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** update columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

export type AuthProviderRequests_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthProviderRequests_Bool_Exp;
};

/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviders = {
  __typename?: 'authProviders';
  id: Scalars['String']['output'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.providers" */
export type AuthProviders_Aggregate = {
  __typename?: 'authProviders_aggregate';
  aggregate?: Maybe<AuthProviders_Aggregate_Fields>;
  nodes: Array<AuthProviders>;
};

/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_Fields = {
  __typename?: 'authProviders_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthProviders_Max_Fields>;
  min?: Maybe<AuthProviders_Min_Fields>;
};


/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type AuthProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum AuthProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
export type AuthProviders_Insert_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthProviders_Max_Fields = {
  __typename?: 'authProviders_max_fields';
  id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type AuthProviders_Min_Fields = {
  __typename?: 'authProviders_min_fields';
  id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.providers" */
export type AuthProviders_Mutation_Response = {
  __typename?: 'authProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviders>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type AuthProviders_Obj_Rel_Insert_Input = {
  data: AuthProviders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};

/** on_conflict condition type for table "auth.providers" */
export type AuthProviders_On_Conflict = {
  constraint: AuthProviders_Constraint;
  update_columns?: Array<AuthProviders_Update_Column>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type AuthProviders_Order_By = {
  id?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.providers */
export type AuthProviders_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "auth.providers" */
export enum AuthProviders_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "auth.providers" */
export type AuthProviders_Set_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "authProviders" */
export type AuthProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthProviders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviders_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.providers" */
export enum AuthProviders_Update_Column {
  /** column name */
  Id = 'id'
}

export type AuthProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviders_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthProviders_Bool_Exp;
};

/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes = {
  __typename?: 'authRefreshTokenTypes';
  comment?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  value: Scalars['String']['output'];
};


/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypesRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypesRefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** aggregated selection of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate = {
  __typename?: 'authRefreshTokenTypes_aggregate';
  aggregate?: Maybe<AuthRefreshTokenTypes_Aggregate_Fields>;
  nodes: Array<AuthRefreshTokenTypes>;
};

/** aggregate fields of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate_Fields = {
  __typename?: 'authRefreshTokenTypes_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthRefreshTokenTypes_Max_Fields>;
  min?: Maybe<AuthRefreshTokenTypes_Min_Fields>;
};


/** aggregate fields of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.refresh_token_types". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokenTypes_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRefreshTokenTypes_Bool_Exp>>;
  _not?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRefreshTokenTypes_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Constraint {
  /** unique or primary key constraint on columns "value" */
  RefreshTokenTypesPkey = 'refresh_token_types_pkey'
}

export enum AuthRefreshTokenTypes_Enum {
  /** Personal access token */
  Pat = 'pat',
  /** Regular refresh token */
  Regular = 'regular'
}

/** Boolean expression to compare columns of type "authRefreshTokenTypes_enum". All fields are combined with logical 'AND'. */
export type AuthRefreshTokenTypes_Enum_Comparison_Exp = {
  _eq?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  _in?: InputMaybe<Array<AuthRefreshTokenTypes_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  _nin?: InputMaybe<Array<AuthRefreshTokenTypes_Enum>>;
};

/** input type for inserting data into table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type AuthRefreshTokenTypes_Max_Fields = {
  __typename?: 'authRefreshTokenTypes_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type AuthRefreshTokenTypes_Min_Fields = {
  __typename?: 'authRefreshTokenTypes_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Mutation_Response = {
  __typename?: 'authRefreshTokenTypes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokenTypes>;
};

/** on_conflict condition type for table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_On_Conflict = {
  constraint: AuthRefreshTokenTypes_Constraint;
  update_columns?: Array<AuthRefreshTokenTypes_Update_Column>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_token_types". */
export type AuthRefreshTokenTypes_Order_By = {
  comment?: InputMaybe<Order_By>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.refresh_token_types */
export type AuthRefreshTokenTypes_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "authRefreshTokenTypes" */
export type AuthRefreshTokenTypes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRefreshTokenTypes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRefreshTokenTypes_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type AuthRefreshTokenTypes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthRefreshTokenTypes_Bool_Exp;
};

/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokens = {
  __typename?: 'authRefreshTokens';
  createdAt: Scalars['timestamptz']['output'];
  expiresAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  refreshTokenHash?: Maybe<Scalars['String']['output']>;
  type: AuthRefreshTokenTypes_Enum;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};


/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokensMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate = {
  __typename?: 'authRefreshTokens_aggregate';
  aggregate?: Maybe<AuthRefreshTokens_Aggregate_Fields>;
  nodes: Array<AuthRefreshTokens>;
};

export type AuthRefreshTokens_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp_Count>;
};

export type AuthRefreshTokens_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Fields = {
  __typename?: 'authRefreshTokens_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthRefreshTokens_Max_Fields>;
  min?: Maybe<AuthRefreshTokens_Min_Fields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthRefreshTokens_Max_Order_By>;
  min?: InputMaybe<AuthRefreshTokens_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthRefreshTokens_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type AuthRefreshTokens_Arr_Rel_Insert_Input = {
  data: Array<AuthRefreshTokens_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokens_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  _not?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  expiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  refreshTokenHash?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Constraint {
  /** unique or primary key constraint on columns "id" */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthRefreshTokens_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthRefreshTokens_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthRefreshTokens_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "auth.refresh_tokens" */
export type AuthRefreshTokens_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  refreshTokenHash?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthRefreshTokens_Max_Fields = {
  __typename?: 'authRefreshTokens_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  expiresAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  refreshTokenHash?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthRefreshTokens_Min_Fields = {
  __typename?: 'authRefreshTokens_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  expiresAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  refreshTokenHash?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type AuthRefreshTokens_Mutation_Response = {
  __typename?: 'authRefreshTokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokens>;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
export type AuthRefreshTokens_On_Conflict = {
  constraint: AuthRefreshTokens_Constraint;
  update_columns?: Array<AuthRefreshTokens_Update_Column>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type AuthRefreshTokens_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.refresh_tokens */
export type AuthRefreshTokens_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthRefreshTokens_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  RefreshTokenHash = 'refreshTokenHash',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.refresh_tokens" */
export type AuthRefreshTokens_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  refreshTokenHash?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "authRefreshTokens" */
export type AuthRefreshTokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRefreshTokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRefreshTokens_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  refreshTokenHash?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  RefreshTokenHash = 'refreshTokenHash',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

export type AuthRefreshTokens_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthRefreshTokens_Bool_Exp;
};

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRoles = {
  __typename?: 'authRoles';
  role: Scalars['String']['output'];
  /** An array relationship */
  userRoles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  userRoles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  usersByDefaultRole: Array<Users>;
  /** An aggregate relationship */
  usersByDefaultRole_aggregate: Users_Aggregate;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRoleArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "auth.roles" */
export type AuthRoles_Aggregate = {
  __typename?: 'authRoles_aggregate';
  aggregate?: Maybe<AuthRoles_Aggregate_Fields>;
  nodes: Array<AuthRoles>;
};

/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_Fields = {
  __typename?: 'authRoles_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthRoles_Max_Fields>;
  min?: Maybe<AuthRoles_Min_Fields>;
};


/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type AuthRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  role?: InputMaybe<String_Comparison_Exp>;
  userRoles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>;
  usersByDefaultRole?: InputMaybe<Users_Bool_Exp>;
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum AuthRoles_Constraint {
  /** unique or primary key constraint on columns "role" */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
export type AuthRoles_Insert_Input = {
  role?: InputMaybe<Scalars['String']['input']>;
  userRoles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  usersByDefaultRole?: InputMaybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthRoles_Max_Fields = {
  __typename?: 'authRoles_max_fields';
  role?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type AuthRoles_Min_Fields = {
  __typename?: 'authRoles_min_fields';
  role?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.roles" */
export type AuthRoles_Mutation_Response = {
  __typename?: 'authRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRoles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type AuthRoles_Obj_Rel_Insert_Input = {
  data: AuthRoles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};

/** on_conflict condition type for table "auth.roles" */
export type AuthRoles_On_Conflict = {
  constraint: AuthRoles_Constraint;
  update_columns?: Array<AuthRoles_Update_Column>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type AuthRoles_Order_By = {
  role?: InputMaybe<Order_By>;
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.roles */
export type AuthRoles_Pk_Columns_Input = {
  role: Scalars['String']['input'];
};

/** select columns of table "auth.roles" */
export enum AuthRoles_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.roles" */
export type AuthRoles_Set_Input = {
  role?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "authRoles" */
export type AuthRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRoles_Stream_Cursor_Value_Input = {
  role?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.roles" */
export enum AuthRoles_Update_Column {
  /** column name */
  Role = 'role'
}

export type AuthRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRoles_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthRoles_Bool_Exp;
};

/** Active providers for a given user. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserProviders = {
  __typename?: 'authUserProviders';
  accessToken: Scalars['String']['output'];
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  provider: AuthProviders;
  providerId: Scalars['String']['output'];
  providerUserId: Scalars['String']['output'];
  refreshToken?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.user_providers" */
export type AuthUserProviders_Aggregate = {
  __typename?: 'authUserProviders_aggregate';
  aggregate?: Maybe<AuthUserProviders_Aggregate_Fields>;
  nodes: Array<AuthUserProviders>;
};

export type AuthUserProviders_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp_Count>;
};

export type AuthUserProviders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthUserProviders_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_Fields = {
  __typename?: 'authUserProviders_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthUserProviders_Max_Fields>;
  min?: Maybe<AuthUserProviders_Min_Fields>;
};


/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.user_providers" */
export type AuthUserProviders_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserProviders_Max_Order_By>;
  min?: InputMaybe<AuthUserProviders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_providers" */
export type AuthUserProviders_Arr_Rel_Insert_Input = {
  data: Array<AuthUserProviders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export type AuthUserProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthUserProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  accessToken?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  provider?: InputMaybe<AuthProviders_Bool_Exp>;
  providerId?: InputMaybe<String_Comparison_Exp>;
  providerUserId?: InputMaybe<String_Comparison_Exp>;
  refreshToken?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_providers" */
export enum AuthUserProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserProvidersPkey = 'user_providers_pkey',
  /** unique or primary key constraint on columns "provider_user_id", "provider_id" */
  UserProvidersProviderIdProviderUserIdKey = 'user_providers_provider_id_provider_user_id_key',
  /** unique or primary key constraint on columns "user_id", "provider_id" */
  UserProvidersUserIdProviderIdKey = 'user_providers_user_id_provider_id_key'
}

/** input type for inserting data into table "auth.user_providers" */
export type AuthUserProviders_Insert_Input = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  provider?: InputMaybe<AuthProviders_Obj_Rel_Insert_Input>;
  providerId?: InputMaybe<Scalars['String']['input']>;
  providerUserId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthUserProviders_Max_Fields = {
  __typename?: 'authUserProviders_max_fields';
  accessToken?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  providerId?: Maybe<Scalars['String']['output']>;
  providerUserId?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.user_providers" */
export type AuthUserProviders_Max_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserProviders_Min_Fields = {
  __typename?: 'authUserProviders_min_fields';
  accessToken?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  providerId?: Maybe<Scalars['String']['output']>;
  providerUserId?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.user_providers" */
export type AuthUserProviders_Min_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_providers" */
export type AuthUserProviders_Mutation_Response = {
  __typename?: 'authUserProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserProviders>;
};

/** on_conflict condition type for table "auth.user_providers" */
export type AuthUserProviders_On_Conflict = {
  constraint: AuthUserProviders_Constraint;
  update_columns?: Array<AuthUserProviders_Update_Column>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_providers". */
export type AuthUserProviders_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider?: InputMaybe<AuthProviders_Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_providers */
export type AuthUserProviders_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.user_providers" */
export enum AuthUserProviders_Select_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_providers" */
export type AuthUserProviders_Set_Input = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  providerId?: InputMaybe<Scalars['String']['input']>;
  providerUserId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "authUserProviders" */
export type AuthUserProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserProviders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserProviders_Stream_Cursor_Value_Input = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  providerId?: InputMaybe<Scalars['String']['input']>;
  providerUserId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.user_providers" */
export enum AuthUserProviders_Update_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type AuthUserProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserProviders_Bool_Exp;
};

/** Roles of users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserRoles = {
  __typename?: 'authUserRoles';
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  role: Scalars['String']['output'];
  /** An object relationship */
  roleByRole: AuthRoles;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.user_roles" */
export type AuthUserRoles_Aggregate = {
  __typename?: 'authUserRoles_aggregate';
  aggregate?: Maybe<AuthUserRoles_Aggregate_Fields>;
  nodes: Array<AuthUserRoles>;
};

export type AuthUserRoles_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp_Count>;
};

export type AuthUserRoles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthUserRoles_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_Fields = {
  __typename?: 'authUserRoles_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthUserRoles_Max_Fields>;
  min?: Maybe<AuthUserRoles_Min_Fields>;
};


/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.user_roles" */
export type AuthUserRoles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserRoles_Max_Order_By>;
  min?: InputMaybe<AuthUserRoles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_roles" */
export type AuthUserRoles_Arr_Rel_Insert_Input = {
  data: Array<AuthUserRoles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export type AuthUserRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthUserRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  roleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_roles" */
export enum AuthUserRoles_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserRolesPkey = 'user_roles_pkey',
  /** unique or primary key constraint on columns "user_id", "role" */
  UserRolesUserIdRoleKey = 'user_roles_user_id_role_key'
}

/** input type for inserting data into table "auth.user_roles" */
export type AuthUserRoles_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  roleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthUserRoles_Max_Fields = {
  __typename?: 'authUserRoles_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.user_roles" */
export type AuthUserRoles_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserRoles_Min_Fields = {
  __typename?: 'authUserRoles_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.user_roles" */
export type AuthUserRoles_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_roles" */
export type AuthUserRoles_Mutation_Response = {
  __typename?: 'authUserRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserRoles>;
};

/** on_conflict condition type for table "auth.user_roles" */
export type AuthUserRoles_On_Conflict = {
  constraint: AuthUserRoles_Constraint;
  update_columns?: Array<AuthUserRoles_Update_Column>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_roles". */
export type AuthUserRoles_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  roleByRole?: InputMaybe<AuthRoles_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_roles */
export type AuthUserRoles_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.user_roles" */
export enum AuthUserRoles_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_roles" */
export type AuthUserRoles_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "authUserRoles" */
export type AuthUserRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserRoles_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.user_roles" */
export enum AuthUserRoles_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

export type AuthUserRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserRoles_Bool_Exp;
};

/** User webauthn security keys. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserSecurityKeys = {
  __typename?: 'authUserSecurityKeys';
  counter: Scalars['bigint']['output'];
  credentialId: Scalars['String']['output'];
  credentialPublicKey?: Maybe<Scalars['bytea']['output']>;
  id: Scalars['uuid']['output'];
  nickname?: Maybe<Scalars['String']['output']>;
  transports: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate = {
  __typename?: 'authUserSecurityKeys_aggregate';
  aggregate?: Maybe<AuthUserSecurityKeys_Aggregate_Fields>;
  nodes: Array<AuthUserSecurityKeys>;
};

export type AuthUserSecurityKeys_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp_Count>;
};

export type AuthUserSecurityKeys_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Fields = {
  __typename?: 'authUserSecurityKeys_aggregate_fields';
  avg?: Maybe<AuthUserSecurityKeys_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<AuthUserSecurityKeys_Max_Fields>;
  min?: Maybe<AuthUserSecurityKeys_Min_Fields>;
  stddev?: Maybe<AuthUserSecurityKeys_Stddev_Fields>;
  stddev_pop?: Maybe<AuthUserSecurityKeys_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<AuthUserSecurityKeys_Stddev_Samp_Fields>;
  sum?: Maybe<AuthUserSecurityKeys_Sum_Fields>;
  var_pop?: Maybe<AuthUserSecurityKeys_Var_Pop_Fields>;
  var_samp?: Maybe<AuthUserSecurityKeys_Var_Samp_Fields>;
  variance?: Maybe<AuthUserSecurityKeys_Variance_Fields>;
};


/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Order_By = {
  avg?: InputMaybe<AuthUserSecurityKeys_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserSecurityKeys_Max_Order_By>;
  min?: InputMaybe<AuthUserSecurityKeys_Min_Order_By>;
  stddev?: InputMaybe<AuthUserSecurityKeys_Stddev_Order_By>;
  stddev_pop?: InputMaybe<AuthUserSecurityKeys_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<AuthUserSecurityKeys_Stddev_Samp_Order_By>;
  sum?: InputMaybe<AuthUserSecurityKeys_Sum_Order_By>;
  var_pop?: InputMaybe<AuthUserSecurityKeys_Var_Pop_Order_By>;
  var_samp?: InputMaybe<AuthUserSecurityKeys_Var_Samp_Order_By>;
  variance?: InputMaybe<AuthUserSecurityKeys_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Arr_Rel_Insert_Input = {
  data: Array<AuthUserSecurityKeys_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};

/** aggregate avg on columns */
export type AuthUserSecurityKeys_Avg_Fields = {
  __typename?: 'authUserSecurityKeys_avg_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Avg_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "auth.user_security_keys". All fields are combined with a logical 'AND'. */
export type AuthUserSecurityKeys_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
  _not?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
  counter?: InputMaybe<Bigint_Comparison_Exp>;
  credentialId?: InputMaybe<String_Comparison_Exp>;
  credentialPublicKey?: InputMaybe<Bytea_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  transports?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Constraint {
  /** unique or primary key constraint on columns "credential_id" */
  UserSecurityKeyCredentialIdKey = 'user_security_key_credential_id_key',
  /** unique or primary key constraint on columns "id" */
  UserSecurityKeysPkey = 'user_security_keys_pkey'
}

/** input type for incrementing numeric columns in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Inc_Input = {
  counter?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Insert_Input = {
  counter?: InputMaybe<Scalars['bigint']['input']>;
  credentialId?: InputMaybe<Scalars['String']['input']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  transports?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthUserSecurityKeys_Max_Fields = {
  __typename?: 'authUserSecurityKeys_max_fields';
  counter?: Maybe<Scalars['bigint']['output']>;
  credentialId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  transports?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Max_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserSecurityKeys_Min_Fields = {
  __typename?: 'authUserSecurityKeys_min_fields';
  counter?: Maybe<Scalars['bigint']['output']>;
  credentialId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  transports?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Min_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Mutation_Response = {
  __typename?: 'authUserSecurityKeys_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserSecurityKeys>;
};

/** on_conflict condition type for table "auth.user_security_keys" */
export type AuthUserSecurityKeys_On_Conflict = {
  constraint: AuthUserSecurityKeys_Constraint;
  update_columns?: Array<AuthUserSecurityKeys_Update_Column>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_security_keys". */
export type AuthUserSecurityKeys_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  credentialPublicKey?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_security_keys */
export type AuthUserSecurityKeys_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Select_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Set_Input = {
  counter?: InputMaybe<Scalars['bigint']['input']>;
  credentialId?: InputMaybe<Scalars['String']['input']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  transports?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type AuthUserSecurityKeys_Stddev_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type AuthUserSecurityKeys_Stddev_Pop_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_pop_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type AuthUserSecurityKeys_Stddev_Samp_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_samp_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "authUserSecurityKeys" */
export type AuthUserSecurityKeys_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserSecurityKeys_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserSecurityKeys_Stream_Cursor_Value_Input = {
  counter?: InputMaybe<Scalars['bigint']['input']>;
  credentialId?: InputMaybe<Scalars['String']['input']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  transports?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type AuthUserSecurityKeys_Sum_Fields = {
  __typename?: 'authUserSecurityKeys_sum_fields';
  counter?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Sum_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** update columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Update_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

export type AuthUserSecurityKeys_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserSecurityKeys_Bool_Exp;
};

/** aggregate var_pop on columns */
export type AuthUserSecurityKeys_Var_Pop_Fields = {
  __typename?: 'authUserSecurityKeys_var_pop_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type AuthUserSecurityKeys_Var_Samp_Fields = {
  __typename?: 'authUserSecurityKeys_var_samp_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type AuthUserSecurityKeys_Variance_Fields = {
  __typename?: 'authUserSecurityKeys_variance_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Variance_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** columns and relationships of "booking" */
export type Booking = {
  __typename?: 'booking';
  amount: Scalars['numeric']['output'];
  booking_answers_by_id: Scalars['json']['output'];
  /** An object relationship */
  contact: Contact;
  contact_id: Scalars['uuid']['output'];
  created_on: Scalars['timestamptz']['output'];
  friendly_id: Scalars['String']['output'];
  /** An array relationship */
  history_entries: Array<Booking_History_Entry>;
  /** An aggregate relationship */
  history_entries_aggregate: Booking_History_Entry_Aggregate;
  id: Scalars['uuid']['output'];
  last_modified_on: Scalars['timestamptz']['output'];
  locale: Scalars['String']['output'];
  /** An object relationship */
  organization: Organization;
  organization_id: Scalars['uuid']['output'];
  /** An array relationship */
  products: Array<Booking_Product>;
  /** An aggregate relationship */
  products_aggregate: Booking_Product_Aggregate;
  questions_by_scope_by_id: Scalars['json']['output'];
  state: Booking_State_Enum;
  version: Scalars['numeric']['output'];
};


/** columns and relationships of "booking" */
export type BookingBooking_Answers_By_IdArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "booking" */
export type BookingHistory_EntriesArgs = {
  distinct_on?: InputMaybe<Array<Booking_History_Entry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_History_Entry_Order_By>>;
  where?: InputMaybe<Booking_History_Entry_Bool_Exp>;
};


/** columns and relationships of "booking" */
export type BookingHistory_Entries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_History_Entry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_History_Entry_Order_By>>;
  where?: InputMaybe<Booking_History_Entry_Bool_Exp>;
};


/** columns and relationships of "booking" */
export type BookingProductsArgs = {
  distinct_on?: InputMaybe<Array<Booking_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Product_Order_By>>;
  where?: InputMaybe<Booking_Product_Bool_Exp>;
};


/** columns and relationships of "booking" */
export type BookingProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Product_Order_By>>;
  where?: InputMaybe<Booking_Product_Bool_Exp>;
};


/** columns and relationships of "booking" */
export type BookingQuestions_By_Scope_By_IdArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

export type Booking_Accept_Input = {
  expected_version: Scalars['numeric']['input'];
  id: Scalars['uuid']['input'];
};

export type Booking_Add_Note_Input = {
  expected_version: Scalars['numeric']['input'];
  id: Scalars['uuid']['input'];
  note: Scalars['String']['input'];
};

/** aggregated selection of "booking" */
export type Booking_Aggregate = {
  __typename?: 'booking_aggregate';
  aggregate?: Maybe<Booking_Aggregate_Fields>;
  nodes: Array<Booking>;
};

export type Booking_Aggregate_Bool_Exp = {
  count?: InputMaybe<Booking_Aggregate_Bool_Exp_Count>;
};

export type Booking_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Booking_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Booking_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "booking" */
export type Booking_Aggregate_Fields = {
  __typename?: 'booking_aggregate_fields';
  avg?: Maybe<Booking_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Booking_Max_Fields>;
  min?: Maybe<Booking_Min_Fields>;
  stddev?: Maybe<Booking_Stddev_Fields>;
  stddev_pop?: Maybe<Booking_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Booking_Stddev_Samp_Fields>;
  sum?: Maybe<Booking_Sum_Fields>;
  var_pop?: Maybe<Booking_Var_Pop_Fields>;
  var_samp?: Maybe<Booking_Var_Samp_Fields>;
  variance?: Maybe<Booking_Variance_Fields>;
};


/** aggregate fields of "booking" */
export type Booking_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Booking_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "booking" */
export type Booking_Aggregate_Order_By = {
  avg?: InputMaybe<Booking_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Booking_Max_Order_By>;
  min?: InputMaybe<Booking_Min_Order_By>;
  stddev?: InputMaybe<Booking_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Booking_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Booking_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Booking_Sum_Order_By>;
  var_pop?: InputMaybe<Booking_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Booking_Var_Samp_Order_By>;
  variance?: InputMaybe<Booking_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "booking" */
export type Booking_Arr_Rel_Insert_Input = {
  data: Array<Booking_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Booking_On_Conflict>;
};

/** aggregate avg on columns */
export type Booking_Avg_Fields = {
  __typename?: 'booking_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  version?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "booking" */
export type Booking_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "booking". All fields are combined with a logical 'AND'. */
export type Booking_Bool_Exp = {
  _and?: InputMaybe<Array<Booking_Bool_Exp>>;
  _not?: InputMaybe<Booking_Bool_Exp>;
  _or?: InputMaybe<Array<Booking_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  booking_answers_by_id?: InputMaybe<Json_Comparison_Exp>;
  contact?: InputMaybe<Contact_Bool_Exp>;
  contact_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_on?: InputMaybe<Timestamptz_Comparison_Exp>;
  friendly_id?: InputMaybe<String_Comparison_Exp>;
  history_entries?: InputMaybe<Booking_History_Entry_Bool_Exp>;
  history_entries_aggregate?: InputMaybe<Booking_History_Entry_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  last_modified_on?: InputMaybe<Timestamptz_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  organization?: InputMaybe<Organization_Bool_Exp>;
  organization_id?: InputMaybe<Uuid_Comparison_Exp>;
  products?: InputMaybe<Booking_Product_Bool_Exp>;
  products_aggregate?: InputMaybe<Booking_Product_Aggregate_Bool_Exp>;
  questions_by_scope_by_id?: InputMaybe<Json_Comparison_Exp>;
  state?: InputMaybe<Booking_State_Enum_Comparison_Exp>;
  version?: InputMaybe<Numeric_Comparison_Exp>;
};

export type Booking_Cancel_Input = {
  expected_version: Scalars['numeric']['input'];
  id: Scalars['uuid']['input'];
};

/** unique or primary key constraints on table "booking" */
export enum Booking_Constraint {
  /** unique or primary key constraint on columns "id" */
  BookingPkey = 'booking_pkey',
  /** unique or primary key constraint on columns "friendly_id", "organization_id" */
  FriendlyIdUkey = 'friendly_id_ukey'
}

export type Booking_Contact_Input = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Booking_Create_Input = {
  answers: Booking_Questions_Answers_By_Scope;
  contact: Booking_Contact_Input;
  friendly_id: Scalars['String']['input'];
  id?: InputMaybe<Scalars['uuid']['input']>;
  items: Array<Booking_Item_Input>;
  locale: Scalars['String']['input'];
  organization_id: Scalars['uuid']['input'];
};

/** columns and relationships of "booking_events.event_type" */
export type Booking_Events_Event_Type = {
  __typename?: 'booking_events_event_type';
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
};

/** aggregated selection of "booking_events.event_type" */
export type Booking_Events_Event_Type_Aggregate = {
  __typename?: 'booking_events_event_type_aggregate';
  aggregate?: Maybe<Booking_Events_Event_Type_Aggregate_Fields>;
  nodes: Array<Booking_Events_Event_Type>;
};

/** aggregate fields of "booking_events.event_type" */
export type Booking_Events_Event_Type_Aggregate_Fields = {
  __typename?: 'booking_events_event_type_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Booking_Events_Event_Type_Max_Fields>;
  min?: Maybe<Booking_Events_Event_Type_Min_Fields>;
};


/** aggregate fields of "booking_events.event_type" */
export type Booking_Events_Event_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Booking_Events_Event_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "booking_events.event_type". All fields are combined with a logical 'AND'. */
export type Booking_Events_Event_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Booking_Events_Event_Type_Bool_Exp>>;
  _not?: InputMaybe<Booking_Events_Event_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Booking_Events_Event_Type_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "booking_events.event_type" */
export enum Booking_Events_Event_Type_Constraint {
  /** unique or primary key constraint on columns "id" */
  EventTypePkey = 'event_type_pkey'
}

export enum Booking_Events_Event_Type_Enum {
  /** Accepted */
  Accepted = 'ACCEPTED',
  /** Created */
  Created = 'CREATED',
  /** Customer cancelled */
  CustomerCancelled = 'CUSTOMER_CANCELLED',
  /** Note added */
  NoteAdded = 'NOTE_ADDED',
  /** Owner cancelled */
  OwnerCancelled = 'OWNER_CANCELLED',
  /** Rejected */
  Rejected = 'REJECTED'
}

/** Boolean expression to compare columns of type "booking_events_event_type_enum". All fields are combined with logical 'AND'. */
export type Booking_Events_Event_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Booking_Events_Event_Type_Enum>;
  _in?: InputMaybe<Array<Booking_Events_Event_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Booking_Events_Event_Type_Enum>;
  _nin?: InputMaybe<Array<Booking_Events_Event_Type_Enum>>;
};

/** input type for inserting data into table "booking_events.event_type" */
export type Booking_Events_Event_Type_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Booking_Events_Event_Type_Max_Fields = {
  __typename?: 'booking_events_event_type_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Booking_Events_Event_Type_Min_Fields = {
  __typename?: 'booking_events_event_type_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "booking_events.event_type" */
export type Booking_Events_Event_Type_Mutation_Response = {
  __typename?: 'booking_events_event_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Booking_Events_Event_Type>;
};

/** on_conflict condition type for table "booking_events.event_type" */
export type Booking_Events_Event_Type_On_Conflict = {
  constraint: Booking_Events_Event_Type_Constraint;
  update_columns?: Array<Booking_Events_Event_Type_Update_Column>;
  where?: InputMaybe<Booking_Events_Event_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "booking_events.event_type". */
export type Booking_Events_Event_Type_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: booking_events.event_type */
export type Booking_Events_Event_Type_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "booking_events.event_type" */
export enum Booking_Events_Event_Type_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "booking_events.event_type" */
export type Booking_Events_Event_Type_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "booking_events_event_type" */
export type Booking_Events_Event_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Booking_Events_Event_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Booking_Events_Event_Type_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "booking_events.event_type" */
export enum Booking_Events_Event_Type_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id'
}

export type Booking_Events_Event_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Booking_Events_Event_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Booking_Events_Event_Type_Bool_Exp;
};

/** columns and relationships of "booking_events.main" */
export type Booking_Events_Main = {
  __typename?: 'booking_events_main';
  booking_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  payload: Scalars['json']['output'];
  timestamp: Scalars['timestamptz']['output'];
  type: Booking_Events_Event_Type_Enum;
  user_id?: Maybe<Scalars['uuid']['output']>;
  version: Scalars['Int']['output'];
};


/** columns and relationships of "booking_events.main" */
export type Booking_Events_MainPayloadArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "booking_events.main" */
export type Booking_Events_Main_Aggregate = {
  __typename?: 'booking_events_main_aggregate';
  aggregate?: Maybe<Booking_Events_Main_Aggregate_Fields>;
  nodes: Array<Booking_Events_Main>;
};

/** aggregate fields of "booking_events.main" */
export type Booking_Events_Main_Aggregate_Fields = {
  __typename?: 'booking_events_main_aggregate_fields';
  avg?: Maybe<Booking_Events_Main_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Booking_Events_Main_Max_Fields>;
  min?: Maybe<Booking_Events_Main_Min_Fields>;
  stddev?: Maybe<Booking_Events_Main_Stddev_Fields>;
  stddev_pop?: Maybe<Booking_Events_Main_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Booking_Events_Main_Stddev_Samp_Fields>;
  sum?: Maybe<Booking_Events_Main_Sum_Fields>;
  var_pop?: Maybe<Booking_Events_Main_Var_Pop_Fields>;
  var_samp?: Maybe<Booking_Events_Main_Var_Samp_Fields>;
  variance?: Maybe<Booking_Events_Main_Variance_Fields>;
};


/** aggregate fields of "booking_events.main" */
export type Booking_Events_Main_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Booking_Events_Main_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Booking_Events_Main_Avg_Fields = {
  __typename?: 'booking_events_main_avg_fields';
  version?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "booking_events.main". All fields are combined with a logical 'AND'. */
export type Booking_Events_Main_Bool_Exp = {
  _and?: InputMaybe<Array<Booking_Events_Main_Bool_Exp>>;
  _not?: InputMaybe<Booking_Events_Main_Bool_Exp>;
  _or?: InputMaybe<Array<Booking_Events_Main_Bool_Exp>>;
  booking_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  payload?: InputMaybe<Json_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  type?: InputMaybe<Booking_Events_Event_Type_Enum_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  version?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "booking_events.main" */
export enum Booking_Events_Main_Constraint {
  /** unique or primary key constraint on columns "booking_id", "version" */
  MainBookingIdVersionKey = 'main_booking_id_version_key',
  /** unique or primary key constraint on columns "id" */
  MainPkey = 'main_pkey'
}

/** input type for incrementing numeric columns in table "booking_events.main" */
export type Booking_Events_Main_Inc_Input = {
  version?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "booking_events.main" */
export type Booking_Events_Main_Insert_Input = {
  booking_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  payload?: InputMaybe<Scalars['json']['input']>;
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  type?: InputMaybe<Booking_Events_Event_Type_Enum>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Booking_Events_Main_Max_Fields = {
  __typename?: 'booking_events_main_max_fields';
  booking_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Booking_Events_Main_Min_Fields = {
  __typename?: 'booking_events_main_min_fields';
  booking_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "booking_events.main" */
export type Booking_Events_Main_Mutation_Response = {
  __typename?: 'booking_events_main_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Booking_Events_Main>;
};

/** on_conflict condition type for table "booking_events.main" */
export type Booking_Events_Main_On_Conflict = {
  constraint: Booking_Events_Main_Constraint;
  update_columns?: Array<Booking_Events_Main_Update_Column>;
  where?: InputMaybe<Booking_Events_Main_Bool_Exp>;
};

/** Ordering options when selecting data from "booking_events.main". */
export type Booking_Events_Main_Order_By = {
  booking_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payload?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** primary key columns input for table: booking_events.main */
export type Booking_Events_Main_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "booking_events.main" */
export enum Booking_Events_Main_Select_Column {
  /** column name */
  BookingId = 'booking_id',
  /** column name */
  Id = 'id',
  /** column name */
  Payload = 'payload',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Version = 'version'
}

/** input type for updating data in table "booking_events.main" */
export type Booking_Events_Main_Set_Input = {
  booking_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  payload?: InputMaybe<Scalars['json']['input']>;
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  type?: InputMaybe<Booking_Events_Event_Type_Enum>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Booking_Events_Main_Stddev_Fields = {
  __typename?: 'booking_events_main_stddev_fields';
  version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Booking_Events_Main_Stddev_Pop_Fields = {
  __typename?: 'booking_events_main_stddev_pop_fields';
  version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Booking_Events_Main_Stddev_Samp_Fields = {
  __typename?: 'booking_events_main_stddev_samp_fields';
  version?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "booking_events_main" */
export type Booking_Events_Main_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Booking_Events_Main_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Booking_Events_Main_Stream_Cursor_Value_Input = {
  booking_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  payload?: InputMaybe<Scalars['json']['input']>;
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  type?: InputMaybe<Booking_Events_Event_Type_Enum>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Booking_Events_Main_Sum_Fields = {
  __typename?: 'booking_events_main_sum_fields';
  version?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "booking_events.main" */
export enum Booking_Events_Main_Update_Column {
  /** column name */
  BookingId = 'booking_id',
  /** column name */
  Id = 'id',
  /** column name */
  Payload = 'payload',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Version = 'version'
}

export type Booking_Events_Main_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Booking_Events_Main_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Booking_Events_Main_Set_Input>;
  /** filter the rows which have to be updated */
  where: Booking_Events_Main_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Booking_Events_Main_Var_Pop_Fields = {
  __typename?: 'booking_events_main_var_pop_fields';
  version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Booking_Events_Main_Var_Samp_Fields = {
  __typename?: 'booking_events_main_var_samp_fields';
  version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Booking_Events_Main_Variance_Fields = {
  __typename?: 'booking_events_main_variance_fields';
  version?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "booking_events.version" */
export type Booking_Events_Version = {
  __typename?: 'booking_events_version';
  current: Scalars['numeric']['output'];
  id: Scalars['uuid']['output'];
};

/** aggregated selection of "booking_events.version" */
export type Booking_Events_Version_Aggregate = {
  __typename?: 'booking_events_version_aggregate';
  aggregate?: Maybe<Booking_Events_Version_Aggregate_Fields>;
  nodes: Array<Booking_Events_Version>;
};

/** aggregate fields of "booking_events.version" */
export type Booking_Events_Version_Aggregate_Fields = {
  __typename?: 'booking_events_version_aggregate_fields';
  avg?: Maybe<Booking_Events_Version_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Booking_Events_Version_Max_Fields>;
  min?: Maybe<Booking_Events_Version_Min_Fields>;
  stddev?: Maybe<Booking_Events_Version_Stddev_Fields>;
  stddev_pop?: Maybe<Booking_Events_Version_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Booking_Events_Version_Stddev_Samp_Fields>;
  sum?: Maybe<Booking_Events_Version_Sum_Fields>;
  var_pop?: Maybe<Booking_Events_Version_Var_Pop_Fields>;
  var_samp?: Maybe<Booking_Events_Version_Var_Samp_Fields>;
  variance?: Maybe<Booking_Events_Version_Variance_Fields>;
};


/** aggregate fields of "booking_events.version" */
export type Booking_Events_Version_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Booking_Events_Version_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Booking_Events_Version_Avg_Fields = {
  __typename?: 'booking_events_version_avg_fields';
  current?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "booking_events.version". All fields are combined with a logical 'AND'. */
export type Booking_Events_Version_Bool_Exp = {
  _and?: InputMaybe<Array<Booking_Events_Version_Bool_Exp>>;
  _not?: InputMaybe<Booking_Events_Version_Bool_Exp>;
  _or?: InputMaybe<Array<Booking_Events_Version_Bool_Exp>>;
  current?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "booking_events.version" */
export enum Booking_Events_Version_Constraint {
  /** unique or primary key constraint on columns "id" */
  VersionPkey = 'version_pkey'
}

/** input type for incrementing numeric columns in table "booking_events.version" */
export type Booking_Events_Version_Inc_Input = {
  current?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "booking_events.version" */
export type Booking_Events_Version_Insert_Input = {
  current?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Booking_Events_Version_Max_Fields = {
  __typename?: 'booking_events_version_max_fields';
  current?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Booking_Events_Version_Min_Fields = {
  __typename?: 'booking_events_version_min_fields';
  current?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "booking_events.version" */
export type Booking_Events_Version_Mutation_Response = {
  __typename?: 'booking_events_version_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Booking_Events_Version>;
};

/** on_conflict condition type for table "booking_events.version" */
export type Booking_Events_Version_On_Conflict = {
  constraint: Booking_Events_Version_Constraint;
  update_columns?: Array<Booking_Events_Version_Update_Column>;
  where?: InputMaybe<Booking_Events_Version_Bool_Exp>;
};

/** Ordering options when selecting data from "booking_events.version". */
export type Booking_Events_Version_Order_By = {
  current?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: booking_events.version */
export type Booking_Events_Version_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "booking_events.version" */
export enum Booking_Events_Version_Select_Column {
  /** column name */
  Current = 'current',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "booking_events.version" */
export type Booking_Events_Version_Set_Input = {
  current?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Booking_Events_Version_Stddev_Fields = {
  __typename?: 'booking_events_version_stddev_fields';
  current?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Booking_Events_Version_Stddev_Pop_Fields = {
  __typename?: 'booking_events_version_stddev_pop_fields';
  current?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Booking_Events_Version_Stddev_Samp_Fields = {
  __typename?: 'booking_events_version_stddev_samp_fields';
  current?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "booking_events_version" */
export type Booking_Events_Version_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Booking_Events_Version_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Booking_Events_Version_Stream_Cursor_Value_Input = {
  current?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Booking_Events_Version_Sum_Fields = {
  __typename?: 'booking_events_version_sum_fields';
  current?: Maybe<Scalars['numeric']['output']>;
};

/** update columns of table "booking_events.version" */
export enum Booking_Events_Version_Update_Column {
  /** column name */
  Current = 'current',
  /** column name */
  Id = 'id'
}

export type Booking_Events_Version_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Booking_Events_Version_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Booking_Events_Version_Set_Input>;
  /** filter the rows which have to be updated */
  where: Booking_Events_Version_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Booking_Events_Version_Var_Pop_Fields = {
  __typename?: 'booking_events_version_var_pop_fields';
  current?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Booking_Events_Version_Var_Samp_Fields = {
  __typename?: 'booking_events_version_var_samp_fields';
  current?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Booking_Events_Version_Variance_Fields = {
  __typename?: 'booking_events_version_variance_fields';
  current?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "booking_history_entry" */
export type Booking_History_Entry = {
  __typename?: 'booking_history_entry';
  /** An object relationship */
  booking: Booking;
  booking_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  timestamp: Scalars['timestamptz']['output'];
  type: Scalars['String']['output'];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  value: Scalars['json']['output'];
  version: Scalars['numeric']['output'];
};


/** columns and relationships of "booking_history_entry" */
export type Booking_History_EntryValueArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "booking_history_entry" */
export type Booking_History_Entry_Aggregate = {
  __typename?: 'booking_history_entry_aggregate';
  aggregate?: Maybe<Booking_History_Entry_Aggregate_Fields>;
  nodes: Array<Booking_History_Entry>;
};

export type Booking_History_Entry_Aggregate_Bool_Exp = {
  count?: InputMaybe<Booking_History_Entry_Aggregate_Bool_Exp_Count>;
};

export type Booking_History_Entry_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Booking_History_Entry_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Booking_History_Entry_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "booking_history_entry" */
export type Booking_History_Entry_Aggregate_Fields = {
  __typename?: 'booking_history_entry_aggregate_fields';
  avg?: Maybe<Booking_History_Entry_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Booking_History_Entry_Max_Fields>;
  min?: Maybe<Booking_History_Entry_Min_Fields>;
  stddev?: Maybe<Booking_History_Entry_Stddev_Fields>;
  stddev_pop?: Maybe<Booking_History_Entry_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Booking_History_Entry_Stddev_Samp_Fields>;
  sum?: Maybe<Booking_History_Entry_Sum_Fields>;
  var_pop?: Maybe<Booking_History_Entry_Var_Pop_Fields>;
  var_samp?: Maybe<Booking_History_Entry_Var_Samp_Fields>;
  variance?: Maybe<Booking_History_Entry_Variance_Fields>;
};


/** aggregate fields of "booking_history_entry" */
export type Booking_History_Entry_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Booking_History_Entry_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "booking_history_entry" */
export type Booking_History_Entry_Aggregate_Order_By = {
  avg?: InputMaybe<Booking_History_Entry_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Booking_History_Entry_Max_Order_By>;
  min?: InputMaybe<Booking_History_Entry_Min_Order_By>;
  stddev?: InputMaybe<Booking_History_Entry_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Booking_History_Entry_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Booking_History_Entry_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Booking_History_Entry_Sum_Order_By>;
  var_pop?: InputMaybe<Booking_History_Entry_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Booking_History_Entry_Var_Samp_Order_By>;
  variance?: InputMaybe<Booking_History_Entry_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "booking_history_entry" */
export type Booking_History_Entry_Arr_Rel_Insert_Input = {
  data: Array<Booking_History_Entry_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Booking_History_Entry_On_Conflict>;
};

/** aggregate avg on columns */
export type Booking_History_Entry_Avg_Fields = {
  __typename?: 'booking_history_entry_avg_fields';
  version?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "booking_history_entry" */
export type Booking_History_Entry_Avg_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "booking_history_entry". All fields are combined with a logical 'AND'. */
export type Booking_History_Entry_Bool_Exp = {
  _and?: InputMaybe<Array<Booking_History_Entry_Bool_Exp>>;
  _not?: InputMaybe<Booking_History_Entry_Bool_Exp>;
  _or?: InputMaybe<Array<Booking_History_Entry_Bool_Exp>>;
  booking?: InputMaybe<Booking_Bool_Exp>;
  booking_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  value?: InputMaybe<Json_Comparison_Exp>;
  version?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "booking_history_entry" */
export enum Booking_History_Entry_Constraint {
  /** unique or primary key constraint on columns "id" */
  BookingHistoryEntryPkey = 'booking_history_entry_pkey'
}

/** input type for incrementing numeric columns in table "booking_history_entry" */
export type Booking_History_Entry_Inc_Input = {
  version?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "booking_history_entry" */
export type Booking_History_Entry_Insert_Input = {
  booking?: InputMaybe<Booking_Obj_Rel_Insert_Input>;
  booking_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  value?: InputMaybe<Scalars['json']['input']>;
  version?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate max on columns */
export type Booking_History_Entry_Max_Fields = {
  __typename?: 'booking_history_entry_max_fields';
  booking_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  version?: Maybe<Scalars['numeric']['output']>;
};

/** order by max() on columns of table "booking_history_entry" */
export type Booking_History_Entry_Max_Order_By = {
  booking_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Booking_History_Entry_Min_Fields = {
  __typename?: 'booking_history_entry_min_fields';
  booking_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  version?: Maybe<Scalars['numeric']['output']>;
};

/** order by min() on columns of table "booking_history_entry" */
export type Booking_History_Entry_Min_Order_By = {
  booking_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "booking_history_entry" */
export type Booking_History_Entry_Mutation_Response = {
  __typename?: 'booking_history_entry_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Booking_History_Entry>;
};

/** on_conflict condition type for table "booking_history_entry" */
export type Booking_History_Entry_On_Conflict = {
  constraint: Booking_History_Entry_Constraint;
  update_columns?: Array<Booking_History_Entry_Update_Column>;
  where?: InputMaybe<Booking_History_Entry_Bool_Exp>;
};

/** Ordering options when selecting data from "booking_history_entry". */
export type Booking_History_Entry_Order_By = {
  booking?: InputMaybe<Booking_Order_By>;
  booking_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** primary key columns input for table: booking_history_entry */
export type Booking_History_Entry_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "booking_history_entry" */
export enum Booking_History_Entry_Select_Column {
  /** column name */
  BookingId = 'booking_id',
  /** column name */
  Id = 'id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Value = 'value',
  /** column name */
  Version = 'version'
}

/** input type for updating data in table "booking_history_entry" */
export type Booking_History_Entry_Set_Input = {
  booking_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  value?: InputMaybe<Scalars['json']['input']>;
  version?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate stddev on columns */
export type Booking_History_Entry_Stddev_Fields = {
  __typename?: 'booking_history_entry_stddev_fields';
  version?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "booking_history_entry" */
export type Booking_History_Entry_Stddev_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Booking_History_Entry_Stddev_Pop_Fields = {
  __typename?: 'booking_history_entry_stddev_pop_fields';
  version?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "booking_history_entry" */
export type Booking_History_Entry_Stddev_Pop_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Booking_History_Entry_Stddev_Samp_Fields = {
  __typename?: 'booking_history_entry_stddev_samp_fields';
  version?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "booking_history_entry" */
export type Booking_History_Entry_Stddev_Samp_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "booking_history_entry" */
export type Booking_History_Entry_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Booking_History_Entry_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Booking_History_Entry_Stream_Cursor_Value_Input = {
  booking_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  value?: InputMaybe<Scalars['json']['input']>;
  version?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Booking_History_Entry_Sum_Fields = {
  __typename?: 'booking_history_entry_sum_fields';
  version?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "booking_history_entry" */
export type Booking_History_Entry_Sum_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** update columns of table "booking_history_entry" */
export enum Booking_History_Entry_Update_Column {
  /** column name */
  BookingId = 'booking_id',
  /** column name */
  Id = 'id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Value = 'value',
  /** column name */
  Version = 'version'
}

export type Booking_History_Entry_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Booking_History_Entry_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Booking_History_Entry_Set_Input>;
  /** filter the rows which have to be updated */
  where: Booking_History_Entry_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Booking_History_Entry_Var_Pop_Fields = {
  __typename?: 'booking_history_entry_var_pop_fields';
  version?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "booking_history_entry" */
export type Booking_History_Entry_Var_Pop_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Booking_History_Entry_Var_Samp_Fields = {
  __typename?: 'booking_history_entry_var_samp_fields';
  version?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "booking_history_entry" */
export type Booking_History_Entry_Var_Samp_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Booking_History_Entry_Variance_Fields = {
  __typename?: 'booking_history_entry_variance_fields';
  version?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "booking_history_entry" */
export type Booking_History_Entry_Variance_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** input type for incrementing numeric columns in table "booking" */
export type Booking_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  version?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "booking" */
export type Booking_Insert_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  booking_answers_by_id?: InputMaybe<Scalars['json']['input']>;
  contact?: InputMaybe<Contact_Obj_Rel_Insert_Input>;
  contact_id?: InputMaybe<Scalars['uuid']['input']>;
  created_on?: InputMaybe<Scalars['timestamptz']['input']>;
  friendly_id?: InputMaybe<Scalars['String']['input']>;
  history_entries?: InputMaybe<Booking_History_Entry_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  last_modified_on?: InputMaybe<Scalars['timestamptz']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  products?: InputMaybe<Booking_Product_Arr_Rel_Insert_Input>;
  questions_by_scope_by_id?: InputMaybe<Scalars['json']['input']>;
  state?: InputMaybe<Booking_State_Enum>;
  version?: InputMaybe<Scalars['numeric']['input']>;
};

export type Booking_Item_Input = {
  expected_price: Scalars['numeric']['input'];
  explained_search_params: Scalars['json']['input'];
  rate_id: Scalars['uuid']['input'];
  search_params: Search_Params_Input;
  units: Array<Booking_Item_Unit_Input>;
};

export type Booking_Item_Unit_Input = {
  supplements: Array<Booking_Item_Unit_Supplements_Input>;
};

export type Booking_Item_Unit_Supplements_Input = {
  expected_unit_price: Scalars['numeric']['input'];
  id: Scalars['uuid']['input'];
  quantity: Scalars['numeric']['input'];
};

/** aggregate max on columns */
export type Booking_Max_Fields = {
  __typename?: 'booking_max_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  contact_id?: Maybe<Scalars['uuid']['output']>;
  created_on?: Maybe<Scalars['timestamptz']['output']>;
  friendly_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  last_modified_on?: Maybe<Scalars['timestamptz']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  organization_id?: Maybe<Scalars['uuid']['output']>;
  version?: Maybe<Scalars['numeric']['output']>;
};

/** order by max() on columns of table "booking" */
export type Booking_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  contact_id?: InputMaybe<Order_By>;
  created_on?: InputMaybe<Order_By>;
  friendly_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_modified_on?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Booking_Min_Fields = {
  __typename?: 'booking_min_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  contact_id?: Maybe<Scalars['uuid']['output']>;
  created_on?: Maybe<Scalars['timestamptz']['output']>;
  friendly_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  last_modified_on?: Maybe<Scalars['timestamptz']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  organization_id?: Maybe<Scalars['uuid']['output']>;
  version?: Maybe<Scalars['numeric']['output']>;
};

/** order by min() on columns of table "booking" */
export type Booking_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  contact_id?: InputMaybe<Order_By>;
  created_on?: InputMaybe<Order_By>;
  friendly_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_modified_on?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "booking" */
export type Booking_Mutation_Response = {
  __typename?: 'booking_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Booking>;
};

/** input type for inserting object relation for remote table "booking" */
export type Booking_Obj_Rel_Insert_Input = {
  data: Booking_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Booking_On_Conflict>;
};

/** on_conflict condition type for table "booking" */
export type Booking_On_Conflict = {
  constraint: Booking_Constraint;
  update_columns?: Array<Booking_Update_Column>;
  where?: InputMaybe<Booking_Bool_Exp>;
};

/** Ordering options when selecting data from "booking". */
export type Booking_Order_By = {
  amount?: InputMaybe<Order_By>;
  booking_answers_by_id?: InputMaybe<Order_By>;
  contact?: InputMaybe<Contact_Order_By>;
  contact_id?: InputMaybe<Order_By>;
  created_on?: InputMaybe<Order_By>;
  friendly_id?: InputMaybe<Order_By>;
  history_entries_aggregate?: InputMaybe<Booking_History_Entry_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  last_modified_on?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  organization?: InputMaybe<Organization_Order_By>;
  organization_id?: InputMaybe<Order_By>;
  products_aggregate?: InputMaybe<Booking_Product_Aggregate_Order_By>;
  questions_by_scope_by_id?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** primary key columns input for table: booking */
export type Booking_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "booking_product" */
export type Booking_Product = {
  __typename?: 'booking_product';
  /** An object relationship */
  booking: Booking;
  booking_id: Scalars['uuid']['output'];
  ends_on: Scalars['timestamp']['output'];
  explained_search_params: Scalars['json']['output'];
  id: Scalars['uuid']['output'];
  pax_answers_by_pax_type_by_index_by_id: Scalars['json']['output'];
  price: Scalars['numeric']['output'];
  product_answers_by_id: Scalars['json']['output'];
  quantity: Scalars['numeric']['output'];
  /** An object relationship */
  rate: Rate;
  rate_id: Scalars['uuid']['output'];
  search_params: Scalars['json']['output'];
  starts_on: Scalars['timestamp']['output'];
};


/** columns and relationships of "booking_product" */
export type Booking_ProductExplained_Search_ParamsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "booking_product" */
export type Booking_ProductPax_Answers_By_Pax_Type_By_Index_By_IdArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "booking_product" */
export type Booking_ProductProduct_Answers_By_IdArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "booking_product" */
export type Booking_ProductSearch_ParamsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "booking_product" */
export type Booking_Product_Aggregate = {
  __typename?: 'booking_product_aggregate';
  aggregate?: Maybe<Booking_Product_Aggregate_Fields>;
  nodes: Array<Booking_Product>;
};

export type Booking_Product_Aggregate_Bool_Exp = {
  count?: InputMaybe<Booking_Product_Aggregate_Bool_Exp_Count>;
};

export type Booking_Product_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Booking_Product_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Booking_Product_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "booking_product" */
export type Booking_Product_Aggregate_Fields = {
  __typename?: 'booking_product_aggregate_fields';
  avg?: Maybe<Booking_Product_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Booking_Product_Max_Fields>;
  min?: Maybe<Booking_Product_Min_Fields>;
  stddev?: Maybe<Booking_Product_Stddev_Fields>;
  stddev_pop?: Maybe<Booking_Product_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Booking_Product_Stddev_Samp_Fields>;
  sum?: Maybe<Booking_Product_Sum_Fields>;
  var_pop?: Maybe<Booking_Product_Var_Pop_Fields>;
  var_samp?: Maybe<Booking_Product_Var_Samp_Fields>;
  variance?: Maybe<Booking_Product_Variance_Fields>;
};


/** aggregate fields of "booking_product" */
export type Booking_Product_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Booking_Product_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "booking_product" */
export type Booking_Product_Aggregate_Order_By = {
  avg?: InputMaybe<Booking_Product_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Booking_Product_Max_Order_By>;
  min?: InputMaybe<Booking_Product_Min_Order_By>;
  stddev?: InputMaybe<Booking_Product_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Booking_Product_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Booking_Product_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Booking_Product_Sum_Order_By>;
  var_pop?: InputMaybe<Booking_Product_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Booking_Product_Var_Samp_Order_By>;
  variance?: InputMaybe<Booking_Product_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "booking_product" */
export type Booking_Product_Arr_Rel_Insert_Input = {
  data: Array<Booking_Product_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Booking_Product_On_Conflict>;
};

/** aggregate avg on columns */
export type Booking_Product_Avg_Fields = {
  __typename?: 'booking_product_avg_fields';
  price?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "booking_product" */
export type Booking_Product_Avg_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "booking_product". All fields are combined with a logical 'AND'. */
export type Booking_Product_Bool_Exp = {
  _and?: InputMaybe<Array<Booking_Product_Bool_Exp>>;
  _not?: InputMaybe<Booking_Product_Bool_Exp>;
  _or?: InputMaybe<Array<Booking_Product_Bool_Exp>>;
  booking?: InputMaybe<Booking_Bool_Exp>;
  booking_id?: InputMaybe<Uuid_Comparison_Exp>;
  ends_on?: InputMaybe<Timestamp_Comparison_Exp>;
  explained_search_params?: InputMaybe<Json_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  pax_answers_by_pax_type_by_index_by_id?: InputMaybe<Json_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  product_answers_by_id?: InputMaybe<Json_Comparison_Exp>;
  quantity?: InputMaybe<Numeric_Comparison_Exp>;
  rate?: InputMaybe<Rate_Bool_Exp>;
  rate_id?: InputMaybe<Uuid_Comparison_Exp>;
  search_params?: InputMaybe<Json_Comparison_Exp>;
  starts_on?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "booking_product" */
export enum Booking_Product_Constraint {
  /** unique or primary key constraint on columns "id" */
  BookingProductsPkey = 'booking_products_pkey'
}

/** input type for incrementing numeric columns in table "booking_product" */
export type Booking_Product_Inc_Input = {
  price?: InputMaybe<Scalars['numeric']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "booking_product" */
export type Booking_Product_Insert_Input = {
  booking?: InputMaybe<Booking_Obj_Rel_Insert_Input>;
  booking_id?: InputMaybe<Scalars['uuid']['input']>;
  ends_on?: InputMaybe<Scalars['timestamp']['input']>;
  explained_search_params?: InputMaybe<Scalars['json']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  pax_answers_by_pax_type_by_index_by_id?: InputMaybe<Scalars['json']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  product_answers_by_id?: InputMaybe<Scalars['json']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  rate?: InputMaybe<Rate_Obj_Rel_Insert_Input>;
  rate_id?: InputMaybe<Scalars['uuid']['input']>;
  search_params?: InputMaybe<Scalars['json']['input']>;
  starts_on?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type Booking_Product_Max_Fields = {
  __typename?: 'booking_product_max_fields';
  booking_id?: Maybe<Scalars['uuid']['output']>;
  ends_on?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  quantity?: Maybe<Scalars['numeric']['output']>;
  rate_id?: Maybe<Scalars['uuid']['output']>;
  starts_on?: Maybe<Scalars['timestamp']['output']>;
};

/** order by max() on columns of table "booking_product" */
export type Booking_Product_Max_Order_By = {
  booking_id?: InputMaybe<Order_By>;
  ends_on?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  rate_id?: InputMaybe<Order_By>;
  starts_on?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Booking_Product_Min_Fields = {
  __typename?: 'booking_product_min_fields';
  booking_id?: Maybe<Scalars['uuid']['output']>;
  ends_on?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  quantity?: Maybe<Scalars['numeric']['output']>;
  rate_id?: Maybe<Scalars['uuid']['output']>;
  starts_on?: Maybe<Scalars['timestamp']['output']>;
};

/** order by min() on columns of table "booking_product" */
export type Booking_Product_Min_Order_By = {
  booking_id?: InputMaybe<Order_By>;
  ends_on?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  rate_id?: InputMaybe<Order_By>;
  starts_on?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "booking_product" */
export type Booking_Product_Mutation_Response = {
  __typename?: 'booking_product_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Booking_Product>;
};

/** on_conflict condition type for table "booking_product" */
export type Booking_Product_On_Conflict = {
  constraint: Booking_Product_Constraint;
  update_columns?: Array<Booking_Product_Update_Column>;
  where?: InputMaybe<Booking_Product_Bool_Exp>;
};

/** Ordering options when selecting data from "booking_product". */
export type Booking_Product_Order_By = {
  booking?: InputMaybe<Booking_Order_By>;
  booking_id?: InputMaybe<Order_By>;
  ends_on?: InputMaybe<Order_By>;
  explained_search_params?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pax_answers_by_pax_type_by_index_by_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product_answers_by_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  rate?: InputMaybe<Rate_Order_By>;
  rate_id?: InputMaybe<Order_By>;
  search_params?: InputMaybe<Order_By>;
  starts_on?: InputMaybe<Order_By>;
};

/** primary key columns input for table: booking_product */
export type Booking_Product_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "booking_product" */
export enum Booking_Product_Select_Column {
  /** column name */
  BookingId = 'booking_id',
  /** column name */
  EndsOn = 'ends_on',
  /** column name */
  ExplainedSearchParams = 'explained_search_params',
  /** column name */
  Id = 'id',
  /** column name */
  PaxAnswersByPaxTypeByIndexById = 'pax_answers_by_pax_type_by_index_by_id',
  /** column name */
  Price = 'price',
  /** column name */
  ProductAnswersById = 'product_answers_by_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  RateId = 'rate_id',
  /** column name */
  SearchParams = 'search_params',
  /** column name */
  StartsOn = 'starts_on'
}

/** input type for updating data in table "booking_product" */
export type Booking_Product_Set_Input = {
  booking_id?: InputMaybe<Scalars['uuid']['input']>;
  ends_on?: InputMaybe<Scalars['timestamp']['input']>;
  explained_search_params?: InputMaybe<Scalars['json']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  pax_answers_by_pax_type_by_index_by_id?: InputMaybe<Scalars['json']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  product_answers_by_id?: InputMaybe<Scalars['json']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  rate_id?: InputMaybe<Scalars['uuid']['input']>;
  search_params?: InputMaybe<Scalars['json']['input']>;
  starts_on?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate stddev on columns */
export type Booking_Product_Stddev_Fields = {
  __typename?: 'booking_product_stddev_fields';
  price?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "booking_product" */
export type Booking_Product_Stddev_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Booking_Product_Stddev_Pop_Fields = {
  __typename?: 'booking_product_stddev_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "booking_product" */
export type Booking_Product_Stddev_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Booking_Product_Stddev_Samp_Fields = {
  __typename?: 'booking_product_stddev_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "booking_product" */
export type Booking_Product_Stddev_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "booking_product" */
export type Booking_Product_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Booking_Product_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Booking_Product_Stream_Cursor_Value_Input = {
  booking_id?: InputMaybe<Scalars['uuid']['input']>;
  ends_on?: InputMaybe<Scalars['timestamp']['input']>;
  explained_search_params?: InputMaybe<Scalars['json']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  pax_answers_by_pax_type_by_index_by_id?: InputMaybe<Scalars['json']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  product_answers_by_id?: InputMaybe<Scalars['json']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  rate_id?: InputMaybe<Scalars['uuid']['input']>;
  search_params?: InputMaybe<Scalars['json']['input']>;
  starts_on?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type Booking_Product_Sum_Fields = {
  __typename?: 'booking_product_sum_fields';
  price?: Maybe<Scalars['numeric']['output']>;
  quantity?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "booking_product" */
export type Booking_Product_Sum_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** update columns of table "booking_product" */
export enum Booking_Product_Update_Column {
  /** column name */
  BookingId = 'booking_id',
  /** column name */
  EndsOn = 'ends_on',
  /** column name */
  ExplainedSearchParams = 'explained_search_params',
  /** column name */
  Id = 'id',
  /** column name */
  PaxAnswersByPaxTypeByIndexById = 'pax_answers_by_pax_type_by_index_by_id',
  /** column name */
  Price = 'price',
  /** column name */
  ProductAnswersById = 'product_answers_by_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  RateId = 'rate_id',
  /** column name */
  SearchParams = 'search_params',
  /** column name */
  StartsOn = 'starts_on'
}

export type Booking_Product_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Booking_Product_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Booking_Product_Set_Input>;
  /** filter the rows which have to be updated */
  where: Booking_Product_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Booking_Product_Var_Pop_Fields = {
  __typename?: 'booking_product_var_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "booking_product" */
export type Booking_Product_Var_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Booking_Product_Var_Samp_Fields = {
  __typename?: 'booking_product_var_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "booking_product" */
export type Booking_Product_Var_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Booking_Product_Variance_Fields = {
  __typename?: 'booking_product_variance_fields';
  price?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "booking_product" */
export type Booking_Product_Variance_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

export type Booking_Question_Answer = {
  question_id: Scalars['uuid']['input'];
  value?: InputMaybe<Scalars['json']['input']>;
};

/** columns and relationships of "booking_question_scope" */
export type Booking_Question_Scope = {
  __typename?: 'booking_question_scope';
  id: Scalars['String']['output'];
};

/** aggregated selection of "booking_question_scope" */
export type Booking_Question_Scope_Aggregate = {
  __typename?: 'booking_question_scope_aggregate';
  aggregate?: Maybe<Booking_Question_Scope_Aggregate_Fields>;
  nodes: Array<Booking_Question_Scope>;
};

/** aggregate fields of "booking_question_scope" */
export type Booking_Question_Scope_Aggregate_Fields = {
  __typename?: 'booking_question_scope_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Booking_Question_Scope_Max_Fields>;
  min?: Maybe<Booking_Question_Scope_Min_Fields>;
};


/** aggregate fields of "booking_question_scope" */
export type Booking_Question_Scope_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Booking_Question_Scope_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "booking_question_scope". All fields are combined with a logical 'AND'. */
export type Booking_Question_Scope_Bool_Exp = {
  _and?: InputMaybe<Array<Booking_Question_Scope_Bool_Exp>>;
  _not?: InputMaybe<Booking_Question_Scope_Bool_Exp>;
  _or?: InputMaybe<Array<Booking_Question_Scope_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "booking_question_scope" */
export enum Booking_Question_Scope_Constraint {
  /** unique or primary key constraint on columns "id" */
  BookingQuestionScopePkey = 'booking_question_scope_pkey'
}

export enum Booking_Question_Scope_Enum {
  PerBooking = 'PER_BOOKING',
  PerPax = 'PER_PAX',
  PerProduct = 'PER_PRODUCT'
}

/** Boolean expression to compare columns of type "booking_question_scope_enum". All fields are combined with logical 'AND'. */
export type Booking_Question_Scope_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Booking_Question_Scope_Enum>;
  _in?: InputMaybe<Array<Booking_Question_Scope_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Booking_Question_Scope_Enum>;
  _nin?: InputMaybe<Array<Booking_Question_Scope_Enum>>;
};

/** input type for inserting data into table "booking_question_scope" */
export type Booking_Question_Scope_Insert_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Booking_Question_Scope_Max_Fields = {
  __typename?: 'booking_question_scope_max_fields';
  id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Booking_Question_Scope_Min_Fields = {
  __typename?: 'booking_question_scope_min_fields';
  id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "booking_question_scope" */
export type Booking_Question_Scope_Mutation_Response = {
  __typename?: 'booking_question_scope_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Booking_Question_Scope>;
};

/** on_conflict condition type for table "booking_question_scope" */
export type Booking_Question_Scope_On_Conflict = {
  constraint: Booking_Question_Scope_Constraint;
  update_columns?: Array<Booking_Question_Scope_Update_Column>;
  where?: InputMaybe<Booking_Question_Scope_Bool_Exp>;
};

/** Ordering options when selecting data from "booking_question_scope". */
export type Booking_Question_Scope_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: booking_question_scope */
export type Booking_Question_Scope_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "booking_question_scope" */
export enum Booking_Question_Scope_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "booking_question_scope" */
export type Booking_Question_Scope_Set_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "booking_question_scope" */
export type Booking_Question_Scope_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Booking_Question_Scope_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Booking_Question_Scope_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "booking_question_scope" */
export enum Booking_Question_Scope_Update_Column {
  /** column name */
  Id = 'id'
}

export type Booking_Question_Scope_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Booking_Question_Scope_Set_Input>;
  /** filter the rows which have to be updated */
  where: Booking_Question_Scope_Bool_Exp;
};

/** columns and relationships of "booking_question_type" */
export type Booking_Question_Type = {
  __typename?: 'booking_question_type';
  id: Scalars['String']['output'];
};

/** aggregated selection of "booking_question_type" */
export type Booking_Question_Type_Aggregate = {
  __typename?: 'booking_question_type_aggregate';
  aggregate?: Maybe<Booking_Question_Type_Aggregate_Fields>;
  nodes: Array<Booking_Question_Type>;
};

/** aggregate fields of "booking_question_type" */
export type Booking_Question_Type_Aggregate_Fields = {
  __typename?: 'booking_question_type_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Booking_Question_Type_Max_Fields>;
  min?: Maybe<Booking_Question_Type_Min_Fields>;
};


/** aggregate fields of "booking_question_type" */
export type Booking_Question_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Booking_Question_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "booking_question_type". All fields are combined with a logical 'AND'. */
export type Booking_Question_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Booking_Question_Type_Bool_Exp>>;
  _not?: InputMaybe<Booking_Question_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Booking_Question_Type_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "booking_question_type" */
export enum Booking_Question_Type_Constraint {
  /** unique or primary key constraint on columns "id" */
  BookingQuestionTypePkey = 'booking_question_type_pkey'
}

export enum Booking_Question_Type_Enum {
  FreeText = 'FREE_TEXT',
  Numeric = 'NUMERIC',
  Select = 'SELECT'
}

/** Boolean expression to compare columns of type "booking_question_type_enum". All fields are combined with logical 'AND'. */
export type Booking_Question_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Booking_Question_Type_Enum>;
  _in?: InputMaybe<Array<Booking_Question_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Booking_Question_Type_Enum>;
  _nin?: InputMaybe<Array<Booking_Question_Type_Enum>>;
};

/** input type for inserting data into table "booking_question_type" */
export type Booking_Question_Type_Insert_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Booking_Question_Type_Max_Fields = {
  __typename?: 'booking_question_type_max_fields';
  id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Booking_Question_Type_Min_Fields = {
  __typename?: 'booking_question_type_min_fields';
  id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "booking_question_type" */
export type Booking_Question_Type_Mutation_Response = {
  __typename?: 'booking_question_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Booking_Question_Type>;
};

/** on_conflict condition type for table "booking_question_type" */
export type Booking_Question_Type_On_Conflict = {
  constraint: Booking_Question_Type_Constraint;
  update_columns?: Array<Booking_Question_Type_Update_Column>;
  where?: InputMaybe<Booking_Question_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "booking_question_type". */
export type Booking_Question_Type_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: booking_question_type */
export type Booking_Question_Type_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "booking_question_type" */
export enum Booking_Question_Type_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "booking_question_type" */
export type Booking_Question_Type_Set_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "booking_question_type" */
export type Booking_Question_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Booking_Question_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Booking_Question_Type_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "booking_question_type" */
export enum Booking_Question_Type_Update_Column {
  /** column name */
  Id = 'id'
}

export type Booking_Question_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Booking_Question_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Booking_Question_Type_Bool_Exp;
};

export type Booking_Questions_Answers_By_Scope = {
  booking: Array<Booking_Question_Answer>;
  products: Array<Product_And_Pax_Questions_Answers>;
};

export type Booking_Reject_Input = {
  expected_version: Scalars['numeric']['input'];
  id: Scalars['uuid']['input'];
};

/** select columns of table "booking" */
export enum Booking_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  BookingAnswersById = 'booking_answers_by_id',
  /** column name */
  ContactId = 'contact_id',
  /** column name */
  CreatedOn = 'created_on',
  /** column name */
  FriendlyId = 'friendly_id',
  /** column name */
  Id = 'id',
  /** column name */
  LastModifiedOn = 'last_modified_on',
  /** column name */
  Locale = 'locale',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  QuestionsByScopeById = 'questions_by_scope_by_id',
  /** column name */
  State = 'state',
  /** column name */
  Version = 'version'
}

/** input type for updating data in table "booking" */
export type Booking_Set_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  booking_answers_by_id?: InputMaybe<Scalars['json']['input']>;
  contact_id?: InputMaybe<Scalars['uuid']['input']>;
  created_on?: InputMaybe<Scalars['timestamptz']['input']>;
  friendly_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  last_modified_on?: InputMaybe<Scalars['timestamptz']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  questions_by_scope_by_id?: InputMaybe<Scalars['json']['input']>;
  state?: InputMaybe<Booking_State_Enum>;
  version?: InputMaybe<Scalars['numeric']['input']>;
};

/** columns and relationships of "booking_state" */
export type Booking_State = {
  __typename?: 'booking_state';
  /** An array relationship */
  bookings: Array<Booking>;
  /** An aggregate relationship */
  bookings_aggregate: Booking_Aggregate;
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
};


/** columns and relationships of "booking_state" */
export type Booking_StateBookingsArgs = {
  distinct_on?: InputMaybe<Array<Booking_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Order_By>>;
  where?: InputMaybe<Booking_Bool_Exp>;
};


/** columns and relationships of "booking_state" */
export type Booking_StateBookings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Order_By>>;
  where?: InputMaybe<Booking_Bool_Exp>;
};

/** aggregated selection of "booking_state" */
export type Booking_State_Aggregate = {
  __typename?: 'booking_state_aggregate';
  aggregate?: Maybe<Booking_State_Aggregate_Fields>;
  nodes: Array<Booking_State>;
};

/** aggregate fields of "booking_state" */
export type Booking_State_Aggregate_Fields = {
  __typename?: 'booking_state_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Booking_State_Max_Fields>;
  min?: Maybe<Booking_State_Min_Fields>;
};


/** aggregate fields of "booking_state" */
export type Booking_State_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Booking_State_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "booking_state". All fields are combined with a logical 'AND'. */
export type Booking_State_Bool_Exp = {
  _and?: InputMaybe<Array<Booking_State_Bool_Exp>>;
  _not?: InputMaybe<Booking_State_Bool_Exp>;
  _or?: InputMaybe<Array<Booking_State_Bool_Exp>>;
  bookings?: InputMaybe<Booking_Bool_Exp>;
  bookings_aggregate?: InputMaybe<Booking_Aggregate_Bool_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "booking_state" */
export enum Booking_State_Constraint {
  /** unique or primary key constraint on columns "id" */
  BookingStatePkey = 'booking_state_pkey'
}

export enum Booking_State_Enum {
  /** Accepted */
  Accepted = 'ACCEPTED',
  /** Cancelled */
  Cancelled = 'CANCELLED',
  /** Created */
  Created = 'CREATED',
  /** Rejected */
  Rejected = 'REJECTED'
}

/** Boolean expression to compare columns of type "booking_state_enum". All fields are combined with logical 'AND'. */
export type Booking_State_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Booking_State_Enum>;
  _in?: InputMaybe<Array<Booking_State_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Booking_State_Enum>;
  _nin?: InputMaybe<Array<Booking_State_Enum>>;
};

/** input type for inserting data into table "booking_state" */
export type Booking_State_Insert_Input = {
  bookings?: InputMaybe<Booking_Arr_Rel_Insert_Input>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Booking_State_Max_Fields = {
  __typename?: 'booking_state_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Booking_State_Min_Fields = {
  __typename?: 'booking_state_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "booking_state" */
export type Booking_State_Mutation_Response = {
  __typename?: 'booking_state_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Booking_State>;
};

/** on_conflict condition type for table "booking_state" */
export type Booking_State_On_Conflict = {
  constraint: Booking_State_Constraint;
  update_columns?: Array<Booking_State_Update_Column>;
  where?: InputMaybe<Booking_State_Bool_Exp>;
};

/** Ordering options when selecting data from "booking_state". */
export type Booking_State_Order_By = {
  bookings_aggregate?: InputMaybe<Booking_Aggregate_Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: booking_state */
export type Booking_State_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "booking_state" */
export enum Booking_State_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "booking_state" */
export type Booking_State_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "booking_state" */
export type Booking_State_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Booking_State_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Booking_State_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "booking_state" */
export enum Booking_State_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id'
}

export type Booking_State_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Booking_State_Set_Input>;
  /** filter the rows which have to be updated */
  where: Booking_State_Bool_Exp;
};

/** aggregate stddev on columns */
export type Booking_Stddev_Fields = {
  __typename?: 'booking_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  version?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "booking" */
export type Booking_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Booking_Stddev_Pop_Fields = {
  __typename?: 'booking_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  version?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "booking" */
export type Booking_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Booking_Stddev_Samp_Fields = {
  __typename?: 'booking_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  version?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "booking" */
export type Booking_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "booking" */
export type Booking_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Booking_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Booking_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  booking_answers_by_id?: InputMaybe<Scalars['json']['input']>;
  contact_id?: InputMaybe<Scalars['uuid']['input']>;
  created_on?: InputMaybe<Scalars['timestamptz']['input']>;
  friendly_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  last_modified_on?: InputMaybe<Scalars['timestamptz']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  questions_by_scope_by_id?: InputMaybe<Scalars['json']['input']>;
  state?: InputMaybe<Booking_State_Enum>;
  version?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Booking_Sum_Fields = {
  __typename?: 'booking_sum_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  version?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "booking" */
export type Booking_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** update columns of table "booking" */
export enum Booking_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  BookingAnswersById = 'booking_answers_by_id',
  /** column name */
  ContactId = 'contact_id',
  /** column name */
  CreatedOn = 'created_on',
  /** column name */
  FriendlyId = 'friendly_id',
  /** column name */
  Id = 'id',
  /** column name */
  LastModifiedOn = 'last_modified_on',
  /** column name */
  Locale = 'locale',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  QuestionsByScopeById = 'questions_by_scope_by_id',
  /** column name */
  State = 'state',
  /** column name */
  Version = 'version'
}

export type Booking_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Booking_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Booking_Set_Input>;
  /** filter the rows which have to be updated */
  where: Booking_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Booking_Var_Pop_Fields = {
  __typename?: 'booking_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  version?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "booking" */
export type Booking_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Booking_Var_Samp_Fields = {
  __typename?: 'booking_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  version?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "booking" */
export type Booking_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Booking_Variance_Fields = {
  __typename?: 'booking_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  version?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "booking" */
export type Booking_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** columns and relationships of "storage.buckets" */
export type Buckets = {
  __typename?: 'buckets';
  cacheControl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['timestamptz']['output'];
  downloadExpiration: Scalars['Int']['output'];
  /** An array relationship */
  files: Array<Files>;
  /** An aggregate relationship */
  files_aggregate: Files_Aggregate;
  id: Scalars['String']['output'];
  maxUploadFileSize: Scalars['Int']['output'];
  minUploadFileSize: Scalars['Int']['output'];
  presignedUrlsEnabled: Scalars['Boolean']['output'];
  updatedAt: Scalars['timestamptz']['output'];
};


/** columns and relationships of "storage.buckets" */
export type BucketsFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


/** columns and relationships of "storage.buckets" */
export type BucketsFiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** aggregated selection of "storage.buckets" */
export type Buckets_Aggregate = {
  __typename?: 'buckets_aggregate';
  aggregate?: Maybe<Buckets_Aggregate_Fields>;
  nodes: Array<Buckets>;
};

/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_Fields = {
  __typename?: 'buckets_aggregate_fields';
  avg?: Maybe<Buckets_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Buckets_Max_Fields>;
  min?: Maybe<Buckets_Min_Fields>;
  stddev?: Maybe<Buckets_Stddev_Fields>;
  stddev_pop?: Maybe<Buckets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Buckets_Stddev_Samp_Fields>;
  sum?: Maybe<Buckets_Sum_Fields>;
  var_pop?: Maybe<Buckets_Var_Pop_Fields>;
  var_samp?: Maybe<Buckets_Var_Samp_Fields>;
  variance?: Maybe<Buckets_Variance_Fields>;
};


/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Buckets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Buckets_Avg_Fields = {
  __typename?: 'buckets_avg_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export type Buckets_Bool_Exp = {
  _and?: InputMaybe<Array<Buckets_Bool_Exp>>;
  _not?: InputMaybe<Buckets_Bool_Exp>;
  _or?: InputMaybe<Array<Buckets_Bool_Exp>>;
  cacheControl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  downloadExpiration?: InputMaybe<Int_Comparison_Exp>;
  files?: InputMaybe<Files_Bool_Exp>;
  files_aggregate?: InputMaybe<Files_Aggregate_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  maxUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  minUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  presignedUrlsEnabled?: InputMaybe<Boolean_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.buckets" */
export enum Buckets_Constraint {
  /** unique or primary key constraint on columns "id" */
  BucketsPkey = 'buckets_pkey'
}

/** input type for incrementing numeric columns in table "storage.buckets" */
export type Buckets_Inc_Input = {
  downloadExpiration?: InputMaybe<Scalars['Int']['input']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "storage.buckets" */
export type Buckets_Insert_Input = {
  cacheControl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  downloadExpiration?: InputMaybe<Scalars['Int']['input']>;
  files?: InputMaybe<Files_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Buckets_Max_Fields = {
  __typename?: 'buckets_max_fields';
  cacheControl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  downloadExpiration?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Int']['output']>;
  minUploadFileSize?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Buckets_Min_Fields = {
  __typename?: 'buckets_min_fields';
  cacheControl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  downloadExpiration?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Int']['output']>;
  minUploadFileSize?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "storage.buckets" */
export type Buckets_Mutation_Response = {
  __typename?: 'buckets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Buckets>;
};

/** input type for inserting object relation for remote table "storage.buckets" */
export type Buckets_Obj_Rel_Insert_Input = {
  data: Buckets_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};

/** on_conflict condition type for table "storage.buckets" */
export type Buckets_On_Conflict = {
  constraint: Buckets_Constraint;
  update_columns?: Array<Buckets_Update_Column>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.buckets". */
export type Buckets_Order_By = {
  cacheControl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  downloadExpiration?: InputMaybe<Order_By>;
  files_aggregate?: InputMaybe<Files_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  maxUploadFileSize?: InputMaybe<Order_By>;
  minUploadFileSize?: InputMaybe<Order_By>;
  presignedUrlsEnabled?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.buckets */
export type Buckets_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "storage.buckets" */
export enum Buckets_Select_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "storage.buckets" */
export type Buckets_Set_Input = {
  cacheControl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  downloadExpiration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Buckets_Stddev_Fields = {
  __typename?: 'buckets_stddev_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Buckets_Stddev_Pop_Fields = {
  __typename?: 'buckets_stddev_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Buckets_Stddev_Samp_Fields = {
  __typename?: 'buckets_stddev_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "buckets" */
export type Buckets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Buckets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Buckets_Stream_Cursor_Value_Input = {
  cacheControl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  downloadExpiration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Buckets_Sum_Fields = {
  __typename?: 'buckets_sum_fields';
  downloadExpiration?: Maybe<Scalars['Int']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Int']['output']>;
  minUploadFileSize?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "storage.buckets" */
export enum Buckets_Update_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Buckets_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Buckets_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Buckets_Set_Input>;
  /** filter the rows which have to be updated */
  where: Buckets_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Buckets_Var_Pop_Fields = {
  __typename?: 'buckets_var_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Buckets_Var_Samp_Fields = {
  __typename?: 'buckets_var_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Buckets_Variance_Fields = {
  __typename?: 'buckets_variance_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

export type Business_Model_Input = {
  time_management: Scalars['String']['input'];
  unit_management: Scalars['String']['input'];
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bytea']['input']>;
  _gt?: InputMaybe<Scalars['bytea']['input']>;
  _gte?: InputMaybe<Scalars['bytea']['input']>;
  _in?: InputMaybe<Array<Scalars['bytea']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bytea']['input']>;
  _lte?: InputMaybe<Scalars['bytea']['input']>;
  _neq?: InputMaybe<Scalars['bytea']['input']>;
  _nin?: InputMaybe<Array<Scalars['bytea']['input']>>;
};

/** columns and relationships of "category" */
export type Category = {
  __typename?: 'category';
  id: Scalars['String']['output'];
  parent_id?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['ltree']['output']>;
};

/** aggregated selection of "category" */
export type Category_Aggregate = {
  __typename?: 'category_aggregate';
  aggregate?: Maybe<Category_Aggregate_Fields>;
  nodes: Array<Category>;
};

/** aggregate fields of "category" */
export type Category_Aggregate_Fields = {
  __typename?: 'category_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Category_Max_Fields>;
  min?: Maybe<Category_Min_Fields>;
};


/** aggregate fields of "category" */
export type Category_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Category_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "category". All fields are combined with a logical 'AND'. */
export type Category_Bool_Exp = {
  _and?: InputMaybe<Array<Category_Bool_Exp>>;
  _not?: InputMaybe<Category_Bool_Exp>;
  _or?: InputMaybe<Array<Category_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  parent_id?: InputMaybe<String_Comparison_Exp>;
  path?: InputMaybe<Ltree_Comparison_Exp>;
};

/** unique or primary key constraints on table "category" */
export enum Category_Constraint {
  /** unique or primary key constraint on columns "id" */
  CategoryPkey = 'category_pkey'
}

/** input type for inserting data into table "category" */
export type Category_Insert_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  parent_id?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['ltree']['input']>;
};

/** aggregate max on columns */
export type Category_Max_Fields = {
  __typename?: 'category_max_fields';
  id?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['ltree']['output']>;
};

/** aggregate min on columns */
export type Category_Min_Fields = {
  __typename?: 'category_min_fields';
  id?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['ltree']['output']>;
};

/** response of any mutation on the table "category" */
export type Category_Mutation_Response = {
  __typename?: 'category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Category>;
};

/** input type for inserting object relation for remote table "category" */
export type Category_Obj_Rel_Insert_Input = {
  data: Category_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Category_On_Conflict>;
};

/** on_conflict condition type for table "category" */
export type Category_On_Conflict = {
  constraint: Category_Constraint;
  update_columns?: Array<Category_Update_Column>;
  where?: InputMaybe<Category_Bool_Exp>;
};

/** Ordering options when selecting data from "category". */
export type Category_Order_By = {
  id?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
};

/** primary key columns input for table: category */
export type Category_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "category" */
export enum Category_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ParentId = 'parent_id',
  /** column name */
  Path = 'path'
}

/** input type for updating data in table "category" */
export type Category_Set_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  parent_id?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['ltree']['input']>;
};

/** Streaming cursor of the table "category" */
export type Category_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Category_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Category_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  parent_id?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['ltree']['input']>;
};

/** update columns of table "category" */
export enum Category_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ParentId = 'parent_id',
  /** column name */
  Path = 'path'
}

export type Category_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Category_Set_Input>;
  /** filter the rows which have to be updated */
  where: Category_Bool_Exp;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['citext']['input']>;
  _gt?: InputMaybe<Scalars['citext']['input']>;
  _gte?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']['input']>;
  _in?: InputMaybe<Array<Scalars['citext']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']['input']>;
  _lt?: InputMaybe<Scalars['citext']['input']>;
  _lte?: InputMaybe<Scalars['citext']['input']>;
  _neq?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']['input']>;
  _nin?: InputMaybe<Array<Scalars['citext']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']['input']>;
};

export type Cleanup_Input = {
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** columns and relationships of "contact" */
export type Contact = {
  __typename?: 'contact';
  /** An array relationship */
  bookings: Array<Booking>;
  /** An aggregate relationship */
  bookings_aggregate: Booking_Aggregate;
  email: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  /** An object relationship */
  organization: Organization;
  organization_id: Scalars['uuid']['output'];
};


/** columns and relationships of "contact" */
export type ContactBookingsArgs = {
  distinct_on?: InputMaybe<Array<Booking_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Order_By>>;
  where?: InputMaybe<Booking_Bool_Exp>;
};


/** columns and relationships of "contact" */
export type ContactBookings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Order_By>>;
  where?: InputMaybe<Booking_Bool_Exp>;
};

/** aggregated selection of "contact" */
export type Contact_Aggregate = {
  __typename?: 'contact_aggregate';
  aggregate?: Maybe<Contact_Aggregate_Fields>;
  nodes: Array<Contact>;
};

export type Contact_Aggregate_Bool_Exp = {
  count?: InputMaybe<Contact_Aggregate_Bool_Exp_Count>;
};

export type Contact_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Contact_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Contact_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "contact" */
export type Contact_Aggregate_Fields = {
  __typename?: 'contact_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Contact_Max_Fields>;
  min?: Maybe<Contact_Min_Fields>;
};


/** aggregate fields of "contact" */
export type Contact_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contact_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "contact" */
export type Contact_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Contact_Max_Order_By>;
  min?: InputMaybe<Contact_Min_Order_By>;
};

/** input type for inserting array relation for remote table "contact" */
export type Contact_Arr_Rel_Insert_Input = {
  data: Array<Contact_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Contact_On_Conflict>;
};

/** Boolean expression to filter rows from the table "contact". All fields are combined with a logical 'AND'. */
export type Contact_Bool_Exp = {
  _and?: InputMaybe<Array<Contact_Bool_Exp>>;
  _not?: InputMaybe<Contact_Bool_Exp>;
  _or?: InputMaybe<Array<Contact_Bool_Exp>>;
  bookings?: InputMaybe<Booking_Bool_Exp>;
  bookings_aggregate?: InputMaybe<Booking_Aggregate_Bool_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  organization?: InputMaybe<Organization_Bool_Exp>;
  organization_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "contact" */
export enum Contact_Constraint {
  /** unique or primary key constraint on columns "id" */
  ContactPkey = 'contact_pkey'
}

export type Contact_Input = {
  email: Scalars['String']['input'];
  message: Scalars['String']['input'];
  name: Scalars['String']['input'];
  organization_id: Scalars['uuid']['input'];
};

/** input type for inserting data into table "contact" */
export type Contact_Insert_Input = {
  bookings?: InputMaybe<Booking_Arr_Rel_Insert_Input>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Contact_Max_Fields = {
  __typename?: 'contact_max_fields';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organization_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "contact" */
export type Contact_Max_Order_By = {
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Contact_Min_Fields = {
  __typename?: 'contact_min_fields';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organization_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "contact" */
export type Contact_Min_Order_By = {
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "contact" */
export type Contact_Mutation_Response = {
  __typename?: 'contact_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Contact>;
};

/** input type for inserting object relation for remote table "contact" */
export type Contact_Obj_Rel_Insert_Input = {
  data: Contact_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Contact_On_Conflict>;
};

/** on_conflict condition type for table "contact" */
export type Contact_On_Conflict = {
  constraint: Contact_Constraint;
  update_columns?: Array<Contact_Update_Column>;
  where?: InputMaybe<Contact_Bool_Exp>;
};

/** Ordering options when selecting data from "contact". */
export type Contact_Order_By = {
  bookings_aggregate?: InputMaybe<Booking_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organization?: InputMaybe<Organization_Order_By>;
  organization_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: contact */
export type Contact_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "contact" */
export enum Contact_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organization_id'
}

/** input type for updating data in table "contact" */
export type Contact_Set_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "contact" */
export type Contact_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contact_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contact_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "contact" */
export enum Contact_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organization_id'
}

export type Contact_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Contact_Set_Input>;
  /** filter the rows which have to be updated */
  where: Contact_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

export type Date_Range = {
  from: Scalars['timestamp']['input'];
  to: Scalars['timestamp']['input'];
};

export type Date_Range_With_Value = {
  from: Scalars['timestamptz']['input'];
  to: Scalars['timestamptz']['input'];
  value: Scalars['numeric']['input'];
};

/** columns and relationships of "feature" */
export type Feature = {
  __typename?: 'feature';
  /** An array relationship */
  categories: Array<Feature_Category>;
  /** An aggregate relationship */
  categories_aggregate: Feature_Category_Aggregate;
  config: Scalars['jsonb']['output'];
  /** An object relationship */
  headline: Translated_Text;
  headline_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  internal_name: Scalars['String']['output'];
  /** An object relationship */
  name?: Maybe<Translated_Text>;
  name_id: Scalars['uuid']['output'];
  organization_id: Scalars['uuid']['output'];
  symbol: Feature_Symbol_Enum;
  type: Feature_Type_Enum;
};


/** columns and relationships of "feature" */
export type FeatureCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Feature_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Feature_Category_Order_By>>;
  where?: InputMaybe<Feature_Category_Bool_Exp>;
};


/** columns and relationships of "feature" */
export type FeatureCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Feature_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Feature_Category_Order_By>>;
  where?: InputMaybe<Feature_Category_Bool_Exp>;
};


/** columns and relationships of "feature" */
export type FeatureConfigArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "feature" */
export type Feature_Aggregate = {
  __typename?: 'feature_aggregate';
  aggregate?: Maybe<Feature_Aggregate_Fields>;
  nodes: Array<Feature>;
};

export type Feature_Aggregate_Bool_Exp = {
  count?: InputMaybe<Feature_Aggregate_Bool_Exp_Count>;
};

export type Feature_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Feature_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Feature_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "feature" */
export type Feature_Aggregate_Fields = {
  __typename?: 'feature_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Feature_Max_Fields>;
  min?: Maybe<Feature_Min_Fields>;
};


/** aggregate fields of "feature" */
export type Feature_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Feature_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "feature" */
export type Feature_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Feature_Max_Order_By>;
  min?: InputMaybe<Feature_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Feature_Append_Input = {
  config?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "feature" */
export type Feature_Arr_Rel_Insert_Input = {
  data: Array<Feature_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Feature_On_Conflict>;
};

/** Boolean expression to filter rows from the table "feature". All fields are combined with a logical 'AND'. */
export type Feature_Bool_Exp = {
  _and?: InputMaybe<Array<Feature_Bool_Exp>>;
  _not?: InputMaybe<Feature_Bool_Exp>;
  _or?: InputMaybe<Array<Feature_Bool_Exp>>;
  categories?: InputMaybe<Feature_Category_Bool_Exp>;
  categories_aggregate?: InputMaybe<Feature_Category_Aggregate_Bool_Exp>;
  config?: InputMaybe<Jsonb_Comparison_Exp>;
  headline?: InputMaybe<Translated_Text_Bool_Exp>;
  headline_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  internal_name?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<Translated_Text_Bool_Exp>;
  name_id?: InputMaybe<Uuid_Comparison_Exp>;
  organization_id?: InputMaybe<Uuid_Comparison_Exp>;
  symbol?: InputMaybe<Feature_Symbol_Enum_Comparison_Exp>;
  type?: InputMaybe<Feature_Type_Enum_Comparison_Exp>;
};

/** columns and relationships of "feature_category" */
export type Feature_Category = {
  __typename?: 'feature_category';
  /** An object relationship */
  category: Category;
  category_id: Scalars['String']['output'];
  /** An object relationship */
  feature: Feature;
  feature_id: Scalars['uuid']['output'];
};

/** aggregated selection of "feature_category" */
export type Feature_Category_Aggregate = {
  __typename?: 'feature_category_aggregate';
  aggregate?: Maybe<Feature_Category_Aggregate_Fields>;
  nodes: Array<Feature_Category>;
};

export type Feature_Category_Aggregate_Bool_Exp = {
  count?: InputMaybe<Feature_Category_Aggregate_Bool_Exp_Count>;
};

export type Feature_Category_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Feature_Category_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Feature_Category_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "feature_category" */
export type Feature_Category_Aggregate_Fields = {
  __typename?: 'feature_category_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Feature_Category_Max_Fields>;
  min?: Maybe<Feature_Category_Min_Fields>;
};


/** aggregate fields of "feature_category" */
export type Feature_Category_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Feature_Category_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "feature_category" */
export type Feature_Category_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Feature_Category_Max_Order_By>;
  min?: InputMaybe<Feature_Category_Min_Order_By>;
};

/** input type for inserting array relation for remote table "feature_category" */
export type Feature_Category_Arr_Rel_Insert_Input = {
  data: Array<Feature_Category_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Feature_Category_On_Conflict>;
};

/** Boolean expression to filter rows from the table "feature_category". All fields are combined with a logical 'AND'. */
export type Feature_Category_Bool_Exp = {
  _and?: InputMaybe<Array<Feature_Category_Bool_Exp>>;
  _not?: InputMaybe<Feature_Category_Bool_Exp>;
  _or?: InputMaybe<Array<Feature_Category_Bool_Exp>>;
  category?: InputMaybe<Category_Bool_Exp>;
  category_id?: InputMaybe<String_Comparison_Exp>;
  feature?: InputMaybe<Feature_Bool_Exp>;
  feature_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "feature_category" */
export enum Feature_Category_Constraint {
  /** unique or primary key constraint on columns "feature_id", "category_id" */
  FeatuteCategoryPkey = 'featute_category_pkey'
}

/** input type for inserting data into table "feature_category" */
export type Feature_Category_Insert_Input = {
  category?: InputMaybe<Category_Obj_Rel_Insert_Input>;
  category_id?: InputMaybe<Scalars['String']['input']>;
  feature?: InputMaybe<Feature_Obj_Rel_Insert_Input>;
  feature_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Feature_Category_Max_Fields = {
  __typename?: 'feature_category_max_fields';
  category_id?: Maybe<Scalars['String']['output']>;
  feature_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "feature_category" */
export type Feature_Category_Max_Order_By = {
  category_id?: InputMaybe<Order_By>;
  feature_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Feature_Category_Min_Fields = {
  __typename?: 'feature_category_min_fields';
  category_id?: Maybe<Scalars['String']['output']>;
  feature_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "feature_category" */
export type Feature_Category_Min_Order_By = {
  category_id?: InputMaybe<Order_By>;
  feature_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "feature_category" */
export type Feature_Category_Mutation_Response = {
  __typename?: 'feature_category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Feature_Category>;
};

/** on_conflict condition type for table "feature_category" */
export type Feature_Category_On_Conflict = {
  constraint: Feature_Category_Constraint;
  update_columns?: Array<Feature_Category_Update_Column>;
  where?: InputMaybe<Feature_Category_Bool_Exp>;
};

/** Ordering options when selecting data from "feature_category". */
export type Feature_Category_Order_By = {
  category?: InputMaybe<Category_Order_By>;
  category_id?: InputMaybe<Order_By>;
  feature?: InputMaybe<Feature_Order_By>;
  feature_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: feature_category */
export type Feature_Category_Pk_Columns_Input = {
  category_id: Scalars['String']['input'];
  feature_id: Scalars['uuid']['input'];
};

/** select columns of table "feature_category" */
export enum Feature_Category_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  FeatureId = 'feature_id'
}

/** input type for updating data in table "feature_category" */
export type Feature_Category_Set_Input = {
  category_id?: InputMaybe<Scalars['String']['input']>;
  feature_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "feature_category" */
export type Feature_Category_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Feature_Category_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Feature_Category_Stream_Cursor_Value_Input = {
  category_id?: InputMaybe<Scalars['String']['input']>;
  feature_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "feature_category" */
export enum Feature_Category_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  FeatureId = 'feature_id'
}

export type Feature_Category_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Feature_Category_Set_Input>;
  /** filter the rows which have to be updated */
  where: Feature_Category_Bool_Exp;
};

/** unique or primary key constraints on table "feature" */
export enum Feature_Constraint {
  /** unique or primary key constraint on columns "id" */
  FeaturePkey = 'feature_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Feature_Delete_At_Path_Input = {
  config?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Feature_Delete_Elem_Input = {
  config?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Feature_Delete_Key_Input = {
  config?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "feature" */
export type Feature_Insert_Input = {
  categories?: InputMaybe<Feature_Category_Arr_Rel_Insert_Input>;
  config?: InputMaybe<Scalars['jsonb']['input']>;
  headline?: InputMaybe<Translated_Text_Obj_Rel_Insert_Input>;
  headline_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  internal_name?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Translated_Text_Obj_Rel_Insert_Input>;
  name_id?: InputMaybe<Scalars['uuid']['input']>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  symbol?: InputMaybe<Feature_Symbol_Enum>;
  type?: InputMaybe<Feature_Type_Enum>;
};

/** aggregate max on columns */
export type Feature_Max_Fields = {
  __typename?: 'feature_max_fields';
  headline_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  internal_name?: Maybe<Scalars['String']['output']>;
  name_id?: Maybe<Scalars['uuid']['output']>;
  organization_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "feature" */
export type Feature_Max_Order_By = {
  headline_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  internal_name?: InputMaybe<Order_By>;
  name_id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Feature_Min_Fields = {
  __typename?: 'feature_min_fields';
  headline_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  internal_name?: Maybe<Scalars['String']['output']>;
  name_id?: Maybe<Scalars['uuid']['output']>;
  organization_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "feature" */
export type Feature_Min_Order_By = {
  headline_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  internal_name?: InputMaybe<Order_By>;
  name_id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "feature" */
export type Feature_Mutation_Response = {
  __typename?: 'feature_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Feature>;
};

/** input type for inserting object relation for remote table "feature" */
export type Feature_Obj_Rel_Insert_Input = {
  data: Feature_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Feature_On_Conflict>;
};

/** on_conflict condition type for table "feature" */
export type Feature_On_Conflict = {
  constraint: Feature_Constraint;
  update_columns?: Array<Feature_Update_Column>;
  where?: InputMaybe<Feature_Bool_Exp>;
};

/** Ordering options when selecting data from "feature". */
export type Feature_Order_By = {
  categories_aggregate?: InputMaybe<Feature_Category_Aggregate_Order_By>;
  config?: InputMaybe<Order_By>;
  headline?: InputMaybe<Translated_Text_Order_By>;
  headline_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  internal_name?: InputMaybe<Order_By>;
  name?: InputMaybe<Translated_Text_Order_By>;
  name_id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: feature */
export type Feature_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Feature_Prepend_Input = {
  config?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "feature" */
export enum Feature_Select_Column {
  /** column name */
  Config = 'config',
  /** column name */
  HeadlineId = 'headline_id',
  /** column name */
  Id = 'id',
  /** column name */
  InternalName = 'internal_name',
  /** column name */
  NameId = 'name_id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "feature" */
export type Feature_Set_Input = {
  config?: InputMaybe<Scalars['jsonb']['input']>;
  headline_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  internal_name?: InputMaybe<Scalars['String']['input']>;
  name_id?: InputMaybe<Scalars['uuid']['input']>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  symbol?: InputMaybe<Feature_Symbol_Enum>;
  type?: InputMaybe<Feature_Type_Enum>;
};

/** Streaming cursor of the table "feature" */
export type Feature_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Feature_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Feature_Stream_Cursor_Value_Input = {
  config?: InputMaybe<Scalars['jsonb']['input']>;
  headline_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  internal_name?: InputMaybe<Scalars['String']['input']>;
  name_id?: InputMaybe<Scalars['uuid']['input']>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  symbol?: InputMaybe<Feature_Symbol_Enum>;
  type?: InputMaybe<Feature_Type_Enum>;
};

/** columns and relationships of "feature_symbol" */
export type Feature_Symbol = {
  __typename?: 'feature_symbol';
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
};

/** aggregated selection of "feature_symbol" */
export type Feature_Symbol_Aggregate = {
  __typename?: 'feature_symbol_aggregate';
  aggregate?: Maybe<Feature_Symbol_Aggregate_Fields>;
  nodes: Array<Feature_Symbol>;
};

/** aggregate fields of "feature_symbol" */
export type Feature_Symbol_Aggregate_Fields = {
  __typename?: 'feature_symbol_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Feature_Symbol_Max_Fields>;
  min?: Maybe<Feature_Symbol_Min_Fields>;
};


/** aggregate fields of "feature_symbol" */
export type Feature_Symbol_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Feature_Symbol_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "feature_symbol". All fields are combined with a logical 'AND'. */
export type Feature_Symbol_Bool_Exp = {
  _and?: InputMaybe<Array<Feature_Symbol_Bool_Exp>>;
  _not?: InputMaybe<Feature_Symbol_Bool_Exp>;
  _or?: InputMaybe<Array<Feature_Symbol_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "feature_symbol" */
export enum Feature_Symbol_Constraint {
  /** unique or primary key constraint on columns "id" */
  FeatureSymbolPkey = 'feature_symbol_pkey'
}

export enum Feature_Symbol_Enum {
  /** Indicates whether the facility or service is suitable for children */
  Baby = 'BABY',
  /** Indicates cancellation policy */
  Ban = 'BAN',
  /** Represents number of beds or bedrooms */
  Bed = 'BED',
  /** Nice view available */
  Binoculars = 'BINOCULARS',
  /** Indicates if medical service are available */
  BriefcaseMedical = 'BRIEFCASE_MEDICAL',
  /** Indicates if transportation is included */
  Bus = 'BUS',
  /** Used for showing rental or service periods */
  CalendarAlt = 'CALENDAR_ALT',
  /** Photo opportunity */
  Camera = 'CAMERA',
  /** Indicates parking availability */
  Car = 'CAR',
  /** Indicates whether a certification or official document is required or provided */
  Certificate = 'CERTIFICATE',
  /** Indicates if operational training is required */
  ChalkboardTeacher = 'CHALKBOARD_TEACHER',
  /** Indicates maintenance records */
  ClipboardCheck = 'CLIPBOARD_CHECK',
  /** Indicates whether drinks, specifically cocktails or alcoholic beverages, are included */
  Cocktail = 'COCKTAIL',
  /** Indicates whether coffee is available or included */
  Coffee = 'COFFEE',
  /** Indicates mechanical or engine types */
  Cogs = 'COGS',
  /** Living room available */
  Couch = 'COUCH',
  /** Indicates room type or property access */
  DoorOpen = 'DOOR_OPEN',
  /** Gym and fitness center */
  Dumbbell = 'DUMBBELL',
  /** Elevator available */
  Elevator = 'ELEVATOR',
  /** Area */
  ExpandArrows = 'EXPAND_ARROWS',
  /** Family friend */
  Family = 'FAMILY',
  /** Indicates fishing equipment included */
  Fish = 'FISH',
  /** Indicates the type of fuel used or provided, applicable to rentals requiring fuel such as vehicles or generators */
  FuelPump = 'FUEL_PUMP',
  /** Indicates fuel type or capacity */
  GasPump = 'GAS_PUMP',
  /** Indicates whether heating is available or included in the facility or accommodation */
  Heating = 'HEATING',
  /** Represents outdoor or hiking activities */
  Hiking = 'HIKING',
  /** Entire place available */
  Home = 'HOME',
  /** Indicates duration of an activity */
  HourglassHalf = 'HOURGLASS_HALF',
  /** Used for license requirements for boats */
  IdBadge = 'ID_BADGE',
  /** Indicates if a special license is required */
  IdCard = 'ID_CARD',
  /** Indicates language options for a tour or activity */
  Language = 'LANGUAGE',
  /** Eco friendly */
  Leaf = 'LEAF',
  /** Represents safety equipment */
  LifeRing = 'LIFE_RING',
  /** Smoking is forbiden. */
  NoSmoking = 'NO_SMOKING',
  /** Parking */
  Parking = 'PARKING',
  /** Indicates pet-friendly accommodation */
  Paw = 'PAW',
  /** Indicates power requirements */
  Plug = 'PLUG',
  /** Indicates whether the facility or service is welcoming and inclusive for the LGBTQ+ community */
  Rainbow = 'RAINBOW',
  /** Indicates the length of boats or other long items */
  RulerHorizontal = 'RULER_HORIZONTAL',
  /** Indicates GPS equipment */
  SatelliteDish = 'SATELLITE_DISH',
  /** Historic places */
  Sculpture = 'SCULPTURE',
  /** Indicates whether insurance is provided or required for participation in the service or activity */
  Shield = 'SHIELD',
  /** Indicates insurance coverage */
  ShieldAlt = 'SHIELD_ALT',
  /** Used for boat types */
  Ship = 'SHIP',
  /** Shower or bath available */
  Shower = 'SHOWER',
  /** Indicates difficulty level of an activity */
  Signal = 'SIGNAL',
  /** Smoking area. Smoking is allowed. */
  Smoking = 'SMOKING',
  /** Represents air conditioning */
  Snowflake = 'SNOWFLAKE',
  /** Indicates whether soft drinks are included with the service or activity */
  SodaCan = 'SODA_CAN',
  /** Indicates exposure to sunlight, relevant for properties or activities where sun exposure is a significant feature */
  Sun = 'SUN',
  /** Indicates a private pool */
  Swimmer = 'SWIMMER',
  /** Indicates the presence of a swimming pool at the facility or within the rental property */
  SwimmingPool = 'SWIMMING_POOL',
  /** Indicates the top speed of a vehicle */
  TachometerAlt = 'TACHOMETER_ALT',
  /** Entrance included */
  Ticket = 'TICKET',
  /** Represents tools or equipment required */
  Toolbox = 'TOOLBOX',
  /** Indicates minimum age requirement */
  User = 'USER',
  /** Indicates seating or capacity for people */
  Users = 'USERS',
  /** Indicates if a guide or instructor is available */
  UserTie = 'USER_TIE',
  /** Indicates kitchen facilities */
  Utensils = 'UTENSILS',
  /** Indicates the weight of an item */
  WeightHanging = 'WEIGHT_HANGING',
  /** Indicates accessibility for people with disabilities */
  Wheelchair = 'WHEELCHAIR',
  /** Indicates Wi-Fi availability */
  Wifi = 'WIFI'
}

/** Boolean expression to compare columns of type "feature_symbol_enum". All fields are combined with logical 'AND'. */
export type Feature_Symbol_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Feature_Symbol_Enum>;
  _in?: InputMaybe<Array<Feature_Symbol_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Feature_Symbol_Enum>;
  _nin?: InputMaybe<Array<Feature_Symbol_Enum>>;
};

/** input type for inserting data into table "feature_symbol" */
export type Feature_Symbol_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Feature_Symbol_Max_Fields = {
  __typename?: 'feature_symbol_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Feature_Symbol_Min_Fields = {
  __typename?: 'feature_symbol_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "feature_symbol" */
export type Feature_Symbol_Mutation_Response = {
  __typename?: 'feature_symbol_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Feature_Symbol>;
};

/** on_conflict condition type for table "feature_symbol" */
export type Feature_Symbol_On_Conflict = {
  constraint: Feature_Symbol_Constraint;
  update_columns?: Array<Feature_Symbol_Update_Column>;
  where?: InputMaybe<Feature_Symbol_Bool_Exp>;
};

/** Ordering options when selecting data from "feature_symbol". */
export type Feature_Symbol_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: feature_symbol */
export type Feature_Symbol_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "feature_symbol" */
export enum Feature_Symbol_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "feature_symbol" */
export type Feature_Symbol_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "feature_symbol" */
export type Feature_Symbol_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Feature_Symbol_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Feature_Symbol_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "feature_symbol" */
export enum Feature_Symbol_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id'
}

export type Feature_Symbol_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Feature_Symbol_Set_Input>;
  /** filter the rows which have to be updated */
  where: Feature_Symbol_Bool_Exp;
};

/** columns and relationships of "feature_type" */
export type Feature_Type = {
  __typename?: 'feature_type';
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
};

/** aggregated selection of "feature_type" */
export type Feature_Type_Aggregate = {
  __typename?: 'feature_type_aggregate';
  aggregate?: Maybe<Feature_Type_Aggregate_Fields>;
  nodes: Array<Feature_Type>;
};

/** aggregate fields of "feature_type" */
export type Feature_Type_Aggregate_Fields = {
  __typename?: 'feature_type_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Feature_Type_Max_Fields>;
  min?: Maybe<Feature_Type_Min_Fields>;
};


/** aggregate fields of "feature_type" */
export type Feature_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Feature_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "feature_type". All fields are combined with a logical 'AND'. */
export type Feature_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Feature_Type_Bool_Exp>>;
  _not?: InputMaybe<Feature_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Feature_Type_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "feature_type" */
export enum Feature_Type_Constraint {
  /** unique or primary key constraint on columns "id" */
  FeatureTypePkey = 'feature_type_pkey'
}

export enum Feature_Type_Enum {
  /** A true or false value, used for features that have binary options */
  Boolean = 'BOOLEAN',
  /** A numerical value with decimals, used for precise measurements */
  Decimal = 'DECIMAL',
  /** A predefined list of options from which one can be selected */
  Dropdown = 'DROPDOWN',
  /** A numerical value without decimals, used for whole numbers */
  Integer = 'INTEGER',
  /** Alphanumeric characters, used for descriptions or names */
  Text = 'TEXT'
}

/** Boolean expression to compare columns of type "feature_type_enum". All fields are combined with logical 'AND'. */
export type Feature_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Feature_Type_Enum>;
  _in?: InputMaybe<Array<Feature_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Feature_Type_Enum>;
  _nin?: InputMaybe<Array<Feature_Type_Enum>>;
};

/** input type for inserting data into table "feature_type" */
export type Feature_Type_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Feature_Type_Max_Fields = {
  __typename?: 'feature_type_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Feature_Type_Min_Fields = {
  __typename?: 'feature_type_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "feature_type" */
export type Feature_Type_Mutation_Response = {
  __typename?: 'feature_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Feature_Type>;
};

/** on_conflict condition type for table "feature_type" */
export type Feature_Type_On_Conflict = {
  constraint: Feature_Type_Constraint;
  update_columns?: Array<Feature_Type_Update_Column>;
  where?: InputMaybe<Feature_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "feature_type". */
export type Feature_Type_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: feature_type */
export type Feature_Type_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "feature_type" */
export enum Feature_Type_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "feature_type" */
export type Feature_Type_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "feature_type" */
export type Feature_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Feature_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Feature_Type_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "feature_type" */
export enum Feature_Type_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id'
}

export type Feature_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Feature_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Feature_Type_Bool_Exp;
};

/** update columns of table "feature" */
export enum Feature_Update_Column {
  /** column name */
  Config = 'config',
  /** column name */
  HeadlineId = 'headline_id',
  /** column name */
  Id = 'id',
  /** column name */
  InternalName = 'internal_name',
  /** column name */
  NameId = 'name_id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  Type = 'type'
}

export type Feature_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Feature_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Feature_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Feature_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Feature_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Feature_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Feature_Set_Input>;
  /** filter the rows which have to be updated */
  where: Feature_Bool_Exp;
};

export type Feature_With_Value_Input = {
  feature_id: Scalars['uuid']['input'];
  value?: InputMaybe<Scalars['json']['input']>;
};

/** columns and relationships of "storage.files" */
export type Files = {
  __typename?: 'files';
  /** An object relationship */
  bucket: Buckets;
  bucketId: Scalars['String']['output'];
  createdAt: Scalars['timestamptz']['output'];
  etag?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  isUploaded?: Maybe<Scalars['Boolean']['output']>;
  metadata?: Maybe<Scalars['jsonb']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  uploadedByUserId?: Maybe<Scalars['uuid']['output']>;
};


/** columns and relationships of "storage.files" */
export type FilesMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "storage.files" */
export type Files_Aggregate = {
  __typename?: 'files_aggregate';
  aggregate?: Maybe<Files_Aggregate_Fields>;
  nodes: Array<Files>;
};

export type Files_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Files_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Files_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Files_Aggregate_Bool_Exp_Count>;
};

export type Files_Aggregate_Bool_Exp_Bool_And = {
  arguments: Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Files_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Files_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "storage.files" */
export type Files_Aggregate_Fields = {
  __typename?: 'files_aggregate_fields';
  avg?: Maybe<Files_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Files_Max_Fields>;
  min?: Maybe<Files_Min_Fields>;
  stddev?: Maybe<Files_Stddev_Fields>;
  stddev_pop?: Maybe<Files_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Files_Stddev_Samp_Fields>;
  sum?: Maybe<Files_Sum_Fields>;
  var_pop?: Maybe<Files_Var_Pop_Fields>;
  var_samp?: Maybe<Files_Var_Samp_Fields>;
  variance?: Maybe<Files_Variance_Fields>;
};


/** aggregate fields of "storage.files" */
export type Files_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "storage.files" */
export type Files_Aggregate_Order_By = {
  avg?: InputMaybe<Files_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Files_Max_Order_By>;
  min?: InputMaybe<Files_Min_Order_By>;
  stddev?: InputMaybe<Files_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Files_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Files_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Files_Sum_Order_By>;
  var_pop?: InputMaybe<Files_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Files_Var_Samp_Order_By>;
  variance?: InputMaybe<Files_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Files_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "storage.files" */
export type Files_Arr_Rel_Insert_Input = {
  data: Array<Files_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** aggregate avg on columns */
export type Files_Avg_Fields = {
  __typename?: 'files_avg_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "storage.files" */
export type Files_Avg_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export type Files_Bool_Exp = {
  _and?: InputMaybe<Array<Files_Bool_Exp>>;
  _not?: InputMaybe<Files_Bool_Exp>;
  _or?: InputMaybe<Array<Files_Bool_Exp>>;
  bucket?: InputMaybe<Buckets_Bool_Exp>;
  bucketId?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  etag?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isUploaded?: InputMaybe<Boolean_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  mimeType?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  size?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  uploadedByUserId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.files" */
export enum Files_Constraint {
  /** unique or primary key constraint on columns "id" */
  FilesPkey = 'files_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Files_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Files_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Files_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "storage.files" */
export type Files_Inc_Input = {
  size?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "storage.files" */
export type Files_Insert_Input = {
  bucket?: InputMaybe<Buckets_Obj_Rel_Insert_Input>;
  bucketId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  etag?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isUploaded?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Files_Max_Fields = {
  __typename?: 'files_max_fields';
  bucketId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  etag?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  uploadedByUserId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "storage.files" */
export type Files_Max_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Files_Min_Fields = {
  __typename?: 'files_min_fields';
  bucketId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  etag?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  uploadedByUserId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "storage.files" */
export type Files_Min_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "storage.files" */
export type Files_Mutation_Response = {
  __typename?: 'files_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Files>;
};

/** input type for inserting object relation for remote table "storage.files" */
export type Files_Obj_Rel_Insert_Input = {
  data: Files_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** on_conflict condition type for table "storage.files" */
export type Files_On_Conflict = {
  constraint: Files_Constraint;
  update_columns?: Array<Files_Update_Column>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.files". */
export type Files_Order_By = {
  bucket?: InputMaybe<Buckets_Order_By>;
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isUploaded?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.files */
export type Files_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Files_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "storage.files" */
export enum Files_Select_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

/** select "files_aggregate_bool_exp_bool_and_arguments_columns" columns of table "storage.files" */
export enum Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsUploaded = 'isUploaded'
}

/** select "files_aggregate_bool_exp_bool_or_arguments_columns" columns of table "storage.files" */
export enum Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsUploaded = 'isUploaded'
}

/** input type for updating data in table "storage.files" */
export type Files_Set_Input = {
  bucketId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  etag?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isUploaded?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Files_Stddev_Fields = {
  __typename?: 'files_stddev_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "storage.files" */
export type Files_Stddev_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Files_Stddev_Pop_Fields = {
  __typename?: 'files_stddev_pop_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "storage.files" */
export type Files_Stddev_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Files_Stddev_Samp_Fields = {
  __typename?: 'files_stddev_samp_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "storage.files" */
export type Files_Stddev_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "files" */
export type Files_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Files_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Files_Stream_Cursor_Value_Input = {
  bucketId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  etag?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isUploaded?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Files_Sum_Fields = {
  __typename?: 'files_sum_fields';
  size?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "storage.files" */
export type Files_Sum_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** update columns of table "storage.files" */
export enum Files_Update_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

export type Files_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Files_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Files_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Files_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Files_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Files_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Files_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Files_Set_Input>;
  /** filter the rows which have to be updated */
  where: Files_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Files_Var_Pop_Fields = {
  __typename?: 'files_var_pop_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "storage.files" */
export type Files_Var_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Files_Var_Samp_Fields = {
  __typename?: 'files_var_samp_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "storage.files" */
export type Files_Var_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Files_Variance_Fields = {
  __typename?: 'files_variance_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "storage.files" */
export type Files_Variance_Order_By = {
  size?: InputMaybe<Order_By>;
};

export type Get_Booking_Input = {
  contact_email: Scalars['String']['input'];
  friendly_id: Scalars['String']['input'];
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']['input']>;
  _gt?: InputMaybe<Scalars['json']['input']>;
  _gte?: InputMaybe<Scalars['json']['input']>;
  _in?: InputMaybe<Array<Scalars['json']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['json']['input']>;
  _lte?: InputMaybe<Scalars['json']['input']>;
  _neq?: InputMaybe<Scalars['json']['input']>;
  _nin?: InputMaybe<Array<Scalars['json']['input']>>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** Boolean expression to compare columns of type "ltree". All fields are combined with logical 'AND'. */
export type Ltree_Comparison_Exp = {
  /** is the left argument an ancestor of right (or equal)? */
  _ancestor?: InputMaybe<Scalars['ltree']['input']>;
  /** does array contain an ancestor of `ltree`? */
  _ancestor_any?: InputMaybe<Array<Scalars['ltree']['input']>>;
  /** is the left argument a descendant of right (or equal)? */
  _descendant?: InputMaybe<Scalars['ltree']['input']>;
  /** does array contain a descendant of `ltree`? */
  _descendant_any?: InputMaybe<Array<Scalars['ltree']['input']>>;
  _eq?: InputMaybe<Scalars['ltree']['input']>;
  _gt?: InputMaybe<Scalars['ltree']['input']>;
  _gte?: InputMaybe<Scalars['ltree']['input']>;
  _in?: InputMaybe<Array<Scalars['ltree']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['ltree']['input']>;
  _lte?: InputMaybe<Scalars['ltree']['input']>;
  /** does `ltree` match `lquery`? */
  _matches?: InputMaybe<Scalars['lquery']['input']>;
  /** does `ltree` match any `lquery` in array? */
  _matches_any?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does `ltree` match `ltxtquery`? */
  _matches_fulltext?: InputMaybe<Scalars['ltxtquery']['input']>;
  _neq?: InputMaybe<Scalars['ltree']['input']>;
  _nin?: InputMaybe<Array<Scalars['ltree']['input']>>;
};

/** columns and relationships of "media_gallery" */
export type Media_Gallery = {
  __typename?: 'media_gallery';
  /** An object relationship */
  headline: Translated_Text;
  headline_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  /** An array relationship */
  items: Array<Media_Gallery_Item>;
  /** An aggregate relationship */
  items_aggregate: Media_Gallery_Item_Aggregate;
  /** An object relationship */
  name?: Maybe<Translated_Text>;
  name_id: Scalars['uuid']['output'];
};


/** columns and relationships of "media_gallery" */
export type Media_GalleryItemsArgs = {
  distinct_on?: InputMaybe<Array<Media_Gallery_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Gallery_Item_Order_By>>;
  where?: InputMaybe<Media_Gallery_Item_Bool_Exp>;
};


/** columns and relationships of "media_gallery" */
export type Media_GalleryItems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Media_Gallery_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Gallery_Item_Order_By>>;
  where?: InputMaybe<Media_Gallery_Item_Bool_Exp>;
};

/** aggregated selection of "media_gallery" */
export type Media_Gallery_Aggregate = {
  __typename?: 'media_gallery_aggregate';
  aggregate?: Maybe<Media_Gallery_Aggregate_Fields>;
  nodes: Array<Media_Gallery>;
};

/** aggregate fields of "media_gallery" */
export type Media_Gallery_Aggregate_Fields = {
  __typename?: 'media_gallery_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Media_Gallery_Max_Fields>;
  min?: Maybe<Media_Gallery_Min_Fields>;
};


/** aggregate fields of "media_gallery" */
export type Media_Gallery_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Media_Gallery_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "media_gallery". All fields are combined with a logical 'AND'. */
export type Media_Gallery_Bool_Exp = {
  _and?: InputMaybe<Array<Media_Gallery_Bool_Exp>>;
  _not?: InputMaybe<Media_Gallery_Bool_Exp>;
  _or?: InputMaybe<Array<Media_Gallery_Bool_Exp>>;
  headline?: InputMaybe<Translated_Text_Bool_Exp>;
  headline_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  items?: InputMaybe<Media_Gallery_Item_Bool_Exp>;
  items_aggregate?: InputMaybe<Media_Gallery_Item_Aggregate_Bool_Exp>;
  name?: InputMaybe<Translated_Text_Bool_Exp>;
  name_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "media_gallery" */
export enum Media_Gallery_Constraint {
  /** unique or primary key constraint on columns "id" */
  MediaGalleryPkey = 'media_gallery_pkey'
}

export type Media_Gallery_Input = {
  headline?: InputMaybe<Multilanguage_Field_Input>;
  id: Scalars['String']['input'];
  items: Array<Media_Gallery_Item_Input>;
  name?: InputMaybe<Multilanguage_Field_Input>;
};

/** input type for inserting data into table "media_gallery" */
export type Media_Gallery_Insert_Input = {
  headline?: InputMaybe<Translated_Text_Obj_Rel_Insert_Input>;
  headline_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  items?: InputMaybe<Media_Gallery_Item_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Translated_Text_Obj_Rel_Insert_Input>;
  name_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** columns and relationships of "media_gallery_item" */
export type Media_Gallery_Item = {
  __typename?: 'media_gallery_item';
  /** An object relationship */
  file: Files;
  file_id: Scalars['uuid']['output'];
  gallery_id: Scalars['uuid']['output'];
  /** An object relationship */
  headline?: Maybe<Translated_Text>;
  headline_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  name: Translated_Text;
  name_id: Scalars['uuid']['output'];
  position: Scalars['numeric']['output'];
};

/** aggregated selection of "media_gallery_item" */
export type Media_Gallery_Item_Aggregate = {
  __typename?: 'media_gallery_item_aggregate';
  aggregate?: Maybe<Media_Gallery_Item_Aggregate_Fields>;
  nodes: Array<Media_Gallery_Item>;
};

export type Media_Gallery_Item_Aggregate_Bool_Exp = {
  count?: InputMaybe<Media_Gallery_Item_Aggregate_Bool_Exp_Count>;
};

export type Media_Gallery_Item_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Media_Gallery_Item_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Media_Gallery_Item_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "media_gallery_item" */
export type Media_Gallery_Item_Aggregate_Fields = {
  __typename?: 'media_gallery_item_aggregate_fields';
  avg?: Maybe<Media_Gallery_Item_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Media_Gallery_Item_Max_Fields>;
  min?: Maybe<Media_Gallery_Item_Min_Fields>;
  stddev?: Maybe<Media_Gallery_Item_Stddev_Fields>;
  stddev_pop?: Maybe<Media_Gallery_Item_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Media_Gallery_Item_Stddev_Samp_Fields>;
  sum?: Maybe<Media_Gallery_Item_Sum_Fields>;
  var_pop?: Maybe<Media_Gallery_Item_Var_Pop_Fields>;
  var_samp?: Maybe<Media_Gallery_Item_Var_Samp_Fields>;
  variance?: Maybe<Media_Gallery_Item_Variance_Fields>;
};


/** aggregate fields of "media_gallery_item" */
export type Media_Gallery_Item_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Media_Gallery_Item_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "media_gallery_item" */
export type Media_Gallery_Item_Aggregate_Order_By = {
  avg?: InputMaybe<Media_Gallery_Item_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Media_Gallery_Item_Max_Order_By>;
  min?: InputMaybe<Media_Gallery_Item_Min_Order_By>;
  stddev?: InputMaybe<Media_Gallery_Item_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Media_Gallery_Item_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Media_Gallery_Item_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Media_Gallery_Item_Sum_Order_By>;
  var_pop?: InputMaybe<Media_Gallery_Item_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Media_Gallery_Item_Var_Samp_Order_By>;
  variance?: InputMaybe<Media_Gallery_Item_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "media_gallery_item" */
export type Media_Gallery_Item_Arr_Rel_Insert_Input = {
  data: Array<Media_Gallery_Item_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Media_Gallery_Item_On_Conflict>;
};

/** aggregate avg on columns */
export type Media_Gallery_Item_Avg_Fields = {
  __typename?: 'media_gallery_item_avg_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "media_gallery_item" */
export type Media_Gallery_Item_Avg_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "media_gallery_item". All fields are combined with a logical 'AND'. */
export type Media_Gallery_Item_Bool_Exp = {
  _and?: InputMaybe<Array<Media_Gallery_Item_Bool_Exp>>;
  _not?: InputMaybe<Media_Gallery_Item_Bool_Exp>;
  _or?: InputMaybe<Array<Media_Gallery_Item_Bool_Exp>>;
  file?: InputMaybe<Files_Bool_Exp>;
  file_id?: InputMaybe<Uuid_Comparison_Exp>;
  gallery_id?: InputMaybe<Uuid_Comparison_Exp>;
  headline?: InputMaybe<Translated_Text_Bool_Exp>;
  headline_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<Translated_Text_Bool_Exp>;
  name_id?: InputMaybe<Uuid_Comparison_Exp>;
  position?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "media_gallery_item" */
export enum Media_Gallery_Item_Constraint {
  /** unique or primary key constraint on columns "id" */
  MediaGalleryItemPkey = 'media_gallery_item_pkey'
}

/** input type for incrementing numeric columns in table "media_gallery_item" */
export type Media_Gallery_Item_Inc_Input = {
  position?: InputMaybe<Scalars['numeric']['input']>;
};

export type Media_Gallery_Item_Input = {
  file_id: Scalars['uuid']['input'];
  headline?: InputMaybe<Multilanguage_Field_Input>;
  name?: InputMaybe<Multilanguage_Field_Input>;
};

/** input type for inserting data into table "media_gallery_item" */
export type Media_Gallery_Item_Insert_Input = {
  file?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  file_id?: InputMaybe<Scalars['uuid']['input']>;
  gallery_id?: InputMaybe<Scalars['uuid']['input']>;
  headline?: InputMaybe<Translated_Text_Obj_Rel_Insert_Input>;
  headline_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Translated_Text_Obj_Rel_Insert_Input>;
  name_id?: InputMaybe<Scalars['uuid']['input']>;
  position?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate max on columns */
export type Media_Gallery_Item_Max_Fields = {
  __typename?: 'media_gallery_item_max_fields';
  file_id?: Maybe<Scalars['uuid']['output']>;
  gallery_id?: Maybe<Scalars['uuid']['output']>;
  headline_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name_id?: Maybe<Scalars['uuid']['output']>;
  position?: Maybe<Scalars['numeric']['output']>;
};

/** order by max() on columns of table "media_gallery_item" */
export type Media_Gallery_Item_Max_Order_By = {
  file_id?: InputMaybe<Order_By>;
  gallery_id?: InputMaybe<Order_By>;
  headline_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Media_Gallery_Item_Min_Fields = {
  __typename?: 'media_gallery_item_min_fields';
  file_id?: Maybe<Scalars['uuid']['output']>;
  gallery_id?: Maybe<Scalars['uuid']['output']>;
  headline_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name_id?: Maybe<Scalars['uuid']['output']>;
  position?: Maybe<Scalars['numeric']['output']>;
};

/** order by min() on columns of table "media_gallery_item" */
export type Media_Gallery_Item_Min_Order_By = {
  file_id?: InputMaybe<Order_By>;
  gallery_id?: InputMaybe<Order_By>;
  headline_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "media_gallery_item" */
export type Media_Gallery_Item_Mutation_Response = {
  __typename?: 'media_gallery_item_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Media_Gallery_Item>;
};

/** on_conflict condition type for table "media_gallery_item" */
export type Media_Gallery_Item_On_Conflict = {
  constraint: Media_Gallery_Item_Constraint;
  update_columns?: Array<Media_Gallery_Item_Update_Column>;
  where?: InputMaybe<Media_Gallery_Item_Bool_Exp>;
};

/** Ordering options when selecting data from "media_gallery_item". */
export type Media_Gallery_Item_Order_By = {
  file?: InputMaybe<Files_Order_By>;
  file_id?: InputMaybe<Order_By>;
  gallery_id?: InputMaybe<Order_By>;
  headline?: InputMaybe<Translated_Text_Order_By>;
  headline_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Translated_Text_Order_By>;
  name_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** primary key columns input for table: media_gallery_item */
export type Media_Gallery_Item_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "media_gallery_item" */
export enum Media_Gallery_Item_Select_Column {
  /** column name */
  FileId = 'file_id',
  /** column name */
  GalleryId = 'gallery_id',
  /** column name */
  HeadlineId = 'headline_id',
  /** column name */
  Id = 'id',
  /** column name */
  NameId = 'name_id',
  /** column name */
  Position = 'position'
}

/** input type for updating data in table "media_gallery_item" */
export type Media_Gallery_Item_Set_Input = {
  file_id?: InputMaybe<Scalars['uuid']['input']>;
  gallery_id?: InputMaybe<Scalars['uuid']['input']>;
  headline_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name_id?: InputMaybe<Scalars['uuid']['input']>;
  position?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate stddev on columns */
export type Media_Gallery_Item_Stddev_Fields = {
  __typename?: 'media_gallery_item_stddev_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "media_gallery_item" */
export type Media_Gallery_Item_Stddev_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Media_Gallery_Item_Stddev_Pop_Fields = {
  __typename?: 'media_gallery_item_stddev_pop_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "media_gallery_item" */
export type Media_Gallery_Item_Stddev_Pop_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Media_Gallery_Item_Stddev_Samp_Fields = {
  __typename?: 'media_gallery_item_stddev_samp_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "media_gallery_item" */
export type Media_Gallery_Item_Stddev_Samp_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "media_gallery_item" */
export type Media_Gallery_Item_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Media_Gallery_Item_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Media_Gallery_Item_Stream_Cursor_Value_Input = {
  file_id?: InputMaybe<Scalars['uuid']['input']>;
  gallery_id?: InputMaybe<Scalars['uuid']['input']>;
  headline_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name_id?: InputMaybe<Scalars['uuid']['input']>;
  position?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Media_Gallery_Item_Sum_Fields = {
  __typename?: 'media_gallery_item_sum_fields';
  position?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "media_gallery_item" */
export type Media_Gallery_Item_Sum_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** update columns of table "media_gallery_item" */
export enum Media_Gallery_Item_Update_Column {
  /** column name */
  FileId = 'file_id',
  /** column name */
  GalleryId = 'gallery_id',
  /** column name */
  HeadlineId = 'headline_id',
  /** column name */
  Id = 'id',
  /** column name */
  NameId = 'name_id',
  /** column name */
  Position = 'position'
}

export type Media_Gallery_Item_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Media_Gallery_Item_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Media_Gallery_Item_Set_Input>;
  /** filter the rows which have to be updated */
  where: Media_Gallery_Item_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Media_Gallery_Item_Var_Pop_Fields = {
  __typename?: 'media_gallery_item_var_pop_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "media_gallery_item" */
export type Media_Gallery_Item_Var_Pop_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Media_Gallery_Item_Var_Samp_Fields = {
  __typename?: 'media_gallery_item_var_samp_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "media_gallery_item" */
export type Media_Gallery_Item_Var_Samp_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Media_Gallery_Item_Variance_Fields = {
  __typename?: 'media_gallery_item_variance_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "media_gallery_item" */
export type Media_Gallery_Item_Variance_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Media_Gallery_Max_Fields = {
  __typename?: 'media_gallery_max_fields';
  headline_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Media_Gallery_Min_Fields = {
  __typename?: 'media_gallery_min_fields';
  headline_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "media_gallery" */
export type Media_Gallery_Mutation_Response = {
  __typename?: 'media_gallery_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Media_Gallery>;
};

/** input type for inserting object relation for remote table "media_gallery" */
export type Media_Gallery_Obj_Rel_Insert_Input = {
  data: Media_Gallery_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Media_Gallery_On_Conflict>;
};

/** on_conflict condition type for table "media_gallery" */
export type Media_Gallery_On_Conflict = {
  constraint: Media_Gallery_Constraint;
  update_columns?: Array<Media_Gallery_Update_Column>;
  where?: InputMaybe<Media_Gallery_Bool_Exp>;
};

/** Ordering options when selecting data from "media_gallery". */
export type Media_Gallery_Order_By = {
  headline?: InputMaybe<Translated_Text_Order_By>;
  headline_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  items_aggregate?: InputMaybe<Media_Gallery_Item_Aggregate_Order_By>;
  name?: InputMaybe<Translated_Text_Order_By>;
  name_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: media_gallery */
export type Media_Gallery_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "media_gallery" */
export enum Media_Gallery_Select_Column {
  /** column name */
  HeadlineId = 'headline_id',
  /** column name */
  Id = 'id',
  /** column name */
  NameId = 'name_id'
}

/** input type for updating data in table "media_gallery" */
export type Media_Gallery_Set_Input = {
  headline_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "media_gallery" */
export type Media_Gallery_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Media_Gallery_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Media_Gallery_Stream_Cursor_Value_Input = {
  headline_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "media_gallery" */
export enum Media_Gallery_Update_Column {
  /** column name */
  HeadlineId = 'headline_id',
  /** column name */
  Id = 'id',
  /** column name */
  NameId = 'name_id'
}

export type Media_Gallery_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Media_Gallery_Set_Input>;
  /** filter the rows which have to be updated */
  where: Media_Gallery_Bool_Exp;
};

export type Multilanguage_Field_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** activate_organization_features */
  activate_organization_features: Scalars['json']['output'];
  booking_accept: Scalars['json']['output'];
  booking_add_note: Scalars['json']['output'];
  booking_cancel: Scalars['json']['output'];
  booking_create: Scalars['json']['output'];
  booking_reject: Scalars['json']['output'];
  cleanup: Scalars['json']['output'];
  contact: Scalars['json']['output'];
  create_product: Scalars['json']['output'];
  create_rate: Scalars['json']['output'];
  /** delete single row from the table: "auth.providers" */
  deleteAuthProvider?: Maybe<AuthProviders>;
  /** delete single row from the table: "auth.provider_requests" */
  deleteAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** delete data from the table: "auth.provider_requests" */
  deleteAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** delete data from the table: "auth.providers" */
  deleteAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** delete single row from the table: "auth.refresh_tokens" */
  deleteAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** delete single row from the table: "auth.refresh_token_types" */
  deleteAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** delete data from the table: "auth.refresh_token_types" */
  deleteAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
  /** delete data from the table: "auth.refresh_tokens" */
  deleteAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** delete single row from the table: "auth.roles" */
  deleteAuthRole?: Maybe<AuthRoles>;
  /** delete data from the table: "auth.roles" */
  deleteAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_providers" */
  deleteAuthUserProvider?: Maybe<AuthUserProviders>;
  /** delete data from the table: "auth.user_providers" */
  deleteAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** delete single row from the table: "auth.user_roles" */
  deleteAuthUserRole?: Maybe<AuthUserRoles>;
  /** delete data from the table: "auth.user_roles" */
  deleteAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** delete data from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** delete single row from the table: "storage.buckets" */
  deleteBucket?: Maybe<Buckets>;
  /** delete data from the table: "storage.buckets" */
  deleteBuckets?: Maybe<Buckets_Mutation_Response>;
  /** delete single row from the table: "storage.files" */
  deleteFile?: Maybe<Files>;
  /** delete data from the table: "storage.files" */
  deleteFiles?: Maybe<Files_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  deleteUser?: Maybe<Users>;
  /** delete data from the table: "auth.users" */
  deleteUsers?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "storage.virus" */
  deleteVirus?: Maybe<Virus>;
  /** delete data from the table: "storage.virus" */
  deleteViruses?: Maybe<Virus_Mutation_Response>;
  /** delete data from the table: "booking" */
  delete_booking?: Maybe<Booking_Mutation_Response>;
  /** delete single row from the table: "booking" */
  delete_booking_by_pk?: Maybe<Booking>;
  /** delete data from the table: "booking_events.event_type" */
  delete_booking_events_event_type?: Maybe<Booking_Events_Event_Type_Mutation_Response>;
  /** delete single row from the table: "booking_events.event_type" */
  delete_booking_events_event_type_by_pk?: Maybe<Booking_Events_Event_Type>;
  /** delete data from the table: "booking_events.main" */
  delete_booking_events_main?: Maybe<Booking_Events_Main_Mutation_Response>;
  /** delete single row from the table: "booking_events.main" */
  delete_booking_events_main_by_pk?: Maybe<Booking_Events_Main>;
  /** delete data from the table: "booking_events.version" */
  delete_booking_events_version?: Maybe<Booking_Events_Version_Mutation_Response>;
  /** delete single row from the table: "booking_events.version" */
  delete_booking_events_version_by_pk?: Maybe<Booking_Events_Version>;
  /** delete data from the table: "booking_history_entry" */
  delete_booking_history_entry?: Maybe<Booking_History_Entry_Mutation_Response>;
  /** delete single row from the table: "booking_history_entry" */
  delete_booking_history_entry_by_pk?: Maybe<Booking_History_Entry>;
  /** delete data from the table: "booking_product" */
  delete_booking_product?: Maybe<Booking_Product_Mutation_Response>;
  /** delete single row from the table: "booking_product" */
  delete_booking_product_by_pk?: Maybe<Booking_Product>;
  /** delete data from the table: "booking_question_scope" */
  delete_booking_question_scope?: Maybe<Booking_Question_Scope_Mutation_Response>;
  /** delete single row from the table: "booking_question_scope" */
  delete_booking_question_scope_by_pk?: Maybe<Booking_Question_Scope>;
  /** delete data from the table: "booking_question_type" */
  delete_booking_question_type?: Maybe<Booking_Question_Type_Mutation_Response>;
  /** delete single row from the table: "booking_question_type" */
  delete_booking_question_type_by_pk?: Maybe<Booking_Question_Type>;
  /** delete data from the table: "booking_state" */
  delete_booking_state?: Maybe<Booking_State_Mutation_Response>;
  /** delete single row from the table: "booking_state" */
  delete_booking_state_by_pk?: Maybe<Booking_State>;
  /** delete data from the table: "category" */
  delete_category?: Maybe<Category_Mutation_Response>;
  /** delete single row from the table: "category" */
  delete_category_by_pk?: Maybe<Category>;
  /** delete data from the table: "contact" */
  delete_contact?: Maybe<Contact_Mutation_Response>;
  /** delete single row from the table: "contact" */
  delete_contact_by_pk?: Maybe<Contact>;
  /** delete data from the table: "feature" */
  delete_feature?: Maybe<Feature_Mutation_Response>;
  /** delete single row from the table: "feature" */
  delete_feature_by_pk?: Maybe<Feature>;
  /** delete data from the table: "feature_category" */
  delete_feature_category?: Maybe<Feature_Category_Mutation_Response>;
  /** delete single row from the table: "feature_category" */
  delete_feature_category_by_pk?: Maybe<Feature_Category>;
  /** delete data from the table: "feature_symbol" */
  delete_feature_symbol?: Maybe<Feature_Symbol_Mutation_Response>;
  /** delete single row from the table: "feature_symbol" */
  delete_feature_symbol_by_pk?: Maybe<Feature_Symbol>;
  /** delete data from the table: "feature_type" */
  delete_feature_type?: Maybe<Feature_Type_Mutation_Response>;
  /** delete single row from the table: "feature_type" */
  delete_feature_type_by_pk?: Maybe<Feature_Type>;
  /** delete data from the table: "media_gallery" */
  delete_media_gallery?: Maybe<Media_Gallery_Mutation_Response>;
  /** delete single row from the table: "media_gallery" */
  delete_media_gallery_by_pk?: Maybe<Media_Gallery>;
  /** delete data from the table: "media_gallery_item" */
  delete_media_gallery_item?: Maybe<Media_Gallery_Item_Mutation_Response>;
  /** delete single row from the table: "media_gallery_item" */
  delete_media_gallery_item_by_pk?: Maybe<Media_Gallery_Item>;
  /** delete data from the table: "my_web_section" */
  delete_my_web_section?: Maybe<My_Web_Section_Mutation_Response>;
  /** delete single row from the table: "my_web_section" */
  delete_my_web_section_by_pk?: Maybe<My_Web_Section>;
  /** delete data from the table: "organization" */
  delete_organization?: Maybe<Organization_Mutation_Response>;
  /** delete data from the table: "organization_booking_question" */
  delete_organization_booking_question?: Maybe<Organization_Booking_Question_Mutation_Response>;
  /** delete single row from the table: "organization_booking_question" */
  delete_organization_booking_question_by_pk?: Maybe<Organization_Booking_Question>;
  /** delete data from the table: "organization_branding" */
  delete_organization_branding?: Maybe<Organization_Branding_Mutation_Response>;
  /** delete single row from the table: "organization_branding" */
  delete_organization_branding_by_pk?: Maybe<Organization_Branding>;
  /** delete data from the table: "organization_branding_meta_description" */
  delete_organization_branding_meta_description?: Maybe<Organization_Branding_Meta_Description_Mutation_Response>;
  /** delete single row from the table: "organization_branding_meta_description" */
  delete_organization_branding_meta_description_by_pk?: Maybe<Organization_Branding_Meta_Description>;
  /** delete data from the table: "organization_branding_meta_title" */
  delete_organization_branding_meta_title?: Maybe<Organization_Branding_Meta_Title_Mutation_Response>;
  /** delete single row from the table: "organization_branding_meta_title" */
  delete_organization_branding_meta_title_by_pk?: Maybe<Organization_Branding_Meta_Title>;
  /** delete data from the table: "organization_business_model" */
  delete_organization_business_model?: Maybe<Organization_Business_Model_Mutation_Response>;
  /** delete single row from the table: "organization_business_model" */
  delete_organization_business_model_by_pk?: Maybe<Organization_Business_Model>;
  /** delete single row from the table: "organization" */
  delete_organization_by_pk?: Maybe<Organization>;
  /** delete data from the table: "organization_headline" */
  delete_organization_headline?: Maybe<Organization_Headline_Mutation_Response>;
  /** delete single row from the table: "organization_headline" */
  delete_organization_headline_by_pk?: Maybe<Organization_Headline>;
  /** delete data from the table: "organization_member" */
  delete_organization_member?: Maybe<Organization_Member_Mutation_Response>;
  /** delete single row from the table: "organization_member" */
  delete_organization_member_by_pk?: Maybe<Organization_Member>;
  /** delete data from the table: "organization_socials" */
  delete_organization_socials?: Maybe<Organization_Socials_Mutation_Response>;
  /** delete single row from the table: "organization_socials" */
  delete_organization_socials_by_pk?: Maybe<Organization_Socials>;
  /** delete data from the table: "place" */
  delete_place?: Maybe<Place_Mutation_Response>;
  /** delete single row from the table: "place" */
  delete_place_by_pk?: Maybe<Place>;
  /** delete data from the table: "product" */
  delete_product?: Maybe<Product_Mutation_Response>;
  /** delete data from the table: "product_allotment_range" */
  delete_product_allotment_range?: Maybe<Product_Allotment_Range_Mutation_Response>;
  /** delete single row from the table: "product_allotment_range" */
  delete_product_allotment_range_by_pk?: Maybe<Product_Allotment_Range>;
  /** delete data from the table: "product_business_model" */
  delete_product_business_model?: Maybe<Product_Business_Model_Mutation_Response>;
  /** delete single row from the table: "product_business_model" */
  delete_product_business_model_by_pk?: Maybe<Product_Business_Model>;
  /** delete single row from the table: "product" */
  delete_product_by_pk?: Maybe<Product>;
  /** delete data from the table: "product_description" */
  delete_product_description?: Maybe<Product_Description_Mutation_Response>;
  /** delete single row from the table: "product_description" */
  delete_product_description_by_pk?: Maybe<Product_Description>;
  /** delete data from the table: "product_feature" */
  delete_product_feature?: Maybe<Product_Feature_Mutation_Response>;
  /** delete single row from the table: "product_feature" */
  delete_product_feature_by_pk?: Maybe<Product_Feature>;
  /** delete data from the table: "product_group" */
  delete_product_group?: Maybe<Product_Group_Mutation_Response>;
  /** delete single row from the table: "product_group" */
  delete_product_group_by_pk?: Maybe<Product_Group>;
  /** delete data from the table: "product_group_product" */
  delete_product_group_product?: Maybe<Product_Group_Product_Mutation_Response>;
  /** delete single row from the table: "product_group_product" */
  delete_product_group_product_by_pk?: Maybe<Product_Group_Product>;
  /** delete data from the table: "product_headline" */
  delete_product_headline?: Maybe<Product_Headline_Mutation_Response>;
  /** delete single row from the table: "product_headline" */
  delete_product_headline_by_pk?: Maybe<Product_Headline>;
  /** delete data from the table: "product_name" */
  delete_product_name?: Maybe<Product_Name_Mutation_Response>;
  /** delete single row from the table: "product_name" */
  delete_product_name_by_pk?: Maybe<Product_Name>;
  /** delete data from the table: "product_supplement" */
  delete_product_supplement?: Maybe<Product_Supplement_Mutation_Response>;
  /** delete single row from the table: "product_supplement" */
  delete_product_supplement_by_pk?: Maybe<Product_Supplement>;
  /** delete data from the table: "rate" */
  delete_rate?: Maybe<Rate_Mutation_Response>;
  /** delete single row from the table: "rate" */
  delete_rate_by_pk?: Maybe<Rate>;
  /** delete data from the table: "rate_headline" */
  delete_rate_headline?: Maybe<Rate_Headline_Mutation_Response>;
  /** delete single row from the table: "rate_headline" */
  delete_rate_headline_by_pk?: Maybe<Rate_Headline>;
  /** delete data from the table: "rate_name" */
  delete_rate_name?: Maybe<Rate_Name_Mutation_Response>;
  /** delete single row from the table: "rate_name" */
  delete_rate_name_by_pk?: Maybe<Rate_Name>;
  /** delete data from the table: "rate_price_range" */
  delete_rate_price_range?: Maybe<Rate_Price_Range_Mutation_Response>;
  /** delete single row from the table: "rate_price_range" */
  delete_rate_price_range_by_pk?: Maybe<Rate_Price_Range>;
  /** delete data from the table: "rate_type" */
  delete_rate_type?: Maybe<Rate_Type_Mutation_Response>;
  /** delete single row from the table: "rate_type" */
  delete_rate_type_by_pk?: Maybe<Rate_Type>;
  /** delete data from the table: "role" */
  delete_role?: Maybe<Role_Mutation_Response>;
  /** delete single row from the table: "role" */
  delete_role_by_pk?: Maybe<Role>;
  /** delete data from the table: "site" */
  delete_site?: Maybe<Site_Mutation_Response>;
  /** delete single row from the table: "site" */
  delete_site_by_pk?: Maybe<Site>;
  /** delete data from the table: "slug" */
  delete_slug?: Maybe<Slug_Mutation_Response>;
  /** delete single row from the table: "slug" */
  delete_slug_by_pk?: Maybe<Slug>;
  /** delete data from the table: "supplement" */
  delete_supplement?: Maybe<Supplement_Mutation_Response>;
  /** delete single row from the table: "supplement" */
  delete_supplement_by_pk?: Maybe<Supplement>;
  /** delete data from the table: "supplement_prices" */
  delete_supplement_prices?: Maybe<Supplement_Prices_Mutation_Response>;
  /** delete data from the table: "supplement_type" */
  delete_supplement_type?: Maybe<Supplement_Type_Mutation_Response>;
  /** delete single row from the table: "supplement_type" */
  delete_supplement_type_by_pk?: Maybe<Supplement_Type>;
  /** delete data from the table: "translated_text" */
  delete_translated_text?: Maybe<Translated_Text_Mutation_Response>;
  /** delete single row from the table: "translated_text" */
  delete_translated_text_by_pk?: Maybe<Translated_Text>;
  /** delete data from the table: "unit_management" */
  delete_unit_management?: Maybe<Unit_Management_Mutation_Response>;
  /** delete single row from the table: "unit_management" */
  delete_unit_management_by_pk?: Maybe<Unit_Management>;
  /** delete data from the table: "venue" */
  delete_venue?: Maybe<Venue_Mutation_Response>;
  /** delete single row from the table: "venue" */
  delete_venue_by_pk?: Maybe<Venue>;
  /** delete data from the table: "venue_description" */
  delete_venue_description?: Maybe<Venue_Description_Mutation_Response>;
  /** delete single row from the table: "venue_description" */
  delete_venue_description_by_pk?: Maybe<Venue_Description>;
  /** delete data from the table: "venue_facility" */
  delete_venue_facility?: Maybe<Venue_Facility_Mutation_Response>;
  /** delete single row from the table: "venue_facility" */
  delete_venue_facility_by_pk?: Maybe<Venue_Facility>;
  /** delete data from the table: "venue_facility_headline" */
  delete_venue_facility_headline?: Maybe<Venue_Facility_Headline_Mutation_Response>;
  /** delete single row from the table: "venue_facility_headline" */
  delete_venue_facility_headline_by_pk?: Maybe<Venue_Facility_Headline>;
  /** delete data from the table: "venue_facility_name" */
  delete_venue_facility_name?: Maybe<Venue_Facility_Name_Mutation_Response>;
  /** delete single row from the table: "venue_facility_name" */
  delete_venue_facility_name_by_pk?: Maybe<Venue_Facility_Name>;
  /** delete data from the table: "venue_good_to_know" */
  delete_venue_good_to_know?: Maybe<Venue_Good_To_Know_Mutation_Response>;
  /** delete single row from the table: "venue_good_to_know" */
  delete_venue_good_to_know_by_pk?: Maybe<Venue_Good_To_Know>;
  /** delete data from the table: "venue_usps" */
  delete_venue_usps?: Maybe<Venue_Usps_Mutation_Response>;
  /** delete single row from the table: "venue_usps" */
  delete_venue_usps_by_pk?: Maybe<Venue_Usps>;
  /** delete data from the table: "venue_usps_line" */
  delete_venue_usps_line?: Maybe<Venue_Usps_Line_Mutation_Response>;
  /** delete single row from the table: "venue_usps_line" */
  delete_venue_usps_line_by_pk?: Maybe<Venue_Usps_Line>;
  /** insert a single row into the table: "auth.providers" */
  insertAuthProvider?: Maybe<AuthProviders>;
  /** insert a single row into the table: "auth.provider_requests" */
  insertAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** insert data into the table: "auth.provider_requests" */
  insertAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** insert data into the table: "auth.providers" */
  insertAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insertAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** insert a single row into the table: "auth.refresh_token_types" */
  insertAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** insert data into the table: "auth.refresh_token_types" */
  insertAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
  /** insert data into the table: "auth.refresh_tokens" */
  insertAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** insert a single row into the table: "auth.roles" */
  insertAuthRole?: Maybe<AuthRoles>;
  /** insert data into the table: "auth.roles" */
  insertAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_providers" */
  insertAuthUserProvider?: Maybe<AuthUserProviders>;
  /** insert data into the table: "auth.user_providers" */
  insertAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.user_roles" */
  insertAuthUserRole?: Maybe<AuthUserRoles>;
  /** insert data into the table: "auth.user_roles" */
  insertAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** insert data into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** insert a single row into the table: "storage.buckets" */
  insertBucket?: Maybe<Buckets>;
  /** insert data into the table: "storage.buckets" */
  insertBuckets?: Maybe<Buckets_Mutation_Response>;
  /** insert a single row into the table: "storage.files" */
  insertFile?: Maybe<Files>;
  /** insert data into the table: "storage.files" */
  insertFiles?: Maybe<Files_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  insertUser?: Maybe<Users>;
  /** insert data into the table: "auth.users" */
  insertUsers?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "storage.virus" */
  insertVirus?: Maybe<Virus>;
  /** insert data into the table: "storage.virus" */
  insertViruses?: Maybe<Virus_Mutation_Response>;
  /** insert data into the table: "booking" */
  insert_booking?: Maybe<Booking_Mutation_Response>;
  /** insert data into the table: "booking_events.event_type" */
  insert_booking_events_event_type?: Maybe<Booking_Events_Event_Type_Mutation_Response>;
  /** insert a single row into the table: "booking_events.event_type" */
  insert_booking_events_event_type_one?: Maybe<Booking_Events_Event_Type>;
  /** insert data into the table: "booking_events.main" */
  insert_booking_events_main?: Maybe<Booking_Events_Main_Mutation_Response>;
  /** insert a single row into the table: "booking_events.main" */
  insert_booking_events_main_one?: Maybe<Booking_Events_Main>;
  /** insert data into the table: "booking_events.version" */
  insert_booking_events_version?: Maybe<Booking_Events_Version_Mutation_Response>;
  /** insert a single row into the table: "booking_events.version" */
  insert_booking_events_version_one?: Maybe<Booking_Events_Version>;
  /** insert data into the table: "booking_history_entry" */
  insert_booking_history_entry?: Maybe<Booking_History_Entry_Mutation_Response>;
  /** insert a single row into the table: "booking_history_entry" */
  insert_booking_history_entry_one?: Maybe<Booking_History_Entry>;
  /** insert a single row into the table: "booking" */
  insert_booking_one?: Maybe<Booking>;
  /** insert data into the table: "booking_product" */
  insert_booking_product?: Maybe<Booking_Product_Mutation_Response>;
  /** insert a single row into the table: "booking_product" */
  insert_booking_product_one?: Maybe<Booking_Product>;
  /** insert data into the table: "booking_question_scope" */
  insert_booking_question_scope?: Maybe<Booking_Question_Scope_Mutation_Response>;
  /** insert a single row into the table: "booking_question_scope" */
  insert_booking_question_scope_one?: Maybe<Booking_Question_Scope>;
  /** insert data into the table: "booking_question_type" */
  insert_booking_question_type?: Maybe<Booking_Question_Type_Mutation_Response>;
  /** insert a single row into the table: "booking_question_type" */
  insert_booking_question_type_one?: Maybe<Booking_Question_Type>;
  /** insert data into the table: "booking_state" */
  insert_booking_state?: Maybe<Booking_State_Mutation_Response>;
  /** insert a single row into the table: "booking_state" */
  insert_booking_state_one?: Maybe<Booking_State>;
  /** insert data into the table: "category" */
  insert_category?: Maybe<Category_Mutation_Response>;
  /** insert a single row into the table: "category" */
  insert_category_one?: Maybe<Category>;
  /** insert data into the table: "contact" */
  insert_contact?: Maybe<Contact_Mutation_Response>;
  /** insert a single row into the table: "contact" */
  insert_contact_one?: Maybe<Contact>;
  /** insert data into the table: "feature" */
  insert_feature?: Maybe<Feature_Mutation_Response>;
  /** insert data into the table: "feature_category" */
  insert_feature_category?: Maybe<Feature_Category_Mutation_Response>;
  /** insert a single row into the table: "feature_category" */
  insert_feature_category_one?: Maybe<Feature_Category>;
  /** insert a single row into the table: "feature" */
  insert_feature_one?: Maybe<Feature>;
  /** insert data into the table: "feature_symbol" */
  insert_feature_symbol?: Maybe<Feature_Symbol_Mutation_Response>;
  /** insert a single row into the table: "feature_symbol" */
  insert_feature_symbol_one?: Maybe<Feature_Symbol>;
  /** insert data into the table: "feature_type" */
  insert_feature_type?: Maybe<Feature_Type_Mutation_Response>;
  /** insert a single row into the table: "feature_type" */
  insert_feature_type_one?: Maybe<Feature_Type>;
  /** insert data into the table: "media_gallery" */
  insert_media_gallery?: Maybe<Media_Gallery_Mutation_Response>;
  /** insert data into the table: "media_gallery_item" */
  insert_media_gallery_item?: Maybe<Media_Gallery_Item_Mutation_Response>;
  /** insert a single row into the table: "media_gallery_item" */
  insert_media_gallery_item_one?: Maybe<Media_Gallery_Item>;
  /** insert a single row into the table: "media_gallery" */
  insert_media_gallery_one?: Maybe<Media_Gallery>;
  /** insert data into the table: "my_web_section" */
  insert_my_web_section?: Maybe<My_Web_Section_Mutation_Response>;
  /** insert a single row into the table: "my_web_section" */
  insert_my_web_section_one?: Maybe<My_Web_Section>;
  /** insert data into the table: "organization" */
  insert_organization?: Maybe<Organization_Mutation_Response>;
  /** insert data into the table: "organization_booking_question" */
  insert_organization_booking_question?: Maybe<Organization_Booking_Question_Mutation_Response>;
  /** insert a single row into the table: "organization_booking_question" */
  insert_organization_booking_question_one?: Maybe<Organization_Booking_Question>;
  /** insert data into the table: "organization_branding" */
  insert_organization_branding?: Maybe<Organization_Branding_Mutation_Response>;
  /** insert data into the table: "organization_branding_meta_description" */
  insert_organization_branding_meta_description?: Maybe<Organization_Branding_Meta_Description_Mutation_Response>;
  /** insert a single row into the table: "organization_branding_meta_description" */
  insert_organization_branding_meta_description_one?: Maybe<Organization_Branding_Meta_Description>;
  /** insert data into the table: "organization_branding_meta_title" */
  insert_organization_branding_meta_title?: Maybe<Organization_Branding_Meta_Title_Mutation_Response>;
  /** insert a single row into the table: "organization_branding_meta_title" */
  insert_organization_branding_meta_title_one?: Maybe<Organization_Branding_Meta_Title>;
  /** insert a single row into the table: "organization_branding" */
  insert_organization_branding_one?: Maybe<Organization_Branding>;
  /** insert data into the table: "organization_business_model" */
  insert_organization_business_model?: Maybe<Organization_Business_Model_Mutation_Response>;
  /** insert a single row into the table: "organization_business_model" */
  insert_organization_business_model_one?: Maybe<Organization_Business_Model>;
  /** insert data into the table: "organization_headline" */
  insert_organization_headline?: Maybe<Organization_Headline_Mutation_Response>;
  /** insert a single row into the table: "organization_headline" */
  insert_organization_headline_one?: Maybe<Organization_Headline>;
  /** insert data into the table: "organization_member" */
  insert_organization_member?: Maybe<Organization_Member_Mutation_Response>;
  /** insert a single row into the table: "organization_member" */
  insert_organization_member_one?: Maybe<Organization_Member>;
  /** insert a single row into the table: "organization" */
  insert_organization_one?: Maybe<Organization>;
  /** insert data into the table: "organization_socials" */
  insert_organization_socials?: Maybe<Organization_Socials_Mutation_Response>;
  /** insert a single row into the table: "organization_socials" */
  insert_organization_socials_one?: Maybe<Organization_Socials>;
  /** insert data into the table: "place" */
  insert_place?: Maybe<Place_Mutation_Response>;
  /** insert a single row into the table: "place" */
  insert_place_one?: Maybe<Place>;
  /** insert data into the table: "product" */
  insert_product?: Maybe<Product_Mutation_Response>;
  /** insert data into the table: "product_allotment_range" */
  insert_product_allotment_range?: Maybe<Product_Allotment_Range_Mutation_Response>;
  /** insert a single row into the table: "product_allotment_range" */
  insert_product_allotment_range_one?: Maybe<Product_Allotment_Range>;
  /** insert data into the table: "product_business_model" */
  insert_product_business_model?: Maybe<Product_Business_Model_Mutation_Response>;
  /** insert a single row into the table: "product_business_model" */
  insert_product_business_model_one?: Maybe<Product_Business_Model>;
  /** insert data into the table: "product_description" */
  insert_product_description?: Maybe<Product_Description_Mutation_Response>;
  /** insert a single row into the table: "product_description" */
  insert_product_description_one?: Maybe<Product_Description>;
  /** insert data into the table: "product_feature" */
  insert_product_feature?: Maybe<Product_Feature_Mutation_Response>;
  /** insert a single row into the table: "product_feature" */
  insert_product_feature_one?: Maybe<Product_Feature>;
  /** insert data into the table: "product_group" */
  insert_product_group?: Maybe<Product_Group_Mutation_Response>;
  /** insert a single row into the table: "product_group" */
  insert_product_group_one?: Maybe<Product_Group>;
  /** insert data into the table: "product_group_product" */
  insert_product_group_product?: Maybe<Product_Group_Product_Mutation_Response>;
  /** insert a single row into the table: "product_group_product" */
  insert_product_group_product_one?: Maybe<Product_Group_Product>;
  /** insert data into the table: "product_headline" */
  insert_product_headline?: Maybe<Product_Headline_Mutation_Response>;
  /** insert a single row into the table: "product_headline" */
  insert_product_headline_one?: Maybe<Product_Headline>;
  /** insert data into the table: "product_name" */
  insert_product_name?: Maybe<Product_Name_Mutation_Response>;
  /** insert a single row into the table: "product_name" */
  insert_product_name_one?: Maybe<Product_Name>;
  /** insert a single row into the table: "product" */
  insert_product_one?: Maybe<Product>;
  /** insert data into the table: "product_supplement" */
  insert_product_supplement?: Maybe<Product_Supplement_Mutation_Response>;
  /** insert a single row into the table: "product_supplement" */
  insert_product_supplement_one?: Maybe<Product_Supplement>;
  /** insert data into the table: "rate" */
  insert_rate?: Maybe<Rate_Mutation_Response>;
  /** insert data into the table: "rate_headline" */
  insert_rate_headline?: Maybe<Rate_Headline_Mutation_Response>;
  /** insert a single row into the table: "rate_headline" */
  insert_rate_headline_one?: Maybe<Rate_Headline>;
  /** insert data into the table: "rate_name" */
  insert_rate_name?: Maybe<Rate_Name_Mutation_Response>;
  /** insert a single row into the table: "rate_name" */
  insert_rate_name_one?: Maybe<Rate_Name>;
  /** insert a single row into the table: "rate" */
  insert_rate_one?: Maybe<Rate>;
  /** insert data into the table: "rate_price_range" */
  insert_rate_price_range?: Maybe<Rate_Price_Range_Mutation_Response>;
  /** insert a single row into the table: "rate_price_range" */
  insert_rate_price_range_one?: Maybe<Rate_Price_Range>;
  /** insert data into the table: "rate_type" */
  insert_rate_type?: Maybe<Rate_Type_Mutation_Response>;
  /** insert a single row into the table: "rate_type" */
  insert_rate_type_one?: Maybe<Rate_Type>;
  /** insert data into the table: "role" */
  insert_role?: Maybe<Role_Mutation_Response>;
  /** insert a single row into the table: "role" */
  insert_role_one?: Maybe<Role>;
  /** insert data into the table: "site" */
  insert_site?: Maybe<Site_Mutation_Response>;
  /** insert a single row into the table: "site" */
  insert_site_one?: Maybe<Site>;
  /** insert data into the table: "slug" */
  insert_slug?: Maybe<Slug_Mutation_Response>;
  /** insert a single row into the table: "slug" */
  insert_slug_one?: Maybe<Slug>;
  /** insert data into the table: "supplement" */
  insert_supplement?: Maybe<Supplement_Mutation_Response>;
  /** insert a single row into the table: "supplement" */
  insert_supplement_one?: Maybe<Supplement>;
  /** insert data into the table: "supplement_prices" */
  insert_supplement_prices?: Maybe<Supplement_Prices_Mutation_Response>;
  /** insert a single row into the table: "supplement_prices" */
  insert_supplement_prices_one?: Maybe<Supplement_Prices>;
  /** insert data into the table: "supplement_type" */
  insert_supplement_type?: Maybe<Supplement_Type_Mutation_Response>;
  /** insert a single row into the table: "supplement_type" */
  insert_supplement_type_one?: Maybe<Supplement_Type>;
  /** insert data into the table: "translated_text" */
  insert_translated_text?: Maybe<Translated_Text_Mutation_Response>;
  /** insert a single row into the table: "translated_text" */
  insert_translated_text_one?: Maybe<Translated_Text>;
  /** insert data into the table: "unit_management" */
  insert_unit_management?: Maybe<Unit_Management_Mutation_Response>;
  /** insert a single row into the table: "unit_management" */
  insert_unit_management_one?: Maybe<Unit_Management>;
  /** insert data into the table: "venue" */
  insert_venue?: Maybe<Venue_Mutation_Response>;
  /** insert data into the table: "venue_description" */
  insert_venue_description?: Maybe<Venue_Description_Mutation_Response>;
  /** insert a single row into the table: "venue_description" */
  insert_venue_description_one?: Maybe<Venue_Description>;
  /** insert data into the table: "venue_facility" */
  insert_venue_facility?: Maybe<Venue_Facility_Mutation_Response>;
  /** insert data into the table: "venue_facility_headline" */
  insert_venue_facility_headline?: Maybe<Venue_Facility_Headline_Mutation_Response>;
  /** insert a single row into the table: "venue_facility_headline" */
  insert_venue_facility_headline_one?: Maybe<Venue_Facility_Headline>;
  /** insert data into the table: "venue_facility_name" */
  insert_venue_facility_name?: Maybe<Venue_Facility_Name_Mutation_Response>;
  /** insert a single row into the table: "venue_facility_name" */
  insert_venue_facility_name_one?: Maybe<Venue_Facility_Name>;
  /** insert a single row into the table: "venue_facility" */
  insert_venue_facility_one?: Maybe<Venue_Facility>;
  /** insert data into the table: "venue_good_to_know" */
  insert_venue_good_to_know?: Maybe<Venue_Good_To_Know_Mutation_Response>;
  /** insert a single row into the table: "venue_good_to_know" */
  insert_venue_good_to_know_one?: Maybe<Venue_Good_To_Know>;
  /** insert a single row into the table: "venue" */
  insert_venue_one?: Maybe<Venue>;
  /** insert data into the table: "venue_usps" */
  insert_venue_usps?: Maybe<Venue_Usps_Mutation_Response>;
  /** insert data into the table: "venue_usps_line" */
  insert_venue_usps_line?: Maybe<Venue_Usps_Line_Mutation_Response>;
  /** insert a single row into the table: "venue_usps_line" */
  insert_venue_usps_line_one?: Maybe<Venue_Usps_Line>;
  /** insert a single row into the table: "venue_usps" */
  insert_venue_usps_one?: Maybe<Venue_Usps>;
  my_web_section_save: Scalars['json']['output'];
  organization_booking_questions_save: Scalars['json']['output'];
  organization_branding_save: Scalars['json']['output'];
  organization_create: Scalars['json']['output'];
  organization_settings_save: Scalars['json']['output'];
  product_group_save: Scalars['json']['output'];
  /** product_save */
  product_save: Scalars['json']['output'];
  rate_save: Scalars['json']['output'];
  save_product_features: Scalars['json']['output'];
  supplement_create: Scalars['json']['output'];
  supplement_save: Scalars['json']['output'];
  test: Scalars['json']['output'];
  test_error: Scalars['json']['output'];
  /** update single row of the table: "auth.providers" */
  updateAuthProvider?: Maybe<AuthProviders>;
  /** update single row of the table: "auth.provider_requests" */
  updateAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** update data of the table: "auth.provider_requests" */
  updateAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** update data of the table: "auth.providers" */
  updateAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** update single row of the table: "auth.refresh_tokens" */
  updateAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** update single row of the table: "auth.refresh_token_types" */
  updateAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** update data of the table: "auth.refresh_token_types" */
  updateAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
  /** update data of the table: "auth.refresh_tokens" */
  updateAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** update single row of the table: "auth.roles" */
  updateAuthRole?: Maybe<AuthRoles>;
  /** update data of the table: "auth.roles" */
  updateAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_providers" */
  updateAuthUserProvider?: Maybe<AuthUserProviders>;
  /** update data of the table: "auth.user_providers" */
  updateAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** update single row of the table: "auth.user_roles" */
  updateAuthUserRole?: Maybe<AuthUserRoles>;
  /** update data of the table: "auth.user_roles" */
  updateAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** update data of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** update single row of the table: "storage.buckets" */
  updateBucket?: Maybe<Buckets>;
  /** update data of the table: "storage.buckets" */
  updateBuckets?: Maybe<Buckets_Mutation_Response>;
  /** update single row of the table: "storage.files" */
  updateFile?: Maybe<Files>;
  /** update data of the table: "storage.files" */
  updateFiles?: Maybe<Files_Mutation_Response>;
  /** update single row of the table: "auth.users" */
  updateUser?: Maybe<Users>;
  /** update data of the table: "auth.users" */
  updateUsers?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "storage.virus" */
  updateVirus?: Maybe<Virus>;
  /** update data of the table: "storage.virus" */
  updateViruses?: Maybe<Virus_Mutation_Response>;
  /** update multiples rows of table: "auth.provider_requests" */
  update_authProviderRequests_many?: Maybe<Array<Maybe<AuthProviderRequests_Mutation_Response>>>;
  /** update multiples rows of table: "auth.providers" */
  update_authProviders_many?: Maybe<Array<Maybe<AuthProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.refresh_token_types" */
  update_authRefreshTokenTypes_many?: Maybe<Array<Maybe<AuthRefreshTokenTypes_Mutation_Response>>>;
  /** update multiples rows of table: "auth.refresh_tokens" */
  update_authRefreshTokens_many?: Maybe<Array<Maybe<AuthRefreshTokens_Mutation_Response>>>;
  /** update multiples rows of table: "auth.roles" */
  update_authRoles_many?: Maybe<Array<Maybe<AuthRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_providers" */
  update_authUserProviders_many?: Maybe<Array<Maybe<AuthUserProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_roles" */
  update_authUserRoles_many?: Maybe<Array<Maybe<AuthUserRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_security_keys" */
  update_authUserSecurityKeys_many?: Maybe<Array<Maybe<AuthUserSecurityKeys_Mutation_Response>>>;
  /** update data of the table: "booking" */
  update_booking?: Maybe<Booking_Mutation_Response>;
  /** update single row of the table: "booking" */
  update_booking_by_pk?: Maybe<Booking>;
  /** update data of the table: "booking_events.event_type" */
  update_booking_events_event_type?: Maybe<Booking_Events_Event_Type_Mutation_Response>;
  /** update single row of the table: "booking_events.event_type" */
  update_booking_events_event_type_by_pk?: Maybe<Booking_Events_Event_Type>;
  /** update multiples rows of table: "booking_events.event_type" */
  update_booking_events_event_type_many?: Maybe<Array<Maybe<Booking_Events_Event_Type_Mutation_Response>>>;
  /** update data of the table: "booking_events.main" */
  update_booking_events_main?: Maybe<Booking_Events_Main_Mutation_Response>;
  /** update single row of the table: "booking_events.main" */
  update_booking_events_main_by_pk?: Maybe<Booking_Events_Main>;
  /** update multiples rows of table: "booking_events.main" */
  update_booking_events_main_many?: Maybe<Array<Maybe<Booking_Events_Main_Mutation_Response>>>;
  /** update data of the table: "booking_events.version" */
  update_booking_events_version?: Maybe<Booking_Events_Version_Mutation_Response>;
  /** update single row of the table: "booking_events.version" */
  update_booking_events_version_by_pk?: Maybe<Booking_Events_Version>;
  /** update multiples rows of table: "booking_events.version" */
  update_booking_events_version_many?: Maybe<Array<Maybe<Booking_Events_Version_Mutation_Response>>>;
  /** update data of the table: "booking_history_entry" */
  update_booking_history_entry?: Maybe<Booking_History_Entry_Mutation_Response>;
  /** update single row of the table: "booking_history_entry" */
  update_booking_history_entry_by_pk?: Maybe<Booking_History_Entry>;
  /** update multiples rows of table: "booking_history_entry" */
  update_booking_history_entry_many?: Maybe<Array<Maybe<Booking_History_Entry_Mutation_Response>>>;
  /** update multiples rows of table: "booking" */
  update_booking_many?: Maybe<Array<Maybe<Booking_Mutation_Response>>>;
  /** update data of the table: "booking_product" */
  update_booking_product?: Maybe<Booking_Product_Mutation_Response>;
  /** update single row of the table: "booking_product" */
  update_booking_product_by_pk?: Maybe<Booking_Product>;
  /** update multiples rows of table: "booking_product" */
  update_booking_product_many?: Maybe<Array<Maybe<Booking_Product_Mutation_Response>>>;
  /** update data of the table: "booking_question_scope" */
  update_booking_question_scope?: Maybe<Booking_Question_Scope_Mutation_Response>;
  /** update single row of the table: "booking_question_scope" */
  update_booking_question_scope_by_pk?: Maybe<Booking_Question_Scope>;
  /** update multiples rows of table: "booking_question_scope" */
  update_booking_question_scope_many?: Maybe<Array<Maybe<Booking_Question_Scope_Mutation_Response>>>;
  /** update data of the table: "booking_question_type" */
  update_booking_question_type?: Maybe<Booking_Question_Type_Mutation_Response>;
  /** update single row of the table: "booking_question_type" */
  update_booking_question_type_by_pk?: Maybe<Booking_Question_Type>;
  /** update multiples rows of table: "booking_question_type" */
  update_booking_question_type_many?: Maybe<Array<Maybe<Booking_Question_Type_Mutation_Response>>>;
  /** update data of the table: "booking_state" */
  update_booking_state?: Maybe<Booking_State_Mutation_Response>;
  /** update single row of the table: "booking_state" */
  update_booking_state_by_pk?: Maybe<Booking_State>;
  /** update multiples rows of table: "booking_state" */
  update_booking_state_many?: Maybe<Array<Maybe<Booking_State_Mutation_Response>>>;
  update_booking_version_with_optimistic_lock: Scalars['json']['output'];
  /** update multiples rows of table: "storage.buckets" */
  update_buckets_many?: Maybe<Array<Maybe<Buckets_Mutation_Response>>>;
  /** update data of the table: "category" */
  update_category?: Maybe<Category_Mutation_Response>;
  /** update single row of the table: "category" */
  update_category_by_pk?: Maybe<Category>;
  /** update multiples rows of table: "category" */
  update_category_many?: Maybe<Array<Maybe<Category_Mutation_Response>>>;
  /** update data of the table: "contact" */
  update_contact?: Maybe<Contact_Mutation_Response>;
  /** update single row of the table: "contact" */
  update_contact_by_pk?: Maybe<Contact>;
  /** update multiples rows of table: "contact" */
  update_contact_many?: Maybe<Array<Maybe<Contact_Mutation_Response>>>;
  /** update data of the table: "feature" */
  update_feature?: Maybe<Feature_Mutation_Response>;
  /** update single row of the table: "feature" */
  update_feature_by_pk?: Maybe<Feature>;
  /** update data of the table: "feature_category" */
  update_feature_category?: Maybe<Feature_Category_Mutation_Response>;
  /** update single row of the table: "feature_category" */
  update_feature_category_by_pk?: Maybe<Feature_Category>;
  /** update multiples rows of table: "feature_category" */
  update_feature_category_many?: Maybe<Array<Maybe<Feature_Category_Mutation_Response>>>;
  /** update multiples rows of table: "feature" */
  update_feature_many?: Maybe<Array<Maybe<Feature_Mutation_Response>>>;
  /** update data of the table: "feature_symbol" */
  update_feature_symbol?: Maybe<Feature_Symbol_Mutation_Response>;
  /** update single row of the table: "feature_symbol" */
  update_feature_symbol_by_pk?: Maybe<Feature_Symbol>;
  /** update multiples rows of table: "feature_symbol" */
  update_feature_symbol_many?: Maybe<Array<Maybe<Feature_Symbol_Mutation_Response>>>;
  /** update data of the table: "feature_type" */
  update_feature_type?: Maybe<Feature_Type_Mutation_Response>;
  /** update single row of the table: "feature_type" */
  update_feature_type_by_pk?: Maybe<Feature_Type>;
  /** update multiples rows of table: "feature_type" */
  update_feature_type_many?: Maybe<Array<Maybe<Feature_Type_Mutation_Response>>>;
  /** update multiples rows of table: "storage.files" */
  update_files_many?: Maybe<Array<Maybe<Files_Mutation_Response>>>;
  /** update data of the table: "media_gallery" */
  update_media_gallery?: Maybe<Media_Gallery_Mutation_Response>;
  /** update single row of the table: "media_gallery" */
  update_media_gallery_by_pk?: Maybe<Media_Gallery>;
  /** update data of the table: "media_gallery_item" */
  update_media_gallery_item?: Maybe<Media_Gallery_Item_Mutation_Response>;
  /** update single row of the table: "media_gallery_item" */
  update_media_gallery_item_by_pk?: Maybe<Media_Gallery_Item>;
  /** update multiples rows of table: "media_gallery_item" */
  update_media_gallery_item_many?: Maybe<Array<Maybe<Media_Gallery_Item_Mutation_Response>>>;
  /** update multiples rows of table: "media_gallery" */
  update_media_gallery_many?: Maybe<Array<Maybe<Media_Gallery_Mutation_Response>>>;
  /** update data of the table: "my_web_section" */
  update_my_web_section?: Maybe<My_Web_Section_Mutation_Response>;
  /** update single row of the table: "my_web_section" */
  update_my_web_section_by_pk?: Maybe<My_Web_Section>;
  /** update multiples rows of table: "my_web_section" */
  update_my_web_section_many?: Maybe<Array<Maybe<My_Web_Section_Mutation_Response>>>;
  /** update data of the table: "organization" */
  update_organization?: Maybe<Organization_Mutation_Response>;
  /** update data of the table: "organization_booking_question" */
  update_organization_booking_question?: Maybe<Organization_Booking_Question_Mutation_Response>;
  /** update single row of the table: "organization_booking_question" */
  update_organization_booking_question_by_pk?: Maybe<Organization_Booking_Question>;
  /** update multiples rows of table: "organization_booking_question" */
  update_organization_booking_question_many?: Maybe<Array<Maybe<Organization_Booking_Question_Mutation_Response>>>;
  /** update data of the table: "organization_branding" */
  update_organization_branding?: Maybe<Organization_Branding_Mutation_Response>;
  /** update single row of the table: "organization_branding" */
  update_organization_branding_by_pk?: Maybe<Organization_Branding>;
  /** update multiples rows of table: "organization_branding" */
  update_organization_branding_many?: Maybe<Array<Maybe<Organization_Branding_Mutation_Response>>>;
  /** update data of the table: "organization_branding_meta_description" */
  update_organization_branding_meta_description?: Maybe<Organization_Branding_Meta_Description_Mutation_Response>;
  /** update single row of the table: "organization_branding_meta_description" */
  update_organization_branding_meta_description_by_pk?: Maybe<Organization_Branding_Meta_Description>;
  /** update multiples rows of table: "organization_branding_meta_description" */
  update_organization_branding_meta_description_many?: Maybe<Array<Maybe<Organization_Branding_Meta_Description_Mutation_Response>>>;
  /** update data of the table: "organization_branding_meta_title" */
  update_organization_branding_meta_title?: Maybe<Organization_Branding_Meta_Title_Mutation_Response>;
  /** update single row of the table: "organization_branding_meta_title" */
  update_organization_branding_meta_title_by_pk?: Maybe<Organization_Branding_Meta_Title>;
  /** update multiples rows of table: "organization_branding_meta_title" */
  update_organization_branding_meta_title_many?: Maybe<Array<Maybe<Organization_Branding_Meta_Title_Mutation_Response>>>;
  /** update data of the table: "organization_business_model" */
  update_organization_business_model?: Maybe<Organization_Business_Model_Mutation_Response>;
  /** update single row of the table: "organization_business_model" */
  update_organization_business_model_by_pk?: Maybe<Organization_Business_Model>;
  /** update multiples rows of table: "organization_business_model" */
  update_organization_business_model_many?: Maybe<Array<Maybe<Organization_Business_Model_Mutation_Response>>>;
  /** update single row of the table: "organization" */
  update_organization_by_pk?: Maybe<Organization>;
  /** update data of the table: "organization_headline" */
  update_organization_headline?: Maybe<Organization_Headline_Mutation_Response>;
  /** update single row of the table: "organization_headline" */
  update_organization_headline_by_pk?: Maybe<Organization_Headline>;
  /** update multiples rows of table: "organization_headline" */
  update_organization_headline_many?: Maybe<Array<Maybe<Organization_Headline_Mutation_Response>>>;
  /** update multiples rows of table: "organization" */
  update_organization_many?: Maybe<Array<Maybe<Organization_Mutation_Response>>>;
  /** update data of the table: "organization_member" */
  update_organization_member?: Maybe<Organization_Member_Mutation_Response>;
  /** update single row of the table: "organization_member" */
  update_organization_member_by_pk?: Maybe<Organization_Member>;
  /** update multiples rows of table: "organization_member" */
  update_organization_member_many?: Maybe<Array<Maybe<Organization_Member_Mutation_Response>>>;
  /** update data of the table: "organization_socials" */
  update_organization_socials?: Maybe<Organization_Socials_Mutation_Response>;
  /** update single row of the table: "organization_socials" */
  update_organization_socials_by_pk?: Maybe<Organization_Socials>;
  /** update multiples rows of table: "organization_socials" */
  update_organization_socials_many?: Maybe<Array<Maybe<Organization_Socials_Mutation_Response>>>;
  /** update data of the table: "place" */
  update_place?: Maybe<Place_Mutation_Response>;
  /** update single row of the table: "place" */
  update_place_by_pk?: Maybe<Place>;
  /** update multiples rows of table: "place" */
  update_place_many?: Maybe<Array<Maybe<Place_Mutation_Response>>>;
  /** update data of the table: "product" */
  update_product?: Maybe<Product_Mutation_Response>;
  /** update data of the table: "product_allotment_range" */
  update_product_allotment_range?: Maybe<Product_Allotment_Range_Mutation_Response>;
  /** update single row of the table: "product_allotment_range" */
  update_product_allotment_range_by_pk?: Maybe<Product_Allotment_Range>;
  /** update multiples rows of table: "product_allotment_range" */
  update_product_allotment_range_many?: Maybe<Array<Maybe<Product_Allotment_Range_Mutation_Response>>>;
  /** update data of the table: "product_business_model" */
  update_product_business_model?: Maybe<Product_Business_Model_Mutation_Response>;
  /** update single row of the table: "product_business_model" */
  update_product_business_model_by_pk?: Maybe<Product_Business_Model>;
  /** update multiples rows of table: "product_business_model" */
  update_product_business_model_many?: Maybe<Array<Maybe<Product_Business_Model_Mutation_Response>>>;
  /** update single row of the table: "product" */
  update_product_by_pk?: Maybe<Product>;
  /** update data of the table: "product_description" */
  update_product_description?: Maybe<Product_Description_Mutation_Response>;
  /** update single row of the table: "product_description" */
  update_product_description_by_pk?: Maybe<Product_Description>;
  /** update multiples rows of table: "product_description" */
  update_product_description_many?: Maybe<Array<Maybe<Product_Description_Mutation_Response>>>;
  /** update data of the table: "product_feature" */
  update_product_feature?: Maybe<Product_Feature_Mutation_Response>;
  /** update single row of the table: "product_feature" */
  update_product_feature_by_pk?: Maybe<Product_Feature>;
  /** update multiples rows of table: "product_feature" */
  update_product_feature_many?: Maybe<Array<Maybe<Product_Feature_Mutation_Response>>>;
  /** update data of the table: "product_group" */
  update_product_group?: Maybe<Product_Group_Mutation_Response>;
  /** update single row of the table: "product_group" */
  update_product_group_by_pk?: Maybe<Product_Group>;
  /** update multiples rows of table: "product_group" */
  update_product_group_many?: Maybe<Array<Maybe<Product_Group_Mutation_Response>>>;
  /** update data of the table: "product_group_product" */
  update_product_group_product?: Maybe<Product_Group_Product_Mutation_Response>;
  /** update single row of the table: "product_group_product" */
  update_product_group_product_by_pk?: Maybe<Product_Group_Product>;
  /** update multiples rows of table: "product_group_product" */
  update_product_group_product_many?: Maybe<Array<Maybe<Product_Group_Product_Mutation_Response>>>;
  /** update data of the table: "product_headline" */
  update_product_headline?: Maybe<Product_Headline_Mutation_Response>;
  /** update single row of the table: "product_headline" */
  update_product_headline_by_pk?: Maybe<Product_Headline>;
  /** update multiples rows of table: "product_headline" */
  update_product_headline_many?: Maybe<Array<Maybe<Product_Headline_Mutation_Response>>>;
  /** update multiples rows of table: "product" */
  update_product_many?: Maybe<Array<Maybe<Product_Mutation_Response>>>;
  /** update data of the table: "product_name" */
  update_product_name?: Maybe<Product_Name_Mutation_Response>;
  /** update single row of the table: "product_name" */
  update_product_name_by_pk?: Maybe<Product_Name>;
  /** update multiples rows of table: "product_name" */
  update_product_name_many?: Maybe<Array<Maybe<Product_Name_Mutation_Response>>>;
  /** update data of the table: "product_supplement" */
  update_product_supplement?: Maybe<Product_Supplement_Mutation_Response>;
  /** update single row of the table: "product_supplement" */
  update_product_supplement_by_pk?: Maybe<Product_Supplement>;
  /** update multiples rows of table: "product_supplement" */
  update_product_supplement_many?: Maybe<Array<Maybe<Product_Supplement_Mutation_Response>>>;
  /** update data of the table: "rate" */
  update_rate?: Maybe<Rate_Mutation_Response>;
  /** update single row of the table: "rate" */
  update_rate_by_pk?: Maybe<Rate>;
  /** update data of the table: "rate_headline" */
  update_rate_headline?: Maybe<Rate_Headline_Mutation_Response>;
  /** update single row of the table: "rate_headline" */
  update_rate_headline_by_pk?: Maybe<Rate_Headline>;
  /** update multiples rows of table: "rate_headline" */
  update_rate_headline_many?: Maybe<Array<Maybe<Rate_Headline_Mutation_Response>>>;
  /** update multiples rows of table: "rate" */
  update_rate_many?: Maybe<Array<Maybe<Rate_Mutation_Response>>>;
  /** update data of the table: "rate_name" */
  update_rate_name?: Maybe<Rate_Name_Mutation_Response>;
  /** update single row of the table: "rate_name" */
  update_rate_name_by_pk?: Maybe<Rate_Name>;
  /** update multiples rows of table: "rate_name" */
  update_rate_name_many?: Maybe<Array<Maybe<Rate_Name_Mutation_Response>>>;
  /** update data of the table: "rate_price_range" */
  update_rate_price_range?: Maybe<Rate_Price_Range_Mutation_Response>;
  /** update single row of the table: "rate_price_range" */
  update_rate_price_range_by_pk?: Maybe<Rate_Price_Range>;
  /** update multiples rows of table: "rate_price_range" */
  update_rate_price_range_many?: Maybe<Array<Maybe<Rate_Price_Range_Mutation_Response>>>;
  /** update data of the table: "rate_type" */
  update_rate_type?: Maybe<Rate_Type_Mutation_Response>;
  /** update single row of the table: "rate_type" */
  update_rate_type_by_pk?: Maybe<Rate_Type>;
  /** update multiples rows of table: "rate_type" */
  update_rate_type_many?: Maybe<Array<Maybe<Rate_Type_Mutation_Response>>>;
  /** update data of the table: "role" */
  update_role?: Maybe<Role_Mutation_Response>;
  /** update single row of the table: "role" */
  update_role_by_pk?: Maybe<Role>;
  /** update multiples rows of table: "role" */
  update_role_many?: Maybe<Array<Maybe<Role_Mutation_Response>>>;
  /** update data of the table: "site" */
  update_site?: Maybe<Site_Mutation_Response>;
  /** update single row of the table: "site" */
  update_site_by_pk?: Maybe<Site>;
  /** update multiples rows of table: "site" */
  update_site_many?: Maybe<Array<Maybe<Site_Mutation_Response>>>;
  /** update data of the table: "slug" */
  update_slug?: Maybe<Slug_Mutation_Response>;
  /** update single row of the table: "slug" */
  update_slug_by_pk?: Maybe<Slug>;
  /** update multiples rows of table: "slug" */
  update_slug_many?: Maybe<Array<Maybe<Slug_Mutation_Response>>>;
  /** update data of the table: "supplement" */
  update_supplement?: Maybe<Supplement_Mutation_Response>;
  /** update single row of the table: "supplement" */
  update_supplement_by_pk?: Maybe<Supplement>;
  /** update multiples rows of table: "supplement" */
  update_supplement_many?: Maybe<Array<Maybe<Supplement_Mutation_Response>>>;
  /** update data of the table: "supplement_prices" */
  update_supplement_prices?: Maybe<Supplement_Prices_Mutation_Response>;
  /** update multiples rows of table: "supplement_prices" */
  update_supplement_prices_many?: Maybe<Array<Maybe<Supplement_Prices_Mutation_Response>>>;
  /** update data of the table: "supplement_type" */
  update_supplement_type?: Maybe<Supplement_Type_Mutation_Response>;
  /** update single row of the table: "supplement_type" */
  update_supplement_type_by_pk?: Maybe<Supplement_Type>;
  /** update multiples rows of table: "supplement_type" */
  update_supplement_type_many?: Maybe<Array<Maybe<Supplement_Type_Mutation_Response>>>;
  /** update data of the table: "translated_text" */
  update_translated_text?: Maybe<Translated_Text_Mutation_Response>;
  /** update single row of the table: "translated_text" */
  update_translated_text_by_pk?: Maybe<Translated_Text>;
  /** update multiples rows of table: "translated_text" */
  update_translated_text_many?: Maybe<Array<Maybe<Translated_Text_Mutation_Response>>>;
  /** update data of the table: "unit_management" */
  update_unit_management?: Maybe<Unit_Management_Mutation_Response>;
  /** update single row of the table: "unit_management" */
  update_unit_management_by_pk?: Maybe<Unit_Management>;
  /** update multiples rows of table: "unit_management" */
  update_unit_management_many?: Maybe<Array<Maybe<Unit_Management_Mutation_Response>>>;
  /** update multiples rows of table: "auth.users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "venue" */
  update_venue?: Maybe<Venue_Mutation_Response>;
  /** update single row of the table: "venue" */
  update_venue_by_pk?: Maybe<Venue>;
  /** update data of the table: "venue_description" */
  update_venue_description?: Maybe<Venue_Description_Mutation_Response>;
  /** update single row of the table: "venue_description" */
  update_venue_description_by_pk?: Maybe<Venue_Description>;
  /** update multiples rows of table: "venue_description" */
  update_venue_description_many?: Maybe<Array<Maybe<Venue_Description_Mutation_Response>>>;
  /** update data of the table: "venue_facility" */
  update_venue_facility?: Maybe<Venue_Facility_Mutation_Response>;
  /** update single row of the table: "venue_facility" */
  update_venue_facility_by_pk?: Maybe<Venue_Facility>;
  /** update data of the table: "venue_facility_headline" */
  update_venue_facility_headline?: Maybe<Venue_Facility_Headline_Mutation_Response>;
  /** update single row of the table: "venue_facility_headline" */
  update_venue_facility_headline_by_pk?: Maybe<Venue_Facility_Headline>;
  /** update multiples rows of table: "venue_facility_headline" */
  update_venue_facility_headline_many?: Maybe<Array<Maybe<Venue_Facility_Headline_Mutation_Response>>>;
  /** update multiples rows of table: "venue_facility" */
  update_venue_facility_many?: Maybe<Array<Maybe<Venue_Facility_Mutation_Response>>>;
  /** update data of the table: "venue_facility_name" */
  update_venue_facility_name?: Maybe<Venue_Facility_Name_Mutation_Response>;
  /** update single row of the table: "venue_facility_name" */
  update_venue_facility_name_by_pk?: Maybe<Venue_Facility_Name>;
  /** update multiples rows of table: "venue_facility_name" */
  update_venue_facility_name_many?: Maybe<Array<Maybe<Venue_Facility_Name_Mutation_Response>>>;
  /** update data of the table: "venue_good_to_know" */
  update_venue_good_to_know?: Maybe<Venue_Good_To_Know_Mutation_Response>;
  /** update single row of the table: "venue_good_to_know" */
  update_venue_good_to_know_by_pk?: Maybe<Venue_Good_To_Know>;
  /** update multiples rows of table: "venue_good_to_know" */
  update_venue_good_to_know_many?: Maybe<Array<Maybe<Venue_Good_To_Know_Mutation_Response>>>;
  /** update multiples rows of table: "venue" */
  update_venue_many?: Maybe<Array<Maybe<Venue_Mutation_Response>>>;
  /** update data of the table: "venue_usps" */
  update_venue_usps?: Maybe<Venue_Usps_Mutation_Response>;
  /** update single row of the table: "venue_usps" */
  update_venue_usps_by_pk?: Maybe<Venue_Usps>;
  /** update data of the table: "venue_usps_line" */
  update_venue_usps_line?: Maybe<Venue_Usps_Line_Mutation_Response>;
  /** update single row of the table: "venue_usps_line" */
  update_venue_usps_line_by_pk?: Maybe<Venue_Usps_Line>;
  /** update multiples rows of table: "venue_usps_line" */
  update_venue_usps_line_many?: Maybe<Array<Maybe<Venue_Usps_Line_Mutation_Response>>>;
  /** update multiples rows of table: "venue_usps" */
  update_venue_usps_many?: Maybe<Array<Maybe<Venue_Usps_Mutation_Response>>>;
  /** update multiples rows of table: "storage.virus" */
  update_virus_many?: Maybe<Array<Maybe<Virus_Mutation_Response>>>;
  venue_facilities_save: Scalars['json']['output'];
  venue_gallery_save: Scalars['json']['output'];
  venue_main_save: Scalars['json']['output'];
  venue_usps_save: Scalars['json']['output'];
};


/** mutation root */
export type Mutation_RootActivate_Organization_FeaturesArgs = {
  arg: Activate_Organization_Features_Input;
};


/** mutation root */
export type Mutation_RootBooking_AcceptArgs = {
  arg: Booking_Accept_Input;
};


/** mutation root */
export type Mutation_RootBooking_Add_NoteArgs = {
  arg: Booking_Add_Note_Input;
};


/** mutation root */
export type Mutation_RootBooking_CancelArgs = {
  arg: Booking_Cancel_Input;
};


/** mutation root */
export type Mutation_RootBooking_CreateArgs = {
  arg: Booking_Create_Input;
};


/** mutation root */
export type Mutation_RootBooking_RejectArgs = {
  arg: Booking_Reject_Input;
};


/** mutation root */
export type Mutation_RootCleanupArgs = {
  arg?: InputMaybe<Cleanup_Input>;
};


/** mutation root */
export type Mutation_RootContactArgs = {
  arg: Contact_Input;
};


/** mutation root */
export type Mutation_RootCreate_ProductArgs = {
  arg: Product_Create_Input;
};


/** mutation root */
export type Mutation_RootCreate_RateArgs = {
  arg: Rate_Create_Input;
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestsArgs = {
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthProvidersArgs = {
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenTypeArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenTypesArgs = {
  where: AuthRefreshTokenTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokensArgs = {
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRoleArgs = {
  role: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRolesArgs = {
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProviderArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProvidersArgs = {
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRoleArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRolesArgs = {
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeyArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeysArgs = {
  where: AuthUserSecurityKeys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteBucketArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteBucketsArgs = {
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteFileArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteFilesArgs = {
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteVirusArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteVirusesArgs = {
  where: Virus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_BookingArgs = {
  where: Booking_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Booking_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Booking_Events_Event_TypeArgs = {
  where: Booking_Events_Event_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Booking_Events_Event_Type_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Booking_Events_MainArgs = {
  where: Booking_Events_Main_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Booking_Events_Main_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Booking_Events_VersionArgs = {
  where: Booking_Events_Version_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Booking_Events_Version_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Booking_History_EntryArgs = {
  where: Booking_History_Entry_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Booking_History_Entry_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Booking_ProductArgs = {
  where: Booking_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Booking_Product_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Booking_Question_ScopeArgs = {
  where: Booking_Question_Scope_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Booking_Question_Scope_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Booking_Question_TypeArgs = {
  where: Booking_Question_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Booking_Question_Type_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Booking_StateArgs = {
  where: Booking_State_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Booking_State_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CategoryArgs = {
  where: Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Category_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ContactArgs = {
  where: Contact_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Contact_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_FeatureArgs = {
  where: Feature_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Feature_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Feature_CategoryArgs = {
  where: Feature_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Feature_Category_By_PkArgs = {
  category_id: Scalars['String']['input'];
  feature_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Feature_SymbolArgs = {
  where: Feature_Symbol_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Feature_Symbol_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Feature_TypeArgs = {
  where: Feature_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Feature_Type_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Media_GalleryArgs = {
  where: Media_Gallery_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Media_Gallery_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Media_Gallery_ItemArgs = {
  where: Media_Gallery_Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Media_Gallery_Item_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_My_Web_SectionArgs = {
  where: My_Web_Section_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_My_Web_Section_By_PkArgs = {
  organization_id: Scalars['uuid']['input'];
  section_id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_OrganizationArgs = {
  where: Organization_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organization_Booking_QuestionArgs = {
  where: Organization_Booking_Question_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organization_Booking_Question_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Organization_BrandingArgs = {
  where: Organization_Branding_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organization_Branding_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Organization_Branding_Meta_DescriptionArgs = {
  where: Organization_Branding_Meta_Description_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organization_Branding_Meta_Description_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Organization_Branding_Meta_TitleArgs = {
  where: Organization_Branding_Meta_Title_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organization_Branding_Meta_Title_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Organization_Business_ModelArgs = {
  where: Organization_Business_Model_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organization_Business_Model_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Organization_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Organization_HeadlineArgs = {
  where: Organization_Headline_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organization_Headline_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Organization_MemberArgs = {
  where: Organization_Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organization_Member_By_PkArgs = {
  organization_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Organization_SocialsArgs = {
  where: Organization_Socials_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organization_Socials_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PlaceArgs = {
  where: Place_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Place_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ProductArgs = {
  where: Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Allotment_RangeArgs = {
  where: Product_Allotment_Range_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Allotment_Range_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Product_Business_ModelArgs = {
  where: Product_Business_Model_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Business_Model_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Product_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Product_DescriptionArgs = {
  where: Product_Description_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Description_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Product_FeatureArgs = {
  where: Product_Feature_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Feature_By_PkArgs = {
  feature_id: Scalars['uuid']['input'];
  product_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Product_GroupArgs = {
  where: Product_Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Group_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Product_Group_ProductArgs = {
  where: Product_Group_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Group_Product_By_PkArgs = {
  group_id: Scalars['uuid']['input'];
  product_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Product_HeadlineArgs = {
  where: Product_Headline_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Headline_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Product_NameArgs = {
  where: Product_Name_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Name_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Product_SupplementArgs = {
  where: Product_Supplement_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Supplement_By_PkArgs = {
  product_id: Scalars['uuid']['input'];
  supplement_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_RateArgs = {
  where: Rate_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rate_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Rate_HeadlineArgs = {
  where: Rate_Headline_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rate_Headline_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Rate_NameArgs = {
  where: Rate_Name_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rate_Name_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Rate_Price_RangeArgs = {
  where: Rate_Price_Range_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rate_Price_Range_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Rate_TypeArgs = {
  where: Rate_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rate_Type_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_RoleArgs = {
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Role_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SiteArgs = {
  where: Site_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Site_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SlugArgs = {
  where: Slug_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Slug_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SupplementArgs = {
  where: Supplement_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Supplement_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Supplement_PricesArgs = {
  where: Supplement_Prices_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Supplement_TypeArgs = {
  where: Supplement_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Supplement_Type_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Translated_TextArgs = {
  where: Translated_Text_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Translated_Text_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Unit_ManagementArgs = {
  where: Unit_Management_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Unit_Management_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_VenueArgs = {
  where: Venue_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Venue_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Venue_DescriptionArgs = {
  where: Venue_Description_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Venue_Description_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Venue_FacilityArgs = {
  where: Venue_Facility_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Venue_Facility_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Venue_Facility_HeadlineArgs = {
  where: Venue_Facility_Headline_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Venue_Facility_Headline_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Venue_Facility_NameArgs = {
  where: Venue_Facility_Name_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Venue_Facility_Name_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Venue_Good_To_KnowArgs = {
  where: Venue_Good_To_Know_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Venue_Good_To_Know_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Venue_UspsArgs = {
  where: Venue_Usps_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Venue_Usps_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Venue_Usps_LineArgs = {
  where: Venue_Usps_Line_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Venue_Usps_Line_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsertAuthProviderArgs = {
  object: AuthProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestArgs = {
  object: AuthProviderRequests_Insert_Input;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestsArgs = {
  objects: Array<AuthProviderRequests_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProvidersArgs = {
  objects: Array<AuthProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenArgs = {
  object: AuthRefreshTokens_Insert_Input;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenTypeArgs = {
  object: AuthRefreshTokenTypes_Insert_Input;
  on_conflict?: InputMaybe<AuthRefreshTokenTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenTypesArgs = {
  objects: Array<AuthRefreshTokenTypes_Insert_Input>;
  on_conflict?: InputMaybe<AuthRefreshTokenTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokensArgs = {
  objects: Array<AuthRefreshTokens_Insert_Input>;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRoleArgs = {
  object: AuthRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRolesArgs = {
  objects: Array<AuthRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProviderArgs = {
  object: AuthUserProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProvidersArgs = {
  objects: Array<AuthUserProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRoleArgs = {
  object: AuthUserRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRolesArgs = {
  objects: Array<AuthUserRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeyArgs = {
  object: AuthUserSecurityKeys_Insert_Input;
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeysArgs = {
  objects: Array<AuthUserSecurityKeys_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketArgs = {
  object: Buckets_Insert_Input;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketsArgs = {
  objects: Array<Buckets_Insert_Input>;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFileArgs = {
  object: Files_Insert_Input;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFilesArgs = {
  objects: Array<Files_Insert_Input>;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUserArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertVirusArgs = {
  object: Virus_Insert_Input;
  on_conflict?: InputMaybe<Virus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertVirusesArgs = {
  objects: Array<Virus_Insert_Input>;
  on_conflict?: InputMaybe<Virus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BookingArgs = {
  objects: Array<Booking_Insert_Input>;
  on_conflict?: InputMaybe<Booking_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Booking_Events_Event_TypeArgs = {
  objects: Array<Booking_Events_Event_Type_Insert_Input>;
  on_conflict?: InputMaybe<Booking_Events_Event_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Booking_Events_Event_Type_OneArgs = {
  object: Booking_Events_Event_Type_Insert_Input;
  on_conflict?: InputMaybe<Booking_Events_Event_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Booking_Events_MainArgs = {
  objects: Array<Booking_Events_Main_Insert_Input>;
  on_conflict?: InputMaybe<Booking_Events_Main_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Booking_Events_Main_OneArgs = {
  object: Booking_Events_Main_Insert_Input;
  on_conflict?: InputMaybe<Booking_Events_Main_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Booking_Events_VersionArgs = {
  objects: Array<Booking_Events_Version_Insert_Input>;
  on_conflict?: InputMaybe<Booking_Events_Version_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Booking_Events_Version_OneArgs = {
  object: Booking_Events_Version_Insert_Input;
  on_conflict?: InputMaybe<Booking_Events_Version_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Booking_History_EntryArgs = {
  objects: Array<Booking_History_Entry_Insert_Input>;
  on_conflict?: InputMaybe<Booking_History_Entry_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Booking_History_Entry_OneArgs = {
  object: Booking_History_Entry_Insert_Input;
  on_conflict?: InputMaybe<Booking_History_Entry_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Booking_OneArgs = {
  object: Booking_Insert_Input;
  on_conflict?: InputMaybe<Booking_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Booking_ProductArgs = {
  objects: Array<Booking_Product_Insert_Input>;
  on_conflict?: InputMaybe<Booking_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Booking_Product_OneArgs = {
  object: Booking_Product_Insert_Input;
  on_conflict?: InputMaybe<Booking_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Booking_Question_ScopeArgs = {
  objects: Array<Booking_Question_Scope_Insert_Input>;
  on_conflict?: InputMaybe<Booking_Question_Scope_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Booking_Question_Scope_OneArgs = {
  object: Booking_Question_Scope_Insert_Input;
  on_conflict?: InputMaybe<Booking_Question_Scope_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Booking_Question_TypeArgs = {
  objects: Array<Booking_Question_Type_Insert_Input>;
  on_conflict?: InputMaybe<Booking_Question_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Booking_Question_Type_OneArgs = {
  object: Booking_Question_Type_Insert_Input;
  on_conflict?: InputMaybe<Booking_Question_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Booking_StateArgs = {
  objects: Array<Booking_State_Insert_Input>;
  on_conflict?: InputMaybe<Booking_State_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Booking_State_OneArgs = {
  object: Booking_State_Insert_Input;
  on_conflict?: InputMaybe<Booking_State_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CategoryArgs = {
  objects: Array<Category_Insert_Input>;
  on_conflict?: InputMaybe<Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Category_OneArgs = {
  object: Category_Insert_Input;
  on_conflict?: InputMaybe<Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ContactArgs = {
  objects: Array<Contact_Insert_Input>;
  on_conflict?: InputMaybe<Contact_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contact_OneArgs = {
  object: Contact_Insert_Input;
  on_conflict?: InputMaybe<Contact_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FeatureArgs = {
  objects: Array<Feature_Insert_Input>;
  on_conflict?: InputMaybe<Feature_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Feature_CategoryArgs = {
  objects: Array<Feature_Category_Insert_Input>;
  on_conflict?: InputMaybe<Feature_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Feature_Category_OneArgs = {
  object: Feature_Category_Insert_Input;
  on_conflict?: InputMaybe<Feature_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Feature_OneArgs = {
  object: Feature_Insert_Input;
  on_conflict?: InputMaybe<Feature_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Feature_SymbolArgs = {
  objects: Array<Feature_Symbol_Insert_Input>;
  on_conflict?: InputMaybe<Feature_Symbol_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Feature_Symbol_OneArgs = {
  object: Feature_Symbol_Insert_Input;
  on_conflict?: InputMaybe<Feature_Symbol_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Feature_TypeArgs = {
  objects: Array<Feature_Type_Insert_Input>;
  on_conflict?: InputMaybe<Feature_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Feature_Type_OneArgs = {
  object: Feature_Type_Insert_Input;
  on_conflict?: InputMaybe<Feature_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Media_GalleryArgs = {
  objects: Array<Media_Gallery_Insert_Input>;
  on_conflict?: InputMaybe<Media_Gallery_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Media_Gallery_ItemArgs = {
  objects: Array<Media_Gallery_Item_Insert_Input>;
  on_conflict?: InputMaybe<Media_Gallery_Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Media_Gallery_Item_OneArgs = {
  object: Media_Gallery_Item_Insert_Input;
  on_conflict?: InputMaybe<Media_Gallery_Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Media_Gallery_OneArgs = {
  object: Media_Gallery_Insert_Input;
  on_conflict?: InputMaybe<Media_Gallery_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_My_Web_SectionArgs = {
  objects: Array<My_Web_Section_Insert_Input>;
  on_conflict?: InputMaybe<My_Web_Section_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_My_Web_Section_OneArgs = {
  object: My_Web_Section_Insert_Input;
  on_conflict?: InputMaybe<My_Web_Section_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrganizationArgs = {
  objects: Array<Organization_Insert_Input>;
  on_conflict?: InputMaybe<Organization_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_Booking_QuestionArgs = {
  objects: Array<Organization_Booking_Question_Insert_Input>;
  on_conflict?: InputMaybe<Organization_Booking_Question_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_Booking_Question_OneArgs = {
  object: Organization_Booking_Question_Insert_Input;
  on_conflict?: InputMaybe<Organization_Booking_Question_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_BrandingArgs = {
  objects: Array<Organization_Branding_Insert_Input>;
  on_conflict?: InputMaybe<Organization_Branding_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_Branding_Meta_DescriptionArgs = {
  objects: Array<Organization_Branding_Meta_Description_Insert_Input>;
  on_conflict?: InputMaybe<Organization_Branding_Meta_Description_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_Branding_Meta_Description_OneArgs = {
  object: Organization_Branding_Meta_Description_Insert_Input;
  on_conflict?: InputMaybe<Organization_Branding_Meta_Description_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_Branding_Meta_TitleArgs = {
  objects: Array<Organization_Branding_Meta_Title_Insert_Input>;
  on_conflict?: InputMaybe<Organization_Branding_Meta_Title_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_Branding_Meta_Title_OneArgs = {
  object: Organization_Branding_Meta_Title_Insert_Input;
  on_conflict?: InputMaybe<Organization_Branding_Meta_Title_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_Branding_OneArgs = {
  object: Organization_Branding_Insert_Input;
  on_conflict?: InputMaybe<Organization_Branding_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_Business_ModelArgs = {
  objects: Array<Organization_Business_Model_Insert_Input>;
  on_conflict?: InputMaybe<Organization_Business_Model_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_Business_Model_OneArgs = {
  object: Organization_Business_Model_Insert_Input;
  on_conflict?: InputMaybe<Organization_Business_Model_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_HeadlineArgs = {
  objects: Array<Organization_Headline_Insert_Input>;
  on_conflict?: InputMaybe<Organization_Headline_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_Headline_OneArgs = {
  object: Organization_Headline_Insert_Input;
  on_conflict?: InputMaybe<Organization_Headline_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_MemberArgs = {
  objects: Array<Organization_Member_Insert_Input>;
  on_conflict?: InputMaybe<Organization_Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_Member_OneArgs = {
  object: Organization_Member_Insert_Input;
  on_conflict?: InputMaybe<Organization_Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_OneArgs = {
  object: Organization_Insert_Input;
  on_conflict?: InputMaybe<Organization_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_SocialsArgs = {
  objects: Array<Organization_Socials_Insert_Input>;
  on_conflict?: InputMaybe<Organization_Socials_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_Socials_OneArgs = {
  object: Organization_Socials_Insert_Input;
  on_conflict?: InputMaybe<Organization_Socials_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PlaceArgs = {
  objects: Array<Place_Insert_Input>;
  on_conflict?: InputMaybe<Place_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Place_OneArgs = {
  object: Place_Insert_Input;
  on_conflict?: InputMaybe<Place_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProductArgs = {
  objects: Array<Product_Insert_Input>;
  on_conflict?: InputMaybe<Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Allotment_RangeArgs = {
  objects: Array<Product_Allotment_Range_Insert_Input>;
  on_conflict?: InputMaybe<Product_Allotment_Range_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Allotment_Range_OneArgs = {
  object: Product_Allotment_Range_Insert_Input;
  on_conflict?: InputMaybe<Product_Allotment_Range_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Business_ModelArgs = {
  objects: Array<Product_Business_Model_Insert_Input>;
  on_conflict?: InputMaybe<Product_Business_Model_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Business_Model_OneArgs = {
  object: Product_Business_Model_Insert_Input;
  on_conflict?: InputMaybe<Product_Business_Model_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_DescriptionArgs = {
  objects: Array<Product_Description_Insert_Input>;
  on_conflict?: InputMaybe<Product_Description_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Description_OneArgs = {
  object: Product_Description_Insert_Input;
  on_conflict?: InputMaybe<Product_Description_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_FeatureArgs = {
  objects: Array<Product_Feature_Insert_Input>;
  on_conflict?: InputMaybe<Product_Feature_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Feature_OneArgs = {
  object: Product_Feature_Insert_Input;
  on_conflict?: InputMaybe<Product_Feature_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_GroupArgs = {
  objects: Array<Product_Group_Insert_Input>;
  on_conflict?: InputMaybe<Product_Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Group_OneArgs = {
  object: Product_Group_Insert_Input;
  on_conflict?: InputMaybe<Product_Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Group_ProductArgs = {
  objects: Array<Product_Group_Product_Insert_Input>;
  on_conflict?: InputMaybe<Product_Group_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Group_Product_OneArgs = {
  object: Product_Group_Product_Insert_Input;
  on_conflict?: InputMaybe<Product_Group_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_HeadlineArgs = {
  objects: Array<Product_Headline_Insert_Input>;
  on_conflict?: InputMaybe<Product_Headline_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Headline_OneArgs = {
  object: Product_Headline_Insert_Input;
  on_conflict?: InputMaybe<Product_Headline_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_NameArgs = {
  objects: Array<Product_Name_Insert_Input>;
  on_conflict?: InputMaybe<Product_Name_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Name_OneArgs = {
  object: Product_Name_Insert_Input;
  on_conflict?: InputMaybe<Product_Name_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_OneArgs = {
  object: Product_Insert_Input;
  on_conflict?: InputMaybe<Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_SupplementArgs = {
  objects: Array<Product_Supplement_Insert_Input>;
  on_conflict?: InputMaybe<Product_Supplement_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Supplement_OneArgs = {
  object: Product_Supplement_Insert_Input;
  on_conflict?: InputMaybe<Product_Supplement_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RateArgs = {
  objects: Array<Rate_Insert_Input>;
  on_conflict?: InputMaybe<Rate_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rate_HeadlineArgs = {
  objects: Array<Rate_Headline_Insert_Input>;
  on_conflict?: InputMaybe<Rate_Headline_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rate_Headline_OneArgs = {
  object: Rate_Headline_Insert_Input;
  on_conflict?: InputMaybe<Rate_Headline_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rate_NameArgs = {
  objects: Array<Rate_Name_Insert_Input>;
  on_conflict?: InputMaybe<Rate_Name_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rate_Name_OneArgs = {
  object: Rate_Name_Insert_Input;
  on_conflict?: InputMaybe<Rate_Name_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rate_OneArgs = {
  object: Rate_Insert_Input;
  on_conflict?: InputMaybe<Rate_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rate_Price_RangeArgs = {
  objects: Array<Rate_Price_Range_Insert_Input>;
  on_conflict?: InputMaybe<Rate_Price_Range_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rate_Price_Range_OneArgs = {
  object: Rate_Price_Range_Insert_Input;
  on_conflict?: InputMaybe<Rate_Price_Range_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rate_TypeArgs = {
  objects: Array<Rate_Type_Insert_Input>;
  on_conflict?: InputMaybe<Rate_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rate_Type_OneArgs = {
  object: Rate_Type_Insert_Input;
  on_conflict?: InputMaybe<Rate_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RoleArgs = {
  objects: Array<Role_Insert_Input>;
  on_conflict?: InputMaybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_OneArgs = {
  object: Role_Insert_Input;
  on_conflict?: InputMaybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SiteArgs = {
  objects: Array<Site_Insert_Input>;
  on_conflict?: InputMaybe<Site_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Site_OneArgs = {
  object: Site_Insert_Input;
  on_conflict?: InputMaybe<Site_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SlugArgs = {
  objects: Array<Slug_Insert_Input>;
  on_conflict?: InputMaybe<Slug_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slug_OneArgs = {
  object: Slug_Insert_Input;
  on_conflict?: InputMaybe<Slug_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SupplementArgs = {
  objects: Array<Supplement_Insert_Input>;
  on_conflict?: InputMaybe<Supplement_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Supplement_OneArgs = {
  object: Supplement_Insert_Input;
  on_conflict?: InputMaybe<Supplement_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Supplement_PricesArgs = {
  objects: Array<Supplement_Prices_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Supplement_Prices_OneArgs = {
  object: Supplement_Prices_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Supplement_TypeArgs = {
  objects: Array<Supplement_Type_Insert_Input>;
  on_conflict?: InputMaybe<Supplement_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Supplement_Type_OneArgs = {
  object: Supplement_Type_Insert_Input;
  on_conflict?: InputMaybe<Supplement_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Translated_TextArgs = {
  objects: Array<Translated_Text_Insert_Input>;
  on_conflict?: InputMaybe<Translated_Text_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Translated_Text_OneArgs = {
  object: Translated_Text_Insert_Input;
  on_conflict?: InputMaybe<Translated_Text_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Unit_ManagementArgs = {
  objects: Array<Unit_Management_Insert_Input>;
  on_conflict?: InputMaybe<Unit_Management_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Unit_Management_OneArgs = {
  object: Unit_Management_Insert_Input;
  on_conflict?: InputMaybe<Unit_Management_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_VenueArgs = {
  objects: Array<Venue_Insert_Input>;
  on_conflict?: InputMaybe<Venue_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Venue_DescriptionArgs = {
  objects: Array<Venue_Description_Insert_Input>;
  on_conflict?: InputMaybe<Venue_Description_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Venue_Description_OneArgs = {
  object: Venue_Description_Insert_Input;
  on_conflict?: InputMaybe<Venue_Description_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Venue_FacilityArgs = {
  objects: Array<Venue_Facility_Insert_Input>;
  on_conflict?: InputMaybe<Venue_Facility_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Venue_Facility_HeadlineArgs = {
  objects: Array<Venue_Facility_Headline_Insert_Input>;
  on_conflict?: InputMaybe<Venue_Facility_Headline_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Venue_Facility_Headline_OneArgs = {
  object: Venue_Facility_Headline_Insert_Input;
  on_conflict?: InputMaybe<Venue_Facility_Headline_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Venue_Facility_NameArgs = {
  objects: Array<Venue_Facility_Name_Insert_Input>;
  on_conflict?: InputMaybe<Venue_Facility_Name_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Venue_Facility_Name_OneArgs = {
  object: Venue_Facility_Name_Insert_Input;
  on_conflict?: InputMaybe<Venue_Facility_Name_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Venue_Facility_OneArgs = {
  object: Venue_Facility_Insert_Input;
  on_conflict?: InputMaybe<Venue_Facility_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Venue_Good_To_KnowArgs = {
  objects: Array<Venue_Good_To_Know_Insert_Input>;
  on_conflict?: InputMaybe<Venue_Good_To_Know_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Venue_Good_To_Know_OneArgs = {
  object: Venue_Good_To_Know_Insert_Input;
  on_conflict?: InputMaybe<Venue_Good_To_Know_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Venue_OneArgs = {
  object: Venue_Insert_Input;
  on_conflict?: InputMaybe<Venue_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Venue_UspsArgs = {
  objects: Array<Venue_Usps_Insert_Input>;
  on_conflict?: InputMaybe<Venue_Usps_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Venue_Usps_LineArgs = {
  objects: Array<Venue_Usps_Line_Insert_Input>;
  on_conflict?: InputMaybe<Venue_Usps_Line_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Venue_Usps_Line_OneArgs = {
  object: Venue_Usps_Line_Insert_Input;
  on_conflict?: InputMaybe<Venue_Usps_Line_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Venue_Usps_OneArgs = {
  object: Venue_Usps_Insert_Input;
  on_conflict?: InputMaybe<Venue_Usps_On_Conflict>;
};


/** mutation root */
export type Mutation_RootMy_Web_Section_SaveArgs = {
  arg: My_Web_Section_Save_Input;
};


/** mutation root */
export type Mutation_RootOrganization_Booking_Questions_SaveArgs = {
  arg: Organization_Booking_Questions_Save_Input;
};


/** mutation root */
export type Mutation_RootOrganization_Branding_SaveArgs = {
  arg: Organization_Branding_Save_Input;
};


/** mutation root */
export type Mutation_RootOrganization_CreateArgs = {
  arg: Organization_Create_Input;
};


/** mutation root */
export type Mutation_RootOrganization_Settings_SaveArgs = {
  arg: Organization_Settings_Save_Input;
};


/** mutation root */
export type Mutation_RootProduct_Group_SaveArgs = {
  arg: Product_Group_Save_Input;
};


/** mutation root */
export type Mutation_RootProduct_SaveArgs = {
  arg: Product_Save_Input;
};


/** mutation root */
export type Mutation_RootRate_SaveArgs = {
  arg: Rate_Save_Input;
};


/** mutation root */
export type Mutation_RootSave_Product_FeaturesArgs = {
  arg: Save_Product_Features_Input;
};


/** mutation root */
export type Mutation_RootSupplement_CreateArgs = {
  arg: Supplement_Create_Input;
};


/** mutation root */
export type Mutation_RootSupplement_SaveArgs = {
  arg: Supplement_Save_Input;
};


/** mutation root */
export type Mutation_RootTestArgs = {
  arg: Scalars['json']['input'];
};


/** mutation root */
export type Mutation_RootTest_ErrorArgs = {
  arg: Scalars['json']['input'];
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  pk_columns: AuthProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  pk_columns: AuthProviderRequests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestsArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthProvidersArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenArgs = {
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  pk_columns: AuthRefreshTokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenTypeArgs = {
  _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
  pk_columns: AuthRefreshTokenTypes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenTypesArgs = {
  _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
  where: AuthRefreshTokenTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokensArgs = {
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRoleArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  pk_columns: AuthRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRolesArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProviderArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  pk_columns: AuthUserProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProvidersArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRoleArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  pk_columns: AuthUserRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRolesArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeyArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  pk_columns: AuthUserSecurityKeys_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeysArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  where: AuthUserSecurityKeys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateBucketArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  pk_columns: Buckets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateBucketsArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateFileArgs = {
  _append?: InputMaybe<Files_Append_Input>;
  _delete_at_path?: InputMaybe<Files_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Files_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Files_Delete_Key_Input>;
  _inc?: InputMaybe<Files_Inc_Input>;
  _prepend?: InputMaybe<Files_Prepend_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  pk_columns: Files_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateFilesArgs = {
  _append?: InputMaybe<Files_Append_Input>;
  _delete_at_path?: InputMaybe<Files_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Files_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Files_Delete_Key_Input>;
  _inc?: InputMaybe<Files_Inc_Input>;
  _prepend?: InputMaybe<Files_Prepend_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateVirusArgs = {
  _append?: InputMaybe<Virus_Append_Input>;
  _delete_at_path?: InputMaybe<Virus_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Virus_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Virus_Delete_Key_Input>;
  _prepend?: InputMaybe<Virus_Prepend_Input>;
  _set?: InputMaybe<Virus_Set_Input>;
  pk_columns: Virus_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateVirusesArgs = {
  _append?: InputMaybe<Virus_Append_Input>;
  _delete_at_path?: InputMaybe<Virus_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Virus_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Virus_Delete_Key_Input>;
  _prepend?: InputMaybe<Virus_Prepend_Input>;
  _set?: InputMaybe<Virus_Set_Input>;
  where: Virus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_AuthProviderRequests_ManyArgs = {
  updates: Array<AuthProviderRequests_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthProviders_ManyArgs = {
  updates: Array<AuthProviders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRefreshTokenTypes_ManyArgs = {
  updates: Array<AuthRefreshTokenTypes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRefreshTokens_ManyArgs = {
  updates: Array<AuthRefreshTokens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRoles_ManyArgs = {
  updates: Array<AuthRoles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserProviders_ManyArgs = {
  updates: Array<AuthUserProviders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserRoles_ManyArgs = {
  updates: Array<AuthUserRoles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserSecurityKeys_ManyArgs = {
  updates: Array<AuthUserSecurityKeys_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_BookingArgs = {
  _inc?: InputMaybe<Booking_Inc_Input>;
  _set?: InputMaybe<Booking_Set_Input>;
  where: Booking_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_By_PkArgs = {
  _inc?: InputMaybe<Booking_Inc_Input>;
  _set?: InputMaybe<Booking_Set_Input>;
  pk_columns: Booking_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_Events_Event_TypeArgs = {
  _set?: InputMaybe<Booking_Events_Event_Type_Set_Input>;
  where: Booking_Events_Event_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_Events_Event_Type_By_PkArgs = {
  _set?: InputMaybe<Booking_Events_Event_Type_Set_Input>;
  pk_columns: Booking_Events_Event_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_Events_Event_Type_ManyArgs = {
  updates: Array<Booking_Events_Event_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_Events_MainArgs = {
  _inc?: InputMaybe<Booking_Events_Main_Inc_Input>;
  _set?: InputMaybe<Booking_Events_Main_Set_Input>;
  where: Booking_Events_Main_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_Events_Main_By_PkArgs = {
  _inc?: InputMaybe<Booking_Events_Main_Inc_Input>;
  _set?: InputMaybe<Booking_Events_Main_Set_Input>;
  pk_columns: Booking_Events_Main_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_Events_Main_ManyArgs = {
  updates: Array<Booking_Events_Main_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_Events_VersionArgs = {
  _inc?: InputMaybe<Booking_Events_Version_Inc_Input>;
  _set?: InputMaybe<Booking_Events_Version_Set_Input>;
  where: Booking_Events_Version_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_Events_Version_By_PkArgs = {
  _inc?: InputMaybe<Booking_Events_Version_Inc_Input>;
  _set?: InputMaybe<Booking_Events_Version_Set_Input>;
  pk_columns: Booking_Events_Version_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_Events_Version_ManyArgs = {
  updates: Array<Booking_Events_Version_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_History_EntryArgs = {
  _inc?: InputMaybe<Booking_History_Entry_Inc_Input>;
  _set?: InputMaybe<Booking_History_Entry_Set_Input>;
  where: Booking_History_Entry_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_History_Entry_By_PkArgs = {
  _inc?: InputMaybe<Booking_History_Entry_Inc_Input>;
  _set?: InputMaybe<Booking_History_Entry_Set_Input>;
  pk_columns: Booking_History_Entry_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_History_Entry_ManyArgs = {
  updates: Array<Booking_History_Entry_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_ManyArgs = {
  updates: Array<Booking_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_ProductArgs = {
  _inc?: InputMaybe<Booking_Product_Inc_Input>;
  _set?: InputMaybe<Booking_Product_Set_Input>;
  where: Booking_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_Product_By_PkArgs = {
  _inc?: InputMaybe<Booking_Product_Inc_Input>;
  _set?: InputMaybe<Booking_Product_Set_Input>;
  pk_columns: Booking_Product_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_Product_ManyArgs = {
  updates: Array<Booking_Product_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_Question_ScopeArgs = {
  _set?: InputMaybe<Booking_Question_Scope_Set_Input>;
  where: Booking_Question_Scope_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_Question_Scope_By_PkArgs = {
  _set?: InputMaybe<Booking_Question_Scope_Set_Input>;
  pk_columns: Booking_Question_Scope_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_Question_Scope_ManyArgs = {
  updates: Array<Booking_Question_Scope_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_Question_TypeArgs = {
  _set?: InputMaybe<Booking_Question_Type_Set_Input>;
  where: Booking_Question_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_Question_Type_By_PkArgs = {
  _set?: InputMaybe<Booking_Question_Type_Set_Input>;
  pk_columns: Booking_Question_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_Question_Type_ManyArgs = {
  updates: Array<Booking_Question_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_StateArgs = {
  _set?: InputMaybe<Booking_State_Set_Input>;
  where: Booking_State_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_State_By_PkArgs = {
  _set?: InputMaybe<Booking_State_Set_Input>;
  pk_columns: Booking_State_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_State_ManyArgs = {
  updates: Array<Booking_State_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_Version_With_Optimistic_LockArgs = {
  arg: Update_Booking_Version_With_Optimistic_Lock_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Buckets_ManyArgs = {
  updates: Array<Buckets_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoryArgs = {
  _set?: InputMaybe<Category_Set_Input>;
  where: Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Category_By_PkArgs = {
  _set?: InputMaybe<Category_Set_Input>;
  pk_columns: Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Category_ManyArgs = {
  updates: Array<Category_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ContactArgs = {
  _set?: InputMaybe<Contact_Set_Input>;
  where: Contact_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Contact_By_PkArgs = {
  _set?: InputMaybe<Contact_Set_Input>;
  pk_columns: Contact_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Contact_ManyArgs = {
  updates: Array<Contact_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_FeatureArgs = {
  _append?: InputMaybe<Feature_Append_Input>;
  _delete_at_path?: InputMaybe<Feature_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Feature_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Feature_Delete_Key_Input>;
  _prepend?: InputMaybe<Feature_Prepend_Input>;
  _set?: InputMaybe<Feature_Set_Input>;
  where: Feature_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Feature_By_PkArgs = {
  _append?: InputMaybe<Feature_Append_Input>;
  _delete_at_path?: InputMaybe<Feature_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Feature_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Feature_Delete_Key_Input>;
  _prepend?: InputMaybe<Feature_Prepend_Input>;
  _set?: InputMaybe<Feature_Set_Input>;
  pk_columns: Feature_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Feature_CategoryArgs = {
  _set?: InputMaybe<Feature_Category_Set_Input>;
  where: Feature_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Feature_Category_By_PkArgs = {
  _set?: InputMaybe<Feature_Category_Set_Input>;
  pk_columns: Feature_Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Feature_Category_ManyArgs = {
  updates: Array<Feature_Category_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Feature_ManyArgs = {
  updates: Array<Feature_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Feature_SymbolArgs = {
  _set?: InputMaybe<Feature_Symbol_Set_Input>;
  where: Feature_Symbol_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Feature_Symbol_By_PkArgs = {
  _set?: InputMaybe<Feature_Symbol_Set_Input>;
  pk_columns: Feature_Symbol_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Feature_Symbol_ManyArgs = {
  updates: Array<Feature_Symbol_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Feature_TypeArgs = {
  _set?: InputMaybe<Feature_Type_Set_Input>;
  where: Feature_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Feature_Type_By_PkArgs = {
  _set?: InputMaybe<Feature_Type_Set_Input>;
  pk_columns: Feature_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Feature_Type_ManyArgs = {
  updates: Array<Feature_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Files_ManyArgs = {
  updates: Array<Files_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Media_GalleryArgs = {
  _set?: InputMaybe<Media_Gallery_Set_Input>;
  where: Media_Gallery_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Media_Gallery_By_PkArgs = {
  _set?: InputMaybe<Media_Gallery_Set_Input>;
  pk_columns: Media_Gallery_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Media_Gallery_ItemArgs = {
  _inc?: InputMaybe<Media_Gallery_Item_Inc_Input>;
  _set?: InputMaybe<Media_Gallery_Item_Set_Input>;
  where: Media_Gallery_Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Media_Gallery_Item_By_PkArgs = {
  _inc?: InputMaybe<Media_Gallery_Item_Inc_Input>;
  _set?: InputMaybe<Media_Gallery_Item_Set_Input>;
  pk_columns: Media_Gallery_Item_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Media_Gallery_Item_ManyArgs = {
  updates: Array<Media_Gallery_Item_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Media_Gallery_ManyArgs = {
  updates: Array<Media_Gallery_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_My_Web_SectionArgs = {
  _set?: InputMaybe<My_Web_Section_Set_Input>;
  where: My_Web_Section_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_My_Web_Section_By_PkArgs = {
  _set?: InputMaybe<My_Web_Section_Set_Input>;
  pk_columns: My_Web_Section_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_My_Web_Section_ManyArgs = {
  updates: Array<My_Web_Section_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OrganizationArgs = {
  _set?: InputMaybe<Organization_Set_Input>;
  where: Organization_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Booking_QuestionArgs = {
  _inc?: InputMaybe<Organization_Booking_Question_Inc_Input>;
  _set?: InputMaybe<Organization_Booking_Question_Set_Input>;
  where: Organization_Booking_Question_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Booking_Question_By_PkArgs = {
  _inc?: InputMaybe<Organization_Booking_Question_Inc_Input>;
  _set?: InputMaybe<Organization_Booking_Question_Set_Input>;
  pk_columns: Organization_Booking_Question_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Booking_Question_ManyArgs = {
  updates: Array<Organization_Booking_Question_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_BrandingArgs = {
  _set?: InputMaybe<Organization_Branding_Set_Input>;
  where: Organization_Branding_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Branding_By_PkArgs = {
  _set?: InputMaybe<Organization_Branding_Set_Input>;
  pk_columns: Organization_Branding_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Branding_ManyArgs = {
  updates: Array<Organization_Branding_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Branding_Meta_DescriptionArgs = {
  _set?: InputMaybe<Organization_Branding_Meta_Description_Set_Input>;
  where: Organization_Branding_Meta_Description_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Branding_Meta_Description_By_PkArgs = {
  _set?: InputMaybe<Organization_Branding_Meta_Description_Set_Input>;
  pk_columns: Organization_Branding_Meta_Description_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Branding_Meta_Description_ManyArgs = {
  updates: Array<Organization_Branding_Meta_Description_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Branding_Meta_TitleArgs = {
  _set?: InputMaybe<Organization_Branding_Meta_Title_Set_Input>;
  where: Organization_Branding_Meta_Title_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Branding_Meta_Title_By_PkArgs = {
  _set?: InputMaybe<Organization_Branding_Meta_Title_Set_Input>;
  pk_columns: Organization_Branding_Meta_Title_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Branding_Meta_Title_ManyArgs = {
  updates: Array<Organization_Branding_Meta_Title_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Business_ModelArgs = {
  _set?: InputMaybe<Organization_Business_Model_Set_Input>;
  where: Organization_Business_Model_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Business_Model_By_PkArgs = {
  _set?: InputMaybe<Organization_Business_Model_Set_Input>;
  pk_columns: Organization_Business_Model_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Business_Model_ManyArgs = {
  updates: Array<Organization_Business_Model_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_By_PkArgs = {
  _set?: InputMaybe<Organization_Set_Input>;
  pk_columns: Organization_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_HeadlineArgs = {
  _set?: InputMaybe<Organization_Headline_Set_Input>;
  where: Organization_Headline_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Headline_By_PkArgs = {
  _set?: InputMaybe<Organization_Headline_Set_Input>;
  pk_columns: Organization_Headline_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Headline_ManyArgs = {
  updates: Array<Organization_Headline_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_ManyArgs = {
  updates: Array<Organization_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_MemberArgs = {
  _set?: InputMaybe<Organization_Member_Set_Input>;
  where: Organization_Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Member_By_PkArgs = {
  _set?: InputMaybe<Organization_Member_Set_Input>;
  pk_columns: Organization_Member_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Member_ManyArgs = {
  updates: Array<Organization_Member_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_SocialsArgs = {
  _set?: InputMaybe<Organization_Socials_Set_Input>;
  where: Organization_Socials_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Socials_By_PkArgs = {
  _set?: InputMaybe<Organization_Socials_Set_Input>;
  pk_columns: Organization_Socials_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Socials_ManyArgs = {
  updates: Array<Organization_Socials_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PlaceArgs = {
  _inc?: InputMaybe<Place_Inc_Input>;
  _set?: InputMaybe<Place_Set_Input>;
  where: Place_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Place_By_PkArgs = {
  _inc?: InputMaybe<Place_Inc_Input>;
  _set?: InputMaybe<Place_Set_Input>;
  pk_columns: Place_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Place_ManyArgs = {
  updates: Array<Place_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProductArgs = {
  _inc?: InputMaybe<Product_Inc_Input>;
  _set?: InputMaybe<Product_Set_Input>;
  where: Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Allotment_RangeArgs = {
  _inc?: InputMaybe<Product_Allotment_Range_Inc_Input>;
  _set?: InputMaybe<Product_Allotment_Range_Set_Input>;
  where: Product_Allotment_Range_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Allotment_Range_By_PkArgs = {
  _inc?: InputMaybe<Product_Allotment_Range_Inc_Input>;
  _set?: InputMaybe<Product_Allotment_Range_Set_Input>;
  pk_columns: Product_Allotment_Range_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Allotment_Range_ManyArgs = {
  updates: Array<Product_Allotment_Range_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Business_ModelArgs = {
  _set?: InputMaybe<Product_Business_Model_Set_Input>;
  where: Product_Business_Model_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Business_Model_By_PkArgs = {
  _set?: InputMaybe<Product_Business_Model_Set_Input>;
  pk_columns: Product_Business_Model_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Business_Model_ManyArgs = {
  updates: Array<Product_Business_Model_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Product_By_PkArgs = {
  _inc?: InputMaybe<Product_Inc_Input>;
  _set?: InputMaybe<Product_Set_Input>;
  pk_columns: Product_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_DescriptionArgs = {
  _set?: InputMaybe<Product_Description_Set_Input>;
  where: Product_Description_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Description_By_PkArgs = {
  _set?: InputMaybe<Product_Description_Set_Input>;
  pk_columns: Product_Description_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Description_ManyArgs = {
  updates: Array<Product_Description_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Product_FeatureArgs = {
  _append?: InputMaybe<Product_Feature_Append_Input>;
  _delete_at_path?: InputMaybe<Product_Feature_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Product_Feature_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Product_Feature_Delete_Key_Input>;
  _inc?: InputMaybe<Product_Feature_Inc_Input>;
  _prepend?: InputMaybe<Product_Feature_Prepend_Input>;
  _set?: InputMaybe<Product_Feature_Set_Input>;
  where: Product_Feature_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Feature_By_PkArgs = {
  _append?: InputMaybe<Product_Feature_Append_Input>;
  _delete_at_path?: InputMaybe<Product_Feature_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Product_Feature_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Product_Feature_Delete_Key_Input>;
  _inc?: InputMaybe<Product_Feature_Inc_Input>;
  _prepend?: InputMaybe<Product_Feature_Prepend_Input>;
  _set?: InputMaybe<Product_Feature_Set_Input>;
  pk_columns: Product_Feature_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Feature_ManyArgs = {
  updates: Array<Product_Feature_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Product_GroupArgs = {
  _set?: InputMaybe<Product_Group_Set_Input>;
  where: Product_Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Group_By_PkArgs = {
  _set?: InputMaybe<Product_Group_Set_Input>;
  pk_columns: Product_Group_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Group_ManyArgs = {
  updates: Array<Product_Group_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Group_ProductArgs = {
  _inc?: InputMaybe<Product_Group_Product_Inc_Input>;
  _set?: InputMaybe<Product_Group_Product_Set_Input>;
  where: Product_Group_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Group_Product_By_PkArgs = {
  _inc?: InputMaybe<Product_Group_Product_Inc_Input>;
  _set?: InputMaybe<Product_Group_Product_Set_Input>;
  pk_columns: Product_Group_Product_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Group_Product_ManyArgs = {
  updates: Array<Product_Group_Product_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Product_HeadlineArgs = {
  _set?: InputMaybe<Product_Headline_Set_Input>;
  where: Product_Headline_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Headline_By_PkArgs = {
  _set?: InputMaybe<Product_Headline_Set_Input>;
  pk_columns: Product_Headline_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Headline_ManyArgs = {
  updates: Array<Product_Headline_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Product_ManyArgs = {
  updates: Array<Product_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Product_NameArgs = {
  _set?: InputMaybe<Product_Name_Set_Input>;
  where: Product_Name_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Name_By_PkArgs = {
  _set?: InputMaybe<Product_Name_Set_Input>;
  pk_columns: Product_Name_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Name_ManyArgs = {
  updates: Array<Product_Name_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Product_SupplementArgs = {
  _set?: InputMaybe<Product_Supplement_Set_Input>;
  where: Product_Supplement_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Supplement_By_PkArgs = {
  _set?: InputMaybe<Product_Supplement_Set_Input>;
  pk_columns: Product_Supplement_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Supplement_ManyArgs = {
  updates: Array<Product_Supplement_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RateArgs = {
  _append?: InputMaybe<Rate_Append_Input>;
  _delete_at_path?: InputMaybe<Rate_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Rate_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Rate_Delete_Key_Input>;
  _prepend?: InputMaybe<Rate_Prepend_Input>;
  _set?: InputMaybe<Rate_Set_Input>;
  where: Rate_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rate_By_PkArgs = {
  _append?: InputMaybe<Rate_Append_Input>;
  _delete_at_path?: InputMaybe<Rate_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Rate_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Rate_Delete_Key_Input>;
  _prepend?: InputMaybe<Rate_Prepend_Input>;
  _set?: InputMaybe<Rate_Set_Input>;
  pk_columns: Rate_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rate_HeadlineArgs = {
  _set?: InputMaybe<Rate_Headline_Set_Input>;
  where: Rate_Headline_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rate_Headline_By_PkArgs = {
  _set?: InputMaybe<Rate_Headline_Set_Input>;
  pk_columns: Rate_Headline_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rate_Headline_ManyArgs = {
  updates: Array<Rate_Headline_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rate_ManyArgs = {
  updates: Array<Rate_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rate_NameArgs = {
  _set?: InputMaybe<Rate_Name_Set_Input>;
  where: Rate_Name_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rate_Name_By_PkArgs = {
  _set?: InputMaybe<Rate_Name_Set_Input>;
  pk_columns: Rate_Name_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rate_Name_ManyArgs = {
  updates: Array<Rate_Name_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rate_Price_RangeArgs = {
  _inc?: InputMaybe<Rate_Price_Range_Inc_Input>;
  _set?: InputMaybe<Rate_Price_Range_Set_Input>;
  where: Rate_Price_Range_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rate_Price_Range_By_PkArgs = {
  _inc?: InputMaybe<Rate_Price_Range_Inc_Input>;
  _set?: InputMaybe<Rate_Price_Range_Set_Input>;
  pk_columns: Rate_Price_Range_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rate_Price_Range_ManyArgs = {
  updates: Array<Rate_Price_Range_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rate_TypeArgs = {
  _set?: InputMaybe<Rate_Type_Set_Input>;
  where: Rate_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rate_Type_By_PkArgs = {
  _set?: InputMaybe<Rate_Type_Set_Input>;
  pk_columns: Rate_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rate_Type_ManyArgs = {
  updates: Array<Rate_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RoleArgs = {
  _set?: InputMaybe<Role_Set_Input>;
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Role_By_PkArgs = {
  _set?: InputMaybe<Role_Set_Input>;
  pk_columns: Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Role_ManyArgs = {
  updates: Array<Role_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SiteArgs = {
  _set?: InputMaybe<Site_Set_Input>;
  where: Site_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Site_By_PkArgs = {
  _set?: InputMaybe<Site_Set_Input>;
  pk_columns: Site_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Site_ManyArgs = {
  updates: Array<Site_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SlugArgs = {
  _set?: InputMaybe<Slug_Set_Input>;
  where: Slug_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Slug_By_PkArgs = {
  _set?: InputMaybe<Slug_Set_Input>;
  pk_columns: Slug_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Slug_ManyArgs = {
  updates: Array<Slug_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SupplementArgs = {
  _inc?: InputMaybe<Supplement_Inc_Input>;
  _set?: InputMaybe<Supplement_Set_Input>;
  where: Supplement_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Supplement_By_PkArgs = {
  _inc?: InputMaybe<Supplement_Inc_Input>;
  _set?: InputMaybe<Supplement_Set_Input>;
  pk_columns: Supplement_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Supplement_ManyArgs = {
  updates: Array<Supplement_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Supplement_PricesArgs = {
  _inc?: InputMaybe<Supplement_Prices_Inc_Input>;
  _set?: InputMaybe<Supplement_Prices_Set_Input>;
  where: Supplement_Prices_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Supplement_Prices_ManyArgs = {
  updates: Array<Supplement_Prices_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Supplement_TypeArgs = {
  _set?: InputMaybe<Supplement_Type_Set_Input>;
  where: Supplement_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Supplement_Type_By_PkArgs = {
  _set?: InputMaybe<Supplement_Type_Set_Input>;
  pk_columns: Supplement_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Supplement_Type_ManyArgs = {
  updates: Array<Supplement_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Translated_TextArgs = {
  _set?: InputMaybe<Translated_Text_Set_Input>;
  where: Translated_Text_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Translated_Text_By_PkArgs = {
  _set?: InputMaybe<Translated_Text_Set_Input>;
  pk_columns: Translated_Text_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Translated_Text_ManyArgs = {
  updates: Array<Translated_Text_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Unit_ManagementArgs = {
  _set?: InputMaybe<Unit_Management_Set_Input>;
  where: Unit_Management_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Unit_Management_By_PkArgs = {
  _set?: InputMaybe<Unit_Management_Set_Input>;
  pk_columns: Unit_Management_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Unit_Management_ManyArgs = {
  updates: Array<Unit_Management_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_VenueArgs = {
  _set?: InputMaybe<Venue_Set_Input>;
  where: Venue_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Venue_By_PkArgs = {
  _set?: InputMaybe<Venue_Set_Input>;
  pk_columns: Venue_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Venue_DescriptionArgs = {
  _set?: InputMaybe<Venue_Description_Set_Input>;
  where: Venue_Description_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Venue_Description_By_PkArgs = {
  _set?: InputMaybe<Venue_Description_Set_Input>;
  pk_columns: Venue_Description_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Venue_Description_ManyArgs = {
  updates: Array<Venue_Description_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Venue_FacilityArgs = {
  _inc?: InputMaybe<Venue_Facility_Inc_Input>;
  _set?: InputMaybe<Venue_Facility_Set_Input>;
  where: Venue_Facility_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Venue_Facility_By_PkArgs = {
  _inc?: InputMaybe<Venue_Facility_Inc_Input>;
  _set?: InputMaybe<Venue_Facility_Set_Input>;
  pk_columns: Venue_Facility_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Venue_Facility_HeadlineArgs = {
  _set?: InputMaybe<Venue_Facility_Headline_Set_Input>;
  where: Venue_Facility_Headline_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Venue_Facility_Headline_By_PkArgs = {
  _set?: InputMaybe<Venue_Facility_Headline_Set_Input>;
  pk_columns: Venue_Facility_Headline_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Venue_Facility_Headline_ManyArgs = {
  updates: Array<Venue_Facility_Headline_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Venue_Facility_ManyArgs = {
  updates: Array<Venue_Facility_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Venue_Facility_NameArgs = {
  _set?: InputMaybe<Venue_Facility_Name_Set_Input>;
  where: Venue_Facility_Name_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Venue_Facility_Name_By_PkArgs = {
  _set?: InputMaybe<Venue_Facility_Name_Set_Input>;
  pk_columns: Venue_Facility_Name_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Venue_Facility_Name_ManyArgs = {
  updates: Array<Venue_Facility_Name_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Venue_Good_To_KnowArgs = {
  _set?: InputMaybe<Venue_Good_To_Know_Set_Input>;
  where: Venue_Good_To_Know_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Venue_Good_To_Know_By_PkArgs = {
  _set?: InputMaybe<Venue_Good_To_Know_Set_Input>;
  pk_columns: Venue_Good_To_Know_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Venue_Good_To_Know_ManyArgs = {
  updates: Array<Venue_Good_To_Know_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Venue_ManyArgs = {
  updates: Array<Venue_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Venue_UspsArgs = {
  _set?: InputMaybe<Venue_Usps_Set_Input>;
  where: Venue_Usps_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Venue_Usps_By_PkArgs = {
  _set?: InputMaybe<Venue_Usps_Set_Input>;
  pk_columns: Venue_Usps_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Venue_Usps_LineArgs = {
  _inc?: InputMaybe<Venue_Usps_Line_Inc_Input>;
  _set?: InputMaybe<Venue_Usps_Line_Set_Input>;
  where: Venue_Usps_Line_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Venue_Usps_Line_By_PkArgs = {
  _inc?: InputMaybe<Venue_Usps_Line_Inc_Input>;
  _set?: InputMaybe<Venue_Usps_Line_Set_Input>;
  pk_columns: Venue_Usps_Line_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Venue_Usps_Line_ManyArgs = {
  updates: Array<Venue_Usps_Line_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Venue_Usps_ManyArgs = {
  updates: Array<Venue_Usps_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Virus_ManyArgs = {
  updates: Array<Virus_Updates>;
};


/** mutation root */
export type Mutation_RootVenue_Facilities_SaveArgs = {
  arg: Venue_Facilities_Save_Input;
};


/** mutation root */
export type Mutation_RootVenue_Gallery_SaveArgs = {
  arg: Venue_Gallery_Save_Input;
};


/** mutation root */
export type Mutation_RootVenue_Main_SaveArgs = {
  arg: Venue_Main_Save_Input;
};


/** mutation root */
export type Mutation_RootVenue_Usps_SaveArgs = {
  arg: Venue_Usps_Save_Input;
};

/** columns and relationships of "my_web_section" */
export type My_Web_Section = {
  __typename?: 'my_web_section';
  organization_id: Scalars['uuid']['output'];
  section_id: Scalars['String']['output'];
  value: Scalars['json']['output'];
};


/** columns and relationships of "my_web_section" */
export type My_Web_SectionValueArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "my_web_section" */
export type My_Web_Section_Aggregate = {
  __typename?: 'my_web_section_aggregate';
  aggregate?: Maybe<My_Web_Section_Aggregate_Fields>;
  nodes: Array<My_Web_Section>;
};

export type My_Web_Section_Aggregate_Bool_Exp = {
  count?: InputMaybe<My_Web_Section_Aggregate_Bool_Exp_Count>;
};

export type My_Web_Section_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<My_Web_Section_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<My_Web_Section_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "my_web_section" */
export type My_Web_Section_Aggregate_Fields = {
  __typename?: 'my_web_section_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<My_Web_Section_Max_Fields>;
  min?: Maybe<My_Web_Section_Min_Fields>;
};


/** aggregate fields of "my_web_section" */
export type My_Web_Section_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<My_Web_Section_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "my_web_section" */
export type My_Web_Section_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<My_Web_Section_Max_Order_By>;
  min?: InputMaybe<My_Web_Section_Min_Order_By>;
};

/** input type for inserting array relation for remote table "my_web_section" */
export type My_Web_Section_Arr_Rel_Insert_Input = {
  data: Array<My_Web_Section_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<My_Web_Section_On_Conflict>;
};

/** Boolean expression to filter rows from the table "my_web_section". All fields are combined with a logical 'AND'. */
export type My_Web_Section_Bool_Exp = {
  _and?: InputMaybe<Array<My_Web_Section_Bool_Exp>>;
  _not?: InputMaybe<My_Web_Section_Bool_Exp>;
  _or?: InputMaybe<Array<My_Web_Section_Bool_Exp>>;
  organization_id?: InputMaybe<Uuid_Comparison_Exp>;
  section_id?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<Json_Comparison_Exp>;
};

/** unique or primary key constraints on table "my_web_section" */
export enum My_Web_Section_Constraint {
  /** unique or primary key constraint on columns "section_id", "organization_id" */
  MyWebSectionPkey = 'my_web_section_pkey'
}

/** input type for inserting data into table "my_web_section" */
export type My_Web_Section_Insert_Input = {
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  section_id?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['json']['input']>;
};

/** aggregate max on columns */
export type My_Web_Section_Max_Fields = {
  __typename?: 'my_web_section_max_fields';
  organization_id?: Maybe<Scalars['uuid']['output']>;
  section_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "my_web_section" */
export type My_Web_Section_Max_Order_By = {
  organization_id?: InputMaybe<Order_By>;
  section_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type My_Web_Section_Min_Fields = {
  __typename?: 'my_web_section_min_fields';
  organization_id?: Maybe<Scalars['uuid']['output']>;
  section_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "my_web_section" */
export type My_Web_Section_Min_Order_By = {
  organization_id?: InputMaybe<Order_By>;
  section_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "my_web_section" */
export type My_Web_Section_Mutation_Response = {
  __typename?: 'my_web_section_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<My_Web_Section>;
};

/** on_conflict condition type for table "my_web_section" */
export type My_Web_Section_On_Conflict = {
  constraint: My_Web_Section_Constraint;
  update_columns?: Array<My_Web_Section_Update_Column>;
  where?: InputMaybe<My_Web_Section_Bool_Exp>;
};

/** Ordering options when selecting data from "my_web_section". */
export type My_Web_Section_Order_By = {
  organization_id?: InputMaybe<Order_By>;
  section_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: my_web_section */
export type My_Web_Section_Pk_Columns_Input = {
  organization_id: Scalars['uuid']['input'];
  section_id: Scalars['String']['input'];
};

export type My_Web_Section_Save_Input = {
  organization_id: Scalars['uuid']['input'];
  section_id: Scalars['String']['input'];
  value: Scalars['json']['input'];
};

/** select columns of table "my_web_section" */
export enum My_Web_Section_Select_Column {
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  SectionId = 'section_id',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "my_web_section" */
export type My_Web_Section_Set_Input = {
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  section_id?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['json']['input']>;
};

/** Streaming cursor of the table "my_web_section" */
export type My_Web_Section_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: My_Web_Section_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type My_Web_Section_Stream_Cursor_Value_Input = {
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  section_id?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['json']['input']>;
};

/** update columns of table "my_web_section" */
export enum My_Web_Section_Update_Column {
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  SectionId = 'section_id',
  /** column name */
  Value = 'value'
}

export type My_Web_Section_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<My_Web_Section_Set_Input>;
  /** filter the rows which have to be updated */
  where: My_Web_Section_Bool_Exp;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "organization" */
export type Organization = {
  __typename?: 'organization';
  /** An array relationship */
  booking_questions: Array<Organization_Booking_Question>;
  /** An aggregate relationship */
  booking_questions_aggregate: Organization_Booking_Question_Aggregate;
  /** An array relationship */
  bookings: Array<Booking>;
  /** An aggregate relationship */
  bookings_aggregate: Booking_Aggregate;
  /** An object relationship */
  branding: Organization_Branding;
  branding_id: Scalars['uuid']['output'];
  /** An object relationship */
  business_model?: Maybe<Organization_Business_Model>;
  business_model_id?: Maybe<Scalars['uuid']['output']>;
  /** An array relationship */
  contacts: Array<Contact>;
  /** An aggregate relationship */
  contacts_aggregate: Contact_Aggregate;
  currency: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  features: Array<Feature>;
  /** An aggregate relationship */
  features_aggregate: Feature_Aggregate;
  /** An object relationship */
  headline: Organization_Headline;
  headline_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  language: Scalars['String']['output'];
  /** An array relationship */
  members: Array<Organization_Member>;
  /** An aggregate relationship */
  members_aggregate: Organization_Member_Aggregate;
  name: Scalars['String']['output'];
  phone_number?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  product_groups: Array<Product_Group>;
  /** An aggregate relationship */
  product_groups_aggregate: Product_Group_Aggregate;
  /** An array relationship */
  products: Array<Product>;
  /** An aggregate relationship */
  products_aggregate: Product_Aggregate;
  /** An array relationship */
  sections: Array<My_Web_Section>;
  /** An aggregate relationship */
  sections_aggregate: My_Web_Section_Aggregate;
  /** An array relationship */
  sites: Array<Site>;
  /** An aggregate relationship */
  sites_aggregate: Site_Aggregate;
  /** An object relationship */
  socials: Organization_Socials;
  socials_id: Scalars['uuid']['output'];
  /** An array relationship */
  supplements: Array<Supplement>;
  /** An aggregate relationship */
  supplements_aggregate: Supplement_Aggregate;
  /** An array relationship */
  venues: Array<Venue>;
  /** An aggregate relationship */
  venues_aggregate: Venue_Aggregate;
};


/** columns and relationships of "organization" */
export type OrganizationBooking_QuestionsArgs = {
  distinct_on?: InputMaybe<Array<Organization_Booking_Question_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Booking_Question_Order_By>>;
  where?: InputMaybe<Organization_Booking_Question_Bool_Exp>;
};


/** columns and relationships of "organization" */
export type OrganizationBooking_Questions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Booking_Question_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Booking_Question_Order_By>>;
  where?: InputMaybe<Organization_Booking_Question_Bool_Exp>;
};


/** columns and relationships of "organization" */
export type OrganizationBookingsArgs = {
  distinct_on?: InputMaybe<Array<Booking_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Order_By>>;
  where?: InputMaybe<Booking_Bool_Exp>;
};


/** columns and relationships of "organization" */
export type OrganizationBookings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Order_By>>;
  where?: InputMaybe<Booking_Bool_Exp>;
};


/** columns and relationships of "organization" */
export type OrganizationContactsArgs = {
  distinct_on?: InputMaybe<Array<Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contact_Order_By>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};


/** columns and relationships of "organization" */
export type OrganizationContacts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contact_Order_By>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};


/** columns and relationships of "organization" */
export type OrganizationFeaturesArgs = {
  distinct_on?: InputMaybe<Array<Feature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Feature_Order_By>>;
  where?: InputMaybe<Feature_Bool_Exp>;
};


/** columns and relationships of "organization" */
export type OrganizationFeatures_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Feature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Feature_Order_By>>;
  where?: InputMaybe<Feature_Bool_Exp>;
};


/** columns and relationships of "organization" */
export type OrganizationMembersArgs = {
  distinct_on?: InputMaybe<Array<Organization_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Member_Order_By>>;
  where?: InputMaybe<Organization_Member_Bool_Exp>;
};


/** columns and relationships of "organization" */
export type OrganizationMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Member_Order_By>>;
  where?: InputMaybe<Organization_Member_Bool_Exp>;
};


/** columns and relationships of "organization" */
export type OrganizationProduct_GroupsArgs = {
  distinct_on?: InputMaybe<Array<Product_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Group_Order_By>>;
  where?: InputMaybe<Product_Group_Bool_Exp>;
};


/** columns and relationships of "organization" */
export type OrganizationProduct_Groups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Group_Order_By>>;
  where?: InputMaybe<Product_Group_Bool_Exp>;
};


/** columns and relationships of "organization" */
export type OrganizationProductsArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


/** columns and relationships of "organization" */
export type OrganizationProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


/** columns and relationships of "organization" */
export type OrganizationSectionsArgs = {
  distinct_on?: InputMaybe<Array<My_Web_Section_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<My_Web_Section_Order_By>>;
  where?: InputMaybe<My_Web_Section_Bool_Exp>;
};


/** columns and relationships of "organization" */
export type OrganizationSections_AggregateArgs = {
  distinct_on?: InputMaybe<Array<My_Web_Section_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<My_Web_Section_Order_By>>;
  where?: InputMaybe<My_Web_Section_Bool_Exp>;
};


/** columns and relationships of "organization" */
export type OrganizationSitesArgs = {
  distinct_on?: InputMaybe<Array<Site_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Site_Order_By>>;
  where?: InputMaybe<Site_Bool_Exp>;
};


/** columns and relationships of "organization" */
export type OrganizationSites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Site_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Site_Order_By>>;
  where?: InputMaybe<Site_Bool_Exp>;
};


/** columns and relationships of "organization" */
export type OrganizationSupplementsArgs = {
  distinct_on?: InputMaybe<Array<Supplement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Supplement_Order_By>>;
  where?: InputMaybe<Supplement_Bool_Exp>;
};


/** columns and relationships of "organization" */
export type OrganizationSupplements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Supplement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Supplement_Order_By>>;
  where?: InputMaybe<Supplement_Bool_Exp>;
};


/** columns and relationships of "organization" */
export type OrganizationVenuesArgs = {
  distinct_on?: InputMaybe<Array<Venue_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Order_By>>;
  where?: InputMaybe<Venue_Bool_Exp>;
};


/** columns and relationships of "organization" */
export type OrganizationVenues_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Venue_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Order_By>>;
  where?: InputMaybe<Venue_Bool_Exp>;
};

/** aggregated selection of "organization" */
export type Organization_Aggregate = {
  __typename?: 'organization_aggregate';
  aggregate?: Maybe<Organization_Aggregate_Fields>;
  nodes: Array<Organization>;
};

/** aggregate fields of "organization" */
export type Organization_Aggregate_Fields = {
  __typename?: 'organization_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Organization_Max_Fields>;
  min?: Maybe<Organization_Min_Fields>;
};


/** aggregate fields of "organization" */
export type Organization_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organization_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** columns and relationships of "organization_booking_question" */
export type Organization_Booking_Question = {
  __typename?: 'organization_booking_question';
  id: Scalars['uuid']['output'];
  organization_id: Scalars['uuid']['output'];
  position: Scalars['numeric']['output'];
  scope: Booking_Question_Scope_Enum;
  /** An object relationship */
  text: Translated_Text;
  text_id: Scalars['uuid']['output'];
  type: Booking_Question_Type_Enum;
  value: Scalars['json']['output'];
};


/** columns and relationships of "organization_booking_question" */
export type Organization_Booking_QuestionValueArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "organization_booking_question" */
export type Organization_Booking_Question_Aggregate = {
  __typename?: 'organization_booking_question_aggregate';
  aggregate?: Maybe<Organization_Booking_Question_Aggregate_Fields>;
  nodes: Array<Organization_Booking_Question>;
};

export type Organization_Booking_Question_Aggregate_Bool_Exp = {
  count?: InputMaybe<Organization_Booking_Question_Aggregate_Bool_Exp_Count>;
};

export type Organization_Booking_Question_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Organization_Booking_Question_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Organization_Booking_Question_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "organization_booking_question" */
export type Organization_Booking_Question_Aggregate_Fields = {
  __typename?: 'organization_booking_question_aggregate_fields';
  avg?: Maybe<Organization_Booking_Question_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Organization_Booking_Question_Max_Fields>;
  min?: Maybe<Organization_Booking_Question_Min_Fields>;
  stddev?: Maybe<Organization_Booking_Question_Stddev_Fields>;
  stddev_pop?: Maybe<Organization_Booking_Question_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Organization_Booking_Question_Stddev_Samp_Fields>;
  sum?: Maybe<Organization_Booking_Question_Sum_Fields>;
  var_pop?: Maybe<Organization_Booking_Question_Var_Pop_Fields>;
  var_samp?: Maybe<Organization_Booking_Question_Var_Samp_Fields>;
  variance?: Maybe<Organization_Booking_Question_Variance_Fields>;
};


/** aggregate fields of "organization_booking_question" */
export type Organization_Booking_Question_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organization_Booking_Question_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "organization_booking_question" */
export type Organization_Booking_Question_Aggregate_Order_By = {
  avg?: InputMaybe<Organization_Booking_Question_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Organization_Booking_Question_Max_Order_By>;
  min?: InputMaybe<Organization_Booking_Question_Min_Order_By>;
  stddev?: InputMaybe<Organization_Booking_Question_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Organization_Booking_Question_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Organization_Booking_Question_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Organization_Booking_Question_Sum_Order_By>;
  var_pop?: InputMaybe<Organization_Booking_Question_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Organization_Booking_Question_Var_Samp_Order_By>;
  variance?: InputMaybe<Organization_Booking_Question_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "organization_booking_question" */
export type Organization_Booking_Question_Arr_Rel_Insert_Input = {
  data: Array<Organization_Booking_Question_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Organization_Booking_Question_On_Conflict>;
};

/** aggregate avg on columns */
export type Organization_Booking_Question_Avg_Fields = {
  __typename?: 'organization_booking_question_avg_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "organization_booking_question" */
export type Organization_Booking_Question_Avg_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "organization_booking_question". All fields are combined with a logical 'AND'. */
export type Organization_Booking_Question_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_Booking_Question_Bool_Exp>>;
  _not?: InputMaybe<Organization_Booking_Question_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_Booking_Question_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  organization_id?: InputMaybe<Uuid_Comparison_Exp>;
  position?: InputMaybe<Numeric_Comparison_Exp>;
  scope?: InputMaybe<Booking_Question_Scope_Enum_Comparison_Exp>;
  text?: InputMaybe<Translated_Text_Bool_Exp>;
  text_id?: InputMaybe<Uuid_Comparison_Exp>;
  type?: InputMaybe<Booking_Question_Type_Enum_Comparison_Exp>;
  value?: InputMaybe<Json_Comparison_Exp>;
};

/** unique or primary key constraints on table "organization_booking_question" */
export enum Organization_Booking_Question_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrganizationBookingQuestionPkey = 'organization_booking_question_pkey'
}

/** input type for incrementing numeric columns in table "organization_booking_question" */
export type Organization_Booking_Question_Inc_Input = {
  position?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "organization_booking_question" */
export type Organization_Booking_Question_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  position?: InputMaybe<Scalars['numeric']['input']>;
  scope?: InputMaybe<Booking_Question_Scope_Enum>;
  text?: InputMaybe<Translated_Text_Obj_Rel_Insert_Input>;
  text_id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Booking_Question_Type_Enum>;
  value?: InputMaybe<Scalars['json']['input']>;
};

/** aggregate max on columns */
export type Organization_Booking_Question_Max_Fields = {
  __typename?: 'organization_booking_question_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  organization_id?: Maybe<Scalars['uuid']['output']>;
  position?: Maybe<Scalars['numeric']['output']>;
  text_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "organization_booking_question" */
export type Organization_Booking_Question_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  text_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Organization_Booking_Question_Min_Fields = {
  __typename?: 'organization_booking_question_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  organization_id?: Maybe<Scalars['uuid']['output']>;
  position?: Maybe<Scalars['numeric']['output']>;
  text_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "organization_booking_question" */
export type Organization_Booking_Question_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  text_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "organization_booking_question" */
export type Organization_Booking_Question_Mutation_Response = {
  __typename?: 'organization_booking_question_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Organization_Booking_Question>;
};

/** on_conflict condition type for table "organization_booking_question" */
export type Organization_Booking_Question_On_Conflict = {
  constraint: Organization_Booking_Question_Constraint;
  update_columns?: Array<Organization_Booking_Question_Update_Column>;
  where?: InputMaybe<Organization_Booking_Question_Bool_Exp>;
};

/** Ordering options when selecting data from "organization_booking_question". */
export type Organization_Booking_Question_Order_By = {
  id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  text?: InputMaybe<Translated_Text_Order_By>;
  text_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: organization_booking_question */
export type Organization_Booking_Question_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

export type Organization_Booking_Question_Save_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  scope: Scalars['String']['input'];
  text: Multilanguage_Field_Input;
  type: Scalars['String']['input'];
  value: Scalars['json']['input'];
};

/** select columns of table "organization_booking_question" */
export enum Organization_Booking_Question_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  Position = 'position',
  /** column name */
  Scope = 'scope',
  /** column name */
  TextId = 'text_id',
  /** column name */
  Type = 'type',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "organization_booking_question" */
export type Organization_Booking_Question_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  position?: InputMaybe<Scalars['numeric']['input']>;
  scope?: InputMaybe<Booking_Question_Scope_Enum>;
  text_id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Booking_Question_Type_Enum>;
  value?: InputMaybe<Scalars['json']['input']>;
};

/** aggregate stddev on columns */
export type Organization_Booking_Question_Stddev_Fields = {
  __typename?: 'organization_booking_question_stddev_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "organization_booking_question" */
export type Organization_Booking_Question_Stddev_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Organization_Booking_Question_Stddev_Pop_Fields = {
  __typename?: 'organization_booking_question_stddev_pop_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "organization_booking_question" */
export type Organization_Booking_Question_Stddev_Pop_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Organization_Booking_Question_Stddev_Samp_Fields = {
  __typename?: 'organization_booking_question_stddev_samp_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "organization_booking_question" */
export type Organization_Booking_Question_Stddev_Samp_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "organization_booking_question" */
export type Organization_Booking_Question_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organization_Booking_Question_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Booking_Question_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  position?: InputMaybe<Scalars['numeric']['input']>;
  scope?: InputMaybe<Booking_Question_Scope_Enum>;
  text_id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Booking_Question_Type_Enum>;
  value?: InputMaybe<Scalars['json']['input']>;
};

/** aggregate sum on columns */
export type Organization_Booking_Question_Sum_Fields = {
  __typename?: 'organization_booking_question_sum_fields';
  position?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "organization_booking_question" */
export type Organization_Booking_Question_Sum_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** update columns of table "organization_booking_question" */
export enum Organization_Booking_Question_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  Position = 'position',
  /** column name */
  Scope = 'scope',
  /** column name */
  TextId = 'text_id',
  /** column name */
  Type = 'type',
  /** column name */
  Value = 'value'
}

export type Organization_Booking_Question_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Organization_Booking_Question_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organization_Booking_Question_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organization_Booking_Question_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Organization_Booking_Question_Var_Pop_Fields = {
  __typename?: 'organization_booking_question_var_pop_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "organization_booking_question" */
export type Organization_Booking_Question_Var_Pop_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Organization_Booking_Question_Var_Samp_Fields = {
  __typename?: 'organization_booking_question_var_samp_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "organization_booking_question" */
export type Organization_Booking_Question_Var_Samp_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Organization_Booking_Question_Variance_Fields = {
  __typename?: 'organization_booking_question_variance_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "organization_booking_question" */
export type Organization_Booking_Question_Variance_Order_By = {
  position?: InputMaybe<Order_By>;
};

export type Organization_Booking_Questions_Save_Input = {
  organization_id: Scalars['uuid']['input'];
  questions: Array<Organization_Booking_Question_Save_Input>;
};

/** Boolean expression to filter rows from the table "organization". All fields are combined with a logical 'AND'. */
export type Organization_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_Bool_Exp>>;
  _not?: InputMaybe<Organization_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_Bool_Exp>>;
  booking_questions?: InputMaybe<Organization_Booking_Question_Bool_Exp>;
  booking_questions_aggregate?: InputMaybe<Organization_Booking_Question_Aggregate_Bool_Exp>;
  bookings?: InputMaybe<Booking_Bool_Exp>;
  bookings_aggregate?: InputMaybe<Booking_Aggregate_Bool_Exp>;
  branding?: InputMaybe<Organization_Branding_Bool_Exp>;
  branding_id?: InputMaybe<Uuid_Comparison_Exp>;
  business_model?: InputMaybe<Organization_Business_Model_Bool_Exp>;
  business_model_id?: InputMaybe<Uuid_Comparison_Exp>;
  contacts?: InputMaybe<Contact_Bool_Exp>;
  contacts_aggregate?: InputMaybe<Contact_Aggregate_Bool_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  features?: InputMaybe<Feature_Bool_Exp>;
  features_aggregate?: InputMaybe<Feature_Aggregate_Bool_Exp>;
  headline?: InputMaybe<Organization_Headline_Bool_Exp>;
  headline_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  language?: InputMaybe<String_Comparison_Exp>;
  members?: InputMaybe<Organization_Member_Bool_Exp>;
  members_aggregate?: InputMaybe<Organization_Member_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  phone_number?: InputMaybe<String_Comparison_Exp>;
  product_groups?: InputMaybe<Product_Group_Bool_Exp>;
  product_groups_aggregate?: InputMaybe<Product_Group_Aggregate_Bool_Exp>;
  products?: InputMaybe<Product_Bool_Exp>;
  products_aggregate?: InputMaybe<Product_Aggregate_Bool_Exp>;
  sections?: InputMaybe<My_Web_Section_Bool_Exp>;
  sections_aggregate?: InputMaybe<My_Web_Section_Aggregate_Bool_Exp>;
  sites?: InputMaybe<Site_Bool_Exp>;
  sites_aggregate?: InputMaybe<Site_Aggregate_Bool_Exp>;
  socials?: InputMaybe<Organization_Socials_Bool_Exp>;
  socials_id?: InputMaybe<Uuid_Comparison_Exp>;
  supplements?: InputMaybe<Supplement_Bool_Exp>;
  supplements_aggregate?: InputMaybe<Supplement_Aggregate_Bool_Exp>;
  venues?: InputMaybe<Venue_Bool_Exp>;
  venues_aggregate?: InputMaybe<Venue_Aggregate_Bool_Exp>;
};

/** columns and relationships of "organization_branding" */
export type Organization_Branding = {
  __typename?: 'organization_branding';
  favicon_id?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
  logo_id?: Maybe<Scalars['uuid']['output']>;
  logo_light_id?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  meta_description?: Maybe<Organization_Branding_Meta_Description>;
  meta_description_id?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  meta_title: Organization_Branding_Meta_Title;
  meta_title_id: Scalars['uuid']['output'];
  /** An object relationship */
  organization?: Maybe<Organization>;
};

/** aggregated selection of "organization_branding" */
export type Organization_Branding_Aggregate = {
  __typename?: 'organization_branding_aggregate';
  aggregate?: Maybe<Organization_Branding_Aggregate_Fields>;
  nodes: Array<Organization_Branding>;
};

/** aggregate fields of "organization_branding" */
export type Organization_Branding_Aggregate_Fields = {
  __typename?: 'organization_branding_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Organization_Branding_Max_Fields>;
  min?: Maybe<Organization_Branding_Min_Fields>;
};


/** aggregate fields of "organization_branding" */
export type Organization_Branding_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organization_Branding_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "organization_branding". All fields are combined with a logical 'AND'. */
export type Organization_Branding_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_Branding_Bool_Exp>>;
  _not?: InputMaybe<Organization_Branding_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_Branding_Bool_Exp>>;
  favicon_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  logo_id?: InputMaybe<Uuid_Comparison_Exp>;
  logo_light_id?: InputMaybe<Uuid_Comparison_Exp>;
  meta_description?: InputMaybe<Organization_Branding_Meta_Description_Bool_Exp>;
  meta_description_id?: InputMaybe<Uuid_Comparison_Exp>;
  meta_title?: InputMaybe<Organization_Branding_Meta_Title_Bool_Exp>;
  meta_title_id?: InputMaybe<Uuid_Comparison_Exp>;
  organization?: InputMaybe<Organization_Bool_Exp>;
};

/** unique or primary key constraints on table "organization_branding" */
export enum Organization_Branding_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrganizationBrandingPkey = 'organization_branding_pkey'
}

/** input type for inserting data into table "organization_branding" */
export type Organization_Branding_Insert_Input = {
  favicon_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  logo_id?: InputMaybe<Scalars['uuid']['input']>;
  logo_light_id?: InputMaybe<Scalars['uuid']['input']>;
  meta_description?: InputMaybe<Organization_Branding_Meta_Description_Obj_Rel_Insert_Input>;
  meta_description_id?: InputMaybe<Scalars['uuid']['input']>;
  meta_title?: InputMaybe<Organization_Branding_Meta_Title_Obj_Rel_Insert_Input>;
  meta_title_id?: InputMaybe<Scalars['uuid']['input']>;
  organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Organization_Branding_Max_Fields = {
  __typename?: 'organization_branding_max_fields';
  favicon_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  logo_id?: Maybe<Scalars['uuid']['output']>;
  logo_light_id?: Maybe<Scalars['uuid']['output']>;
  meta_description_id?: Maybe<Scalars['uuid']['output']>;
  meta_title_id?: Maybe<Scalars['uuid']['output']>;
};

/** columns and relationships of "organization_branding_meta_description" */
export type Organization_Branding_Meta_Description = {
  __typename?: 'organization_branding_meta_description';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
};

/** aggregated selection of "organization_branding_meta_description" */
export type Organization_Branding_Meta_Description_Aggregate = {
  __typename?: 'organization_branding_meta_description_aggregate';
  aggregate?: Maybe<Organization_Branding_Meta_Description_Aggregate_Fields>;
  nodes: Array<Organization_Branding_Meta_Description>;
};

/** aggregate fields of "organization_branding_meta_description" */
export type Organization_Branding_Meta_Description_Aggregate_Fields = {
  __typename?: 'organization_branding_meta_description_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Organization_Branding_Meta_Description_Max_Fields>;
  min?: Maybe<Organization_Branding_Meta_Description_Min_Fields>;
};


/** aggregate fields of "organization_branding_meta_description" */
export type Organization_Branding_Meta_Description_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organization_Branding_Meta_Description_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "organization_branding_meta_description". All fields are combined with a logical 'AND'. */
export type Organization_Branding_Meta_Description_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_Branding_Meta_Description_Bool_Exp>>;
  _not?: InputMaybe<Organization_Branding_Meta_Description_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_Branding_Meta_Description_Bool_Exp>>;
  de?: InputMaybe<String_Comparison_Exp>;
  en?: InputMaybe<String_Comparison_Exp>;
  es?: InputMaybe<String_Comparison_Exp>;
  fr?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "organization_branding_meta_description" */
export enum Organization_Branding_Meta_Description_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrganizationBrandingMetaDescriptionPkey = 'organization_branding_meta_description_pkey'
}

/** input type for inserting data into table "organization_branding_meta_description" */
export type Organization_Branding_Meta_Description_Insert_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Organization_Branding_Meta_Description_Max_Fields = {
  __typename?: 'organization_branding_meta_description_max_fields';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Organization_Branding_Meta_Description_Min_Fields = {
  __typename?: 'organization_branding_meta_description_min_fields';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "organization_branding_meta_description" */
export type Organization_Branding_Meta_Description_Mutation_Response = {
  __typename?: 'organization_branding_meta_description_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Organization_Branding_Meta_Description>;
};

/** input type for inserting object relation for remote table "organization_branding_meta_description" */
export type Organization_Branding_Meta_Description_Obj_Rel_Insert_Input = {
  data: Organization_Branding_Meta_Description_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Organization_Branding_Meta_Description_On_Conflict>;
};

/** on_conflict condition type for table "organization_branding_meta_description" */
export type Organization_Branding_Meta_Description_On_Conflict = {
  constraint: Organization_Branding_Meta_Description_Constraint;
  update_columns?: Array<Organization_Branding_Meta_Description_Update_Column>;
  where?: InputMaybe<Organization_Branding_Meta_Description_Bool_Exp>;
};

/** Ordering options when selecting data from "organization_branding_meta_description". */
export type Organization_Branding_Meta_Description_Order_By = {
  de?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  es?: InputMaybe<Order_By>;
  fr?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: organization_branding_meta_description */
export type Organization_Branding_Meta_Description_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "organization_branding_meta_description" */
export enum Organization_Branding_Meta_Description_Select_Column {
  /** column name */
  De = 'de',
  /** column name */
  En = 'en',
  /** column name */
  Es = 'es',
  /** column name */
  Fr = 'fr',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "organization_branding_meta_description" */
export type Organization_Branding_Meta_Description_Set_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "organization_branding_meta_description" */
export type Organization_Branding_Meta_Description_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organization_Branding_Meta_Description_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Branding_Meta_Description_Stream_Cursor_Value_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "organization_branding_meta_description" */
export enum Organization_Branding_Meta_Description_Update_Column {
  /** column name */
  De = 'de',
  /** column name */
  En = 'en',
  /** column name */
  Es = 'es',
  /** column name */
  Fr = 'fr',
  /** column name */
  Id = 'id'
}

export type Organization_Branding_Meta_Description_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organization_Branding_Meta_Description_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organization_Branding_Meta_Description_Bool_Exp;
};

/** columns and relationships of "organization_branding_meta_title" */
export type Organization_Branding_Meta_Title = {
  __typename?: 'organization_branding_meta_title';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
};

/** aggregated selection of "organization_branding_meta_title" */
export type Organization_Branding_Meta_Title_Aggregate = {
  __typename?: 'organization_branding_meta_title_aggregate';
  aggregate?: Maybe<Organization_Branding_Meta_Title_Aggregate_Fields>;
  nodes: Array<Organization_Branding_Meta_Title>;
};

/** aggregate fields of "organization_branding_meta_title" */
export type Organization_Branding_Meta_Title_Aggregate_Fields = {
  __typename?: 'organization_branding_meta_title_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Organization_Branding_Meta_Title_Max_Fields>;
  min?: Maybe<Organization_Branding_Meta_Title_Min_Fields>;
};


/** aggregate fields of "organization_branding_meta_title" */
export type Organization_Branding_Meta_Title_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organization_Branding_Meta_Title_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "organization_branding_meta_title". All fields are combined with a logical 'AND'. */
export type Organization_Branding_Meta_Title_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_Branding_Meta_Title_Bool_Exp>>;
  _not?: InputMaybe<Organization_Branding_Meta_Title_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_Branding_Meta_Title_Bool_Exp>>;
  de?: InputMaybe<String_Comparison_Exp>;
  en?: InputMaybe<String_Comparison_Exp>;
  es?: InputMaybe<String_Comparison_Exp>;
  fr?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "organization_branding_meta_title" */
export enum Organization_Branding_Meta_Title_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrganizationBrandingMetaTitlePkey = 'organization_branding_meta_title_pkey'
}

/** input type for inserting data into table "organization_branding_meta_title" */
export type Organization_Branding_Meta_Title_Insert_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Organization_Branding_Meta_Title_Max_Fields = {
  __typename?: 'organization_branding_meta_title_max_fields';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Organization_Branding_Meta_Title_Min_Fields = {
  __typename?: 'organization_branding_meta_title_min_fields';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "organization_branding_meta_title" */
export type Organization_Branding_Meta_Title_Mutation_Response = {
  __typename?: 'organization_branding_meta_title_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Organization_Branding_Meta_Title>;
};

/** input type for inserting object relation for remote table "organization_branding_meta_title" */
export type Organization_Branding_Meta_Title_Obj_Rel_Insert_Input = {
  data: Organization_Branding_Meta_Title_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Organization_Branding_Meta_Title_On_Conflict>;
};

/** on_conflict condition type for table "organization_branding_meta_title" */
export type Organization_Branding_Meta_Title_On_Conflict = {
  constraint: Organization_Branding_Meta_Title_Constraint;
  update_columns?: Array<Organization_Branding_Meta_Title_Update_Column>;
  where?: InputMaybe<Organization_Branding_Meta_Title_Bool_Exp>;
};

/** Ordering options when selecting data from "organization_branding_meta_title". */
export type Organization_Branding_Meta_Title_Order_By = {
  de?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  es?: InputMaybe<Order_By>;
  fr?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: organization_branding_meta_title */
export type Organization_Branding_Meta_Title_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "organization_branding_meta_title" */
export enum Organization_Branding_Meta_Title_Select_Column {
  /** column name */
  De = 'de',
  /** column name */
  En = 'en',
  /** column name */
  Es = 'es',
  /** column name */
  Fr = 'fr',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "organization_branding_meta_title" */
export type Organization_Branding_Meta_Title_Set_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "organization_branding_meta_title" */
export type Organization_Branding_Meta_Title_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organization_Branding_Meta_Title_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Branding_Meta_Title_Stream_Cursor_Value_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "organization_branding_meta_title" */
export enum Organization_Branding_Meta_Title_Update_Column {
  /** column name */
  De = 'de',
  /** column name */
  En = 'en',
  /** column name */
  Es = 'es',
  /** column name */
  Fr = 'fr',
  /** column name */
  Id = 'id'
}

export type Organization_Branding_Meta_Title_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organization_Branding_Meta_Title_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organization_Branding_Meta_Title_Bool_Exp;
};

/** aggregate min on columns */
export type Organization_Branding_Min_Fields = {
  __typename?: 'organization_branding_min_fields';
  favicon_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  logo_id?: Maybe<Scalars['uuid']['output']>;
  logo_light_id?: Maybe<Scalars['uuid']['output']>;
  meta_description_id?: Maybe<Scalars['uuid']['output']>;
  meta_title_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "organization_branding" */
export type Organization_Branding_Mutation_Response = {
  __typename?: 'organization_branding_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Organization_Branding>;
};

/** input type for inserting object relation for remote table "organization_branding" */
export type Organization_Branding_Obj_Rel_Insert_Input = {
  data: Organization_Branding_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Organization_Branding_On_Conflict>;
};

/** on_conflict condition type for table "organization_branding" */
export type Organization_Branding_On_Conflict = {
  constraint: Organization_Branding_Constraint;
  update_columns?: Array<Organization_Branding_Update_Column>;
  where?: InputMaybe<Organization_Branding_Bool_Exp>;
};

/** Ordering options when selecting data from "organization_branding". */
export type Organization_Branding_Order_By = {
  favicon_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  logo_id?: InputMaybe<Order_By>;
  logo_light_id?: InputMaybe<Order_By>;
  meta_description?: InputMaybe<Organization_Branding_Meta_Description_Order_By>;
  meta_description_id?: InputMaybe<Order_By>;
  meta_title?: InputMaybe<Organization_Branding_Meta_Title_Order_By>;
  meta_title_id?: InputMaybe<Order_By>;
  organization?: InputMaybe<Organization_Order_By>;
};

/** primary key columns input for table: organization_branding */
export type Organization_Branding_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

export type Organization_Branding_Save_Input = {
  favicon_id?: InputMaybe<Scalars['uuid']['input']>;
  id: Scalars['uuid']['input'];
  logo_id?: InputMaybe<Scalars['uuid']['input']>;
  logo_light_id?: InputMaybe<Scalars['uuid']['input']>;
  meta_description?: InputMaybe<Multilanguage_Field_Input>;
  meta_title?: InputMaybe<Multilanguage_Field_Input>;
};

/** select columns of table "organization_branding" */
export enum Organization_Branding_Select_Column {
  /** column name */
  FaviconId = 'favicon_id',
  /** column name */
  Id = 'id',
  /** column name */
  LogoId = 'logo_id',
  /** column name */
  LogoLightId = 'logo_light_id',
  /** column name */
  MetaDescriptionId = 'meta_description_id',
  /** column name */
  MetaTitleId = 'meta_title_id'
}

/** input type for updating data in table "organization_branding" */
export type Organization_Branding_Set_Input = {
  favicon_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  logo_id?: InputMaybe<Scalars['uuid']['input']>;
  logo_light_id?: InputMaybe<Scalars['uuid']['input']>;
  meta_description_id?: InputMaybe<Scalars['uuid']['input']>;
  meta_title_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "organization_branding" */
export type Organization_Branding_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organization_Branding_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Branding_Stream_Cursor_Value_Input = {
  favicon_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  logo_id?: InputMaybe<Scalars['uuid']['input']>;
  logo_light_id?: InputMaybe<Scalars['uuid']['input']>;
  meta_description_id?: InputMaybe<Scalars['uuid']['input']>;
  meta_title_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "organization_branding" */
export enum Organization_Branding_Update_Column {
  /** column name */
  FaviconId = 'favicon_id',
  /** column name */
  Id = 'id',
  /** column name */
  LogoId = 'logo_id',
  /** column name */
  LogoLightId = 'logo_light_id',
  /** column name */
  MetaDescriptionId = 'meta_description_id',
  /** column name */
  MetaTitleId = 'meta_title_id'
}

export type Organization_Branding_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organization_Branding_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organization_Branding_Bool_Exp;
};

/** columns and relationships of "organization_business_model" */
export type Organization_Business_Model = {
  __typename?: 'organization_business_model';
  id: Scalars['uuid']['output'];
  rate_type: Rate_Type_Enum;
  unit_management: Unit_Management_Enum;
};

/** aggregated selection of "organization_business_model" */
export type Organization_Business_Model_Aggregate = {
  __typename?: 'organization_business_model_aggregate';
  aggregate?: Maybe<Organization_Business_Model_Aggregate_Fields>;
  nodes: Array<Organization_Business_Model>;
};

/** aggregate fields of "organization_business_model" */
export type Organization_Business_Model_Aggregate_Fields = {
  __typename?: 'organization_business_model_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Organization_Business_Model_Max_Fields>;
  min?: Maybe<Organization_Business_Model_Min_Fields>;
};


/** aggregate fields of "organization_business_model" */
export type Organization_Business_Model_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organization_Business_Model_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "organization_business_model". All fields are combined with a logical 'AND'. */
export type Organization_Business_Model_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_Business_Model_Bool_Exp>>;
  _not?: InputMaybe<Organization_Business_Model_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_Business_Model_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  rate_type?: InputMaybe<Rate_Type_Enum_Comparison_Exp>;
  unit_management?: InputMaybe<Unit_Management_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "organization_business_model" */
export enum Organization_Business_Model_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrganizationBusinessModelPkey = 'organization_business_model_pkey'
}

/** input type for inserting data into table "organization_business_model" */
export type Organization_Business_Model_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  rate_type?: InputMaybe<Rate_Type_Enum>;
  unit_management?: InputMaybe<Unit_Management_Enum>;
};

/** aggregate max on columns */
export type Organization_Business_Model_Max_Fields = {
  __typename?: 'organization_business_model_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Organization_Business_Model_Min_Fields = {
  __typename?: 'organization_business_model_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "organization_business_model" */
export type Organization_Business_Model_Mutation_Response = {
  __typename?: 'organization_business_model_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Organization_Business_Model>;
};

/** input type for inserting object relation for remote table "organization_business_model" */
export type Organization_Business_Model_Obj_Rel_Insert_Input = {
  data: Organization_Business_Model_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Organization_Business_Model_On_Conflict>;
};

/** on_conflict condition type for table "organization_business_model" */
export type Organization_Business_Model_On_Conflict = {
  constraint: Organization_Business_Model_Constraint;
  update_columns?: Array<Organization_Business_Model_Update_Column>;
  where?: InputMaybe<Organization_Business_Model_Bool_Exp>;
};

/** Ordering options when selecting data from "organization_business_model". */
export type Organization_Business_Model_Order_By = {
  id?: InputMaybe<Order_By>;
  rate_type?: InputMaybe<Order_By>;
  unit_management?: InputMaybe<Order_By>;
};

/** primary key columns input for table: organization_business_model */
export type Organization_Business_Model_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "organization_business_model" */
export enum Organization_Business_Model_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  RateType = 'rate_type',
  /** column name */
  UnitManagement = 'unit_management'
}

/** input type for updating data in table "organization_business_model" */
export type Organization_Business_Model_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  rate_type?: InputMaybe<Rate_Type_Enum>;
  unit_management?: InputMaybe<Unit_Management_Enum>;
};

/** Streaming cursor of the table "organization_business_model" */
export type Organization_Business_Model_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organization_Business_Model_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Business_Model_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  rate_type?: InputMaybe<Rate_Type_Enum>;
  unit_management?: InputMaybe<Unit_Management_Enum>;
};

/** update columns of table "organization_business_model" */
export enum Organization_Business_Model_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  RateType = 'rate_type',
  /** column name */
  UnitManagement = 'unit_management'
}

export type Organization_Business_Model_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organization_Business_Model_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organization_Business_Model_Bool_Exp;
};

/** unique or primary key constraints on table "organization" */
export enum Organization_Constraint {
  /** unique or primary key constraint on columns "branding_id" */
  OrganizationBrandingIdKey = 'organization_branding_id_key',
  /** unique or primary key constraint on columns "name" */
  OrganizationNameKey = 'organization_name_key',
  /** unique or primary key constraint on columns "id" */
  OrganizationPkey = 'organization_pkey'
}

export type Organization_Create_Input = {
  name: Scalars['String']['input'];
  owner_email: Scalars['String']['input'];
};

/** columns and relationships of "organization_headline" */
export type Organization_Headline = {
  __typename?: 'organization_headline';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
};

/** aggregated selection of "organization_headline" */
export type Organization_Headline_Aggregate = {
  __typename?: 'organization_headline_aggregate';
  aggregate?: Maybe<Organization_Headline_Aggregate_Fields>;
  nodes: Array<Organization_Headline>;
};

/** aggregate fields of "organization_headline" */
export type Organization_Headline_Aggregate_Fields = {
  __typename?: 'organization_headline_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Organization_Headline_Max_Fields>;
  min?: Maybe<Organization_Headline_Min_Fields>;
};


/** aggregate fields of "organization_headline" */
export type Organization_Headline_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organization_Headline_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "organization_headline". All fields are combined with a logical 'AND'. */
export type Organization_Headline_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_Headline_Bool_Exp>>;
  _not?: InputMaybe<Organization_Headline_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_Headline_Bool_Exp>>;
  de?: InputMaybe<String_Comparison_Exp>;
  en?: InputMaybe<String_Comparison_Exp>;
  es?: InputMaybe<String_Comparison_Exp>;
  fr?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "organization_headline" */
export enum Organization_Headline_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrganizationHeadlinePkey = 'organization_headline_pkey'
}

/** input type for inserting data into table "organization_headline" */
export type Organization_Headline_Insert_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Organization_Headline_Max_Fields = {
  __typename?: 'organization_headline_max_fields';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Organization_Headline_Min_Fields = {
  __typename?: 'organization_headline_min_fields';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "organization_headline" */
export type Organization_Headline_Mutation_Response = {
  __typename?: 'organization_headline_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Organization_Headline>;
};

/** input type for inserting object relation for remote table "organization_headline" */
export type Organization_Headline_Obj_Rel_Insert_Input = {
  data: Organization_Headline_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Organization_Headline_On_Conflict>;
};

/** on_conflict condition type for table "organization_headline" */
export type Organization_Headline_On_Conflict = {
  constraint: Organization_Headline_Constraint;
  update_columns?: Array<Organization_Headline_Update_Column>;
  where?: InputMaybe<Organization_Headline_Bool_Exp>;
};

/** Ordering options when selecting data from "organization_headline". */
export type Organization_Headline_Order_By = {
  de?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  es?: InputMaybe<Order_By>;
  fr?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: organization_headline */
export type Organization_Headline_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "organization_headline" */
export enum Organization_Headline_Select_Column {
  /** column name */
  De = 'de',
  /** column name */
  En = 'en',
  /** column name */
  Es = 'es',
  /** column name */
  Fr = 'fr',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "organization_headline" */
export type Organization_Headline_Set_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "organization_headline" */
export type Organization_Headline_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organization_Headline_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Headline_Stream_Cursor_Value_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "organization_headline" */
export enum Organization_Headline_Update_Column {
  /** column name */
  De = 'de',
  /** column name */
  En = 'en',
  /** column name */
  Es = 'es',
  /** column name */
  Fr = 'fr',
  /** column name */
  Id = 'id'
}

export type Organization_Headline_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organization_Headline_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organization_Headline_Bool_Exp;
};

/** input type for inserting data into table "organization" */
export type Organization_Insert_Input = {
  booking_questions?: InputMaybe<Organization_Booking_Question_Arr_Rel_Insert_Input>;
  bookings?: InputMaybe<Booking_Arr_Rel_Insert_Input>;
  branding?: InputMaybe<Organization_Branding_Obj_Rel_Insert_Input>;
  branding_id?: InputMaybe<Scalars['uuid']['input']>;
  business_model?: InputMaybe<Organization_Business_Model_Obj_Rel_Insert_Input>;
  business_model_id?: InputMaybe<Scalars['uuid']['input']>;
  contacts?: InputMaybe<Contact_Arr_Rel_Insert_Input>;
  currency?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  features?: InputMaybe<Feature_Arr_Rel_Insert_Input>;
  headline?: InputMaybe<Organization_Headline_Obj_Rel_Insert_Input>;
  headline_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<Organization_Member_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  product_groups?: InputMaybe<Product_Group_Arr_Rel_Insert_Input>;
  products?: InputMaybe<Product_Arr_Rel_Insert_Input>;
  sections?: InputMaybe<My_Web_Section_Arr_Rel_Insert_Input>;
  sites?: InputMaybe<Site_Arr_Rel_Insert_Input>;
  socials?: InputMaybe<Organization_Socials_Obj_Rel_Insert_Input>;
  socials_id?: InputMaybe<Scalars['uuid']['input']>;
  supplements?: InputMaybe<Supplement_Arr_Rel_Insert_Input>;
  venues?: InputMaybe<Venue_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Organization_Max_Fields = {
  __typename?: 'organization_max_fields';
  branding_id?: Maybe<Scalars['uuid']['output']>;
  business_model_id?: Maybe<Scalars['uuid']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  headline_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  socials_id?: Maybe<Scalars['uuid']['output']>;
};

/** columns and relationships of "organization_member" */
export type Organization_Member = {
  __typename?: 'organization_member';
  /** An object relationship */
  organization: Organization;
  organization_id: Scalars['uuid']['output'];
  role: Role_Enum;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "organization_member" */
export type Organization_Member_Aggregate = {
  __typename?: 'organization_member_aggregate';
  aggregate?: Maybe<Organization_Member_Aggregate_Fields>;
  nodes: Array<Organization_Member>;
};

export type Organization_Member_Aggregate_Bool_Exp = {
  count?: InputMaybe<Organization_Member_Aggregate_Bool_Exp_Count>;
};

export type Organization_Member_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Organization_Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Organization_Member_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "organization_member" */
export type Organization_Member_Aggregate_Fields = {
  __typename?: 'organization_member_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Organization_Member_Max_Fields>;
  min?: Maybe<Organization_Member_Min_Fields>;
};


/** aggregate fields of "organization_member" */
export type Organization_Member_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organization_Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "organization_member" */
export type Organization_Member_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Organization_Member_Max_Order_By>;
  min?: InputMaybe<Organization_Member_Min_Order_By>;
};

/** input type for inserting array relation for remote table "organization_member" */
export type Organization_Member_Arr_Rel_Insert_Input = {
  data: Array<Organization_Member_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Organization_Member_On_Conflict>;
};

/** Boolean expression to filter rows from the table "organization_member". All fields are combined with a logical 'AND'. */
export type Organization_Member_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_Member_Bool_Exp>>;
  _not?: InputMaybe<Organization_Member_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_Member_Bool_Exp>>;
  organization?: InputMaybe<Organization_Bool_Exp>;
  organization_id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<Role_Enum_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "organization_member" */
export enum Organization_Member_Constraint {
  /** unique or primary key constraint on columns "user_id", "organization_id" */
  OrganizationMemberPkey = 'organization_member_pkey'
}

/** input type for inserting data into table "organization_member" */
export type Organization_Member_Insert_Input = {
  organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Role_Enum>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Organization_Member_Max_Fields = {
  __typename?: 'organization_member_max_fields';
  organization_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "organization_member" */
export type Organization_Member_Max_Order_By = {
  organization_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Organization_Member_Min_Fields = {
  __typename?: 'organization_member_min_fields';
  organization_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "organization_member" */
export type Organization_Member_Min_Order_By = {
  organization_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "organization_member" */
export type Organization_Member_Mutation_Response = {
  __typename?: 'organization_member_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Organization_Member>;
};

/** on_conflict condition type for table "organization_member" */
export type Organization_Member_On_Conflict = {
  constraint: Organization_Member_Constraint;
  update_columns?: Array<Organization_Member_Update_Column>;
  where?: InputMaybe<Organization_Member_Bool_Exp>;
};

/** Ordering options when selecting data from "organization_member". */
export type Organization_Member_Order_By = {
  organization?: InputMaybe<Organization_Order_By>;
  organization_id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: organization_member */
export type Organization_Member_Pk_Columns_Input = {
  organization_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};

/** select columns of table "organization_member" */
export enum Organization_Member_Select_Column {
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "organization_member" */
export type Organization_Member_Set_Input = {
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Role_Enum>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "organization_member" */
export type Organization_Member_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organization_Member_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Member_Stream_Cursor_Value_Input = {
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Role_Enum>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "organization_member" */
export enum Organization_Member_Update_Column {
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'user_id'
}

export type Organization_Member_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organization_Member_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organization_Member_Bool_Exp;
};

/** aggregate min on columns */
export type Organization_Min_Fields = {
  __typename?: 'organization_min_fields';
  branding_id?: Maybe<Scalars['uuid']['output']>;
  business_model_id?: Maybe<Scalars['uuid']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  headline_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  socials_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "organization" */
export type Organization_Mutation_Response = {
  __typename?: 'organization_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Organization>;
};

/** input type for inserting object relation for remote table "organization" */
export type Organization_Obj_Rel_Insert_Input = {
  data: Organization_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Organization_On_Conflict>;
};

/** on_conflict condition type for table "organization" */
export type Organization_On_Conflict = {
  constraint: Organization_Constraint;
  update_columns?: Array<Organization_Update_Column>;
  where?: InputMaybe<Organization_Bool_Exp>;
};

/** Ordering options when selecting data from "organization". */
export type Organization_Order_By = {
  booking_questions_aggregate?: InputMaybe<Organization_Booking_Question_Aggregate_Order_By>;
  bookings_aggregate?: InputMaybe<Booking_Aggregate_Order_By>;
  branding?: InputMaybe<Organization_Branding_Order_By>;
  branding_id?: InputMaybe<Order_By>;
  business_model?: InputMaybe<Organization_Business_Model_Order_By>;
  business_model_id?: InputMaybe<Order_By>;
  contacts_aggregate?: InputMaybe<Contact_Aggregate_Order_By>;
  currency?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  features_aggregate?: InputMaybe<Feature_Aggregate_Order_By>;
  headline?: InputMaybe<Organization_Headline_Order_By>;
  headline_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  language?: InputMaybe<Order_By>;
  members_aggregate?: InputMaybe<Organization_Member_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  phone_number?: InputMaybe<Order_By>;
  product_groups_aggregate?: InputMaybe<Product_Group_Aggregate_Order_By>;
  products_aggregate?: InputMaybe<Product_Aggregate_Order_By>;
  sections_aggregate?: InputMaybe<My_Web_Section_Aggregate_Order_By>;
  sites_aggregate?: InputMaybe<Site_Aggregate_Order_By>;
  socials?: InputMaybe<Organization_Socials_Order_By>;
  socials_id?: InputMaybe<Order_By>;
  supplements_aggregate?: InputMaybe<Supplement_Aggregate_Order_By>;
  venues_aggregate?: InputMaybe<Venue_Aggregate_Order_By>;
};

/** primary key columns input for table: organization */
export type Organization_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "organization" */
export enum Organization_Select_Column {
  /** column name */
  BrandingId = 'branding_id',
  /** column name */
  BusinessModelId = 'business_model_id',
  /** column name */
  Currency = 'currency',
  /** column name */
  Email = 'email',
  /** column name */
  HeadlineId = 'headline_id',
  /** column name */
  Id = 'id',
  /** column name */
  Language = 'language',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  SocialsId = 'socials_id'
}

/** input type for updating data in table "organization" */
export type Organization_Set_Input = {
  branding_id?: InputMaybe<Scalars['uuid']['input']>;
  business_model_id?: InputMaybe<Scalars['uuid']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  headline_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  socials_id?: InputMaybe<Scalars['uuid']['input']>;
};

export type Organization_Settings_Save_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  headline: Multilanguage_Field_Input;
  id: Scalars['uuid']['input'];
  name: Scalars['String']['input'];
  phone_number?: InputMaybe<Scalars['String']['input']>;
  sites?: InputMaybe<Array<Organization_Site_Input>>;
  socials: Organization_Socials_Input;
};

export type Organization_Site_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  url: Scalars['String']['input'];
};

/** columns and relationships of "organization_socials" */
export type Organization_Socials = {
  __typename?: 'organization_socials';
  facebook?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  instagram?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  youtube?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "organization_socials" */
export type Organization_Socials_Aggregate = {
  __typename?: 'organization_socials_aggregate';
  aggregate?: Maybe<Organization_Socials_Aggregate_Fields>;
  nodes: Array<Organization_Socials>;
};

/** aggregate fields of "organization_socials" */
export type Organization_Socials_Aggregate_Fields = {
  __typename?: 'organization_socials_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Organization_Socials_Max_Fields>;
  min?: Maybe<Organization_Socials_Min_Fields>;
};


/** aggregate fields of "organization_socials" */
export type Organization_Socials_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organization_Socials_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "organization_socials". All fields are combined with a logical 'AND'. */
export type Organization_Socials_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_Socials_Bool_Exp>>;
  _not?: InputMaybe<Organization_Socials_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_Socials_Bool_Exp>>;
  facebook?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  instagram?: InputMaybe<String_Comparison_Exp>;
  twitter?: InputMaybe<String_Comparison_Exp>;
  youtube?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "organization_socials" */
export enum Organization_Socials_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrganizationSocialsPkey = 'organization_socials_pkey'
}

export type Organization_Socials_Input = {
  facebook?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  youtube?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "organization_socials" */
export type Organization_Socials_Insert_Input = {
  facebook?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  youtube?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Organization_Socials_Max_Fields = {
  __typename?: 'organization_socials_max_fields';
  facebook?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  instagram?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  youtube?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Organization_Socials_Min_Fields = {
  __typename?: 'organization_socials_min_fields';
  facebook?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  instagram?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  youtube?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "organization_socials" */
export type Organization_Socials_Mutation_Response = {
  __typename?: 'organization_socials_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Organization_Socials>;
};

/** input type for inserting object relation for remote table "organization_socials" */
export type Organization_Socials_Obj_Rel_Insert_Input = {
  data: Organization_Socials_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Organization_Socials_On_Conflict>;
};

/** on_conflict condition type for table "organization_socials" */
export type Organization_Socials_On_Conflict = {
  constraint: Organization_Socials_Constraint;
  update_columns?: Array<Organization_Socials_Update_Column>;
  where?: InputMaybe<Organization_Socials_Bool_Exp>;
};

/** Ordering options when selecting data from "organization_socials". */
export type Organization_Socials_Order_By = {
  facebook?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  instagram?: InputMaybe<Order_By>;
  twitter?: InputMaybe<Order_By>;
  youtube?: InputMaybe<Order_By>;
};

/** primary key columns input for table: organization_socials */
export type Organization_Socials_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "organization_socials" */
export enum Organization_Socials_Select_Column {
  /** column name */
  Facebook = 'facebook',
  /** column name */
  Id = 'id',
  /** column name */
  Instagram = 'instagram',
  /** column name */
  Twitter = 'twitter',
  /** column name */
  Youtube = 'youtube'
}

/** input type for updating data in table "organization_socials" */
export type Organization_Socials_Set_Input = {
  facebook?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  youtube?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "organization_socials" */
export type Organization_Socials_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organization_Socials_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Socials_Stream_Cursor_Value_Input = {
  facebook?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  youtube?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "organization_socials" */
export enum Organization_Socials_Update_Column {
  /** column name */
  Facebook = 'facebook',
  /** column name */
  Id = 'id',
  /** column name */
  Instagram = 'instagram',
  /** column name */
  Twitter = 'twitter',
  /** column name */
  Youtube = 'youtube'
}

export type Organization_Socials_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organization_Socials_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organization_Socials_Bool_Exp;
};

/** Streaming cursor of the table "organization" */
export type Organization_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organization_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Stream_Cursor_Value_Input = {
  branding_id?: InputMaybe<Scalars['uuid']['input']>;
  business_model_id?: InputMaybe<Scalars['uuid']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  headline_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  socials_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "organization" */
export enum Organization_Update_Column {
  /** column name */
  BrandingId = 'branding_id',
  /** column name */
  BusinessModelId = 'business_model_id',
  /** column name */
  Currency = 'currency',
  /** column name */
  Email = 'email',
  /** column name */
  HeadlineId = 'headline_id',
  /** column name */
  Id = 'id',
  /** column name */
  Language = 'language',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  SocialsId = 'socials_id'
}

export type Organization_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organization_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organization_Bool_Exp;
};

export type Person_Input = {
  age?: InputMaybe<Scalars['numeric']['input']>;
};

/** columns and relationships of "place" */
export type Place = {
  __typename?: 'place';
  id: Scalars['uuid']['output'];
  latitude: Scalars['numeric']['output'];
  longitude: Scalars['numeric']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "place" */
export type Place_Aggregate = {
  __typename?: 'place_aggregate';
  aggregate?: Maybe<Place_Aggregate_Fields>;
  nodes: Array<Place>;
};

/** aggregate fields of "place" */
export type Place_Aggregate_Fields = {
  __typename?: 'place_aggregate_fields';
  avg?: Maybe<Place_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Place_Max_Fields>;
  min?: Maybe<Place_Min_Fields>;
  stddev?: Maybe<Place_Stddev_Fields>;
  stddev_pop?: Maybe<Place_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Place_Stddev_Samp_Fields>;
  sum?: Maybe<Place_Sum_Fields>;
  var_pop?: Maybe<Place_Var_Pop_Fields>;
  var_samp?: Maybe<Place_Var_Samp_Fields>;
  variance?: Maybe<Place_Variance_Fields>;
};


/** aggregate fields of "place" */
export type Place_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Place_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Place_Avg_Fields = {
  __typename?: 'place_avg_fields';
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "place". All fields are combined with a logical 'AND'. */
export type Place_Bool_Exp = {
  _and?: InputMaybe<Array<Place_Bool_Exp>>;
  _not?: InputMaybe<Place_Bool_Exp>;
  _or?: InputMaybe<Array<Place_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  latitude?: InputMaybe<Numeric_Comparison_Exp>;
  longitude?: InputMaybe<Numeric_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "place" */
export enum Place_Constraint {
  /** unique or primary key constraint on columns "id" */
  PlacePkey = 'place_pkey'
}

/** input type for incrementing numeric columns in table "place" */
export type Place_Inc_Input = {
  latitude?: InputMaybe<Scalars['numeric']['input']>;
  longitude?: InputMaybe<Scalars['numeric']['input']>;
};

export type Place_Input = {
  latitude?: InputMaybe<Scalars['numeric']['input']>;
  longitude?: InputMaybe<Scalars['numeric']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "place" */
export type Place_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  latitude?: InputMaybe<Scalars['numeric']['input']>;
  longitude?: InputMaybe<Scalars['numeric']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Place_Max_Fields = {
  __typename?: 'place_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  latitude?: Maybe<Scalars['numeric']['output']>;
  longitude?: Maybe<Scalars['numeric']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Place_Min_Fields = {
  __typename?: 'place_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  latitude?: Maybe<Scalars['numeric']['output']>;
  longitude?: Maybe<Scalars['numeric']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "place" */
export type Place_Mutation_Response = {
  __typename?: 'place_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Place>;
};

/** input type for inserting object relation for remote table "place" */
export type Place_Obj_Rel_Insert_Input = {
  data: Place_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Place_On_Conflict>;
};

/** on_conflict condition type for table "place" */
export type Place_On_Conflict = {
  constraint: Place_Constraint;
  update_columns?: Array<Place_Update_Column>;
  where?: InputMaybe<Place_Bool_Exp>;
};

/** Ordering options when selecting data from "place". */
export type Place_Order_By = {
  id?: InputMaybe<Order_By>;
  latitude?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: place */
export type Place_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "place" */
export enum Place_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "place" */
export type Place_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  latitude?: InputMaybe<Scalars['numeric']['input']>;
  longitude?: InputMaybe<Scalars['numeric']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Place_Stddev_Fields = {
  __typename?: 'place_stddev_fields';
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Place_Stddev_Pop_Fields = {
  __typename?: 'place_stddev_pop_fields';
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Place_Stddev_Samp_Fields = {
  __typename?: 'place_stddev_samp_fields';
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "place" */
export type Place_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Place_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Place_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  latitude?: InputMaybe<Scalars['numeric']['input']>;
  longitude?: InputMaybe<Scalars['numeric']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Place_Sum_Fields = {
  __typename?: 'place_sum_fields';
  latitude?: Maybe<Scalars['numeric']['output']>;
  longitude?: Maybe<Scalars['numeric']['output']>;
};

/** update columns of table "place" */
export enum Place_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  Name = 'name'
}

export type Place_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Place_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Place_Set_Input>;
  /** filter the rows which have to be updated */
  where: Place_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Place_Var_Pop_Fields = {
  __typename?: 'place_var_pop_fields';
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Place_Var_Samp_Fields = {
  __typename?: 'place_var_samp_fields';
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Place_Variance_Fields = {
  __typename?: 'place_variance_fields';
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "product" */
export type Product = {
  __typename?: 'product';
  /** An array relationship */
  allotment_calendar: Array<Product_Allotment_Range>;
  /** An aggregate relationship */
  allotment_calendar_aggregate: Product_Allotment_Range_Aggregate;
  /** An object relationship */
  business_model?: Maybe<Product_Business_Model>;
  business_model_id?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  description: Product_Description;
  description_id: Scalars['uuid']['output'];
  /** An array relationship */
  features: Array<Product_Feature>;
  /** An aggregate relationship */
  features_aggregate: Product_Feature_Aggregate;
  /** An object relationship */
  gallery: Media_Gallery;
  gallery_id: Scalars['uuid']['output'];
  /** An object relationship */
  headline: Product_Headline;
  headline_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  name: Product_Name;
  name_id: Scalars['uuid']['output'];
  /** An object relationship */
  organization: Organization;
  organization_id: Scalars['uuid']['output'];
  /** An object relationship */
  place?: Maybe<Place>;
  place_id?: Maybe<Scalars['uuid']['output']>;
  price_from: Scalars['numeric']['output'];
  published: Scalars['Boolean']['output'];
  /** An array relationship */
  rates: Array<Rate>;
  /** An aggregate relationship */
  rates_aggregate: Rate_Aggregate;
  /** An object relationship */
  slug: Slug;
  slug_id: Scalars['uuid']['output'];
  /** An array relationship */
  supplements: Array<Product_Supplement>;
  /** An aggregate relationship */
  supplements_aggregate: Product_Supplement_Aggregate;
};


/** columns and relationships of "product" */
export type ProductAllotment_CalendarArgs = {
  distinct_on?: InputMaybe<Array<Product_Allotment_Range_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Allotment_Range_Order_By>>;
  where?: InputMaybe<Product_Allotment_Range_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductAllotment_Calendar_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Allotment_Range_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Allotment_Range_Order_By>>;
  where?: InputMaybe<Product_Allotment_Range_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductFeaturesArgs = {
  distinct_on?: InputMaybe<Array<Product_Feature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Feature_Order_By>>;
  where?: InputMaybe<Product_Feature_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductFeatures_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Feature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Feature_Order_By>>;
  where?: InputMaybe<Product_Feature_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductRatesArgs = {
  distinct_on?: InputMaybe<Array<Rate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rate_Order_By>>;
  where?: InputMaybe<Rate_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductRates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rate_Order_By>>;
  where?: InputMaybe<Rate_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductSupplementsArgs = {
  distinct_on?: InputMaybe<Array<Product_Supplement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Supplement_Order_By>>;
  where?: InputMaybe<Product_Supplement_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductSupplements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Supplement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Supplement_Order_By>>;
  where?: InputMaybe<Product_Supplement_Bool_Exp>;
};

/** aggregated selection of "product" */
export type Product_Aggregate = {
  __typename?: 'product_aggregate';
  aggregate?: Maybe<Product_Aggregate_Fields>;
  nodes: Array<Product>;
};

export type Product_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Product_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Product_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Product_Aggregate_Bool_Exp_Count>;
};

export type Product_Aggregate_Bool_Exp_Bool_And = {
  arguments: Product_Select_Column_Product_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Product_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Product_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Product_Select_Column_Product_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Product_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Product_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Product_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Product_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "product" */
export type Product_Aggregate_Fields = {
  __typename?: 'product_aggregate_fields';
  avg?: Maybe<Product_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Product_Max_Fields>;
  min?: Maybe<Product_Min_Fields>;
  stddev?: Maybe<Product_Stddev_Fields>;
  stddev_pop?: Maybe<Product_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Product_Stddev_Samp_Fields>;
  sum?: Maybe<Product_Sum_Fields>;
  var_pop?: Maybe<Product_Var_Pop_Fields>;
  var_samp?: Maybe<Product_Var_Samp_Fields>;
  variance?: Maybe<Product_Variance_Fields>;
};


/** aggregate fields of "product" */
export type Product_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "product" */
export type Product_Aggregate_Order_By = {
  avg?: InputMaybe<Product_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Product_Max_Order_By>;
  min?: InputMaybe<Product_Min_Order_By>;
  stddev?: InputMaybe<Product_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Product_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Product_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Product_Sum_Order_By>;
  var_pop?: InputMaybe<Product_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Product_Var_Samp_Order_By>;
  variance?: InputMaybe<Product_Variance_Order_By>;
};

/** columns and relationships of "product_allotment_range" */
export type Product_Allotment_Range = {
  __typename?: 'product_allotment_range';
  from: Scalars['timestamp']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  product: Product;
  product_id: Scalars['uuid']['output'];
  to: Scalars['timestamp']['output'];
  value: Scalars['Int']['output'];
};

/** aggregated selection of "product_allotment_range" */
export type Product_Allotment_Range_Aggregate = {
  __typename?: 'product_allotment_range_aggregate';
  aggregate?: Maybe<Product_Allotment_Range_Aggregate_Fields>;
  nodes: Array<Product_Allotment_Range>;
};

export type Product_Allotment_Range_Aggregate_Bool_Exp = {
  count?: InputMaybe<Product_Allotment_Range_Aggregate_Bool_Exp_Count>;
};

export type Product_Allotment_Range_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Product_Allotment_Range_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Product_Allotment_Range_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "product_allotment_range" */
export type Product_Allotment_Range_Aggregate_Fields = {
  __typename?: 'product_allotment_range_aggregate_fields';
  avg?: Maybe<Product_Allotment_Range_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Product_Allotment_Range_Max_Fields>;
  min?: Maybe<Product_Allotment_Range_Min_Fields>;
  stddev?: Maybe<Product_Allotment_Range_Stddev_Fields>;
  stddev_pop?: Maybe<Product_Allotment_Range_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Product_Allotment_Range_Stddev_Samp_Fields>;
  sum?: Maybe<Product_Allotment_Range_Sum_Fields>;
  var_pop?: Maybe<Product_Allotment_Range_Var_Pop_Fields>;
  var_samp?: Maybe<Product_Allotment_Range_Var_Samp_Fields>;
  variance?: Maybe<Product_Allotment_Range_Variance_Fields>;
};


/** aggregate fields of "product_allotment_range" */
export type Product_Allotment_Range_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Allotment_Range_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "product_allotment_range" */
export type Product_Allotment_Range_Aggregate_Order_By = {
  avg?: InputMaybe<Product_Allotment_Range_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Product_Allotment_Range_Max_Order_By>;
  min?: InputMaybe<Product_Allotment_Range_Min_Order_By>;
  stddev?: InputMaybe<Product_Allotment_Range_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Product_Allotment_Range_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Product_Allotment_Range_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Product_Allotment_Range_Sum_Order_By>;
  var_pop?: InputMaybe<Product_Allotment_Range_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Product_Allotment_Range_Var_Samp_Order_By>;
  variance?: InputMaybe<Product_Allotment_Range_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "product_allotment_range" */
export type Product_Allotment_Range_Arr_Rel_Insert_Input = {
  data: Array<Product_Allotment_Range_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_Allotment_Range_On_Conflict>;
};

/** aggregate avg on columns */
export type Product_Allotment_Range_Avg_Fields = {
  __typename?: 'product_allotment_range_avg_fields';
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "product_allotment_range" */
export type Product_Allotment_Range_Avg_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "product_allotment_range". All fields are combined with a logical 'AND'. */
export type Product_Allotment_Range_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Allotment_Range_Bool_Exp>>;
  _not?: InputMaybe<Product_Allotment_Range_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Allotment_Range_Bool_Exp>>;
  from?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  product?: InputMaybe<Product_Bool_Exp>;
  product_id?: InputMaybe<Uuid_Comparison_Exp>;
  to?: InputMaybe<Timestamp_Comparison_Exp>;
  value?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_allotment_range" */
export enum Product_Allotment_Range_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductAllotmentRangePkey = 'product_allotment_range_pkey'
}

/** input type for incrementing numeric columns in table "product_allotment_range" */
export type Product_Allotment_Range_Inc_Input = {
  value?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "product_allotment_range" */
export type Product_Allotment_Range_Insert_Input = {
  from?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  product?: InputMaybe<Product_Obj_Rel_Insert_Input>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
  to?: InputMaybe<Scalars['timestamp']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Product_Allotment_Range_Max_Fields = {
  __typename?: 'product_allotment_range_max_fields';
  from?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  product_id?: Maybe<Scalars['uuid']['output']>;
  to?: Maybe<Scalars['timestamp']['output']>;
  value?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "product_allotment_range" */
export type Product_Allotment_Range_Max_Order_By = {
  from?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  to?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Allotment_Range_Min_Fields = {
  __typename?: 'product_allotment_range_min_fields';
  from?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  product_id?: Maybe<Scalars['uuid']['output']>;
  to?: Maybe<Scalars['timestamp']['output']>;
  value?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "product_allotment_range" */
export type Product_Allotment_Range_Min_Order_By = {
  from?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  to?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "product_allotment_range" */
export type Product_Allotment_Range_Mutation_Response = {
  __typename?: 'product_allotment_range_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Allotment_Range>;
};

/** on_conflict condition type for table "product_allotment_range" */
export type Product_Allotment_Range_On_Conflict = {
  constraint: Product_Allotment_Range_Constraint;
  update_columns?: Array<Product_Allotment_Range_Update_Column>;
  where?: InputMaybe<Product_Allotment_Range_Bool_Exp>;
};

/** Ordering options when selecting data from "product_allotment_range". */
export type Product_Allotment_Range_Order_By = {
  from?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product?: InputMaybe<Product_Order_By>;
  product_id?: InputMaybe<Order_By>;
  to?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product_allotment_range */
export type Product_Allotment_Range_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "product_allotment_range" */
export enum Product_Allotment_Range_Select_Column {
  /** column name */
  From = 'from',
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  To = 'to',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "product_allotment_range" */
export type Product_Allotment_Range_Set_Input = {
  from?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
  to?: InputMaybe<Scalars['timestamp']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Product_Allotment_Range_Stddev_Fields = {
  __typename?: 'product_allotment_range_stddev_fields';
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "product_allotment_range" */
export type Product_Allotment_Range_Stddev_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Product_Allotment_Range_Stddev_Pop_Fields = {
  __typename?: 'product_allotment_range_stddev_pop_fields';
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "product_allotment_range" */
export type Product_Allotment_Range_Stddev_Pop_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Product_Allotment_Range_Stddev_Samp_Fields = {
  __typename?: 'product_allotment_range_stddev_samp_fields';
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "product_allotment_range" */
export type Product_Allotment_Range_Stddev_Samp_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "product_allotment_range" */
export type Product_Allotment_Range_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Allotment_Range_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Allotment_Range_Stream_Cursor_Value_Input = {
  from?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
  to?: InputMaybe<Scalars['timestamp']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Product_Allotment_Range_Sum_Fields = {
  __typename?: 'product_allotment_range_sum_fields';
  value?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "product_allotment_range" */
export type Product_Allotment_Range_Sum_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** update columns of table "product_allotment_range" */
export enum Product_Allotment_Range_Update_Column {
  /** column name */
  From = 'from',
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  To = 'to',
  /** column name */
  Value = 'value'
}

export type Product_Allotment_Range_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Product_Allotment_Range_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Allotment_Range_Set_Input>;
  /** filter the rows which have to be updated */
  where: Product_Allotment_Range_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Product_Allotment_Range_Var_Pop_Fields = {
  __typename?: 'product_allotment_range_var_pop_fields';
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "product_allotment_range" */
export type Product_Allotment_Range_Var_Pop_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Product_Allotment_Range_Var_Samp_Fields = {
  __typename?: 'product_allotment_range_var_samp_fields';
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "product_allotment_range" */
export type Product_Allotment_Range_Var_Samp_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Product_Allotment_Range_Variance_Fields = {
  __typename?: 'product_allotment_range_variance_fields';
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "product_allotment_range" */
export type Product_Allotment_Range_Variance_Order_By = {
  value?: InputMaybe<Order_By>;
};

export type Product_And_Pax_Questions_Answers = {
  adults: Array<Array<Booking_Question_Answer>>;
  children: Array<Array<Booking_Question_Answer>>;
  product_anwers: Array<Booking_Question_Answer>;
};

/** input type for inserting array relation for remote table "product" */
export type Product_Arr_Rel_Insert_Input = {
  data: Array<Product_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_On_Conflict>;
};

/** aggregate avg on columns */
export type Product_Avg_Fields = {
  __typename?: 'product_avg_fields';
  price_from?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "product" */
export type Product_Avg_Order_By = {
  price_from?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "product". All fields are combined with a logical 'AND'. */
export type Product_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Bool_Exp>>;
  _not?: InputMaybe<Product_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Bool_Exp>>;
  allotment_calendar?: InputMaybe<Product_Allotment_Range_Bool_Exp>;
  allotment_calendar_aggregate?: InputMaybe<Product_Allotment_Range_Aggregate_Bool_Exp>;
  business_model?: InputMaybe<Product_Business_Model_Bool_Exp>;
  business_model_id?: InputMaybe<Uuid_Comparison_Exp>;
  description?: InputMaybe<Product_Description_Bool_Exp>;
  description_id?: InputMaybe<Uuid_Comparison_Exp>;
  features?: InputMaybe<Product_Feature_Bool_Exp>;
  features_aggregate?: InputMaybe<Product_Feature_Aggregate_Bool_Exp>;
  gallery?: InputMaybe<Media_Gallery_Bool_Exp>;
  gallery_id?: InputMaybe<Uuid_Comparison_Exp>;
  headline?: InputMaybe<Product_Headline_Bool_Exp>;
  headline_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<Product_Name_Bool_Exp>;
  name_id?: InputMaybe<Uuid_Comparison_Exp>;
  organization?: InputMaybe<Organization_Bool_Exp>;
  organization_id?: InputMaybe<Uuid_Comparison_Exp>;
  place?: InputMaybe<Place_Bool_Exp>;
  place_id?: InputMaybe<Uuid_Comparison_Exp>;
  price_from?: InputMaybe<Numeric_Comparison_Exp>;
  published?: InputMaybe<Boolean_Comparison_Exp>;
  rates?: InputMaybe<Rate_Bool_Exp>;
  rates_aggregate?: InputMaybe<Rate_Aggregate_Bool_Exp>;
  slug?: InputMaybe<Slug_Bool_Exp>;
  slug_id?: InputMaybe<Uuid_Comparison_Exp>;
  supplements?: InputMaybe<Product_Supplement_Bool_Exp>;
  supplements_aggregate?: InputMaybe<Product_Supplement_Aggregate_Bool_Exp>;
};

/** columns and relationships of "product_business_model" */
export type Product_Business_Model = {
  __typename?: 'product_business_model';
  id: Scalars['uuid']['output'];
  time_management: Rate_Type_Enum;
  unit_management: Unit_Management_Enum;
};

/** aggregated selection of "product_business_model" */
export type Product_Business_Model_Aggregate = {
  __typename?: 'product_business_model_aggregate';
  aggregate?: Maybe<Product_Business_Model_Aggregate_Fields>;
  nodes: Array<Product_Business_Model>;
};

/** aggregate fields of "product_business_model" */
export type Product_Business_Model_Aggregate_Fields = {
  __typename?: 'product_business_model_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Product_Business_Model_Max_Fields>;
  min?: Maybe<Product_Business_Model_Min_Fields>;
};


/** aggregate fields of "product_business_model" */
export type Product_Business_Model_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Business_Model_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "product_business_model". All fields are combined with a logical 'AND'. */
export type Product_Business_Model_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Business_Model_Bool_Exp>>;
  _not?: InputMaybe<Product_Business_Model_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Business_Model_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  time_management?: InputMaybe<Rate_Type_Enum_Comparison_Exp>;
  unit_management?: InputMaybe<Unit_Management_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_business_model" */
export enum Product_Business_Model_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductBusinessModelPkey = 'product_business_model_pkey'
}

/** input type for inserting data into table "product_business_model" */
export type Product_Business_Model_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  time_management?: InputMaybe<Rate_Type_Enum>;
  unit_management?: InputMaybe<Unit_Management_Enum>;
};

/** aggregate max on columns */
export type Product_Business_Model_Max_Fields = {
  __typename?: 'product_business_model_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Product_Business_Model_Min_Fields = {
  __typename?: 'product_business_model_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "product_business_model" */
export type Product_Business_Model_Mutation_Response = {
  __typename?: 'product_business_model_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Business_Model>;
};

/** input type for inserting object relation for remote table "product_business_model" */
export type Product_Business_Model_Obj_Rel_Insert_Input = {
  data: Product_Business_Model_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_Business_Model_On_Conflict>;
};

/** on_conflict condition type for table "product_business_model" */
export type Product_Business_Model_On_Conflict = {
  constraint: Product_Business_Model_Constraint;
  update_columns?: Array<Product_Business_Model_Update_Column>;
  where?: InputMaybe<Product_Business_Model_Bool_Exp>;
};

/** Ordering options when selecting data from "product_business_model". */
export type Product_Business_Model_Order_By = {
  id?: InputMaybe<Order_By>;
  time_management?: InputMaybe<Order_By>;
  unit_management?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product_business_model */
export type Product_Business_Model_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "product_business_model" */
export enum Product_Business_Model_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  TimeManagement = 'time_management',
  /** column name */
  UnitManagement = 'unit_management'
}

/** input type for updating data in table "product_business_model" */
export type Product_Business_Model_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  time_management?: InputMaybe<Rate_Type_Enum>;
  unit_management?: InputMaybe<Unit_Management_Enum>;
};

/** Streaming cursor of the table "product_business_model" */
export type Product_Business_Model_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Business_Model_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Business_Model_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  time_management?: InputMaybe<Rate_Type_Enum>;
  unit_management?: InputMaybe<Unit_Management_Enum>;
};

/** update columns of table "product_business_model" */
export enum Product_Business_Model_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  TimeManagement = 'time_management',
  /** column name */
  UnitManagement = 'unit_management'
}

export type Product_Business_Model_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Business_Model_Set_Input>;
  /** filter the rows which have to be updated */
  where: Product_Business_Model_Bool_Exp;
};

/** unique or primary key constraints on table "product" */
export enum Product_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductContentPkey = 'product_content_pkey'
}

export type Product_Create_Input = {
  id: Scalars['uuid']['input'];
  organization_id: Scalars['uuid']['input'];
};

/** columns and relationships of "product_description" */
export type Product_Description = {
  __typename?: 'product_description';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
};

/** aggregated selection of "product_description" */
export type Product_Description_Aggregate = {
  __typename?: 'product_description_aggregate';
  aggregate?: Maybe<Product_Description_Aggregate_Fields>;
  nodes: Array<Product_Description>;
};

/** aggregate fields of "product_description" */
export type Product_Description_Aggregate_Fields = {
  __typename?: 'product_description_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Product_Description_Max_Fields>;
  min?: Maybe<Product_Description_Min_Fields>;
};


/** aggregate fields of "product_description" */
export type Product_Description_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Description_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "product_description". All fields are combined with a logical 'AND'. */
export type Product_Description_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Description_Bool_Exp>>;
  _not?: InputMaybe<Product_Description_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Description_Bool_Exp>>;
  de?: InputMaybe<String_Comparison_Exp>;
  en?: InputMaybe<String_Comparison_Exp>;
  es?: InputMaybe<String_Comparison_Exp>;
  fr?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_description" */
export enum Product_Description_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductDescriptionPkey = 'product_description_pkey'
}

/** input type for inserting data into table "product_description" */
export type Product_Description_Insert_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Product_Description_Max_Fields = {
  __typename?: 'product_description_max_fields';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Product_Description_Min_Fields = {
  __typename?: 'product_description_min_fields';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "product_description" */
export type Product_Description_Mutation_Response = {
  __typename?: 'product_description_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Description>;
};

/** input type for inserting object relation for remote table "product_description" */
export type Product_Description_Obj_Rel_Insert_Input = {
  data: Product_Description_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_Description_On_Conflict>;
};

/** on_conflict condition type for table "product_description" */
export type Product_Description_On_Conflict = {
  constraint: Product_Description_Constraint;
  update_columns?: Array<Product_Description_Update_Column>;
  where?: InputMaybe<Product_Description_Bool_Exp>;
};

/** Ordering options when selecting data from "product_description". */
export type Product_Description_Order_By = {
  de?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  es?: InputMaybe<Order_By>;
  fr?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product_description */
export type Product_Description_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "product_description" */
export enum Product_Description_Select_Column {
  /** column name */
  De = 'de',
  /** column name */
  En = 'en',
  /** column name */
  Es = 'es',
  /** column name */
  Fr = 'fr',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "product_description" */
export type Product_Description_Set_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "product_description" */
export type Product_Description_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Description_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Description_Stream_Cursor_Value_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "product_description" */
export enum Product_Description_Update_Column {
  /** column name */
  De = 'de',
  /** column name */
  En = 'en',
  /** column name */
  Es = 'es',
  /** column name */
  Fr = 'fr',
  /** column name */
  Id = 'id'
}

export type Product_Description_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Description_Set_Input>;
  /** filter the rows which have to be updated */
  where: Product_Description_Bool_Exp;
};

/** columns and relationships of "product_feature" */
export type Product_Feature = {
  __typename?: 'product_feature';
  /** An object relationship */
  feature: Feature;
  feature_id: Scalars['uuid']['output'];
  position: Scalars['numeric']['output'];
  /** An object relationship */
  product: Product;
  product_id: Scalars['uuid']['output'];
  value?: Maybe<Scalars['jsonb']['output']>;
};


/** columns and relationships of "product_feature" */
export type Product_FeatureValueArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "product_feature" */
export type Product_Feature_Aggregate = {
  __typename?: 'product_feature_aggregate';
  aggregate?: Maybe<Product_Feature_Aggregate_Fields>;
  nodes: Array<Product_Feature>;
};

export type Product_Feature_Aggregate_Bool_Exp = {
  count?: InputMaybe<Product_Feature_Aggregate_Bool_Exp_Count>;
};

export type Product_Feature_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Product_Feature_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Product_Feature_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "product_feature" */
export type Product_Feature_Aggregate_Fields = {
  __typename?: 'product_feature_aggregate_fields';
  avg?: Maybe<Product_Feature_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Product_Feature_Max_Fields>;
  min?: Maybe<Product_Feature_Min_Fields>;
  stddev?: Maybe<Product_Feature_Stddev_Fields>;
  stddev_pop?: Maybe<Product_Feature_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Product_Feature_Stddev_Samp_Fields>;
  sum?: Maybe<Product_Feature_Sum_Fields>;
  var_pop?: Maybe<Product_Feature_Var_Pop_Fields>;
  var_samp?: Maybe<Product_Feature_Var_Samp_Fields>;
  variance?: Maybe<Product_Feature_Variance_Fields>;
};


/** aggregate fields of "product_feature" */
export type Product_Feature_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Feature_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "product_feature" */
export type Product_Feature_Aggregate_Order_By = {
  avg?: InputMaybe<Product_Feature_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Product_Feature_Max_Order_By>;
  min?: InputMaybe<Product_Feature_Min_Order_By>;
  stddev?: InputMaybe<Product_Feature_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Product_Feature_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Product_Feature_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Product_Feature_Sum_Order_By>;
  var_pop?: InputMaybe<Product_Feature_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Product_Feature_Var_Samp_Order_By>;
  variance?: InputMaybe<Product_Feature_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Product_Feature_Append_Input = {
  value?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "product_feature" */
export type Product_Feature_Arr_Rel_Insert_Input = {
  data: Array<Product_Feature_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_Feature_On_Conflict>;
};

/** aggregate avg on columns */
export type Product_Feature_Avg_Fields = {
  __typename?: 'product_feature_avg_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "product_feature" */
export type Product_Feature_Avg_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "product_feature". All fields are combined with a logical 'AND'. */
export type Product_Feature_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Feature_Bool_Exp>>;
  _not?: InputMaybe<Product_Feature_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Feature_Bool_Exp>>;
  feature?: InputMaybe<Feature_Bool_Exp>;
  feature_id?: InputMaybe<Uuid_Comparison_Exp>;
  position?: InputMaybe<Numeric_Comparison_Exp>;
  product?: InputMaybe<Product_Bool_Exp>;
  product_id?: InputMaybe<Uuid_Comparison_Exp>;
  value?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_feature" */
export enum Product_Feature_Constraint {
  /** unique or primary key constraint on columns "product_id", "feature_id" */
  ProductFeaturePkey = 'product_feature_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Product_Feature_Delete_At_Path_Input = {
  value?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Product_Feature_Delete_Elem_Input = {
  value?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Product_Feature_Delete_Key_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "product_feature" */
export type Product_Feature_Inc_Input = {
  position?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "product_feature" */
export type Product_Feature_Insert_Input = {
  feature?: InputMaybe<Feature_Obj_Rel_Insert_Input>;
  feature_id?: InputMaybe<Scalars['uuid']['input']>;
  position?: InputMaybe<Scalars['numeric']['input']>;
  product?: InputMaybe<Product_Obj_Rel_Insert_Input>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
  value?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate max on columns */
export type Product_Feature_Max_Fields = {
  __typename?: 'product_feature_max_fields';
  feature_id?: Maybe<Scalars['uuid']['output']>;
  position?: Maybe<Scalars['numeric']['output']>;
  product_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "product_feature" */
export type Product_Feature_Max_Order_By = {
  feature_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Feature_Min_Fields = {
  __typename?: 'product_feature_min_fields';
  feature_id?: Maybe<Scalars['uuid']['output']>;
  position?: Maybe<Scalars['numeric']['output']>;
  product_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "product_feature" */
export type Product_Feature_Min_Order_By = {
  feature_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "product_feature" */
export type Product_Feature_Mutation_Response = {
  __typename?: 'product_feature_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Feature>;
};

/** on_conflict condition type for table "product_feature" */
export type Product_Feature_On_Conflict = {
  constraint: Product_Feature_Constraint;
  update_columns?: Array<Product_Feature_Update_Column>;
  where?: InputMaybe<Product_Feature_Bool_Exp>;
};

/** Ordering options when selecting data from "product_feature". */
export type Product_Feature_Order_By = {
  feature?: InputMaybe<Feature_Order_By>;
  feature_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  product?: InputMaybe<Product_Order_By>;
  product_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product_feature */
export type Product_Feature_Pk_Columns_Input = {
  feature_id: Scalars['uuid']['input'];
  product_id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Product_Feature_Prepend_Input = {
  value?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "product_feature" */
export enum Product_Feature_Select_Column {
  /** column name */
  FeatureId = 'feature_id',
  /** column name */
  Position = 'position',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "product_feature" */
export type Product_Feature_Set_Input = {
  feature_id?: InputMaybe<Scalars['uuid']['input']>;
  position?: InputMaybe<Scalars['numeric']['input']>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
  value?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate stddev on columns */
export type Product_Feature_Stddev_Fields = {
  __typename?: 'product_feature_stddev_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "product_feature" */
export type Product_Feature_Stddev_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Product_Feature_Stddev_Pop_Fields = {
  __typename?: 'product_feature_stddev_pop_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "product_feature" */
export type Product_Feature_Stddev_Pop_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Product_Feature_Stddev_Samp_Fields = {
  __typename?: 'product_feature_stddev_samp_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "product_feature" */
export type Product_Feature_Stddev_Samp_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "product_feature" */
export type Product_Feature_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Feature_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Feature_Stream_Cursor_Value_Input = {
  feature_id?: InputMaybe<Scalars['uuid']['input']>;
  position?: InputMaybe<Scalars['numeric']['input']>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
  value?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate sum on columns */
export type Product_Feature_Sum_Fields = {
  __typename?: 'product_feature_sum_fields';
  position?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "product_feature" */
export type Product_Feature_Sum_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** update columns of table "product_feature" */
export enum Product_Feature_Update_Column {
  /** column name */
  FeatureId = 'feature_id',
  /** column name */
  Position = 'position',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Value = 'value'
}

export type Product_Feature_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Product_Feature_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Product_Feature_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Product_Feature_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Product_Feature_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Product_Feature_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Product_Feature_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Feature_Set_Input>;
  /** filter the rows which have to be updated */
  where: Product_Feature_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Product_Feature_Var_Pop_Fields = {
  __typename?: 'product_feature_var_pop_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "product_feature" */
export type Product_Feature_Var_Pop_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Product_Feature_Var_Samp_Fields = {
  __typename?: 'product_feature_var_samp_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "product_feature" */
export type Product_Feature_Var_Samp_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Product_Feature_Variance_Fields = {
  __typename?: 'product_feature_variance_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "product_feature" */
export type Product_Feature_Variance_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** columns and relationships of "product_group" */
export type Product_Group = {
  __typename?: 'product_group';
  /** An object relationship */
  description?: Maybe<Translated_Text>;
  description_id: Scalars['uuid']['output'];
  /** An object relationship */
  headline?: Maybe<Translated_Text>;
  headline_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  image?: Maybe<Files>;
  image_id?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  name: Translated_Text;
  name_id: Scalars['uuid']['output'];
  /** An object relationship */
  organization: Organization;
  organization_id: Scalars['uuid']['output'];
  /** An array relationship */
  products: Array<Product_Group_Product>;
  /** An aggregate relationship */
  products_aggregate: Product_Group_Product_Aggregate;
  /** An object relationship */
  slug: Slug;
  slug_id: Scalars['uuid']['output'];
};


/** columns and relationships of "product_group" */
export type Product_GroupProductsArgs = {
  distinct_on?: InputMaybe<Array<Product_Group_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Group_Product_Order_By>>;
  where?: InputMaybe<Product_Group_Product_Bool_Exp>;
};


/** columns and relationships of "product_group" */
export type Product_GroupProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Group_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Group_Product_Order_By>>;
  where?: InputMaybe<Product_Group_Product_Bool_Exp>;
};

/** aggregated selection of "product_group" */
export type Product_Group_Aggregate = {
  __typename?: 'product_group_aggregate';
  aggregate?: Maybe<Product_Group_Aggregate_Fields>;
  nodes: Array<Product_Group>;
};

export type Product_Group_Aggregate_Bool_Exp = {
  count?: InputMaybe<Product_Group_Aggregate_Bool_Exp_Count>;
};

export type Product_Group_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Product_Group_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Product_Group_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "product_group" */
export type Product_Group_Aggregate_Fields = {
  __typename?: 'product_group_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Product_Group_Max_Fields>;
  min?: Maybe<Product_Group_Min_Fields>;
};


/** aggregate fields of "product_group" */
export type Product_Group_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Group_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "product_group" */
export type Product_Group_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Product_Group_Max_Order_By>;
  min?: InputMaybe<Product_Group_Min_Order_By>;
};

/** input type for inserting array relation for remote table "product_group" */
export type Product_Group_Arr_Rel_Insert_Input = {
  data: Array<Product_Group_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_Group_On_Conflict>;
};

/** Boolean expression to filter rows from the table "product_group". All fields are combined with a logical 'AND'. */
export type Product_Group_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Group_Bool_Exp>>;
  _not?: InputMaybe<Product_Group_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Group_Bool_Exp>>;
  description?: InputMaybe<Translated_Text_Bool_Exp>;
  description_id?: InputMaybe<Uuid_Comparison_Exp>;
  headline?: InputMaybe<Translated_Text_Bool_Exp>;
  headline_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<Files_Bool_Exp>;
  image_id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<Translated_Text_Bool_Exp>;
  name_id?: InputMaybe<Uuid_Comparison_Exp>;
  organization?: InputMaybe<Organization_Bool_Exp>;
  organization_id?: InputMaybe<Uuid_Comparison_Exp>;
  products?: InputMaybe<Product_Group_Product_Bool_Exp>;
  products_aggregate?: InputMaybe<Product_Group_Product_Aggregate_Bool_Exp>;
  slug?: InputMaybe<Slug_Bool_Exp>;
  slug_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_group" */
export enum Product_Group_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductGroupPkey = 'product_group_pkey'
}

/** input type for inserting data into table "product_group" */
export type Product_Group_Insert_Input = {
  description?: InputMaybe<Translated_Text_Obj_Rel_Insert_Input>;
  description_id?: InputMaybe<Scalars['uuid']['input']>;
  headline?: InputMaybe<Translated_Text_Obj_Rel_Insert_Input>;
  headline_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  image_id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Translated_Text_Obj_Rel_Insert_Input>;
  name_id?: InputMaybe<Scalars['uuid']['input']>;
  organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  products?: InputMaybe<Product_Group_Product_Arr_Rel_Insert_Input>;
  slug?: InputMaybe<Slug_Obj_Rel_Insert_Input>;
  slug_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Product_Group_Max_Fields = {
  __typename?: 'product_group_max_fields';
  description_id?: Maybe<Scalars['uuid']['output']>;
  headline_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_id?: Maybe<Scalars['uuid']['output']>;
  name_id?: Maybe<Scalars['uuid']['output']>;
  organization_id?: Maybe<Scalars['uuid']['output']>;
  slug_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "product_group" */
export type Product_Group_Max_Order_By = {
  description_id?: InputMaybe<Order_By>;
  headline_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  name_id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  slug_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Group_Min_Fields = {
  __typename?: 'product_group_min_fields';
  description_id?: Maybe<Scalars['uuid']['output']>;
  headline_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_id?: Maybe<Scalars['uuid']['output']>;
  name_id?: Maybe<Scalars['uuid']['output']>;
  organization_id?: Maybe<Scalars['uuid']['output']>;
  slug_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "product_group" */
export type Product_Group_Min_Order_By = {
  description_id?: InputMaybe<Order_By>;
  headline_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  name_id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  slug_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "product_group" */
export type Product_Group_Mutation_Response = {
  __typename?: 'product_group_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Group>;
};

/** input type for inserting object relation for remote table "product_group" */
export type Product_Group_Obj_Rel_Insert_Input = {
  data: Product_Group_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_Group_On_Conflict>;
};

/** on_conflict condition type for table "product_group" */
export type Product_Group_On_Conflict = {
  constraint: Product_Group_Constraint;
  update_columns?: Array<Product_Group_Update_Column>;
  where?: InputMaybe<Product_Group_Bool_Exp>;
};

/** Ordering options when selecting data from "product_group". */
export type Product_Group_Order_By = {
  description?: InputMaybe<Translated_Text_Order_By>;
  description_id?: InputMaybe<Order_By>;
  headline?: InputMaybe<Translated_Text_Order_By>;
  headline_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Files_Order_By>;
  image_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Translated_Text_Order_By>;
  name_id?: InputMaybe<Order_By>;
  organization?: InputMaybe<Organization_Order_By>;
  organization_id?: InputMaybe<Order_By>;
  products_aggregate?: InputMaybe<Product_Group_Product_Aggregate_Order_By>;
  slug?: InputMaybe<Slug_Order_By>;
  slug_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product_group */
export type Product_Group_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "product_group_product" */
export type Product_Group_Product = {
  __typename?: 'product_group_product';
  /** An object relationship */
  group: Product_Group;
  group_id: Scalars['uuid']['output'];
  position: Scalars['Int']['output'];
  /** An object relationship */
  product: Product;
  product_id: Scalars['uuid']['output'];
};

/** aggregated selection of "product_group_product" */
export type Product_Group_Product_Aggregate = {
  __typename?: 'product_group_product_aggregate';
  aggregate?: Maybe<Product_Group_Product_Aggregate_Fields>;
  nodes: Array<Product_Group_Product>;
};

export type Product_Group_Product_Aggregate_Bool_Exp = {
  count?: InputMaybe<Product_Group_Product_Aggregate_Bool_Exp_Count>;
};

export type Product_Group_Product_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Product_Group_Product_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Product_Group_Product_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "product_group_product" */
export type Product_Group_Product_Aggregate_Fields = {
  __typename?: 'product_group_product_aggregate_fields';
  avg?: Maybe<Product_Group_Product_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Product_Group_Product_Max_Fields>;
  min?: Maybe<Product_Group_Product_Min_Fields>;
  stddev?: Maybe<Product_Group_Product_Stddev_Fields>;
  stddev_pop?: Maybe<Product_Group_Product_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Product_Group_Product_Stddev_Samp_Fields>;
  sum?: Maybe<Product_Group_Product_Sum_Fields>;
  var_pop?: Maybe<Product_Group_Product_Var_Pop_Fields>;
  var_samp?: Maybe<Product_Group_Product_Var_Samp_Fields>;
  variance?: Maybe<Product_Group_Product_Variance_Fields>;
};


/** aggregate fields of "product_group_product" */
export type Product_Group_Product_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Group_Product_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "product_group_product" */
export type Product_Group_Product_Aggregate_Order_By = {
  avg?: InputMaybe<Product_Group_Product_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Product_Group_Product_Max_Order_By>;
  min?: InputMaybe<Product_Group_Product_Min_Order_By>;
  stddev?: InputMaybe<Product_Group_Product_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Product_Group_Product_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Product_Group_Product_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Product_Group_Product_Sum_Order_By>;
  var_pop?: InputMaybe<Product_Group_Product_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Product_Group_Product_Var_Samp_Order_By>;
  variance?: InputMaybe<Product_Group_Product_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "product_group_product" */
export type Product_Group_Product_Arr_Rel_Insert_Input = {
  data: Array<Product_Group_Product_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_Group_Product_On_Conflict>;
};

/** aggregate avg on columns */
export type Product_Group_Product_Avg_Fields = {
  __typename?: 'product_group_product_avg_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "product_group_product" */
export type Product_Group_Product_Avg_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "product_group_product". All fields are combined with a logical 'AND'. */
export type Product_Group_Product_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Group_Product_Bool_Exp>>;
  _not?: InputMaybe<Product_Group_Product_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Group_Product_Bool_Exp>>;
  group?: InputMaybe<Product_Group_Bool_Exp>;
  group_id?: InputMaybe<Uuid_Comparison_Exp>;
  position?: InputMaybe<Int_Comparison_Exp>;
  product?: InputMaybe<Product_Bool_Exp>;
  product_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_group_product" */
export enum Product_Group_Product_Constraint {
  /** unique or primary key constraint on columns "product_id", "group_id" */
  ProductGroupProductPkey = 'product_group_product_pkey'
}

/** input type for incrementing numeric columns in table "product_group_product" */
export type Product_Group_Product_Inc_Input = {
  position?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "product_group_product" */
export type Product_Group_Product_Insert_Input = {
  group?: InputMaybe<Product_Group_Obj_Rel_Insert_Input>;
  group_id?: InputMaybe<Scalars['uuid']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  product?: InputMaybe<Product_Obj_Rel_Insert_Input>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Product_Group_Product_Max_Fields = {
  __typename?: 'product_group_product_max_fields';
  group_id?: Maybe<Scalars['uuid']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  product_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "product_group_product" */
export type Product_Group_Product_Max_Order_By = {
  group_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Group_Product_Min_Fields = {
  __typename?: 'product_group_product_min_fields';
  group_id?: Maybe<Scalars['uuid']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  product_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "product_group_product" */
export type Product_Group_Product_Min_Order_By = {
  group_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "product_group_product" */
export type Product_Group_Product_Mutation_Response = {
  __typename?: 'product_group_product_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Group_Product>;
};

/** on_conflict condition type for table "product_group_product" */
export type Product_Group_Product_On_Conflict = {
  constraint: Product_Group_Product_Constraint;
  update_columns?: Array<Product_Group_Product_Update_Column>;
  where?: InputMaybe<Product_Group_Product_Bool_Exp>;
};

/** Ordering options when selecting data from "product_group_product". */
export type Product_Group_Product_Order_By = {
  group?: InputMaybe<Product_Group_Order_By>;
  group_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  product?: InputMaybe<Product_Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product_group_product */
export type Product_Group_Product_Pk_Columns_Input = {
  group_id: Scalars['uuid']['input'];
  product_id: Scalars['uuid']['input'];
};

/** select columns of table "product_group_product" */
export enum Product_Group_Product_Select_Column {
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Position = 'position',
  /** column name */
  ProductId = 'product_id'
}

/** input type for updating data in table "product_group_product" */
export type Product_Group_Product_Set_Input = {
  group_id?: InputMaybe<Scalars['uuid']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Product_Group_Product_Stddev_Fields = {
  __typename?: 'product_group_product_stddev_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "product_group_product" */
export type Product_Group_Product_Stddev_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Product_Group_Product_Stddev_Pop_Fields = {
  __typename?: 'product_group_product_stddev_pop_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "product_group_product" */
export type Product_Group_Product_Stddev_Pop_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Product_Group_Product_Stddev_Samp_Fields = {
  __typename?: 'product_group_product_stddev_samp_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "product_group_product" */
export type Product_Group_Product_Stddev_Samp_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "product_group_product" */
export type Product_Group_Product_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Group_Product_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Group_Product_Stream_Cursor_Value_Input = {
  group_id?: InputMaybe<Scalars['uuid']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Product_Group_Product_Sum_Fields = {
  __typename?: 'product_group_product_sum_fields';
  position?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "product_group_product" */
export type Product_Group_Product_Sum_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** update columns of table "product_group_product" */
export enum Product_Group_Product_Update_Column {
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Position = 'position',
  /** column name */
  ProductId = 'product_id'
}

export type Product_Group_Product_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Product_Group_Product_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Group_Product_Set_Input>;
  /** filter the rows which have to be updated */
  where: Product_Group_Product_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Product_Group_Product_Var_Pop_Fields = {
  __typename?: 'product_group_product_var_pop_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "product_group_product" */
export type Product_Group_Product_Var_Pop_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Product_Group_Product_Var_Samp_Fields = {
  __typename?: 'product_group_product_var_samp_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "product_group_product" */
export type Product_Group_Product_Var_Samp_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Product_Group_Product_Variance_Fields = {
  __typename?: 'product_group_product_variance_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "product_group_product" */
export type Product_Group_Product_Variance_Order_By = {
  position?: InputMaybe<Order_By>;
};

export type Product_Group_Save_Input = {
  description: Multilanguage_Field_Input;
  headline: Multilanguage_Field_Input;
  id: Scalars['uuid']['input'];
  image_id: Scalars['uuid']['input'];
  name: Multilanguage_Field_Input;
  organization_id: Scalars['uuid']['input'];
  products: Array<Selected_Item>;
};

/** select columns of table "product_group" */
export enum Product_Group_Select_Column {
  /** column name */
  DescriptionId = 'description_id',
  /** column name */
  HeadlineId = 'headline_id',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  NameId = 'name_id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  SlugId = 'slug_id'
}

/** input type for updating data in table "product_group" */
export type Product_Group_Set_Input = {
  description_id?: InputMaybe<Scalars['uuid']['input']>;
  headline_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_id?: InputMaybe<Scalars['uuid']['input']>;
  name_id?: InputMaybe<Scalars['uuid']['input']>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  slug_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "product_group" */
export type Product_Group_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Group_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Group_Stream_Cursor_Value_Input = {
  description_id?: InputMaybe<Scalars['uuid']['input']>;
  headline_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_id?: InputMaybe<Scalars['uuid']['input']>;
  name_id?: InputMaybe<Scalars['uuid']['input']>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  slug_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "product_group" */
export enum Product_Group_Update_Column {
  /** column name */
  DescriptionId = 'description_id',
  /** column name */
  HeadlineId = 'headline_id',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  NameId = 'name_id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  SlugId = 'slug_id'
}

export type Product_Group_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Group_Set_Input>;
  /** filter the rows which have to be updated */
  where: Product_Group_Bool_Exp;
};

/** columns and relationships of "product_headline" */
export type Product_Headline = {
  __typename?: 'product_headline';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
};

/** aggregated selection of "product_headline" */
export type Product_Headline_Aggregate = {
  __typename?: 'product_headline_aggregate';
  aggregate?: Maybe<Product_Headline_Aggregate_Fields>;
  nodes: Array<Product_Headline>;
};

/** aggregate fields of "product_headline" */
export type Product_Headline_Aggregate_Fields = {
  __typename?: 'product_headline_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Product_Headline_Max_Fields>;
  min?: Maybe<Product_Headline_Min_Fields>;
};


/** aggregate fields of "product_headline" */
export type Product_Headline_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Headline_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "product_headline". All fields are combined with a logical 'AND'. */
export type Product_Headline_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Headline_Bool_Exp>>;
  _not?: InputMaybe<Product_Headline_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Headline_Bool_Exp>>;
  de?: InputMaybe<String_Comparison_Exp>;
  en?: InputMaybe<String_Comparison_Exp>;
  es?: InputMaybe<String_Comparison_Exp>;
  fr?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_headline" */
export enum Product_Headline_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductHeadlinePkey = 'product_headline_pkey'
}

/** input type for inserting data into table "product_headline" */
export type Product_Headline_Insert_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Product_Headline_Max_Fields = {
  __typename?: 'product_headline_max_fields';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Product_Headline_Min_Fields = {
  __typename?: 'product_headline_min_fields';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "product_headline" */
export type Product_Headline_Mutation_Response = {
  __typename?: 'product_headline_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Headline>;
};

/** input type for inserting object relation for remote table "product_headline" */
export type Product_Headline_Obj_Rel_Insert_Input = {
  data: Product_Headline_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_Headline_On_Conflict>;
};

/** on_conflict condition type for table "product_headline" */
export type Product_Headline_On_Conflict = {
  constraint: Product_Headline_Constraint;
  update_columns?: Array<Product_Headline_Update_Column>;
  where?: InputMaybe<Product_Headline_Bool_Exp>;
};

/** Ordering options when selecting data from "product_headline". */
export type Product_Headline_Order_By = {
  de?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  es?: InputMaybe<Order_By>;
  fr?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product_headline */
export type Product_Headline_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "product_headline" */
export enum Product_Headline_Select_Column {
  /** column name */
  De = 'de',
  /** column name */
  En = 'en',
  /** column name */
  Es = 'es',
  /** column name */
  Fr = 'fr',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "product_headline" */
export type Product_Headline_Set_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "product_headline" */
export type Product_Headline_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Headline_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Headline_Stream_Cursor_Value_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "product_headline" */
export enum Product_Headline_Update_Column {
  /** column name */
  De = 'de',
  /** column name */
  En = 'en',
  /** column name */
  Es = 'es',
  /** column name */
  Fr = 'fr',
  /** column name */
  Id = 'id'
}

export type Product_Headline_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Headline_Set_Input>;
  /** filter the rows which have to be updated */
  where: Product_Headline_Bool_Exp;
};

/** input type for incrementing numeric columns in table "product" */
export type Product_Inc_Input = {
  price_from?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "product" */
export type Product_Insert_Input = {
  allotment_calendar?: InputMaybe<Product_Allotment_Range_Arr_Rel_Insert_Input>;
  business_model?: InputMaybe<Product_Business_Model_Obj_Rel_Insert_Input>;
  business_model_id?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Product_Description_Obj_Rel_Insert_Input>;
  description_id?: InputMaybe<Scalars['uuid']['input']>;
  features?: InputMaybe<Product_Feature_Arr_Rel_Insert_Input>;
  gallery?: InputMaybe<Media_Gallery_Obj_Rel_Insert_Input>;
  gallery_id?: InputMaybe<Scalars['uuid']['input']>;
  headline?: InputMaybe<Product_Headline_Obj_Rel_Insert_Input>;
  headline_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Product_Name_Obj_Rel_Insert_Input>;
  name_id?: InputMaybe<Scalars['uuid']['input']>;
  organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  place?: InputMaybe<Place_Obj_Rel_Insert_Input>;
  place_id?: InputMaybe<Scalars['uuid']['input']>;
  price_from?: InputMaybe<Scalars['numeric']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  rates?: InputMaybe<Rate_Arr_Rel_Insert_Input>;
  slug?: InputMaybe<Slug_Obj_Rel_Insert_Input>;
  slug_id?: InputMaybe<Scalars['uuid']['input']>;
  supplements?: InputMaybe<Product_Supplement_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Product_Max_Fields = {
  __typename?: 'product_max_fields';
  business_model_id?: Maybe<Scalars['uuid']['output']>;
  description_id?: Maybe<Scalars['uuid']['output']>;
  gallery_id?: Maybe<Scalars['uuid']['output']>;
  headline_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name_id?: Maybe<Scalars['uuid']['output']>;
  organization_id?: Maybe<Scalars['uuid']['output']>;
  place_id?: Maybe<Scalars['uuid']['output']>;
  price_from?: Maybe<Scalars['numeric']['output']>;
  slug_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "product" */
export type Product_Max_Order_By = {
  business_model_id?: InputMaybe<Order_By>;
  description_id?: InputMaybe<Order_By>;
  gallery_id?: InputMaybe<Order_By>;
  headline_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name_id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  place_id?: InputMaybe<Order_By>;
  price_from?: InputMaybe<Order_By>;
  slug_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Min_Fields = {
  __typename?: 'product_min_fields';
  business_model_id?: Maybe<Scalars['uuid']['output']>;
  description_id?: Maybe<Scalars['uuid']['output']>;
  gallery_id?: Maybe<Scalars['uuid']['output']>;
  headline_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name_id?: Maybe<Scalars['uuid']['output']>;
  organization_id?: Maybe<Scalars['uuid']['output']>;
  place_id?: Maybe<Scalars['uuid']['output']>;
  price_from?: Maybe<Scalars['numeric']['output']>;
  slug_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "product" */
export type Product_Min_Order_By = {
  business_model_id?: InputMaybe<Order_By>;
  description_id?: InputMaybe<Order_By>;
  gallery_id?: InputMaybe<Order_By>;
  headline_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name_id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  place_id?: InputMaybe<Order_By>;
  price_from?: InputMaybe<Order_By>;
  slug_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "product" */
export type Product_Mutation_Response = {
  __typename?: 'product_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Product>;
};

/** columns and relationships of "product_name" */
export type Product_Name = {
  __typename?: 'product_name';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
};

/** aggregated selection of "product_name" */
export type Product_Name_Aggregate = {
  __typename?: 'product_name_aggregate';
  aggregate?: Maybe<Product_Name_Aggregate_Fields>;
  nodes: Array<Product_Name>;
};

/** aggregate fields of "product_name" */
export type Product_Name_Aggregate_Fields = {
  __typename?: 'product_name_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Product_Name_Max_Fields>;
  min?: Maybe<Product_Name_Min_Fields>;
};


/** aggregate fields of "product_name" */
export type Product_Name_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Name_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "product_name". All fields are combined with a logical 'AND'. */
export type Product_Name_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Name_Bool_Exp>>;
  _not?: InputMaybe<Product_Name_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Name_Bool_Exp>>;
  de?: InputMaybe<String_Comparison_Exp>;
  en?: InputMaybe<String_Comparison_Exp>;
  es?: InputMaybe<String_Comparison_Exp>;
  fr?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_name" */
export enum Product_Name_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductNamePkey = 'product_name_pkey'
}

/** input type for inserting data into table "product_name" */
export type Product_Name_Insert_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Product_Name_Max_Fields = {
  __typename?: 'product_name_max_fields';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Product_Name_Min_Fields = {
  __typename?: 'product_name_min_fields';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "product_name" */
export type Product_Name_Mutation_Response = {
  __typename?: 'product_name_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Name>;
};

/** input type for inserting object relation for remote table "product_name" */
export type Product_Name_Obj_Rel_Insert_Input = {
  data: Product_Name_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_Name_On_Conflict>;
};

/** on_conflict condition type for table "product_name" */
export type Product_Name_On_Conflict = {
  constraint: Product_Name_Constraint;
  update_columns?: Array<Product_Name_Update_Column>;
  where?: InputMaybe<Product_Name_Bool_Exp>;
};

/** Ordering options when selecting data from "product_name". */
export type Product_Name_Order_By = {
  de?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  es?: InputMaybe<Order_By>;
  fr?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product_name */
export type Product_Name_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "product_name" */
export enum Product_Name_Select_Column {
  /** column name */
  De = 'de',
  /** column name */
  En = 'en',
  /** column name */
  Es = 'es',
  /** column name */
  Fr = 'fr',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "product_name" */
export type Product_Name_Set_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "product_name" */
export type Product_Name_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Name_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Name_Stream_Cursor_Value_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "product_name" */
export enum Product_Name_Update_Column {
  /** column name */
  De = 'de',
  /** column name */
  En = 'en',
  /** column name */
  Es = 'es',
  /** column name */
  Fr = 'fr',
  /** column name */
  Id = 'id'
}

export type Product_Name_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Name_Set_Input>;
  /** filter the rows which have to be updated */
  where: Product_Name_Bool_Exp;
};

/** input type for inserting object relation for remote table "product" */
export type Product_Obj_Rel_Insert_Input = {
  data: Product_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_On_Conflict>;
};

/** on_conflict condition type for table "product" */
export type Product_On_Conflict = {
  constraint: Product_Constraint;
  update_columns?: Array<Product_Update_Column>;
  where?: InputMaybe<Product_Bool_Exp>;
};

/** Ordering options when selecting data from "product". */
export type Product_Order_By = {
  allotment_calendar_aggregate?: InputMaybe<Product_Allotment_Range_Aggregate_Order_By>;
  business_model?: InputMaybe<Product_Business_Model_Order_By>;
  business_model_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Product_Description_Order_By>;
  description_id?: InputMaybe<Order_By>;
  features_aggregate?: InputMaybe<Product_Feature_Aggregate_Order_By>;
  gallery?: InputMaybe<Media_Gallery_Order_By>;
  gallery_id?: InputMaybe<Order_By>;
  headline?: InputMaybe<Product_Headline_Order_By>;
  headline_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Product_Name_Order_By>;
  name_id?: InputMaybe<Order_By>;
  organization?: InputMaybe<Organization_Order_By>;
  organization_id?: InputMaybe<Order_By>;
  place?: InputMaybe<Place_Order_By>;
  place_id?: InputMaybe<Order_By>;
  price_from?: InputMaybe<Order_By>;
  published?: InputMaybe<Order_By>;
  rates_aggregate?: InputMaybe<Rate_Aggregate_Order_By>;
  slug?: InputMaybe<Slug_Order_By>;
  slug_id?: InputMaybe<Order_By>;
  supplements_aggregate?: InputMaybe<Product_Supplement_Aggregate_Order_By>;
};

/** primary key columns input for table: product */
export type Product_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

export type Product_Save_Input = {
  business_model: Business_Model_Input;
  description: Multilanguage_Field_Input;
  gallery: Media_Gallery_Input;
  headline: Multilanguage_Field_Input;
  id: Scalars['String']['input'];
  name: Multilanguage_Field_Input;
  place?: InputMaybe<Place_Input>;
  price_from: Scalars['numeric']['input'];
  published: Scalars['Boolean']['input'];
};

/** select columns of table "product" */
export enum Product_Select_Column {
  /** column name */
  BusinessModelId = 'business_model_id',
  /** column name */
  DescriptionId = 'description_id',
  /** column name */
  GalleryId = 'gallery_id',
  /** column name */
  HeadlineId = 'headline_id',
  /** column name */
  Id = 'id',
  /** column name */
  NameId = 'name_id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  PlaceId = 'place_id',
  /** column name */
  PriceFrom = 'price_from',
  /** column name */
  Published = 'published',
  /** column name */
  SlugId = 'slug_id'
}

/** select "product_aggregate_bool_exp_bool_and_arguments_columns" columns of table "product" */
export enum Product_Select_Column_Product_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Published = 'published'
}

/** select "product_aggregate_bool_exp_bool_or_arguments_columns" columns of table "product" */
export enum Product_Select_Column_Product_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Published = 'published'
}

/** input type for updating data in table "product" */
export type Product_Set_Input = {
  business_model_id?: InputMaybe<Scalars['uuid']['input']>;
  description_id?: InputMaybe<Scalars['uuid']['input']>;
  gallery_id?: InputMaybe<Scalars['uuid']['input']>;
  headline_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name_id?: InputMaybe<Scalars['uuid']['input']>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  place_id?: InputMaybe<Scalars['uuid']['input']>;
  price_from?: InputMaybe<Scalars['numeric']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  slug_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Product_Stddev_Fields = {
  __typename?: 'product_stddev_fields';
  price_from?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "product" */
export type Product_Stddev_Order_By = {
  price_from?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Product_Stddev_Pop_Fields = {
  __typename?: 'product_stddev_pop_fields';
  price_from?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "product" */
export type Product_Stddev_Pop_Order_By = {
  price_from?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Product_Stddev_Samp_Fields = {
  __typename?: 'product_stddev_samp_fields';
  price_from?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "product" */
export type Product_Stddev_Samp_Order_By = {
  price_from?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "product" */
export type Product_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Stream_Cursor_Value_Input = {
  business_model_id?: InputMaybe<Scalars['uuid']['input']>;
  description_id?: InputMaybe<Scalars['uuid']['input']>;
  gallery_id?: InputMaybe<Scalars['uuid']['input']>;
  headline_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name_id?: InputMaybe<Scalars['uuid']['input']>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  place_id?: InputMaybe<Scalars['uuid']['input']>;
  price_from?: InputMaybe<Scalars['numeric']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  slug_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Product_Sum_Fields = {
  __typename?: 'product_sum_fields';
  price_from?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "product" */
export type Product_Sum_Order_By = {
  price_from?: InputMaybe<Order_By>;
};

/** columns and relationships of "product_supplement" */
export type Product_Supplement = {
  __typename?: 'product_supplement';
  /** An object relationship */
  product: Product;
  product_id: Scalars['uuid']['output'];
  /** An object relationship */
  supplement: Supplement;
  supplement_id: Scalars['uuid']['output'];
};

/** aggregated selection of "product_supplement" */
export type Product_Supplement_Aggregate = {
  __typename?: 'product_supplement_aggregate';
  aggregate?: Maybe<Product_Supplement_Aggregate_Fields>;
  nodes: Array<Product_Supplement>;
};

export type Product_Supplement_Aggregate_Bool_Exp = {
  count?: InputMaybe<Product_Supplement_Aggregate_Bool_Exp_Count>;
};

export type Product_Supplement_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Product_Supplement_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Product_Supplement_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "product_supplement" */
export type Product_Supplement_Aggregate_Fields = {
  __typename?: 'product_supplement_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Product_Supplement_Max_Fields>;
  min?: Maybe<Product_Supplement_Min_Fields>;
};


/** aggregate fields of "product_supplement" */
export type Product_Supplement_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Supplement_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "product_supplement" */
export type Product_Supplement_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Product_Supplement_Max_Order_By>;
  min?: InputMaybe<Product_Supplement_Min_Order_By>;
};

/** input type for inserting array relation for remote table "product_supplement" */
export type Product_Supplement_Arr_Rel_Insert_Input = {
  data: Array<Product_Supplement_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_Supplement_On_Conflict>;
};

/** Boolean expression to filter rows from the table "product_supplement". All fields are combined with a logical 'AND'. */
export type Product_Supplement_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Supplement_Bool_Exp>>;
  _not?: InputMaybe<Product_Supplement_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Supplement_Bool_Exp>>;
  product?: InputMaybe<Product_Bool_Exp>;
  product_id?: InputMaybe<Uuid_Comparison_Exp>;
  supplement?: InputMaybe<Supplement_Bool_Exp>;
  supplement_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_supplement" */
export enum Product_Supplement_Constraint {
  /** unique or primary key constraint on columns "supplement_id", "product_id" */
  ProductSupplementPkey = 'product_supplement_pkey'
}

/** input type for inserting data into table "product_supplement" */
export type Product_Supplement_Insert_Input = {
  product?: InputMaybe<Product_Obj_Rel_Insert_Input>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
  supplement?: InputMaybe<Supplement_Obj_Rel_Insert_Input>;
  supplement_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Product_Supplement_Max_Fields = {
  __typename?: 'product_supplement_max_fields';
  product_id?: Maybe<Scalars['uuid']['output']>;
  supplement_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "product_supplement" */
export type Product_Supplement_Max_Order_By = {
  product_id?: InputMaybe<Order_By>;
  supplement_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Supplement_Min_Fields = {
  __typename?: 'product_supplement_min_fields';
  product_id?: Maybe<Scalars['uuid']['output']>;
  supplement_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "product_supplement" */
export type Product_Supplement_Min_Order_By = {
  product_id?: InputMaybe<Order_By>;
  supplement_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "product_supplement" */
export type Product_Supplement_Mutation_Response = {
  __typename?: 'product_supplement_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Supplement>;
};

/** on_conflict condition type for table "product_supplement" */
export type Product_Supplement_On_Conflict = {
  constraint: Product_Supplement_Constraint;
  update_columns?: Array<Product_Supplement_Update_Column>;
  where?: InputMaybe<Product_Supplement_Bool_Exp>;
};

/** Ordering options when selecting data from "product_supplement". */
export type Product_Supplement_Order_By = {
  product?: InputMaybe<Product_Order_By>;
  product_id?: InputMaybe<Order_By>;
  supplement?: InputMaybe<Supplement_Order_By>;
  supplement_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product_supplement */
export type Product_Supplement_Pk_Columns_Input = {
  product_id: Scalars['uuid']['input'];
  supplement_id: Scalars['uuid']['input'];
};

/** select columns of table "product_supplement" */
export enum Product_Supplement_Select_Column {
  /** column name */
  ProductId = 'product_id',
  /** column name */
  SupplementId = 'supplement_id'
}

/** input type for updating data in table "product_supplement" */
export type Product_Supplement_Set_Input = {
  product_id?: InputMaybe<Scalars['uuid']['input']>;
  supplement_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "product_supplement" */
export type Product_Supplement_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Supplement_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Supplement_Stream_Cursor_Value_Input = {
  product_id?: InputMaybe<Scalars['uuid']['input']>;
  supplement_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "product_supplement" */
export enum Product_Supplement_Update_Column {
  /** column name */
  ProductId = 'product_id',
  /** column name */
  SupplementId = 'supplement_id'
}

export type Product_Supplement_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Supplement_Set_Input>;
  /** filter the rows which have to be updated */
  where: Product_Supplement_Bool_Exp;
};

/** update columns of table "product" */
export enum Product_Update_Column {
  /** column name */
  BusinessModelId = 'business_model_id',
  /** column name */
  DescriptionId = 'description_id',
  /** column name */
  GalleryId = 'gallery_id',
  /** column name */
  HeadlineId = 'headline_id',
  /** column name */
  Id = 'id',
  /** column name */
  NameId = 'name_id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  PlaceId = 'place_id',
  /** column name */
  PriceFrom = 'price_from',
  /** column name */
  Published = 'published',
  /** column name */
  SlugId = 'slug_id'
}

export type Product_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Product_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Set_Input>;
  /** filter the rows which have to be updated */
  where: Product_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Product_Var_Pop_Fields = {
  __typename?: 'product_var_pop_fields';
  price_from?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "product" */
export type Product_Var_Pop_Order_By = {
  price_from?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Product_Var_Samp_Fields = {
  __typename?: 'product_var_samp_fields';
  price_from?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "product" */
export type Product_Var_Samp_Order_By = {
  price_from?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Product_Variance_Fields = {
  __typename?: 'product_variance_fields';
  price_from?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "product" */
export type Product_Variance_Order_By = {
  price_from?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_token_types" using primary key columns */
  authRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** fetch data from the table: "auth.refresh_token_types" */
  authRefreshTokenTypes: Array<AuthRefreshTokenTypes>;
  /** fetch aggregated fields from the table: "auth.refresh_token_types" */
  authRefreshTokenTypesAggregate: AuthRefreshTokenTypes_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate;
  /** fetch data from the table: "booking" */
  booking: Array<Booking>;
  /** fetch aggregated fields from the table: "booking" */
  booking_aggregate: Booking_Aggregate;
  /** fetch data from the table: "booking" using primary key columns */
  booking_by_pk?: Maybe<Booking>;
  /** fetch data from the table: "booking_events.event_type" */
  booking_events_event_type: Array<Booking_Events_Event_Type>;
  /** fetch aggregated fields from the table: "booking_events.event_type" */
  booking_events_event_type_aggregate: Booking_Events_Event_Type_Aggregate;
  /** fetch data from the table: "booking_events.event_type" using primary key columns */
  booking_events_event_type_by_pk?: Maybe<Booking_Events_Event_Type>;
  /** fetch data from the table: "booking_events.main" */
  booking_events_main: Array<Booking_Events_Main>;
  /** fetch aggregated fields from the table: "booking_events.main" */
  booking_events_main_aggregate: Booking_Events_Main_Aggregate;
  /** fetch data from the table: "booking_events.main" using primary key columns */
  booking_events_main_by_pk?: Maybe<Booking_Events_Main>;
  /** fetch data from the table: "booking_events.version" */
  booking_events_version: Array<Booking_Events_Version>;
  /** fetch aggregated fields from the table: "booking_events.version" */
  booking_events_version_aggregate: Booking_Events_Version_Aggregate;
  /** fetch data from the table: "booking_events.version" using primary key columns */
  booking_events_version_by_pk?: Maybe<Booking_Events_Version>;
  /** fetch data from the table: "booking_history_entry" */
  booking_history_entry: Array<Booking_History_Entry>;
  /** fetch aggregated fields from the table: "booking_history_entry" */
  booking_history_entry_aggregate: Booking_History_Entry_Aggregate;
  /** fetch data from the table: "booking_history_entry" using primary key columns */
  booking_history_entry_by_pk?: Maybe<Booking_History_Entry>;
  /** fetch data from the table: "booking_product" */
  booking_product: Array<Booking_Product>;
  /** fetch aggregated fields from the table: "booking_product" */
  booking_product_aggregate: Booking_Product_Aggregate;
  /** fetch data from the table: "booking_product" using primary key columns */
  booking_product_by_pk?: Maybe<Booking_Product>;
  /** fetch data from the table: "booking_question_scope" */
  booking_question_scope: Array<Booking_Question_Scope>;
  /** fetch aggregated fields from the table: "booking_question_scope" */
  booking_question_scope_aggregate: Booking_Question_Scope_Aggregate;
  /** fetch data from the table: "booking_question_scope" using primary key columns */
  booking_question_scope_by_pk?: Maybe<Booking_Question_Scope>;
  /** fetch data from the table: "booking_question_type" */
  booking_question_type: Array<Booking_Question_Type>;
  /** fetch aggregated fields from the table: "booking_question_type" */
  booking_question_type_aggregate: Booking_Question_Type_Aggregate;
  /** fetch data from the table: "booking_question_type" using primary key columns */
  booking_question_type_by_pk?: Maybe<Booking_Question_Type>;
  /** fetch data from the table: "booking_state" */
  booking_state: Array<Booking_State>;
  /** fetch aggregated fields from the table: "booking_state" */
  booking_state_aggregate: Booking_State_Aggregate;
  /** fetch data from the table: "booking_state" using primary key columns */
  booking_state_by_pk?: Maybe<Booking_State>;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table: "category" */
  category: Array<Category>;
  /** fetch aggregated fields from the table: "category" */
  category_aggregate: Category_Aggregate;
  /** fetch data from the table: "category" using primary key columns */
  category_by_pk?: Maybe<Category>;
  /** fetch data from the table: "contact" */
  contact: Array<Contact>;
  /** fetch aggregated fields from the table: "contact" */
  contact_aggregate: Contact_Aggregate;
  /** fetch data from the table: "contact" using primary key columns */
  contact_by_pk?: Maybe<Contact>;
  /** fetch data from the table: "feature" */
  feature: Array<Feature>;
  /** fetch aggregated fields from the table: "feature" */
  feature_aggregate: Feature_Aggregate;
  /** fetch data from the table: "feature" using primary key columns */
  feature_by_pk?: Maybe<Feature>;
  /** fetch data from the table: "feature_category" */
  feature_category: Array<Feature_Category>;
  /** fetch aggregated fields from the table: "feature_category" */
  feature_category_aggregate: Feature_Category_Aggregate;
  /** fetch data from the table: "feature_category" using primary key columns */
  feature_category_by_pk?: Maybe<Feature_Category>;
  /** fetch data from the table: "feature_symbol" */
  feature_symbol: Array<Feature_Symbol>;
  /** fetch aggregated fields from the table: "feature_symbol" */
  feature_symbol_aggregate: Feature_Symbol_Aggregate;
  /** fetch data from the table: "feature_symbol" using primary key columns */
  feature_symbol_by_pk?: Maybe<Feature_Symbol>;
  /** fetch data from the table: "feature_type" */
  feature_type: Array<Feature_Type>;
  /** fetch aggregated fields from the table: "feature_type" */
  feature_type_aggregate: Feature_Type_Aggregate;
  /** fetch data from the table: "feature_type" using primary key columns */
  feature_type_by_pk?: Maybe<Feature_Type>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  get_booking: Scalars['json']['output'];
  /** fetch data from the table: "media_gallery" */
  media_gallery: Array<Media_Gallery>;
  /** fetch aggregated fields from the table: "media_gallery" */
  media_gallery_aggregate: Media_Gallery_Aggregate;
  /** fetch data from the table: "media_gallery" using primary key columns */
  media_gallery_by_pk?: Maybe<Media_Gallery>;
  /** fetch data from the table: "media_gallery_item" */
  media_gallery_item: Array<Media_Gallery_Item>;
  /** fetch aggregated fields from the table: "media_gallery_item" */
  media_gallery_item_aggregate: Media_Gallery_Item_Aggregate;
  /** fetch data from the table: "media_gallery_item" using primary key columns */
  media_gallery_item_by_pk?: Maybe<Media_Gallery_Item>;
  /** fetch data from the table: "my_web_section" */
  my_web_section: Array<My_Web_Section>;
  /** fetch aggregated fields from the table: "my_web_section" */
  my_web_section_aggregate: My_Web_Section_Aggregate;
  /** fetch data from the table: "my_web_section" using primary key columns */
  my_web_section_by_pk?: Maybe<My_Web_Section>;
  /** fetch data from the table: "organization" */
  organization: Array<Organization>;
  /** fetch aggregated fields from the table: "organization" */
  organization_aggregate: Organization_Aggregate;
  /** fetch data from the table: "organization_booking_question" */
  organization_booking_question: Array<Organization_Booking_Question>;
  /** fetch aggregated fields from the table: "organization_booking_question" */
  organization_booking_question_aggregate: Organization_Booking_Question_Aggregate;
  /** fetch data from the table: "organization_booking_question" using primary key columns */
  organization_booking_question_by_pk?: Maybe<Organization_Booking_Question>;
  /** fetch data from the table: "organization_branding" */
  organization_branding: Array<Organization_Branding>;
  /** fetch aggregated fields from the table: "organization_branding" */
  organization_branding_aggregate: Organization_Branding_Aggregate;
  /** fetch data from the table: "organization_branding" using primary key columns */
  organization_branding_by_pk?: Maybe<Organization_Branding>;
  /** fetch data from the table: "organization_branding_meta_description" */
  organization_branding_meta_description: Array<Organization_Branding_Meta_Description>;
  /** fetch aggregated fields from the table: "organization_branding_meta_description" */
  organization_branding_meta_description_aggregate: Organization_Branding_Meta_Description_Aggregate;
  /** fetch data from the table: "organization_branding_meta_description" using primary key columns */
  organization_branding_meta_description_by_pk?: Maybe<Organization_Branding_Meta_Description>;
  /** fetch data from the table: "organization_branding_meta_title" */
  organization_branding_meta_title: Array<Organization_Branding_Meta_Title>;
  /** fetch aggregated fields from the table: "organization_branding_meta_title" */
  organization_branding_meta_title_aggregate: Organization_Branding_Meta_Title_Aggregate;
  /** fetch data from the table: "organization_branding_meta_title" using primary key columns */
  organization_branding_meta_title_by_pk?: Maybe<Organization_Branding_Meta_Title>;
  /** fetch data from the table: "organization_business_model" */
  organization_business_model: Array<Organization_Business_Model>;
  /** fetch aggregated fields from the table: "organization_business_model" */
  organization_business_model_aggregate: Organization_Business_Model_Aggregate;
  /** fetch data from the table: "organization_business_model" using primary key columns */
  organization_business_model_by_pk?: Maybe<Organization_Business_Model>;
  /** fetch data from the table: "organization" using primary key columns */
  organization_by_pk?: Maybe<Organization>;
  /** fetch data from the table: "organization_headline" */
  organization_headline: Array<Organization_Headline>;
  /** fetch aggregated fields from the table: "organization_headline" */
  organization_headline_aggregate: Organization_Headline_Aggregate;
  /** fetch data from the table: "organization_headline" using primary key columns */
  organization_headline_by_pk?: Maybe<Organization_Headline>;
  /** fetch data from the table: "organization_member" */
  organization_member: Array<Organization_Member>;
  /** fetch aggregated fields from the table: "organization_member" */
  organization_member_aggregate: Organization_Member_Aggregate;
  /** fetch data from the table: "organization_member" using primary key columns */
  organization_member_by_pk?: Maybe<Organization_Member>;
  /** fetch data from the table: "organization_socials" */
  organization_socials: Array<Organization_Socials>;
  /** fetch aggregated fields from the table: "organization_socials" */
  organization_socials_aggregate: Organization_Socials_Aggregate;
  /** fetch data from the table: "organization_socials" using primary key columns */
  organization_socials_by_pk?: Maybe<Organization_Socials>;
  /** fetch data from the table: "place" */
  place: Array<Place>;
  /** fetch aggregated fields from the table: "place" */
  place_aggregate: Place_Aggregate;
  /** fetch data from the table: "place" using primary key columns */
  place_by_pk?: Maybe<Place>;
  /** fetch data from the table: "product" */
  product: Array<Product>;
  /** fetch aggregated fields from the table: "product" */
  product_aggregate: Product_Aggregate;
  /** fetch data from the table: "product_allotment_range" */
  product_allotment_range: Array<Product_Allotment_Range>;
  /** fetch aggregated fields from the table: "product_allotment_range" */
  product_allotment_range_aggregate: Product_Allotment_Range_Aggregate;
  /** fetch data from the table: "product_allotment_range" using primary key columns */
  product_allotment_range_by_pk?: Maybe<Product_Allotment_Range>;
  /** fetch data from the table: "product_business_model" */
  product_business_model: Array<Product_Business_Model>;
  /** fetch aggregated fields from the table: "product_business_model" */
  product_business_model_aggregate: Product_Business_Model_Aggregate;
  /** fetch data from the table: "product_business_model" using primary key columns */
  product_business_model_by_pk?: Maybe<Product_Business_Model>;
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk?: Maybe<Product>;
  /** fetch data from the table: "product_description" */
  product_description: Array<Product_Description>;
  /** fetch aggregated fields from the table: "product_description" */
  product_description_aggregate: Product_Description_Aggregate;
  /** fetch data from the table: "product_description" using primary key columns */
  product_description_by_pk?: Maybe<Product_Description>;
  /** fetch data from the table: "product_feature" */
  product_feature: Array<Product_Feature>;
  /** fetch aggregated fields from the table: "product_feature" */
  product_feature_aggregate: Product_Feature_Aggregate;
  /** fetch data from the table: "product_feature" using primary key columns */
  product_feature_by_pk?: Maybe<Product_Feature>;
  /** fetch data from the table: "product_group" */
  product_group: Array<Product_Group>;
  /** fetch aggregated fields from the table: "product_group" */
  product_group_aggregate: Product_Group_Aggregate;
  /** fetch data from the table: "product_group" using primary key columns */
  product_group_by_pk?: Maybe<Product_Group>;
  /** fetch data from the table: "product_group_product" */
  product_group_product: Array<Product_Group_Product>;
  /** fetch aggregated fields from the table: "product_group_product" */
  product_group_product_aggregate: Product_Group_Product_Aggregate;
  /** fetch data from the table: "product_group_product" using primary key columns */
  product_group_product_by_pk?: Maybe<Product_Group_Product>;
  /** fetch data from the table: "product_headline" */
  product_headline: Array<Product_Headline>;
  /** fetch aggregated fields from the table: "product_headline" */
  product_headline_aggregate: Product_Headline_Aggregate;
  /** fetch data from the table: "product_headline" using primary key columns */
  product_headline_by_pk?: Maybe<Product_Headline>;
  /** fetch data from the table: "product_name" */
  product_name: Array<Product_Name>;
  /** fetch aggregated fields from the table: "product_name" */
  product_name_aggregate: Product_Name_Aggregate;
  /** fetch data from the table: "product_name" using primary key columns */
  product_name_by_pk?: Maybe<Product_Name>;
  /** fetch data from the table: "product_supplement" */
  product_supplement: Array<Product_Supplement>;
  /** fetch aggregated fields from the table: "product_supplement" */
  product_supplement_aggregate: Product_Supplement_Aggregate;
  /** fetch data from the table: "product_supplement" using primary key columns */
  product_supplement_by_pk?: Maybe<Product_Supplement>;
  /** fetch data from the table: "rate" */
  rate: Array<Rate>;
  /** fetch aggregated fields from the table: "rate" */
  rate_aggregate: Rate_Aggregate;
  /** fetch data from the table: "rate" using primary key columns */
  rate_by_pk?: Maybe<Rate>;
  /** fetch data from the table: "rate_headline" */
  rate_headline: Array<Rate_Headline>;
  /** fetch aggregated fields from the table: "rate_headline" */
  rate_headline_aggregate: Rate_Headline_Aggregate;
  /** fetch data from the table: "rate_headline" using primary key columns */
  rate_headline_by_pk?: Maybe<Rate_Headline>;
  /** fetch data from the table: "rate_name" */
  rate_name: Array<Rate_Name>;
  /** fetch aggregated fields from the table: "rate_name" */
  rate_name_aggregate: Rate_Name_Aggregate;
  /** fetch data from the table: "rate_name" using primary key columns */
  rate_name_by_pk?: Maybe<Rate_Name>;
  /** fetch data from the table: "rate_price_range" */
  rate_price_range: Array<Rate_Price_Range>;
  /** fetch aggregated fields from the table: "rate_price_range" */
  rate_price_range_aggregate: Rate_Price_Range_Aggregate;
  /** fetch data from the table: "rate_price_range" using primary key columns */
  rate_price_range_by_pk?: Maybe<Rate_Price_Range>;
  /** fetch data from the table: "rate_type" */
  rate_type: Array<Rate_Type>;
  /** fetch aggregated fields from the table: "rate_type" */
  rate_type_aggregate: Rate_Type_Aggregate;
  /** fetch data from the table: "rate_type" using primary key columns */
  rate_type_by_pk?: Maybe<Rate_Type>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: Role_Aggregate;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
  /** fetch data from the table: "site" */
  site: Array<Site>;
  /** fetch aggregated fields from the table: "site" */
  site_aggregate: Site_Aggregate;
  /** fetch data from the table: "site" using primary key columns */
  site_by_pk?: Maybe<Site>;
  /** fetch data from the table: "slug" */
  slug: Array<Slug>;
  /** fetch aggregated fields from the table: "slug" */
  slug_aggregate: Slug_Aggregate;
  /** fetch data from the table: "slug" using primary key columns */
  slug_by_pk?: Maybe<Slug>;
  /** fetch data from the table: "supplement" */
  supplement: Array<Supplement>;
  /** fetch aggregated fields from the table: "supplement" */
  supplement_aggregate: Supplement_Aggregate;
  /** fetch data from the table: "supplement" using primary key columns */
  supplement_by_pk?: Maybe<Supplement>;
  /** fetch data from the table: "supplement_prices" */
  supplement_prices: Array<Supplement_Prices>;
  /** fetch aggregated fields from the table: "supplement_prices" */
  supplement_prices_aggregate: Supplement_Prices_Aggregate;
  /** fetch data from the table: "supplement_type" */
  supplement_type: Array<Supplement_Type>;
  /** fetch aggregated fields from the table: "supplement_type" */
  supplement_type_aggregate: Supplement_Type_Aggregate;
  /** fetch data from the table: "supplement_type" using primary key columns */
  supplement_type_by_pk?: Maybe<Supplement_Type>;
  /** fetch data from the table: "translated_text" */
  translated_text: Array<Translated_Text>;
  /** fetch aggregated fields from the table: "translated_text" */
  translated_text_aggregate: Translated_Text_Aggregate;
  /** fetch data from the table: "translated_text" using primary key columns */
  translated_text_by_pk?: Maybe<Translated_Text>;
  /** fetch data from the table: "unit_management" */
  unit_management: Array<Unit_Management>;
  /** fetch aggregated fields from the table: "unit_management" */
  unit_management_aggregate: Unit_Management_Aggregate;
  /** fetch data from the table: "unit_management" using primary key columns */
  unit_management_by_pk?: Maybe<Unit_Management>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
  /** fetch data from the table: "venue" */
  venue: Array<Venue>;
  /** fetch aggregated fields from the table: "venue" */
  venue_aggregate: Venue_Aggregate;
  /** fetch data from the table: "venue" using primary key columns */
  venue_by_pk?: Maybe<Venue>;
  /** fetch data from the table: "venue_description" */
  venue_description: Array<Venue_Description>;
  /** fetch aggregated fields from the table: "venue_description" */
  venue_description_aggregate: Venue_Description_Aggregate;
  /** fetch data from the table: "venue_description" using primary key columns */
  venue_description_by_pk?: Maybe<Venue_Description>;
  /** fetch data from the table: "venue_facility" */
  venue_facility: Array<Venue_Facility>;
  /** fetch aggregated fields from the table: "venue_facility" */
  venue_facility_aggregate: Venue_Facility_Aggregate;
  /** fetch data from the table: "venue_facility" using primary key columns */
  venue_facility_by_pk?: Maybe<Venue_Facility>;
  /** fetch data from the table: "venue_facility_headline" */
  venue_facility_headline: Array<Venue_Facility_Headline>;
  /** fetch aggregated fields from the table: "venue_facility_headline" */
  venue_facility_headline_aggregate: Venue_Facility_Headline_Aggregate;
  /** fetch data from the table: "venue_facility_headline" using primary key columns */
  venue_facility_headline_by_pk?: Maybe<Venue_Facility_Headline>;
  /** fetch data from the table: "venue_facility_name" */
  venue_facility_name: Array<Venue_Facility_Name>;
  /** fetch aggregated fields from the table: "venue_facility_name" */
  venue_facility_name_aggregate: Venue_Facility_Name_Aggregate;
  /** fetch data from the table: "venue_facility_name" using primary key columns */
  venue_facility_name_by_pk?: Maybe<Venue_Facility_Name>;
  /** fetch data from the table: "venue_good_to_know" */
  venue_good_to_know: Array<Venue_Good_To_Know>;
  /** fetch aggregated fields from the table: "venue_good_to_know" */
  venue_good_to_know_aggregate: Venue_Good_To_Know_Aggregate;
  /** fetch data from the table: "venue_good_to_know" using primary key columns */
  venue_good_to_know_by_pk?: Maybe<Venue_Good_To_Know>;
  /** fetch data from the table: "venue_usps" */
  venue_usps: Array<Venue_Usps>;
  /** fetch aggregated fields from the table: "venue_usps" */
  venue_usps_aggregate: Venue_Usps_Aggregate;
  /** fetch data from the table: "venue_usps" using primary key columns */
  venue_usps_by_pk?: Maybe<Venue_Usps>;
  /** fetch data from the table: "venue_usps_line" */
  venue_usps_line: Array<Venue_Usps_Line>;
  /** fetch aggregated fields from the table: "venue_usps_line" */
  venue_usps_line_aggregate: Venue_Usps_Line_Aggregate;
  /** fetch data from the table: "venue_usps_line" using primary key columns */
  venue_usps_line_by_pk?: Maybe<Venue_Usps_Line>;
  /** fetch data from the table: "storage.virus" using primary key columns */
  virus?: Maybe<Virus>;
  /** fetch data from the table: "storage.virus" */
  viruses: Array<Virus>;
  /** fetch aggregated fields from the table: "storage.virus" */
  virusesAggregate: Virus_Aggregate;
};


export type Query_RootAuthProviderArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootAuthProviderRequestArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthRefreshTokenArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthRefreshTokenTypeArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootAuthRefreshTokenTypesArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Query_RootAuthRefreshTokenTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Query_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRoleArgs = {
  role: Scalars['String']['input'];
};


export type Query_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthUserProviderArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserRoleArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserSecurityKeyArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Query_RootAuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Query_RootBookingArgs = {
  distinct_on?: InputMaybe<Array<Booking_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Order_By>>;
  where?: InputMaybe<Booking_Bool_Exp>;
};


export type Query_RootBooking_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Order_By>>;
  where?: InputMaybe<Booking_Bool_Exp>;
};


export type Query_RootBooking_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootBooking_Events_Event_TypeArgs = {
  distinct_on?: InputMaybe<Array<Booking_Events_Event_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Events_Event_Type_Order_By>>;
  where?: InputMaybe<Booking_Events_Event_Type_Bool_Exp>;
};


export type Query_RootBooking_Events_Event_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_Events_Event_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Events_Event_Type_Order_By>>;
  where?: InputMaybe<Booking_Events_Event_Type_Bool_Exp>;
};


export type Query_RootBooking_Events_Event_Type_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootBooking_Events_MainArgs = {
  distinct_on?: InputMaybe<Array<Booking_Events_Main_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Events_Main_Order_By>>;
  where?: InputMaybe<Booking_Events_Main_Bool_Exp>;
};


export type Query_RootBooking_Events_Main_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_Events_Main_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Events_Main_Order_By>>;
  where?: InputMaybe<Booking_Events_Main_Bool_Exp>;
};


export type Query_RootBooking_Events_Main_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootBooking_Events_VersionArgs = {
  distinct_on?: InputMaybe<Array<Booking_Events_Version_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Events_Version_Order_By>>;
  where?: InputMaybe<Booking_Events_Version_Bool_Exp>;
};


export type Query_RootBooking_Events_Version_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_Events_Version_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Events_Version_Order_By>>;
  where?: InputMaybe<Booking_Events_Version_Bool_Exp>;
};


export type Query_RootBooking_Events_Version_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootBooking_History_EntryArgs = {
  distinct_on?: InputMaybe<Array<Booking_History_Entry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_History_Entry_Order_By>>;
  where?: InputMaybe<Booking_History_Entry_Bool_Exp>;
};


export type Query_RootBooking_History_Entry_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_History_Entry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_History_Entry_Order_By>>;
  where?: InputMaybe<Booking_History_Entry_Bool_Exp>;
};


export type Query_RootBooking_History_Entry_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootBooking_ProductArgs = {
  distinct_on?: InputMaybe<Array<Booking_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Product_Order_By>>;
  where?: InputMaybe<Booking_Product_Bool_Exp>;
};


export type Query_RootBooking_Product_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Product_Order_By>>;
  where?: InputMaybe<Booking_Product_Bool_Exp>;
};


export type Query_RootBooking_Product_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootBooking_Question_ScopeArgs = {
  distinct_on?: InputMaybe<Array<Booking_Question_Scope_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Question_Scope_Order_By>>;
  where?: InputMaybe<Booking_Question_Scope_Bool_Exp>;
};


export type Query_RootBooking_Question_Scope_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_Question_Scope_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Question_Scope_Order_By>>;
  where?: InputMaybe<Booking_Question_Scope_Bool_Exp>;
};


export type Query_RootBooking_Question_Scope_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootBooking_Question_TypeArgs = {
  distinct_on?: InputMaybe<Array<Booking_Question_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Question_Type_Order_By>>;
  where?: InputMaybe<Booking_Question_Type_Bool_Exp>;
};


export type Query_RootBooking_Question_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_Question_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Question_Type_Order_By>>;
  where?: InputMaybe<Booking_Question_Type_Bool_Exp>;
};


export type Query_RootBooking_Question_Type_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootBooking_StateArgs = {
  distinct_on?: InputMaybe<Array<Booking_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_State_Order_By>>;
  where?: InputMaybe<Booking_State_Bool_Exp>;
};


export type Query_RootBooking_State_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_State_Order_By>>;
  where?: InputMaybe<Booking_State_Bool_Exp>;
};


export type Query_RootBooking_State_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootBucketArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootCategoryArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Query_RootCategory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Query_RootCategory_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootContactArgs = {
  distinct_on?: InputMaybe<Array<Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contact_Order_By>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};


export type Query_RootContact_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contact_Order_By>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};


export type Query_RootContact_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootFeatureArgs = {
  distinct_on?: InputMaybe<Array<Feature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Feature_Order_By>>;
  where?: InputMaybe<Feature_Bool_Exp>;
};


export type Query_RootFeature_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Feature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Feature_Order_By>>;
  where?: InputMaybe<Feature_Bool_Exp>;
};


export type Query_RootFeature_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootFeature_CategoryArgs = {
  distinct_on?: InputMaybe<Array<Feature_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Feature_Category_Order_By>>;
  where?: InputMaybe<Feature_Category_Bool_Exp>;
};


export type Query_RootFeature_Category_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Feature_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Feature_Category_Order_By>>;
  where?: InputMaybe<Feature_Category_Bool_Exp>;
};


export type Query_RootFeature_Category_By_PkArgs = {
  category_id: Scalars['String']['input'];
  feature_id: Scalars['uuid']['input'];
};


export type Query_RootFeature_SymbolArgs = {
  distinct_on?: InputMaybe<Array<Feature_Symbol_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Feature_Symbol_Order_By>>;
  where?: InputMaybe<Feature_Symbol_Bool_Exp>;
};


export type Query_RootFeature_Symbol_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Feature_Symbol_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Feature_Symbol_Order_By>>;
  where?: InputMaybe<Feature_Symbol_Bool_Exp>;
};


export type Query_RootFeature_Symbol_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootFeature_TypeArgs = {
  distinct_on?: InputMaybe<Array<Feature_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Feature_Type_Order_By>>;
  where?: InputMaybe<Feature_Type_Bool_Exp>;
};


export type Query_RootFeature_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Feature_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Feature_Type_Order_By>>;
  where?: InputMaybe<Feature_Type_Bool_Exp>;
};


export type Query_RootFeature_Type_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootFileArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootGet_BookingArgs = {
  arg: Get_Booking_Input;
};


export type Query_RootMedia_GalleryArgs = {
  distinct_on?: InputMaybe<Array<Media_Gallery_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Gallery_Order_By>>;
  where?: InputMaybe<Media_Gallery_Bool_Exp>;
};


export type Query_RootMedia_Gallery_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Media_Gallery_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Gallery_Order_By>>;
  where?: InputMaybe<Media_Gallery_Bool_Exp>;
};


export type Query_RootMedia_Gallery_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMedia_Gallery_ItemArgs = {
  distinct_on?: InputMaybe<Array<Media_Gallery_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Gallery_Item_Order_By>>;
  where?: InputMaybe<Media_Gallery_Item_Bool_Exp>;
};


export type Query_RootMedia_Gallery_Item_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Media_Gallery_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Gallery_Item_Order_By>>;
  where?: InputMaybe<Media_Gallery_Item_Bool_Exp>;
};


export type Query_RootMedia_Gallery_Item_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMy_Web_SectionArgs = {
  distinct_on?: InputMaybe<Array<My_Web_Section_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<My_Web_Section_Order_By>>;
  where?: InputMaybe<My_Web_Section_Bool_Exp>;
};


export type Query_RootMy_Web_Section_AggregateArgs = {
  distinct_on?: InputMaybe<Array<My_Web_Section_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<My_Web_Section_Order_By>>;
  where?: InputMaybe<My_Web_Section_Bool_Exp>;
};


export type Query_RootMy_Web_Section_By_PkArgs = {
  organization_id: Scalars['uuid']['input'];
  section_id: Scalars['String']['input'];
};


export type Query_RootOrganizationArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Query_RootOrganization_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Query_RootOrganization_Booking_QuestionArgs = {
  distinct_on?: InputMaybe<Array<Organization_Booking_Question_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Booking_Question_Order_By>>;
  where?: InputMaybe<Organization_Booking_Question_Bool_Exp>;
};


export type Query_RootOrganization_Booking_Question_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Booking_Question_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Booking_Question_Order_By>>;
  where?: InputMaybe<Organization_Booking_Question_Bool_Exp>;
};


export type Query_RootOrganization_Booking_Question_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOrganization_BrandingArgs = {
  distinct_on?: InputMaybe<Array<Organization_Branding_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Branding_Order_By>>;
  where?: InputMaybe<Organization_Branding_Bool_Exp>;
};


export type Query_RootOrganization_Branding_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Branding_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Branding_Order_By>>;
  where?: InputMaybe<Organization_Branding_Bool_Exp>;
};


export type Query_RootOrganization_Branding_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOrganization_Branding_Meta_DescriptionArgs = {
  distinct_on?: InputMaybe<Array<Organization_Branding_Meta_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Branding_Meta_Description_Order_By>>;
  where?: InputMaybe<Organization_Branding_Meta_Description_Bool_Exp>;
};


export type Query_RootOrganization_Branding_Meta_Description_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Branding_Meta_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Branding_Meta_Description_Order_By>>;
  where?: InputMaybe<Organization_Branding_Meta_Description_Bool_Exp>;
};


export type Query_RootOrganization_Branding_Meta_Description_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOrganization_Branding_Meta_TitleArgs = {
  distinct_on?: InputMaybe<Array<Organization_Branding_Meta_Title_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Branding_Meta_Title_Order_By>>;
  where?: InputMaybe<Organization_Branding_Meta_Title_Bool_Exp>;
};


export type Query_RootOrganization_Branding_Meta_Title_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Branding_Meta_Title_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Branding_Meta_Title_Order_By>>;
  where?: InputMaybe<Organization_Branding_Meta_Title_Bool_Exp>;
};


export type Query_RootOrganization_Branding_Meta_Title_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOrganization_Business_ModelArgs = {
  distinct_on?: InputMaybe<Array<Organization_Business_Model_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Business_Model_Order_By>>;
  where?: InputMaybe<Organization_Business_Model_Bool_Exp>;
};


export type Query_RootOrganization_Business_Model_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Business_Model_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Business_Model_Order_By>>;
  where?: InputMaybe<Organization_Business_Model_Bool_Exp>;
};


export type Query_RootOrganization_Business_Model_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOrganization_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOrganization_HeadlineArgs = {
  distinct_on?: InputMaybe<Array<Organization_Headline_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Headline_Order_By>>;
  where?: InputMaybe<Organization_Headline_Bool_Exp>;
};


export type Query_RootOrganization_Headline_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Headline_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Headline_Order_By>>;
  where?: InputMaybe<Organization_Headline_Bool_Exp>;
};


export type Query_RootOrganization_Headline_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOrganization_MemberArgs = {
  distinct_on?: InputMaybe<Array<Organization_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Member_Order_By>>;
  where?: InputMaybe<Organization_Member_Bool_Exp>;
};


export type Query_RootOrganization_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Member_Order_By>>;
  where?: InputMaybe<Organization_Member_Bool_Exp>;
};


export type Query_RootOrganization_Member_By_PkArgs = {
  organization_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Query_RootOrganization_SocialsArgs = {
  distinct_on?: InputMaybe<Array<Organization_Socials_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Socials_Order_By>>;
  where?: InputMaybe<Organization_Socials_Bool_Exp>;
};


export type Query_RootOrganization_Socials_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Socials_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Socials_Order_By>>;
  where?: InputMaybe<Organization_Socials_Bool_Exp>;
};


export type Query_RootOrganization_Socials_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPlaceArgs = {
  distinct_on?: InputMaybe<Array<Place_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Place_Order_By>>;
  where?: InputMaybe<Place_Bool_Exp>;
};


export type Query_RootPlace_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Place_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Place_Order_By>>;
  where?: InputMaybe<Place_Bool_Exp>;
};


export type Query_RootPlace_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProductArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


export type Query_RootProduct_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


export type Query_RootProduct_Allotment_RangeArgs = {
  distinct_on?: InputMaybe<Array<Product_Allotment_Range_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Allotment_Range_Order_By>>;
  where?: InputMaybe<Product_Allotment_Range_Bool_Exp>;
};


export type Query_RootProduct_Allotment_Range_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Allotment_Range_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Allotment_Range_Order_By>>;
  where?: InputMaybe<Product_Allotment_Range_Bool_Exp>;
};


export type Query_RootProduct_Allotment_Range_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProduct_Business_ModelArgs = {
  distinct_on?: InputMaybe<Array<Product_Business_Model_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Business_Model_Order_By>>;
  where?: InputMaybe<Product_Business_Model_Bool_Exp>;
};


export type Query_RootProduct_Business_Model_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Business_Model_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Business_Model_Order_By>>;
  where?: InputMaybe<Product_Business_Model_Bool_Exp>;
};


export type Query_RootProduct_Business_Model_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProduct_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProduct_DescriptionArgs = {
  distinct_on?: InputMaybe<Array<Product_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Description_Order_By>>;
  where?: InputMaybe<Product_Description_Bool_Exp>;
};


export type Query_RootProduct_Description_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Description_Order_By>>;
  where?: InputMaybe<Product_Description_Bool_Exp>;
};


export type Query_RootProduct_Description_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProduct_FeatureArgs = {
  distinct_on?: InputMaybe<Array<Product_Feature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Feature_Order_By>>;
  where?: InputMaybe<Product_Feature_Bool_Exp>;
};


export type Query_RootProduct_Feature_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Feature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Feature_Order_By>>;
  where?: InputMaybe<Product_Feature_Bool_Exp>;
};


export type Query_RootProduct_Feature_By_PkArgs = {
  feature_id: Scalars['uuid']['input'];
  product_id: Scalars['uuid']['input'];
};


export type Query_RootProduct_GroupArgs = {
  distinct_on?: InputMaybe<Array<Product_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Group_Order_By>>;
  where?: InputMaybe<Product_Group_Bool_Exp>;
};


export type Query_RootProduct_Group_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Group_Order_By>>;
  where?: InputMaybe<Product_Group_Bool_Exp>;
};


export type Query_RootProduct_Group_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProduct_Group_ProductArgs = {
  distinct_on?: InputMaybe<Array<Product_Group_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Group_Product_Order_By>>;
  where?: InputMaybe<Product_Group_Product_Bool_Exp>;
};


export type Query_RootProduct_Group_Product_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Group_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Group_Product_Order_By>>;
  where?: InputMaybe<Product_Group_Product_Bool_Exp>;
};


export type Query_RootProduct_Group_Product_By_PkArgs = {
  group_id: Scalars['uuid']['input'];
  product_id: Scalars['uuid']['input'];
};


export type Query_RootProduct_HeadlineArgs = {
  distinct_on?: InputMaybe<Array<Product_Headline_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Headline_Order_By>>;
  where?: InputMaybe<Product_Headline_Bool_Exp>;
};


export type Query_RootProduct_Headline_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Headline_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Headline_Order_By>>;
  where?: InputMaybe<Product_Headline_Bool_Exp>;
};


export type Query_RootProduct_Headline_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProduct_NameArgs = {
  distinct_on?: InputMaybe<Array<Product_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Name_Order_By>>;
  where?: InputMaybe<Product_Name_Bool_Exp>;
};


export type Query_RootProduct_Name_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Name_Order_By>>;
  where?: InputMaybe<Product_Name_Bool_Exp>;
};


export type Query_RootProduct_Name_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProduct_SupplementArgs = {
  distinct_on?: InputMaybe<Array<Product_Supplement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Supplement_Order_By>>;
  where?: InputMaybe<Product_Supplement_Bool_Exp>;
};


export type Query_RootProduct_Supplement_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Supplement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Supplement_Order_By>>;
  where?: InputMaybe<Product_Supplement_Bool_Exp>;
};


export type Query_RootProduct_Supplement_By_PkArgs = {
  product_id: Scalars['uuid']['input'];
  supplement_id: Scalars['uuid']['input'];
};


export type Query_RootRateArgs = {
  distinct_on?: InputMaybe<Array<Rate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rate_Order_By>>;
  where?: InputMaybe<Rate_Bool_Exp>;
};


export type Query_RootRate_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rate_Order_By>>;
  where?: InputMaybe<Rate_Bool_Exp>;
};


export type Query_RootRate_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRate_HeadlineArgs = {
  distinct_on?: InputMaybe<Array<Rate_Headline_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rate_Headline_Order_By>>;
  where?: InputMaybe<Rate_Headline_Bool_Exp>;
};


export type Query_RootRate_Headline_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rate_Headline_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rate_Headline_Order_By>>;
  where?: InputMaybe<Rate_Headline_Bool_Exp>;
};


export type Query_RootRate_Headline_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRate_NameArgs = {
  distinct_on?: InputMaybe<Array<Rate_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rate_Name_Order_By>>;
  where?: InputMaybe<Rate_Name_Bool_Exp>;
};


export type Query_RootRate_Name_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rate_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rate_Name_Order_By>>;
  where?: InputMaybe<Rate_Name_Bool_Exp>;
};


export type Query_RootRate_Name_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRate_Price_RangeArgs = {
  distinct_on?: InputMaybe<Array<Rate_Price_Range_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rate_Price_Range_Order_By>>;
  where?: InputMaybe<Rate_Price_Range_Bool_Exp>;
};


export type Query_RootRate_Price_Range_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rate_Price_Range_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rate_Price_Range_Order_By>>;
  where?: InputMaybe<Rate_Price_Range_Bool_Exp>;
};


export type Query_RootRate_Price_Range_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRate_TypeArgs = {
  distinct_on?: InputMaybe<Array<Rate_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rate_Type_Order_By>>;
  where?: InputMaybe<Rate_Type_Bool_Exp>;
};


export type Query_RootRate_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rate_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rate_Type_Order_By>>;
  where?: InputMaybe<Rate_Type_Bool_Exp>;
};


export type Query_RootRate_Type_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootRoleArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Query_RootRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Query_RootRole_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootSiteArgs = {
  distinct_on?: InputMaybe<Array<Site_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Site_Order_By>>;
  where?: InputMaybe<Site_Bool_Exp>;
};


export type Query_RootSite_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Site_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Site_Order_By>>;
  where?: InputMaybe<Site_Bool_Exp>;
};


export type Query_RootSite_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSlugArgs = {
  distinct_on?: InputMaybe<Array<Slug_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Slug_Order_By>>;
  where?: InputMaybe<Slug_Bool_Exp>;
};


export type Query_RootSlug_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Slug_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Slug_Order_By>>;
  where?: InputMaybe<Slug_Bool_Exp>;
};


export type Query_RootSlug_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSupplementArgs = {
  distinct_on?: InputMaybe<Array<Supplement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Supplement_Order_By>>;
  where?: InputMaybe<Supplement_Bool_Exp>;
};


export type Query_RootSupplement_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Supplement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Supplement_Order_By>>;
  where?: InputMaybe<Supplement_Bool_Exp>;
};


export type Query_RootSupplement_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSupplement_PricesArgs = {
  distinct_on?: InputMaybe<Array<Supplement_Prices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Supplement_Prices_Order_By>>;
  where?: InputMaybe<Supplement_Prices_Bool_Exp>;
};


export type Query_RootSupplement_Prices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Supplement_Prices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Supplement_Prices_Order_By>>;
  where?: InputMaybe<Supplement_Prices_Bool_Exp>;
};


export type Query_RootSupplement_TypeArgs = {
  distinct_on?: InputMaybe<Array<Supplement_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Supplement_Type_Order_By>>;
  where?: InputMaybe<Supplement_Type_Bool_Exp>;
};


export type Query_RootSupplement_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Supplement_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Supplement_Type_Order_By>>;
  where?: InputMaybe<Supplement_Type_Bool_Exp>;
};


export type Query_RootSupplement_Type_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootTranslated_TextArgs = {
  distinct_on?: InputMaybe<Array<Translated_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Translated_Text_Order_By>>;
  where?: InputMaybe<Translated_Text_Bool_Exp>;
};


export type Query_RootTranslated_Text_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Translated_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Translated_Text_Order_By>>;
  where?: InputMaybe<Translated_Text_Bool_Exp>;
};


export type Query_RootTranslated_Text_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUnit_ManagementArgs = {
  distinct_on?: InputMaybe<Array<Unit_Management_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Unit_Management_Order_By>>;
  where?: InputMaybe<Unit_Management_Bool_Exp>;
};


export type Query_RootUnit_Management_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Unit_Management_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Unit_Management_Order_By>>;
  where?: InputMaybe<Unit_Management_Bool_Exp>;
};


export type Query_RootUnit_Management_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootUserArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootVenueArgs = {
  distinct_on?: InputMaybe<Array<Venue_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Order_By>>;
  where?: InputMaybe<Venue_Bool_Exp>;
};


export type Query_RootVenue_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Venue_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Order_By>>;
  where?: InputMaybe<Venue_Bool_Exp>;
};


export type Query_RootVenue_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootVenue_DescriptionArgs = {
  distinct_on?: InputMaybe<Array<Venue_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Description_Order_By>>;
  where?: InputMaybe<Venue_Description_Bool_Exp>;
};


export type Query_RootVenue_Description_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Venue_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Description_Order_By>>;
  where?: InputMaybe<Venue_Description_Bool_Exp>;
};


export type Query_RootVenue_Description_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootVenue_FacilityArgs = {
  distinct_on?: InputMaybe<Array<Venue_Facility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Facility_Order_By>>;
  where?: InputMaybe<Venue_Facility_Bool_Exp>;
};


export type Query_RootVenue_Facility_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Venue_Facility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Facility_Order_By>>;
  where?: InputMaybe<Venue_Facility_Bool_Exp>;
};


export type Query_RootVenue_Facility_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootVenue_Facility_HeadlineArgs = {
  distinct_on?: InputMaybe<Array<Venue_Facility_Headline_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Facility_Headline_Order_By>>;
  where?: InputMaybe<Venue_Facility_Headline_Bool_Exp>;
};


export type Query_RootVenue_Facility_Headline_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Venue_Facility_Headline_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Facility_Headline_Order_By>>;
  where?: InputMaybe<Venue_Facility_Headline_Bool_Exp>;
};


export type Query_RootVenue_Facility_Headline_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootVenue_Facility_NameArgs = {
  distinct_on?: InputMaybe<Array<Venue_Facility_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Facility_Name_Order_By>>;
  where?: InputMaybe<Venue_Facility_Name_Bool_Exp>;
};


export type Query_RootVenue_Facility_Name_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Venue_Facility_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Facility_Name_Order_By>>;
  where?: InputMaybe<Venue_Facility_Name_Bool_Exp>;
};


export type Query_RootVenue_Facility_Name_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootVenue_Good_To_KnowArgs = {
  distinct_on?: InputMaybe<Array<Venue_Good_To_Know_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Good_To_Know_Order_By>>;
  where?: InputMaybe<Venue_Good_To_Know_Bool_Exp>;
};


export type Query_RootVenue_Good_To_Know_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Venue_Good_To_Know_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Good_To_Know_Order_By>>;
  where?: InputMaybe<Venue_Good_To_Know_Bool_Exp>;
};


export type Query_RootVenue_Good_To_Know_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootVenue_UspsArgs = {
  distinct_on?: InputMaybe<Array<Venue_Usps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Usps_Order_By>>;
  where?: InputMaybe<Venue_Usps_Bool_Exp>;
};


export type Query_RootVenue_Usps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Venue_Usps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Usps_Order_By>>;
  where?: InputMaybe<Venue_Usps_Bool_Exp>;
};


export type Query_RootVenue_Usps_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootVenue_Usps_LineArgs = {
  distinct_on?: InputMaybe<Array<Venue_Usps_Line_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Usps_Line_Order_By>>;
  where?: InputMaybe<Venue_Usps_Line_Bool_Exp>;
};


export type Query_RootVenue_Usps_Line_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Venue_Usps_Line_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Usps_Line_Order_By>>;
  where?: InputMaybe<Venue_Usps_Line_Bool_Exp>;
};


export type Query_RootVenue_Usps_Line_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootVirusArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootVirusesArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};


export type Query_RootVirusesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};

/** columns and relationships of "rate" */
export type Rate = {
  __typename?: 'rate';
  availability_rules?: Maybe<Scalars['jsonb']['output']>;
  configuration?: Maybe<Scalars['jsonb']['output']>;
  /** An object relationship */
  headline?: Maybe<Rate_Headline>;
  headline_id?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  name: Rate_Name;
  name_id: Scalars['uuid']['output'];
  /** An array relationship */
  price_calendar: Array<Rate_Price_Range>;
  /** An aggregate relationship */
  price_calendar_aggregate: Rate_Price_Range_Aggregate;
  price_rules?: Maybe<Scalars['jsonb']['output']>;
  /** An object relationship */
  product: Product;
  product_id: Scalars['uuid']['output'];
};


/** columns and relationships of "rate" */
export type RateAvailability_RulesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "rate" */
export type RateConfigurationArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "rate" */
export type RatePrice_CalendarArgs = {
  distinct_on?: InputMaybe<Array<Rate_Price_Range_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rate_Price_Range_Order_By>>;
  where?: InputMaybe<Rate_Price_Range_Bool_Exp>;
};


/** columns and relationships of "rate" */
export type RatePrice_Calendar_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rate_Price_Range_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rate_Price_Range_Order_By>>;
  where?: InputMaybe<Rate_Price_Range_Bool_Exp>;
};


/** columns and relationships of "rate" */
export type RatePrice_RulesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "rate" */
export type Rate_Aggregate = {
  __typename?: 'rate_aggregate';
  aggregate?: Maybe<Rate_Aggregate_Fields>;
  nodes: Array<Rate>;
};

export type Rate_Aggregate_Bool_Exp = {
  count?: InputMaybe<Rate_Aggregate_Bool_Exp_Count>;
};

export type Rate_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Rate_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Rate_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "rate" */
export type Rate_Aggregate_Fields = {
  __typename?: 'rate_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Rate_Max_Fields>;
  min?: Maybe<Rate_Min_Fields>;
};


/** aggregate fields of "rate" */
export type Rate_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rate_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "rate" */
export type Rate_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rate_Max_Order_By>;
  min?: InputMaybe<Rate_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Rate_Append_Input = {
  availability_rules?: InputMaybe<Scalars['jsonb']['input']>;
  configuration?: InputMaybe<Scalars['jsonb']['input']>;
  price_rules?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "rate" */
export type Rate_Arr_Rel_Insert_Input = {
  data: Array<Rate_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Rate_On_Conflict>;
};

/** Boolean expression to filter rows from the table "rate". All fields are combined with a logical 'AND'. */
export type Rate_Bool_Exp = {
  _and?: InputMaybe<Array<Rate_Bool_Exp>>;
  _not?: InputMaybe<Rate_Bool_Exp>;
  _or?: InputMaybe<Array<Rate_Bool_Exp>>;
  availability_rules?: InputMaybe<Jsonb_Comparison_Exp>;
  configuration?: InputMaybe<Jsonb_Comparison_Exp>;
  headline?: InputMaybe<Rate_Headline_Bool_Exp>;
  headline_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<Rate_Name_Bool_Exp>;
  name_id?: InputMaybe<Uuid_Comparison_Exp>;
  price_calendar?: InputMaybe<Rate_Price_Range_Bool_Exp>;
  price_calendar_aggregate?: InputMaybe<Rate_Price_Range_Aggregate_Bool_Exp>;
  price_rules?: InputMaybe<Jsonb_Comparison_Exp>;
  product?: InputMaybe<Product_Bool_Exp>;
  product_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "rate" */
export enum Rate_Constraint {
  /** unique or primary key constraint on columns "id" */
  RatePkey = 'rate_pkey'
}

export type Rate_Create_Input = {
  id: Scalars['uuid']['input'];
  organization_id: Scalars['uuid']['input'];
  product_id: Scalars['uuid']['input'];
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Rate_Delete_At_Path_Input = {
  availability_rules?: InputMaybe<Array<Scalars['String']['input']>>;
  configuration?: InputMaybe<Array<Scalars['String']['input']>>;
  price_rules?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Rate_Delete_Elem_Input = {
  availability_rules?: InputMaybe<Scalars['Int']['input']>;
  configuration?: InputMaybe<Scalars['Int']['input']>;
  price_rules?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Rate_Delete_Key_Input = {
  availability_rules?: InputMaybe<Scalars['String']['input']>;
  configuration?: InputMaybe<Scalars['String']['input']>;
  price_rules?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "rate_headline" */
export type Rate_Headline = {
  __typename?: 'rate_headline';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
};

/** aggregated selection of "rate_headline" */
export type Rate_Headline_Aggregate = {
  __typename?: 'rate_headline_aggregate';
  aggregate?: Maybe<Rate_Headline_Aggregate_Fields>;
  nodes: Array<Rate_Headline>;
};

/** aggregate fields of "rate_headline" */
export type Rate_Headline_Aggregate_Fields = {
  __typename?: 'rate_headline_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Rate_Headline_Max_Fields>;
  min?: Maybe<Rate_Headline_Min_Fields>;
};


/** aggregate fields of "rate_headline" */
export type Rate_Headline_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rate_Headline_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "rate_headline". All fields are combined with a logical 'AND'. */
export type Rate_Headline_Bool_Exp = {
  _and?: InputMaybe<Array<Rate_Headline_Bool_Exp>>;
  _not?: InputMaybe<Rate_Headline_Bool_Exp>;
  _or?: InputMaybe<Array<Rate_Headline_Bool_Exp>>;
  de?: InputMaybe<String_Comparison_Exp>;
  en?: InputMaybe<String_Comparison_Exp>;
  es?: InputMaybe<String_Comparison_Exp>;
  fr?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "rate_headline" */
export enum Rate_Headline_Constraint {
  /** unique or primary key constraint on columns "id" */
  RateHeadlinePkey = 'rate_headline_pkey'
}

/** input type for inserting data into table "rate_headline" */
export type Rate_Headline_Insert_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Rate_Headline_Max_Fields = {
  __typename?: 'rate_headline_max_fields';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Rate_Headline_Min_Fields = {
  __typename?: 'rate_headline_min_fields';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "rate_headline" */
export type Rate_Headline_Mutation_Response = {
  __typename?: 'rate_headline_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Rate_Headline>;
};

/** input type for inserting object relation for remote table "rate_headline" */
export type Rate_Headline_Obj_Rel_Insert_Input = {
  data: Rate_Headline_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Rate_Headline_On_Conflict>;
};

/** on_conflict condition type for table "rate_headline" */
export type Rate_Headline_On_Conflict = {
  constraint: Rate_Headline_Constraint;
  update_columns?: Array<Rate_Headline_Update_Column>;
  where?: InputMaybe<Rate_Headline_Bool_Exp>;
};

/** Ordering options when selecting data from "rate_headline". */
export type Rate_Headline_Order_By = {
  de?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  es?: InputMaybe<Order_By>;
  fr?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rate_headline */
export type Rate_Headline_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "rate_headline" */
export enum Rate_Headline_Select_Column {
  /** column name */
  De = 'de',
  /** column name */
  En = 'en',
  /** column name */
  Es = 'es',
  /** column name */
  Fr = 'fr',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "rate_headline" */
export type Rate_Headline_Set_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "rate_headline" */
export type Rate_Headline_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rate_Headline_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rate_Headline_Stream_Cursor_Value_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "rate_headline" */
export enum Rate_Headline_Update_Column {
  /** column name */
  De = 'de',
  /** column name */
  En = 'en',
  /** column name */
  Es = 'es',
  /** column name */
  Fr = 'fr',
  /** column name */
  Id = 'id'
}

export type Rate_Headline_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rate_Headline_Set_Input>;
  /** filter the rows which have to be updated */
  where: Rate_Headline_Bool_Exp;
};

/** input type for inserting data into table "rate" */
export type Rate_Insert_Input = {
  availability_rules?: InputMaybe<Scalars['jsonb']['input']>;
  configuration?: InputMaybe<Scalars['jsonb']['input']>;
  headline?: InputMaybe<Rate_Headline_Obj_Rel_Insert_Input>;
  headline_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Rate_Name_Obj_Rel_Insert_Input>;
  name_id?: InputMaybe<Scalars['uuid']['input']>;
  price_calendar?: InputMaybe<Rate_Price_Range_Arr_Rel_Insert_Input>;
  price_rules?: InputMaybe<Scalars['jsonb']['input']>;
  product?: InputMaybe<Product_Obj_Rel_Insert_Input>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Rate_Max_Fields = {
  __typename?: 'rate_max_fields';
  headline_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name_id?: Maybe<Scalars['uuid']['output']>;
  product_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "rate" */
export type Rate_Max_Order_By = {
  headline_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Rate_Min_Fields = {
  __typename?: 'rate_min_fields';
  headline_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name_id?: Maybe<Scalars['uuid']['output']>;
  product_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "rate" */
export type Rate_Min_Order_By = {
  headline_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "rate" */
export type Rate_Mutation_Response = {
  __typename?: 'rate_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Rate>;
};

/** columns and relationships of "rate_name" */
export type Rate_Name = {
  __typename?: 'rate_name';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
};

/** aggregated selection of "rate_name" */
export type Rate_Name_Aggregate = {
  __typename?: 'rate_name_aggregate';
  aggregate?: Maybe<Rate_Name_Aggregate_Fields>;
  nodes: Array<Rate_Name>;
};

/** aggregate fields of "rate_name" */
export type Rate_Name_Aggregate_Fields = {
  __typename?: 'rate_name_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Rate_Name_Max_Fields>;
  min?: Maybe<Rate_Name_Min_Fields>;
};


/** aggregate fields of "rate_name" */
export type Rate_Name_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rate_Name_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "rate_name". All fields are combined with a logical 'AND'. */
export type Rate_Name_Bool_Exp = {
  _and?: InputMaybe<Array<Rate_Name_Bool_Exp>>;
  _not?: InputMaybe<Rate_Name_Bool_Exp>;
  _or?: InputMaybe<Array<Rate_Name_Bool_Exp>>;
  de?: InputMaybe<String_Comparison_Exp>;
  en?: InputMaybe<String_Comparison_Exp>;
  es?: InputMaybe<String_Comparison_Exp>;
  fr?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "rate_name" */
export enum Rate_Name_Constraint {
  /** unique or primary key constraint on columns "id" */
  RateNamePkey = 'rate_name_pkey'
}

/** input type for inserting data into table "rate_name" */
export type Rate_Name_Insert_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Rate_Name_Max_Fields = {
  __typename?: 'rate_name_max_fields';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Rate_Name_Min_Fields = {
  __typename?: 'rate_name_min_fields';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "rate_name" */
export type Rate_Name_Mutation_Response = {
  __typename?: 'rate_name_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Rate_Name>;
};

/** input type for inserting object relation for remote table "rate_name" */
export type Rate_Name_Obj_Rel_Insert_Input = {
  data: Rate_Name_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Rate_Name_On_Conflict>;
};

/** on_conflict condition type for table "rate_name" */
export type Rate_Name_On_Conflict = {
  constraint: Rate_Name_Constraint;
  update_columns?: Array<Rate_Name_Update_Column>;
  where?: InputMaybe<Rate_Name_Bool_Exp>;
};

/** Ordering options when selecting data from "rate_name". */
export type Rate_Name_Order_By = {
  de?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  es?: InputMaybe<Order_By>;
  fr?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rate_name */
export type Rate_Name_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "rate_name" */
export enum Rate_Name_Select_Column {
  /** column name */
  De = 'de',
  /** column name */
  En = 'en',
  /** column name */
  Es = 'es',
  /** column name */
  Fr = 'fr',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "rate_name" */
export type Rate_Name_Set_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "rate_name" */
export type Rate_Name_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rate_Name_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rate_Name_Stream_Cursor_Value_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "rate_name" */
export enum Rate_Name_Update_Column {
  /** column name */
  De = 'de',
  /** column name */
  En = 'en',
  /** column name */
  Es = 'es',
  /** column name */
  Fr = 'fr',
  /** column name */
  Id = 'id'
}

export type Rate_Name_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rate_Name_Set_Input>;
  /** filter the rows which have to be updated */
  where: Rate_Name_Bool_Exp;
};

/** input type for inserting object relation for remote table "rate" */
export type Rate_Obj_Rel_Insert_Input = {
  data: Rate_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Rate_On_Conflict>;
};

/** on_conflict condition type for table "rate" */
export type Rate_On_Conflict = {
  constraint: Rate_Constraint;
  update_columns?: Array<Rate_Update_Column>;
  where?: InputMaybe<Rate_Bool_Exp>;
};

/** Ordering options when selecting data from "rate". */
export type Rate_Order_By = {
  availability_rules?: InputMaybe<Order_By>;
  configuration?: InputMaybe<Order_By>;
  headline?: InputMaybe<Rate_Headline_Order_By>;
  headline_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Rate_Name_Order_By>;
  name_id?: InputMaybe<Order_By>;
  price_calendar_aggregate?: InputMaybe<Rate_Price_Range_Aggregate_Order_By>;
  price_rules?: InputMaybe<Order_By>;
  product?: InputMaybe<Product_Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rate */
export type Rate_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Rate_Prepend_Input = {
  availability_rules?: InputMaybe<Scalars['jsonb']['input']>;
  configuration?: InputMaybe<Scalars['jsonb']['input']>;
  price_rules?: InputMaybe<Scalars['jsonb']['input']>;
};

/** columns and relationships of "rate_price_range" */
export type Rate_Price_Range = {
  __typename?: 'rate_price_range';
  daily: Scalars['numeric']['output'];
  from: Scalars['timestamp']['output'];
  hourly: Scalars['numeric']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  rate: Rate;
  rate_id: Scalars['uuid']['output'];
  to: Scalars['timestamp']['output'];
};

/** aggregated selection of "rate_price_range" */
export type Rate_Price_Range_Aggregate = {
  __typename?: 'rate_price_range_aggregate';
  aggregate?: Maybe<Rate_Price_Range_Aggregate_Fields>;
  nodes: Array<Rate_Price_Range>;
};

export type Rate_Price_Range_Aggregate_Bool_Exp = {
  count?: InputMaybe<Rate_Price_Range_Aggregate_Bool_Exp_Count>;
};

export type Rate_Price_Range_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Rate_Price_Range_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Rate_Price_Range_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "rate_price_range" */
export type Rate_Price_Range_Aggregate_Fields = {
  __typename?: 'rate_price_range_aggregate_fields';
  avg?: Maybe<Rate_Price_Range_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Rate_Price_Range_Max_Fields>;
  min?: Maybe<Rate_Price_Range_Min_Fields>;
  stddev?: Maybe<Rate_Price_Range_Stddev_Fields>;
  stddev_pop?: Maybe<Rate_Price_Range_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rate_Price_Range_Stddev_Samp_Fields>;
  sum?: Maybe<Rate_Price_Range_Sum_Fields>;
  var_pop?: Maybe<Rate_Price_Range_Var_Pop_Fields>;
  var_samp?: Maybe<Rate_Price_Range_Var_Samp_Fields>;
  variance?: Maybe<Rate_Price_Range_Variance_Fields>;
};


/** aggregate fields of "rate_price_range" */
export type Rate_Price_Range_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rate_Price_Range_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "rate_price_range" */
export type Rate_Price_Range_Aggregate_Order_By = {
  avg?: InputMaybe<Rate_Price_Range_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rate_Price_Range_Max_Order_By>;
  min?: InputMaybe<Rate_Price_Range_Min_Order_By>;
  stddev?: InputMaybe<Rate_Price_Range_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Rate_Price_Range_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Rate_Price_Range_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Rate_Price_Range_Sum_Order_By>;
  var_pop?: InputMaybe<Rate_Price_Range_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Rate_Price_Range_Var_Samp_Order_By>;
  variance?: InputMaybe<Rate_Price_Range_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "rate_price_range" */
export type Rate_Price_Range_Arr_Rel_Insert_Input = {
  data: Array<Rate_Price_Range_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Rate_Price_Range_On_Conflict>;
};

/** aggregate avg on columns */
export type Rate_Price_Range_Avg_Fields = {
  __typename?: 'rate_price_range_avg_fields';
  daily?: Maybe<Scalars['Float']['output']>;
  hourly?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "rate_price_range" */
export type Rate_Price_Range_Avg_Order_By = {
  daily?: InputMaybe<Order_By>;
  hourly?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "rate_price_range". All fields are combined with a logical 'AND'. */
export type Rate_Price_Range_Bool_Exp = {
  _and?: InputMaybe<Array<Rate_Price_Range_Bool_Exp>>;
  _not?: InputMaybe<Rate_Price_Range_Bool_Exp>;
  _or?: InputMaybe<Array<Rate_Price_Range_Bool_Exp>>;
  daily?: InputMaybe<Numeric_Comparison_Exp>;
  from?: InputMaybe<Timestamp_Comparison_Exp>;
  hourly?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  rate?: InputMaybe<Rate_Bool_Exp>;
  rate_id?: InputMaybe<Uuid_Comparison_Exp>;
  to?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "rate_price_range" */
export enum Rate_Price_Range_Constraint {
  /** unique or primary key constraint on columns "id" */
  RatePriceRangePkey = 'rate_price_range_pkey'
}

/** input type for incrementing numeric columns in table "rate_price_range" */
export type Rate_Price_Range_Inc_Input = {
  daily?: InputMaybe<Scalars['numeric']['input']>;
  hourly?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "rate_price_range" */
export type Rate_Price_Range_Insert_Input = {
  daily?: InputMaybe<Scalars['numeric']['input']>;
  from?: InputMaybe<Scalars['timestamp']['input']>;
  hourly?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  rate?: InputMaybe<Rate_Obj_Rel_Insert_Input>;
  rate_id?: InputMaybe<Scalars['uuid']['input']>;
  to?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type Rate_Price_Range_Max_Fields = {
  __typename?: 'rate_price_range_max_fields';
  daily?: Maybe<Scalars['numeric']['output']>;
  from?: Maybe<Scalars['timestamp']['output']>;
  hourly?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  rate_id?: Maybe<Scalars['uuid']['output']>;
  to?: Maybe<Scalars['timestamp']['output']>;
};

/** order by max() on columns of table "rate_price_range" */
export type Rate_Price_Range_Max_Order_By = {
  daily?: InputMaybe<Order_By>;
  from?: InputMaybe<Order_By>;
  hourly?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rate_id?: InputMaybe<Order_By>;
  to?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Rate_Price_Range_Min_Fields = {
  __typename?: 'rate_price_range_min_fields';
  daily?: Maybe<Scalars['numeric']['output']>;
  from?: Maybe<Scalars['timestamp']['output']>;
  hourly?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  rate_id?: Maybe<Scalars['uuid']['output']>;
  to?: Maybe<Scalars['timestamp']['output']>;
};

/** order by min() on columns of table "rate_price_range" */
export type Rate_Price_Range_Min_Order_By = {
  daily?: InputMaybe<Order_By>;
  from?: InputMaybe<Order_By>;
  hourly?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rate_id?: InputMaybe<Order_By>;
  to?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "rate_price_range" */
export type Rate_Price_Range_Mutation_Response = {
  __typename?: 'rate_price_range_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Rate_Price_Range>;
};

/** on_conflict condition type for table "rate_price_range" */
export type Rate_Price_Range_On_Conflict = {
  constraint: Rate_Price_Range_Constraint;
  update_columns?: Array<Rate_Price_Range_Update_Column>;
  where?: InputMaybe<Rate_Price_Range_Bool_Exp>;
};

/** Ordering options when selecting data from "rate_price_range". */
export type Rate_Price_Range_Order_By = {
  daily?: InputMaybe<Order_By>;
  from?: InputMaybe<Order_By>;
  hourly?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rate?: InputMaybe<Rate_Order_By>;
  rate_id?: InputMaybe<Order_By>;
  to?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rate_price_range */
export type Rate_Price_Range_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "rate_price_range" */
export enum Rate_Price_Range_Select_Column {
  /** column name */
  Daily = 'daily',
  /** column name */
  From = 'from',
  /** column name */
  Hourly = 'hourly',
  /** column name */
  Id = 'id',
  /** column name */
  RateId = 'rate_id',
  /** column name */
  To = 'to'
}

/** input type for updating data in table "rate_price_range" */
export type Rate_Price_Range_Set_Input = {
  daily?: InputMaybe<Scalars['numeric']['input']>;
  from?: InputMaybe<Scalars['timestamp']['input']>;
  hourly?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  rate_id?: InputMaybe<Scalars['uuid']['input']>;
  to?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate stddev on columns */
export type Rate_Price_Range_Stddev_Fields = {
  __typename?: 'rate_price_range_stddev_fields';
  daily?: Maybe<Scalars['Float']['output']>;
  hourly?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "rate_price_range" */
export type Rate_Price_Range_Stddev_Order_By = {
  daily?: InputMaybe<Order_By>;
  hourly?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Rate_Price_Range_Stddev_Pop_Fields = {
  __typename?: 'rate_price_range_stddev_pop_fields';
  daily?: Maybe<Scalars['Float']['output']>;
  hourly?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "rate_price_range" */
export type Rate_Price_Range_Stddev_Pop_Order_By = {
  daily?: InputMaybe<Order_By>;
  hourly?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Rate_Price_Range_Stddev_Samp_Fields = {
  __typename?: 'rate_price_range_stddev_samp_fields';
  daily?: Maybe<Scalars['Float']['output']>;
  hourly?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "rate_price_range" */
export type Rate_Price_Range_Stddev_Samp_Order_By = {
  daily?: InputMaybe<Order_By>;
  hourly?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "rate_price_range" */
export type Rate_Price_Range_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rate_Price_Range_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rate_Price_Range_Stream_Cursor_Value_Input = {
  daily?: InputMaybe<Scalars['numeric']['input']>;
  from?: InputMaybe<Scalars['timestamp']['input']>;
  hourly?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  rate_id?: InputMaybe<Scalars['uuid']['input']>;
  to?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type Rate_Price_Range_Sum_Fields = {
  __typename?: 'rate_price_range_sum_fields';
  daily?: Maybe<Scalars['numeric']['output']>;
  hourly?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "rate_price_range" */
export type Rate_Price_Range_Sum_Order_By = {
  daily?: InputMaybe<Order_By>;
  hourly?: InputMaybe<Order_By>;
};

/** update columns of table "rate_price_range" */
export enum Rate_Price_Range_Update_Column {
  /** column name */
  Daily = 'daily',
  /** column name */
  From = 'from',
  /** column name */
  Hourly = 'hourly',
  /** column name */
  Id = 'id',
  /** column name */
  RateId = 'rate_id',
  /** column name */
  To = 'to'
}

export type Rate_Price_Range_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Rate_Price_Range_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rate_Price_Range_Set_Input>;
  /** filter the rows which have to be updated */
  where: Rate_Price_Range_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Rate_Price_Range_Var_Pop_Fields = {
  __typename?: 'rate_price_range_var_pop_fields';
  daily?: Maybe<Scalars['Float']['output']>;
  hourly?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "rate_price_range" */
export type Rate_Price_Range_Var_Pop_Order_By = {
  daily?: InputMaybe<Order_By>;
  hourly?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Rate_Price_Range_Var_Samp_Fields = {
  __typename?: 'rate_price_range_var_samp_fields';
  daily?: Maybe<Scalars['Float']['output']>;
  hourly?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "rate_price_range" */
export type Rate_Price_Range_Var_Samp_Order_By = {
  daily?: InputMaybe<Order_By>;
  hourly?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Rate_Price_Range_Variance_Fields = {
  __typename?: 'rate_price_range_variance_fields';
  daily?: Maybe<Scalars['Float']['output']>;
  hourly?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "rate_price_range" */
export type Rate_Price_Range_Variance_Order_By = {
  daily?: InputMaybe<Order_By>;
  hourly?: InputMaybe<Order_By>;
};

export type Rate_Save_Input = {
  configuration?: InputMaybe<Scalars['json']['input']>;
  headline?: InputMaybe<Multilanguage_Field_Input>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Multilanguage_Field_Input>;
  price_calendar: Array<Date_Range_With_Value>;
  product_id: Scalars['String']['input'];
};

/** select columns of table "rate" */
export enum Rate_Select_Column {
  /** column name */
  AvailabilityRules = 'availability_rules',
  /** column name */
  Configuration = 'configuration',
  /** column name */
  HeadlineId = 'headline_id',
  /** column name */
  Id = 'id',
  /** column name */
  NameId = 'name_id',
  /** column name */
  PriceRules = 'price_rules',
  /** column name */
  ProductId = 'product_id'
}

/** input type for updating data in table "rate" */
export type Rate_Set_Input = {
  availability_rules?: InputMaybe<Scalars['jsonb']['input']>;
  configuration?: InputMaybe<Scalars['jsonb']['input']>;
  headline_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name_id?: InputMaybe<Scalars['uuid']['input']>;
  price_rules?: InputMaybe<Scalars['jsonb']['input']>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "rate" */
export type Rate_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rate_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rate_Stream_Cursor_Value_Input = {
  availability_rules?: InputMaybe<Scalars['jsonb']['input']>;
  configuration?: InputMaybe<Scalars['jsonb']['input']>;
  headline_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name_id?: InputMaybe<Scalars['uuid']['input']>;
  price_rules?: InputMaybe<Scalars['jsonb']['input']>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** columns and relationships of "rate_type" */
export type Rate_Type = {
  __typename?: 'rate_type';
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
};

/** aggregated selection of "rate_type" */
export type Rate_Type_Aggregate = {
  __typename?: 'rate_type_aggregate';
  aggregate?: Maybe<Rate_Type_Aggregate_Fields>;
  nodes: Array<Rate_Type>;
};

/** aggregate fields of "rate_type" */
export type Rate_Type_Aggregate_Fields = {
  __typename?: 'rate_type_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Rate_Type_Max_Fields>;
  min?: Maybe<Rate_Type_Min_Fields>;
};


/** aggregate fields of "rate_type" */
export type Rate_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rate_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "rate_type". All fields are combined with a logical 'AND'. */
export type Rate_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Rate_Type_Bool_Exp>>;
  _not?: InputMaybe<Rate_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Rate_Type_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "rate_type" */
export enum Rate_Type_Constraint {
  /** unique or primary key constraint on columns "id" */
  RateTypePkey = 'rate_type_pkey'
}

export enum Rate_Type_Enum {
  /** Daily */
  Daily = 'DAILY',
  /** Taximeter */
  Taximeter = 'TAXIMETER',
  /** Time slots */
  TimeSlots = 'TIME_SLOTS'
}

/** Boolean expression to compare columns of type "rate_type_enum". All fields are combined with logical 'AND'. */
export type Rate_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Rate_Type_Enum>;
  _in?: InputMaybe<Array<Rate_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Rate_Type_Enum>;
  _nin?: InputMaybe<Array<Rate_Type_Enum>>;
};

/** input type for inserting data into table "rate_type" */
export type Rate_Type_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Rate_Type_Max_Fields = {
  __typename?: 'rate_type_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Rate_Type_Min_Fields = {
  __typename?: 'rate_type_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "rate_type" */
export type Rate_Type_Mutation_Response = {
  __typename?: 'rate_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Rate_Type>;
};

/** on_conflict condition type for table "rate_type" */
export type Rate_Type_On_Conflict = {
  constraint: Rate_Type_Constraint;
  update_columns?: Array<Rate_Type_Update_Column>;
  where?: InputMaybe<Rate_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "rate_type". */
export type Rate_Type_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rate_type */
export type Rate_Type_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "rate_type" */
export enum Rate_Type_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "rate_type" */
export type Rate_Type_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "rate_type" */
export type Rate_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rate_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rate_Type_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "rate_type" */
export enum Rate_Type_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id'
}

export type Rate_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rate_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Rate_Type_Bool_Exp;
};

/** update columns of table "rate" */
export enum Rate_Update_Column {
  /** column name */
  AvailabilityRules = 'availability_rules',
  /** column name */
  Configuration = 'configuration',
  /** column name */
  HeadlineId = 'headline_id',
  /** column name */
  Id = 'id',
  /** column name */
  NameId = 'name_id',
  /** column name */
  PriceRules = 'price_rules',
  /** column name */
  ProductId = 'product_id'
}

export type Rate_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Rate_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Rate_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Rate_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Rate_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Rate_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rate_Set_Input>;
  /** filter the rows which have to be updated */
  where: Rate_Bool_Exp;
};

/** columns and relationships of "role" */
export type Role = {
  __typename?: 'role';
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
};

/** aggregated selection of "role" */
export type Role_Aggregate = {
  __typename?: 'role_aggregate';
  aggregate?: Maybe<Role_Aggregate_Fields>;
  nodes: Array<Role>;
};

/** aggregate fields of "role" */
export type Role_Aggregate_Fields = {
  __typename?: 'role_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Role_Max_Fields>;
  min?: Maybe<Role_Min_Fields>;
};


/** aggregate fields of "role" */
export type Role_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "role". All fields are combined with a logical 'AND'. */
export type Role_Bool_Exp = {
  _and?: InputMaybe<Array<Role_Bool_Exp>>;
  _not?: InputMaybe<Role_Bool_Exp>;
  _or?: InputMaybe<Array<Role_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "role" */
export enum Role_Constraint {
  /** unique or primary key constraint on columns "id" */
  RolePkey = 'role_pkey'
}

export enum Role_Enum {
  /** Administrator */
  Admin = 'ADMIN',
  /** Editor */
  Editor = 'EDITOR',
  /** Viewer */
  Viewer = 'VIEWER'
}

/** Boolean expression to compare columns of type "role_enum". All fields are combined with logical 'AND'. */
export type Role_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Role_Enum>;
  _in?: InputMaybe<Array<Role_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Role_Enum>;
  _nin?: InputMaybe<Array<Role_Enum>>;
};

/** input type for inserting data into table "role" */
export type Role_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Role_Max_Fields = {
  __typename?: 'role_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Role_Min_Fields = {
  __typename?: 'role_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "role" */
export type Role_Mutation_Response = {
  __typename?: 'role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Role>;
};

/** on_conflict condition type for table "role" */
export type Role_On_Conflict = {
  constraint: Role_Constraint;
  update_columns?: Array<Role_Update_Column>;
  where?: InputMaybe<Role_Bool_Exp>;
};

/** Ordering options when selecting data from "role". */
export type Role_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: role */
export type Role_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "role" */
export enum Role_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "role" */
export type Role_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "role" */
export type Role_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Role_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Role_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "role" */
export enum Role_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id'
}

export type Role_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Role_Set_Input>;
  /** filter the rows which have to be updated */
  where: Role_Bool_Exp;
};

export type Save_Product_Features_Input = {
  features: Array<Feature_With_Value_Input>;
  organization_id: Scalars['uuid']['input'];
  product_id: Scalars['uuid']['input'];
};

export type Search_Params_Input = {
  date_range: Date_Range;
  units: Array<Search_Unit_Input>;
};

export type Search_Unit_Input = {
  people?: InputMaybe<Array<Person_Input>>;
};

export type Selected_Item = {
  value: Scalars['uuid']['input'];
};

/** columns and relationships of "site" */
export type Site = {
  __typename?: 'site';
  id: Scalars['uuid']['output'];
  /** An object relationship */
  organization: Organization;
  organization_id: Scalars['uuid']['output'];
  url: Scalars['String']['output'];
};

/** aggregated selection of "site" */
export type Site_Aggregate = {
  __typename?: 'site_aggregate';
  aggregate?: Maybe<Site_Aggregate_Fields>;
  nodes: Array<Site>;
};

export type Site_Aggregate_Bool_Exp = {
  count?: InputMaybe<Site_Aggregate_Bool_Exp_Count>;
};

export type Site_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Site_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Site_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "site" */
export type Site_Aggregate_Fields = {
  __typename?: 'site_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Site_Max_Fields>;
  min?: Maybe<Site_Min_Fields>;
};


/** aggregate fields of "site" */
export type Site_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Site_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "site" */
export type Site_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Site_Max_Order_By>;
  min?: InputMaybe<Site_Min_Order_By>;
};

/** input type for inserting array relation for remote table "site" */
export type Site_Arr_Rel_Insert_Input = {
  data: Array<Site_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Site_On_Conflict>;
};

/** Boolean expression to filter rows from the table "site". All fields are combined with a logical 'AND'. */
export type Site_Bool_Exp = {
  _and?: InputMaybe<Array<Site_Bool_Exp>>;
  _not?: InputMaybe<Site_Bool_Exp>;
  _or?: InputMaybe<Array<Site_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  organization?: InputMaybe<Organization_Bool_Exp>;
  organization_id?: InputMaybe<Uuid_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "site" */
export enum Site_Constraint {
  /** unique or primary key constraint on columns "id" */
  SitePkey = 'site_pkey'
}

/** input type for inserting data into table "site" */
export type Site_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Site_Max_Fields = {
  __typename?: 'site_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  organization_id?: Maybe<Scalars['uuid']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "site" */
export type Site_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Site_Min_Fields = {
  __typename?: 'site_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  organization_id?: Maybe<Scalars['uuid']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "site" */
export type Site_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "site" */
export type Site_Mutation_Response = {
  __typename?: 'site_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Site>;
};

/** on_conflict condition type for table "site" */
export type Site_On_Conflict = {
  constraint: Site_Constraint;
  update_columns?: Array<Site_Update_Column>;
  where?: InputMaybe<Site_Bool_Exp>;
};

/** Ordering options when selecting data from "site". */
export type Site_Order_By = {
  id?: InputMaybe<Order_By>;
  organization?: InputMaybe<Organization_Order_By>;
  organization_id?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: site */
export type Site_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "site" */
export enum Site_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "site" */
export type Site_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "site" */
export type Site_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Site_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Site_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "site" */
export enum Site_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  Url = 'url'
}

export type Site_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Site_Set_Input>;
  /** filter the rows which have to be updated */
  where: Site_Bool_Exp;
};

/** columns and relationships of "slug" */
export type Slug = {
  __typename?: 'slug';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
};

/** aggregated selection of "slug" */
export type Slug_Aggregate = {
  __typename?: 'slug_aggregate';
  aggregate?: Maybe<Slug_Aggregate_Fields>;
  nodes: Array<Slug>;
};

/** aggregate fields of "slug" */
export type Slug_Aggregate_Fields = {
  __typename?: 'slug_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Slug_Max_Fields>;
  min?: Maybe<Slug_Min_Fields>;
};


/** aggregate fields of "slug" */
export type Slug_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Slug_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "slug". All fields are combined with a logical 'AND'. */
export type Slug_Bool_Exp = {
  _and?: InputMaybe<Array<Slug_Bool_Exp>>;
  _not?: InputMaybe<Slug_Bool_Exp>;
  _or?: InputMaybe<Array<Slug_Bool_Exp>>;
  de?: InputMaybe<String_Comparison_Exp>;
  en?: InputMaybe<String_Comparison_Exp>;
  es?: InputMaybe<String_Comparison_Exp>;
  fr?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "slug" */
export enum Slug_Constraint {
  /** unique or primary key constraint on columns "id" */
  SlugPkey = 'slug_pkey'
}

/** input type for inserting data into table "slug" */
export type Slug_Insert_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Slug_Max_Fields = {
  __typename?: 'slug_max_fields';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Slug_Min_Fields = {
  __typename?: 'slug_min_fields';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "slug" */
export type Slug_Mutation_Response = {
  __typename?: 'slug_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Slug>;
};

/** input type for inserting object relation for remote table "slug" */
export type Slug_Obj_Rel_Insert_Input = {
  data: Slug_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Slug_On_Conflict>;
};

/** on_conflict condition type for table "slug" */
export type Slug_On_Conflict = {
  constraint: Slug_Constraint;
  update_columns?: Array<Slug_Update_Column>;
  where?: InputMaybe<Slug_Bool_Exp>;
};

/** Ordering options when selecting data from "slug". */
export type Slug_Order_By = {
  de?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  es?: InputMaybe<Order_By>;
  fr?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: slug */
export type Slug_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "slug" */
export enum Slug_Select_Column {
  /** column name */
  De = 'de',
  /** column name */
  En = 'en',
  /** column name */
  Es = 'es',
  /** column name */
  Fr = 'fr',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "slug" */
export type Slug_Set_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "slug" */
export type Slug_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Slug_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Slug_Stream_Cursor_Value_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "slug" */
export enum Slug_Update_Column {
  /** column name */
  De = 'de',
  /** column name */
  En = 'en',
  /** column name */
  Es = 'es',
  /** column name */
  Fr = 'fr',
  /** column name */
  Id = 'id'
}

export type Slug_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Slug_Set_Input>;
  /** filter the rows which have to be updated */
  where: Slug_Bool_Exp;
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']['input']>;
  _gt?: InputMaybe<Scalars['smallint']['input']>;
  _gte?: InputMaybe<Scalars['smallint']['input']>;
  _in?: InputMaybe<Array<Scalars['smallint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['smallint']['input']>;
  _lte?: InputMaybe<Scalars['smallint']['input']>;
  _neq?: InputMaybe<Scalars['smallint']['input']>;
  _nin?: InputMaybe<Array<Scalars['smallint']['input']>>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.provider_requests" */
  authProviderRequests_stream: Array<AuthProviderRequests>;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.providers" */
  authProviders_stream: Array<AuthProviders>;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_token_types" using primary key columns */
  authRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** fetch data from the table: "auth.refresh_token_types" */
  authRefreshTokenTypes: Array<AuthRefreshTokenTypes>;
  /** fetch aggregated fields from the table: "auth.refresh_token_types" */
  authRefreshTokenTypesAggregate: AuthRefreshTokenTypes_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.refresh_token_types" */
  authRefreshTokenTypes_stream: Array<AuthRefreshTokenTypes>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.refresh_tokens" */
  authRefreshTokens_stream: Array<AuthRefreshTokens>;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.roles" */
  authRoles_stream: Array<AuthRoles>;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_providers" */
  authUserProviders_stream: Array<AuthUserProviders>;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_roles" */
  authUserRoles_stream: Array<AuthUserRoles>;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_security_keys" */
  authUserSecurityKeys_stream: Array<AuthUserSecurityKeys>;
  /** fetch data from the table: "booking" */
  booking: Array<Booking>;
  /** fetch aggregated fields from the table: "booking" */
  booking_aggregate: Booking_Aggregate;
  /** fetch data from the table: "booking" using primary key columns */
  booking_by_pk?: Maybe<Booking>;
  /** fetch data from the table: "booking_events.event_type" */
  booking_events_event_type: Array<Booking_Events_Event_Type>;
  /** fetch aggregated fields from the table: "booking_events.event_type" */
  booking_events_event_type_aggregate: Booking_Events_Event_Type_Aggregate;
  /** fetch data from the table: "booking_events.event_type" using primary key columns */
  booking_events_event_type_by_pk?: Maybe<Booking_Events_Event_Type>;
  /** fetch data from the table in a streaming manner: "booking_events.event_type" */
  booking_events_event_type_stream: Array<Booking_Events_Event_Type>;
  /** fetch data from the table: "booking_events.main" */
  booking_events_main: Array<Booking_Events_Main>;
  /** fetch aggregated fields from the table: "booking_events.main" */
  booking_events_main_aggregate: Booking_Events_Main_Aggregate;
  /** fetch data from the table: "booking_events.main" using primary key columns */
  booking_events_main_by_pk?: Maybe<Booking_Events_Main>;
  /** fetch data from the table in a streaming manner: "booking_events.main" */
  booking_events_main_stream: Array<Booking_Events_Main>;
  /** fetch data from the table: "booking_events.version" */
  booking_events_version: Array<Booking_Events_Version>;
  /** fetch aggregated fields from the table: "booking_events.version" */
  booking_events_version_aggregate: Booking_Events_Version_Aggregate;
  /** fetch data from the table: "booking_events.version" using primary key columns */
  booking_events_version_by_pk?: Maybe<Booking_Events_Version>;
  /** fetch data from the table in a streaming manner: "booking_events.version" */
  booking_events_version_stream: Array<Booking_Events_Version>;
  /** fetch data from the table: "booking_history_entry" */
  booking_history_entry: Array<Booking_History_Entry>;
  /** fetch aggregated fields from the table: "booking_history_entry" */
  booking_history_entry_aggregate: Booking_History_Entry_Aggregate;
  /** fetch data from the table: "booking_history_entry" using primary key columns */
  booking_history_entry_by_pk?: Maybe<Booking_History_Entry>;
  /** fetch data from the table in a streaming manner: "booking_history_entry" */
  booking_history_entry_stream: Array<Booking_History_Entry>;
  /** fetch data from the table: "booking_product" */
  booking_product: Array<Booking_Product>;
  /** fetch aggregated fields from the table: "booking_product" */
  booking_product_aggregate: Booking_Product_Aggregate;
  /** fetch data from the table: "booking_product" using primary key columns */
  booking_product_by_pk?: Maybe<Booking_Product>;
  /** fetch data from the table in a streaming manner: "booking_product" */
  booking_product_stream: Array<Booking_Product>;
  /** fetch data from the table: "booking_question_scope" */
  booking_question_scope: Array<Booking_Question_Scope>;
  /** fetch aggregated fields from the table: "booking_question_scope" */
  booking_question_scope_aggregate: Booking_Question_Scope_Aggregate;
  /** fetch data from the table: "booking_question_scope" using primary key columns */
  booking_question_scope_by_pk?: Maybe<Booking_Question_Scope>;
  /** fetch data from the table in a streaming manner: "booking_question_scope" */
  booking_question_scope_stream: Array<Booking_Question_Scope>;
  /** fetch data from the table: "booking_question_type" */
  booking_question_type: Array<Booking_Question_Type>;
  /** fetch aggregated fields from the table: "booking_question_type" */
  booking_question_type_aggregate: Booking_Question_Type_Aggregate;
  /** fetch data from the table: "booking_question_type" using primary key columns */
  booking_question_type_by_pk?: Maybe<Booking_Question_Type>;
  /** fetch data from the table in a streaming manner: "booking_question_type" */
  booking_question_type_stream: Array<Booking_Question_Type>;
  /** fetch data from the table: "booking_state" */
  booking_state: Array<Booking_State>;
  /** fetch aggregated fields from the table: "booking_state" */
  booking_state_aggregate: Booking_State_Aggregate;
  /** fetch data from the table: "booking_state" using primary key columns */
  booking_state_by_pk?: Maybe<Booking_State>;
  /** fetch data from the table in a streaming manner: "booking_state" */
  booking_state_stream: Array<Booking_State>;
  /** fetch data from the table in a streaming manner: "booking" */
  booking_stream: Array<Booking>;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table in a streaming manner: "storage.buckets" */
  buckets_stream: Array<Buckets>;
  /** fetch data from the table: "category" */
  category: Array<Category>;
  /** fetch aggregated fields from the table: "category" */
  category_aggregate: Category_Aggregate;
  /** fetch data from the table: "category" using primary key columns */
  category_by_pk?: Maybe<Category>;
  /** fetch data from the table in a streaming manner: "category" */
  category_stream: Array<Category>;
  /** fetch data from the table: "contact" */
  contact: Array<Contact>;
  /** fetch aggregated fields from the table: "contact" */
  contact_aggregate: Contact_Aggregate;
  /** fetch data from the table: "contact" using primary key columns */
  contact_by_pk?: Maybe<Contact>;
  /** fetch data from the table in a streaming manner: "contact" */
  contact_stream: Array<Contact>;
  /** fetch data from the table: "feature" */
  feature: Array<Feature>;
  /** fetch aggregated fields from the table: "feature" */
  feature_aggregate: Feature_Aggregate;
  /** fetch data from the table: "feature" using primary key columns */
  feature_by_pk?: Maybe<Feature>;
  /** fetch data from the table: "feature_category" */
  feature_category: Array<Feature_Category>;
  /** fetch aggregated fields from the table: "feature_category" */
  feature_category_aggregate: Feature_Category_Aggregate;
  /** fetch data from the table: "feature_category" using primary key columns */
  feature_category_by_pk?: Maybe<Feature_Category>;
  /** fetch data from the table in a streaming manner: "feature_category" */
  feature_category_stream: Array<Feature_Category>;
  /** fetch data from the table in a streaming manner: "feature" */
  feature_stream: Array<Feature>;
  /** fetch data from the table: "feature_symbol" */
  feature_symbol: Array<Feature_Symbol>;
  /** fetch aggregated fields from the table: "feature_symbol" */
  feature_symbol_aggregate: Feature_Symbol_Aggregate;
  /** fetch data from the table: "feature_symbol" using primary key columns */
  feature_symbol_by_pk?: Maybe<Feature_Symbol>;
  /** fetch data from the table in a streaming manner: "feature_symbol" */
  feature_symbol_stream: Array<Feature_Symbol>;
  /** fetch data from the table: "feature_type" */
  feature_type: Array<Feature_Type>;
  /** fetch aggregated fields from the table: "feature_type" */
  feature_type_aggregate: Feature_Type_Aggregate;
  /** fetch data from the table: "feature_type" using primary key columns */
  feature_type_by_pk?: Maybe<Feature_Type>;
  /** fetch data from the table in a streaming manner: "feature_type" */
  feature_type_stream: Array<Feature_Type>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table in a streaming manner: "storage.files" */
  files_stream: Array<Files>;
  /** fetch data from the table: "media_gallery" */
  media_gallery: Array<Media_Gallery>;
  /** fetch aggregated fields from the table: "media_gallery" */
  media_gallery_aggregate: Media_Gallery_Aggregate;
  /** fetch data from the table: "media_gallery" using primary key columns */
  media_gallery_by_pk?: Maybe<Media_Gallery>;
  /** fetch data from the table: "media_gallery_item" */
  media_gallery_item: Array<Media_Gallery_Item>;
  /** fetch aggregated fields from the table: "media_gallery_item" */
  media_gallery_item_aggregate: Media_Gallery_Item_Aggregate;
  /** fetch data from the table: "media_gallery_item" using primary key columns */
  media_gallery_item_by_pk?: Maybe<Media_Gallery_Item>;
  /** fetch data from the table in a streaming manner: "media_gallery_item" */
  media_gallery_item_stream: Array<Media_Gallery_Item>;
  /** fetch data from the table in a streaming manner: "media_gallery" */
  media_gallery_stream: Array<Media_Gallery>;
  /** fetch data from the table: "my_web_section" */
  my_web_section: Array<My_Web_Section>;
  /** fetch aggregated fields from the table: "my_web_section" */
  my_web_section_aggregate: My_Web_Section_Aggregate;
  /** fetch data from the table: "my_web_section" using primary key columns */
  my_web_section_by_pk?: Maybe<My_Web_Section>;
  /** fetch data from the table in a streaming manner: "my_web_section" */
  my_web_section_stream: Array<My_Web_Section>;
  /** fetch data from the table: "organization" */
  organization: Array<Organization>;
  /** fetch aggregated fields from the table: "organization" */
  organization_aggregate: Organization_Aggregate;
  /** fetch data from the table: "organization_booking_question" */
  organization_booking_question: Array<Organization_Booking_Question>;
  /** fetch aggregated fields from the table: "organization_booking_question" */
  organization_booking_question_aggregate: Organization_Booking_Question_Aggregate;
  /** fetch data from the table: "organization_booking_question" using primary key columns */
  organization_booking_question_by_pk?: Maybe<Organization_Booking_Question>;
  /** fetch data from the table in a streaming manner: "organization_booking_question" */
  organization_booking_question_stream: Array<Organization_Booking_Question>;
  /** fetch data from the table: "organization_branding" */
  organization_branding: Array<Organization_Branding>;
  /** fetch aggregated fields from the table: "organization_branding" */
  organization_branding_aggregate: Organization_Branding_Aggregate;
  /** fetch data from the table: "organization_branding" using primary key columns */
  organization_branding_by_pk?: Maybe<Organization_Branding>;
  /** fetch data from the table: "organization_branding_meta_description" */
  organization_branding_meta_description: Array<Organization_Branding_Meta_Description>;
  /** fetch aggregated fields from the table: "organization_branding_meta_description" */
  organization_branding_meta_description_aggregate: Organization_Branding_Meta_Description_Aggregate;
  /** fetch data from the table: "organization_branding_meta_description" using primary key columns */
  organization_branding_meta_description_by_pk?: Maybe<Organization_Branding_Meta_Description>;
  /** fetch data from the table in a streaming manner: "organization_branding_meta_description" */
  organization_branding_meta_description_stream: Array<Organization_Branding_Meta_Description>;
  /** fetch data from the table: "organization_branding_meta_title" */
  organization_branding_meta_title: Array<Organization_Branding_Meta_Title>;
  /** fetch aggregated fields from the table: "organization_branding_meta_title" */
  organization_branding_meta_title_aggregate: Organization_Branding_Meta_Title_Aggregate;
  /** fetch data from the table: "organization_branding_meta_title" using primary key columns */
  organization_branding_meta_title_by_pk?: Maybe<Organization_Branding_Meta_Title>;
  /** fetch data from the table in a streaming manner: "organization_branding_meta_title" */
  organization_branding_meta_title_stream: Array<Organization_Branding_Meta_Title>;
  /** fetch data from the table in a streaming manner: "organization_branding" */
  organization_branding_stream: Array<Organization_Branding>;
  /** fetch data from the table: "organization_business_model" */
  organization_business_model: Array<Organization_Business_Model>;
  /** fetch aggregated fields from the table: "organization_business_model" */
  organization_business_model_aggregate: Organization_Business_Model_Aggregate;
  /** fetch data from the table: "organization_business_model" using primary key columns */
  organization_business_model_by_pk?: Maybe<Organization_Business_Model>;
  /** fetch data from the table in a streaming manner: "organization_business_model" */
  organization_business_model_stream: Array<Organization_Business_Model>;
  /** fetch data from the table: "organization" using primary key columns */
  organization_by_pk?: Maybe<Organization>;
  /** fetch data from the table: "organization_headline" */
  organization_headline: Array<Organization_Headline>;
  /** fetch aggregated fields from the table: "organization_headline" */
  organization_headline_aggregate: Organization_Headline_Aggregate;
  /** fetch data from the table: "organization_headline" using primary key columns */
  organization_headline_by_pk?: Maybe<Organization_Headline>;
  /** fetch data from the table in a streaming manner: "organization_headline" */
  organization_headline_stream: Array<Organization_Headline>;
  /** fetch data from the table: "organization_member" */
  organization_member: Array<Organization_Member>;
  /** fetch aggregated fields from the table: "organization_member" */
  organization_member_aggregate: Organization_Member_Aggregate;
  /** fetch data from the table: "organization_member" using primary key columns */
  organization_member_by_pk?: Maybe<Organization_Member>;
  /** fetch data from the table in a streaming manner: "organization_member" */
  organization_member_stream: Array<Organization_Member>;
  /** fetch data from the table: "organization_socials" */
  organization_socials: Array<Organization_Socials>;
  /** fetch aggregated fields from the table: "organization_socials" */
  organization_socials_aggregate: Organization_Socials_Aggregate;
  /** fetch data from the table: "organization_socials" using primary key columns */
  organization_socials_by_pk?: Maybe<Organization_Socials>;
  /** fetch data from the table in a streaming manner: "organization_socials" */
  organization_socials_stream: Array<Organization_Socials>;
  /** fetch data from the table in a streaming manner: "organization" */
  organization_stream: Array<Organization>;
  /** fetch data from the table: "place" */
  place: Array<Place>;
  /** fetch aggregated fields from the table: "place" */
  place_aggregate: Place_Aggregate;
  /** fetch data from the table: "place" using primary key columns */
  place_by_pk?: Maybe<Place>;
  /** fetch data from the table in a streaming manner: "place" */
  place_stream: Array<Place>;
  /** fetch data from the table: "product" */
  product: Array<Product>;
  /** fetch aggregated fields from the table: "product" */
  product_aggregate: Product_Aggregate;
  /** fetch data from the table: "product_allotment_range" */
  product_allotment_range: Array<Product_Allotment_Range>;
  /** fetch aggregated fields from the table: "product_allotment_range" */
  product_allotment_range_aggregate: Product_Allotment_Range_Aggregate;
  /** fetch data from the table: "product_allotment_range" using primary key columns */
  product_allotment_range_by_pk?: Maybe<Product_Allotment_Range>;
  /** fetch data from the table in a streaming manner: "product_allotment_range" */
  product_allotment_range_stream: Array<Product_Allotment_Range>;
  /** fetch data from the table: "product_business_model" */
  product_business_model: Array<Product_Business_Model>;
  /** fetch aggregated fields from the table: "product_business_model" */
  product_business_model_aggregate: Product_Business_Model_Aggregate;
  /** fetch data from the table: "product_business_model" using primary key columns */
  product_business_model_by_pk?: Maybe<Product_Business_Model>;
  /** fetch data from the table in a streaming manner: "product_business_model" */
  product_business_model_stream: Array<Product_Business_Model>;
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk?: Maybe<Product>;
  /** fetch data from the table: "product_description" */
  product_description: Array<Product_Description>;
  /** fetch aggregated fields from the table: "product_description" */
  product_description_aggregate: Product_Description_Aggregate;
  /** fetch data from the table: "product_description" using primary key columns */
  product_description_by_pk?: Maybe<Product_Description>;
  /** fetch data from the table in a streaming manner: "product_description" */
  product_description_stream: Array<Product_Description>;
  /** fetch data from the table: "product_feature" */
  product_feature: Array<Product_Feature>;
  /** fetch aggregated fields from the table: "product_feature" */
  product_feature_aggregate: Product_Feature_Aggregate;
  /** fetch data from the table: "product_feature" using primary key columns */
  product_feature_by_pk?: Maybe<Product_Feature>;
  /** fetch data from the table in a streaming manner: "product_feature" */
  product_feature_stream: Array<Product_Feature>;
  /** fetch data from the table: "product_group" */
  product_group: Array<Product_Group>;
  /** fetch aggregated fields from the table: "product_group" */
  product_group_aggregate: Product_Group_Aggregate;
  /** fetch data from the table: "product_group" using primary key columns */
  product_group_by_pk?: Maybe<Product_Group>;
  /** fetch data from the table: "product_group_product" */
  product_group_product: Array<Product_Group_Product>;
  /** fetch aggregated fields from the table: "product_group_product" */
  product_group_product_aggregate: Product_Group_Product_Aggregate;
  /** fetch data from the table: "product_group_product" using primary key columns */
  product_group_product_by_pk?: Maybe<Product_Group_Product>;
  /** fetch data from the table in a streaming manner: "product_group_product" */
  product_group_product_stream: Array<Product_Group_Product>;
  /** fetch data from the table in a streaming manner: "product_group" */
  product_group_stream: Array<Product_Group>;
  /** fetch data from the table: "product_headline" */
  product_headline: Array<Product_Headline>;
  /** fetch aggregated fields from the table: "product_headline" */
  product_headline_aggregate: Product_Headline_Aggregate;
  /** fetch data from the table: "product_headline" using primary key columns */
  product_headline_by_pk?: Maybe<Product_Headline>;
  /** fetch data from the table in a streaming manner: "product_headline" */
  product_headline_stream: Array<Product_Headline>;
  /** fetch data from the table: "product_name" */
  product_name: Array<Product_Name>;
  /** fetch aggregated fields from the table: "product_name" */
  product_name_aggregate: Product_Name_Aggregate;
  /** fetch data from the table: "product_name" using primary key columns */
  product_name_by_pk?: Maybe<Product_Name>;
  /** fetch data from the table in a streaming manner: "product_name" */
  product_name_stream: Array<Product_Name>;
  /** fetch data from the table in a streaming manner: "product" */
  product_stream: Array<Product>;
  /** fetch data from the table: "product_supplement" */
  product_supplement: Array<Product_Supplement>;
  /** fetch aggregated fields from the table: "product_supplement" */
  product_supplement_aggregate: Product_Supplement_Aggregate;
  /** fetch data from the table: "product_supplement" using primary key columns */
  product_supplement_by_pk?: Maybe<Product_Supplement>;
  /** fetch data from the table in a streaming manner: "product_supplement" */
  product_supplement_stream: Array<Product_Supplement>;
  /** fetch data from the table: "rate" */
  rate: Array<Rate>;
  /** fetch aggregated fields from the table: "rate" */
  rate_aggregate: Rate_Aggregate;
  /** fetch data from the table: "rate" using primary key columns */
  rate_by_pk?: Maybe<Rate>;
  /** fetch data from the table: "rate_headline" */
  rate_headline: Array<Rate_Headline>;
  /** fetch aggregated fields from the table: "rate_headline" */
  rate_headline_aggregate: Rate_Headline_Aggregate;
  /** fetch data from the table: "rate_headline" using primary key columns */
  rate_headline_by_pk?: Maybe<Rate_Headline>;
  /** fetch data from the table in a streaming manner: "rate_headline" */
  rate_headline_stream: Array<Rate_Headline>;
  /** fetch data from the table: "rate_name" */
  rate_name: Array<Rate_Name>;
  /** fetch aggregated fields from the table: "rate_name" */
  rate_name_aggregate: Rate_Name_Aggregate;
  /** fetch data from the table: "rate_name" using primary key columns */
  rate_name_by_pk?: Maybe<Rate_Name>;
  /** fetch data from the table in a streaming manner: "rate_name" */
  rate_name_stream: Array<Rate_Name>;
  /** fetch data from the table: "rate_price_range" */
  rate_price_range: Array<Rate_Price_Range>;
  /** fetch aggregated fields from the table: "rate_price_range" */
  rate_price_range_aggregate: Rate_Price_Range_Aggregate;
  /** fetch data from the table: "rate_price_range" using primary key columns */
  rate_price_range_by_pk?: Maybe<Rate_Price_Range>;
  /** fetch data from the table in a streaming manner: "rate_price_range" */
  rate_price_range_stream: Array<Rate_Price_Range>;
  /** fetch data from the table in a streaming manner: "rate" */
  rate_stream: Array<Rate>;
  /** fetch data from the table: "rate_type" */
  rate_type: Array<Rate_Type>;
  /** fetch aggregated fields from the table: "rate_type" */
  rate_type_aggregate: Rate_Type_Aggregate;
  /** fetch data from the table: "rate_type" using primary key columns */
  rate_type_by_pk?: Maybe<Rate_Type>;
  /** fetch data from the table in a streaming manner: "rate_type" */
  rate_type_stream: Array<Rate_Type>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: Role_Aggregate;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
  /** fetch data from the table in a streaming manner: "role" */
  role_stream: Array<Role>;
  /** fetch data from the table: "site" */
  site: Array<Site>;
  /** fetch aggregated fields from the table: "site" */
  site_aggregate: Site_Aggregate;
  /** fetch data from the table: "site" using primary key columns */
  site_by_pk?: Maybe<Site>;
  /** fetch data from the table in a streaming manner: "site" */
  site_stream: Array<Site>;
  /** fetch data from the table: "slug" */
  slug: Array<Slug>;
  /** fetch aggregated fields from the table: "slug" */
  slug_aggregate: Slug_Aggregate;
  /** fetch data from the table: "slug" using primary key columns */
  slug_by_pk?: Maybe<Slug>;
  /** fetch data from the table in a streaming manner: "slug" */
  slug_stream: Array<Slug>;
  /** fetch data from the table: "supplement" */
  supplement: Array<Supplement>;
  /** fetch aggregated fields from the table: "supplement" */
  supplement_aggregate: Supplement_Aggregate;
  /** fetch data from the table: "supplement" using primary key columns */
  supplement_by_pk?: Maybe<Supplement>;
  /** fetch data from the table: "supplement_prices" */
  supplement_prices: Array<Supplement_Prices>;
  /** fetch aggregated fields from the table: "supplement_prices" */
  supplement_prices_aggregate: Supplement_Prices_Aggregate;
  /** fetch data from the table in a streaming manner: "supplement_prices" */
  supplement_prices_stream: Array<Supplement_Prices>;
  /** fetch data from the table in a streaming manner: "supplement" */
  supplement_stream: Array<Supplement>;
  /** fetch data from the table: "supplement_type" */
  supplement_type: Array<Supplement_Type>;
  /** fetch aggregated fields from the table: "supplement_type" */
  supplement_type_aggregate: Supplement_Type_Aggregate;
  /** fetch data from the table: "supplement_type" using primary key columns */
  supplement_type_by_pk?: Maybe<Supplement_Type>;
  /** fetch data from the table in a streaming manner: "supplement_type" */
  supplement_type_stream: Array<Supplement_Type>;
  /** fetch data from the table: "translated_text" */
  translated_text: Array<Translated_Text>;
  /** fetch aggregated fields from the table: "translated_text" */
  translated_text_aggregate: Translated_Text_Aggregate;
  /** fetch data from the table: "translated_text" using primary key columns */
  translated_text_by_pk?: Maybe<Translated_Text>;
  /** fetch data from the table in a streaming manner: "translated_text" */
  translated_text_stream: Array<Translated_Text>;
  /** fetch data from the table: "unit_management" */
  unit_management: Array<Unit_Management>;
  /** fetch aggregated fields from the table: "unit_management" */
  unit_management_aggregate: Unit_Management_Aggregate;
  /** fetch data from the table: "unit_management" using primary key columns */
  unit_management_by_pk?: Maybe<Unit_Management>;
  /** fetch data from the table in a streaming manner: "unit_management" */
  unit_management_stream: Array<Unit_Management>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "venue" */
  venue: Array<Venue>;
  /** fetch aggregated fields from the table: "venue" */
  venue_aggregate: Venue_Aggregate;
  /** fetch data from the table: "venue" using primary key columns */
  venue_by_pk?: Maybe<Venue>;
  /** fetch data from the table: "venue_description" */
  venue_description: Array<Venue_Description>;
  /** fetch aggregated fields from the table: "venue_description" */
  venue_description_aggregate: Venue_Description_Aggregate;
  /** fetch data from the table: "venue_description" using primary key columns */
  venue_description_by_pk?: Maybe<Venue_Description>;
  /** fetch data from the table in a streaming manner: "venue_description" */
  venue_description_stream: Array<Venue_Description>;
  /** fetch data from the table: "venue_facility" */
  venue_facility: Array<Venue_Facility>;
  /** fetch aggregated fields from the table: "venue_facility" */
  venue_facility_aggregate: Venue_Facility_Aggregate;
  /** fetch data from the table: "venue_facility" using primary key columns */
  venue_facility_by_pk?: Maybe<Venue_Facility>;
  /** fetch data from the table: "venue_facility_headline" */
  venue_facility_headline: Array<Venue_Facility_Headline>;
  /** fetch aggregated fields from the table: "venue_facility_headline" */
  venue_facility_headline_aggregate: Venue_Facility_Headline_Aggregate;
  /** fetch data from the table: "venue_facility_headline" using primary key columns */
  venue_facility_headline_by_pk?: Maybe<Venue_Facility_Headline>;
  /** fetch data from the table in a streaming manner: "venue_facility_headline" */
  venue_facility_headline_stream: Array<Venue_Facility_Headline>;
  /** fetch data from the table: "venue_facility_name" */
  venue_facility_name: Array<Venue_Facility_Name>;
  /** fetch aggregated fields from the table: "venue_facility_name" */
  venue_facility_name_aggregate: Venue_Facility_Name_Aggregate;
  /** fetch data from the table: "venue_facility_name" using primary key columns */
  venue_facility_name_by_pk?: Maybe<Venue_Facility_Name>;
  /** fetch data from the table in a streaming manner: "venue_facility_name" */
  venue_facility_name_stream: Array<Venue_Facility_Name>;
  /** fetch data from the table in a streaming manner: "venue_facility" */
  venue_facility_stream: Array<Venue_Facility>;
  /** fetch data from the table: "venue_good_to_know" */
  venue_good_to_know: Array<Venue_Good_To_Know>;
  /** fetch aggregated fields from the table: "venue_good_to_know" */
  venue_good_to_know_aggregate: Venue_Good_To_Know_Aggregate;
  /** fetch data from the table: "venue_good_to_know" using primary key columns */
  venue_good_to_know_by_pk?: Maybe<Venue_Good_To_Know>;
  /** fetch data from the table in a streaming manner: "venue_good_to_know" */
  venue_good_to_know_stream: Array<Venue_Good_To_Know>;
  /** fetch data from the table in a streaming manner: "venue" */
  venue_stream: Array<Venue>;
  /** fetch data from the table: "venue_usps" */
  venue_usps: Array<Venue_Usps>;
  /** fetch aggregated fields from the table: "venue_usps" */
  venue_usps_aggregate: Venue_Usps_Aggregate;
  /** fetch data from the table: "venue_usps" using primary key columns */
  venue_usps_by_pk?: Maybe<Venue_Usps>;
  /** fetch data from the table: "venue_usps_line" */
  venue_usps_line: Array<Venue_Usps_Line>;
  /** fetch aggregated fields from the table: "venue_usps_line" */
  venue_usps_line_aggregate: Venue_Usps_Line_Aggregate;
  /** fetch data from the table: "venue_usps_line" using primary key columns */
  venue_usps_line_by_pk?: Maybe<Venue_Usps_Line>;
  /** fetch data from the table in a streaming manner: "venue_usps_line" */
  venue_usps_line_stream: Array<Venue_Usps_Line>;
  /** fetch data from the table in a streaming manner: "venue_usps" */
  venue_usps_stream: Array<Venue_Usps>;
  /** fetch data from the table: "storage.virus" using primary key columns */
  virus?: Maybe<Virus>;
  /** fetch data from the table in a streaming manner: "storage.virus" */
  virus_stream: Array<Virus>;
  /** fetch data from the table: "storage.virus" */
  viruses: Array<Virus>;
  /** fetch aggregated fields from the table: "storage.virus" */
  virusesAggregate: Virus_Aggregate;
};


export type Subscription_RootAuthProviderArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootAuthProviderRequestArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequests_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthProviderRequests_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProviders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthProviders_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthRefreshTokenTypeArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootAuthRefreshTokenTypesArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenTypes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthRefreshTokenTypes_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokens_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthRefreshTokens_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRoleArgs = {
  role: Scalars['String']['input'];
};


export type Subscription_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRoles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserProviderArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProviders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthUserProviders_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserRoleArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRoles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthUserRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeyArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeys_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthUserSecurityKeys_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootBookingArgs = {
  distinct_on?: InputMaybe<Array<Booking_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Order_By>>;
  where?: InputMaybe<Booking_Bool_Exp>;
};


export type Subscription_RootBooking_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Order_By>>;
  where?: InputMaybe<Booking_Bool_Exp>;
};


export type Subscription_RootBooking_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootBooking_Events_Event_TypeArgs = {
  distinct_on?: InputMaybe<Array<Booking_Events_Event_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Events_Event_Type_Order_By>>;
  where?: InputMaybe<Booking_Events_Event_Type_Bool_Exp>;
};


export type Subscription_RootBooking_Events_Event_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_Events_Event_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Events_Event_Type_Order_By>>;
  where?: InputMaybe<Booking_Events_Event_Type_Bool_Exp>;
};


export type Subscription_RootBooking_Events_Event_Type_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootBooking_Events_Event_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Booking_Events_Event_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Booking_Events_Event_Type_Bool_Exp>;
};


export type Subscription_RootBooking_Events_MainArgs = {
  distinct_on?: InputMaybe<Array<Booking_Events_Main_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Events_Main_Order_By>>;
  where?: InputMaybe<Booking_Events_Main_Bool_Exp>;
};


export type Subscription_RootBooking_Events_Main_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_Events_Main_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Events_Main_Order_By>>;
  where?: InputMaybe<Booking_Events_Main_Bool_Exp>;
};


export type Subscription_RootBooking_Events_Main_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootBooking_Events_Main_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Booking_Events_Main_Stream_Cursor_Input>>;
  where?: InputMaybe<Booking_Events_Main_Bool_Exp>;
};


export type Subscription_RootBooking_Events_VersionArgs = {
  distinct_on?: InputMaybe<Array<Booking_Events_Version_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Events_Version_Order_By>>;
  where?: InputMaybe<Booking_Events_Version_Bool_Exp>;
};


export type Subscription_RootBooking_Events_Version_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_Events_Version_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Events_Version_Order_By>>;
  where?: InputMaybe<Booking_Events_Version_Bool_Exp>;
};


export type Subscription_RootBooking_Events_Version_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootBooking_Events_Version_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Booking_Events_Version_Stream_Cursor_Input>>;
  where?: InputMaybe<Booking_Events_Version_Bool_Exp>;
};


export type Subscription_RootBooking_History_EntryArgs = {
  distinct_on?: InputMaybe<Array<Booking_History_Entry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_History_Entry_Order_By>>;
  where?: InputMaybe<Booking_History_Entry_Bool_Exp>;
};


export type Subscription_RootBooking_History_Entry_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_History_Entry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_History_Entry_Order_By>>;
  where?: InputMaybe<Booking_History_Entry_Bool_Exp>;
};


export type Subscription_RootBooking_History_Entry_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootBooking_History_Entry_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Booking_History_Entry_Stream_Cursor_Input>>;
  where?: InputMaybe<Booking_History_Entry_Bool_Exp>;
};


export type Subscription_RootBooking_ProductArgs = {
  distinct_on?: InputMaybe<Array<Booking_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Product_Order_By>>;
  where?: InputMaybe<Booking_Product_Bool_Exp>;
};


export type Subscription_RootBooking_Product_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Product_Order_By>>;
  where?: InputMaybe<Booking_Product_Bool_Exp>;
};


export type Subscription_RootBooking_Product_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootBooking_Product_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Booking_Product_Stream_Cursor_Input>>;
  where?: InputMaybe<Booking_Product_Bool_Exp>;
};


export type Subscription_RootBooking_Question_ScopeArgs = {
  distinct_on?: InputMaybe<Array<Booking_Question_Scope_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Question_Scope_Order_By>>;
  where?: InputMaybe<Booking_Question_Scope_Bool_Exp>;
};


export type Subscription_RootBooking_Question_Scope_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_Question_Scope_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Question_Scope_Order_By>>;
  where?: InputMaybe<Booking_Question_Scope_Bool_Exp>;
};


export type Subscription_RootBooking_Question_Scope_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootBooking_Question_Scope_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Booking_Question_Scope_Stream_Cursor_Input>>;
  where?: InputMaybe<Booking_Question_Scope_Bool_Exp>;
};


export type Subscription_RootBooking_Question_TypeArgs = {
  distinct_on?: InputMaybe<Array<Booking_Question_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Question_Type_Order_By>>;
  where?: InputMaybe<Booking_Question_Type_Bool_Exp>;
};


export type Subscription_RootBooking_Question_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_Question_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_Question_Type_Order_By>>;
  where?: InputMaybe<Booking_Question_Type_Bool_Exp>;
};


export type Subscription_RootBooking_Question_Type_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootBooking_Question_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Booking_Question_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Booking_Question_Type_Bool_Exp>;
};


export type Subscription_RootBooking_StateArgs = {
  distinct_on?: InputMaybe<Array<Booking_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_State_Order_By>>;
  where?: InputMaybe<Booking_State_Bool_Exp>;
};


export type Subscription_RootBooking_State_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Booking_State_Order_By>>;
  where?: InputMaybe<Booking_State_Bool_Exp>;
};


export type Subscription_RootBooking_State_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootBooking_State_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Booking_State_Stream_Cursor_Input>>;
  where?: InputMaybe<Booking_State_Bool_Exp>;
};


export type Subscription_RootBooking_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Booking_Stream_Cursor_Input>>;
  where?: InputMaybe<Booking_Bool_Exp>;
};


export type Subscription_RootBucketArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootBuckets_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Buckets_Stream_Cursor_Input>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootCategoryArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Subscription_RootCategory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Subscription_RootCategory_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootCategory_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Category_Stream_Cursor_Input>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Subscription_RootContactArgs = {
  distinct_on?: InputMaybe<Array<Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contact_Order_By>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};


export type Subscription_RootContact_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contact_Order_By>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};


export type Subscription_RootContact_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootContact_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Contact_Stream_Cursor_Input>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};


export type Subscription_RootFeatureArgs = {
  distinct_on?: InputMaybe<Array<Feature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Feature_Order_By>>;
  where?: InputMaybe<Feature_Bool_Exp>;
};


export type Subscription_RootFeature_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Feature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Feature_Order_By>>;
  where?: InputMaybe<Feature_Bool_Exp>;
};


export type Subscription_RootFeature_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootFeature_CategoryArgs = {
  distinct_on?: InputMaybe<Array<Feature_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Feature_Category_Order_By>>;
  where?: InputMaybe<Feature_Category_Bool_Exp>;
};


export type Subscription_RootFeature_Category_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Feature_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Feature_Category_Order_By>>;
  where?: InputMaybe<Feature_Category_Bool_Exp>;
};


export type Subscription_RootFeature_Category_By_PkArgs = {
  category_id: Scalars['String']['input'];
  feature_id: Scalars['uuid']['input'];
};


export type Subscription_RootFeature_Category_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Feature_Category_Stream_Cursor_Input>>;
  where?: InputMaybe<Feature_Category_Bool_Exp>;
};


export type Subscription_RootFeature_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Feature_Stream_Cursor_Input>>;
  where?: InputMaybe<Feature_Bool_Exp>;
};


export type Subscription_RootFeature_SymbolArgs = {
  distinct_on?: InputMaybe<Array<Feature_Symbol_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Feature_Symbol_Order_By>>;
  where?: InputMaybe<Feature_Symbol_Bool_Exp>;
};


export type Subscription_RootFeature_Symbol_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Feature_Symbol_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Feature_Symbol_Order_By>>;
  where?: InputMaybe<Feature_Symbol_Bool_Exp>;
};


export type Subscription_RootFeature_Symbol_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootFeature_Symbol_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Feature_Symbol_Stream_Cursor_Input>>;
  where?: InputMaybe<Feature_Symbol_Bool_Exp>;
};


export type Subscription_RootFeature_TypeArgs = {
  distinct_on?: InputMaybe<Array<Feature_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Feature_Type_Order_By>>;
  where?: InputMaybe<Feature_Type_Bool_Exp>;
};


export type Subscription_RootFeature_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Feature_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Feature_Type_Order_By>>;
  where?: InputMaybe<Feature_Type_Bool_Exp>;
};


export type Subscription_RootFeature_Type_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootFeature_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Feature_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Feature_Type_Bool_Exp>;
};


export type Subscription_RootFileArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFiles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Files_Stream_Cursor_Input>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootMedia_GalleryArgs = {
  distinct_on?: InputMaybe<Array<Media_Gallery_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Gallery_Order_By>>;
  where?: InputMaybe<Media_Gallery_Bool_Exp>;
};


export type Subscription_RootMedia_Gallery_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Media_Gallery_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Gallery_Order_By>>;
  where?: InputMaybe<Media_Gallery_Bool_Exp>;
};


export type Subscription_RootMedia_Gallery_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMedia_Gallery_ItemArgs = {
  distinct_on?: InputMaybe<Array<Media_Gallery_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Gallery_Item_Order_By>>;
  where?: InputMaybe<Media_Gallery_Item_Bool_Exp>;
};


export type Subscription_RootMedia_Gallery_Item_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Media_Gallery_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Gallery_Item_Order_By>>;
  where?: InputMaybe<Media_Gallery_Item_Bool_Exp>;
};


export type Subscription_RootMedia_Gallery_Item_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMedia_Gallery_Item_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Media_Gallery_Item_Stream_Cursor_Input>>;
  where?: InputMaybe<Media_Gallery_Item_Bool_Exp>;
};


export type Subscription_RootMedia_Gallery_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Media_Gallery_Stream_Cursor_Input>>;
  where?: InputMaybe<Media_Gallery_Bool_Exp>;
};


export type Subscription_RootMy_Web_SectionArgs = {
  distinct_on?: InputMaybe<Array<My_Web_Section_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<My_Web_Section_Order_By>>;
  where?: InputMaybe<My_Web_Section_Bool_Exp>;
};


export type Subscription_RootMy_Web_Section_AggregateArgs = {
  distinct_on?: InputMaybe<Array<My_Web_Section_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<My_Web_Section_Order_By>>;
  where?: InputMaybe<My_Web_Section_Bool_Exp>;
};


export type Subscription_RootMy_Web_Section_By_PkArgs = {
  organization_id: Scalars['uuid']['input'];
  section_id: Scalars['String']['input'];
};


export type Subscription_RootMy_Web_Section_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<My_Web_Section_Stream_Cursor_Input>>;
  where?: InputMaybe<My_Web_Section_Bool_Exp>;
};


export type Subscription_RootOrganizationArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Subscription_RootOrganization_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Subscription_RootOrganization_Booking_QuestionArgs = {
  distinct_on?: InputMaybe<Array<Organization_Booking_Question_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Booking_Question_Order_By>>;
  where?: InputMaybe<Organization_Booking_Question_Bool_Exp>;
};


export type Subscription_RootOrganization_Booking_Question_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Booking_Question_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Booking_Question_Order_By>>;
  where?: InputMaybe<Organization_Booking_Question_Bool_Exp>;
};


export type Subscription_RootOrganization_Booking_Question_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOrganization_Booking_Question_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organization_Booking_Question_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_Booking_Question_Bool_Exp>;
};


export type Subscription_RootOrganization_BrandingArgs = {
  distinct_on?: InputMaybe<Array<Organization_Branding_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Branding_Order_By>>;
  where?: InputMaybe<Organization_Branding_Bool_Exp>;
};


export type Subscription_RootOrganization_Branding_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Branding_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Branding_Order_By>>;
  where?: InputMaybe<Organization_Branding_Bool_Exp>;
};


export type Subscription_RootOrganization_Branding_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOrganization_Branding_Meta_DescriptionArgs = {
  distinct_on?: InputMaybe<Array<Organization_Branding_Meta_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Branding_Meta_Description_Order_By>>;
  where?: InputMaybe<Organization_Branding_Meta_Description_Bool_Exp>;
};


export type Subscription_RootOrganization_Branding_Meta_Description_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Branding_Meta_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Branding_Meta_Description_Order_By>>;
  where?: InputMaybe<Organization_Branding_Meta_Description_Bool_Exp>;
};


export type Subscription_RootOrganization_Branding_Meta_Description_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOrganization_Branding_Meta_Description_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organization_Branding_Meta_Description_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_Branding_Meta_Description_Bool_Exp>;
};


export type Subscription_RootOrganization_Branding_Meta_TitleArgs = {
  distinct_on?: InputMaybe<Array<Organization_Branding_Meta_Title_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Branding_Meta_Title_Order_By>>;
  where?: InputMaybe<Organization_Branding_Meta_Title_Bool_Exp>;
};


export type Subscription_RootOrganization_Branding_Meta_Title_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Branding_Meta_Title_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Branding_Meta_Title_Order_By>>;
  where?: InputMaybe<Organization_Branding_Meta_Title_Bool_Exp>;
};


export type Subscription_RootOrganization_Branding_Meta_Title_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOrganization_Branding_Meta_Title_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organization_Branding_Meta_Title_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_Branding_Meta_Title_Bool_Exp>;
};


export type Subscription_RootOrganization_Branding_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organization_Branding_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_Branding_Bool_Exp>;
};


export type Subscription_RootOrganization_Business_ModelArgs = {
  distinct_on?: InputMaybe<Array<Organization_Business_Model_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Business_Model_Order_By>>;
  where?: InputMaybe<Organization_Business_Model_Bool_Exp>;
};


export type Subscription_RootOrganization_Business_Model_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Business_Model_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Business_Model_Order_By>>;
  where?: InputMaybe<Organization_Business_Model_Bool_Exp>;
};


export type Subscription_RootOrganization_Business_Model_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOrganization_Business_Model_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organization_Business_Model_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_Business_Model_Bool_Exp>;
};


export type Subscription_RootOrganization_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOrganization_HeadlineArgs = {
  distinct_on?: InputMaybe<Array<Organization_Headline_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Headline_Order_By>>;
  where?: InputMaybe<Organization_Headline_Bool_Exp>;
};


export type Subscription_RootOrganization_Headline_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Headline_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Headline_Order_By>>;
  where?: InputMaybe<Organization_Headline_Bool_Exp>;
};


export type Subscription_RootOrganization_Headline_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOrganization_Headline_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organization_Headline_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_Headline_Bool_Exp>;
};


export type Subscription_RootOrganization_MemberArgs = {
  distinct_on?: InputMaybe<Array<Organization_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Member_Order_By>>;
  where?: InputMaybe<Organization_Member_Bool_Exp>;
};


export type Subscription_RootOrganization_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Member_Order_By>>;
  where?: InputMaybe<Organization_Member_Bool_Exp>;
};


export type Subscription_RootOrganization_Member_By_PkArgs = {
  organization_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Subscription_RootOrganization_Member_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organization_Member_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_Member_Bool_Exp>;
};


export type Subscription_RootOrganization_SocialsArgs = {
  distinct_on?: InputMaybe<Array<Organization_Socials_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Socials_Order_By>>;
  where?: InputMaybe<Organization_Socials_Bool_Exp>;
};


export type Subscription_RootOrganization_Socials_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Socials_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Socials_Order_By>>;
  where?: InputMaybe<Organization_Socials_Bool_Exp>;
};


export type Subscription_RootOrganization_Socials_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOrganization_Socials_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organization_Socials_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_Socials_Bool_Exp>;
};


export type Subscription_RootOrganization_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organization_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Subscription_RootPlaceArgs = {
  distinct_on?: InputMaybe<Array<Place_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Place_Order_By>>;
  where?: InputMaybe<Place_Bool_Exp>;
};


export type Subscription_RootPlace_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Place_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Place_Order_By>>;
  where?: InputMaybe<Place_Bool_Exp>;
};


export type Subscription_RootPlace_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPlace_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Place_Stream_Cursor_Input>>;
  where?: InputMaybe<Place_Bool_Exp>;
};


export type Subscription_RootProductArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


export type Subscription_RootProduct_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


export type Subscription_RootProduct_Allotment_RangeArgs = {
  distinct_on?: InputMaybe<Array<Product_Allotment_Range_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Allotment_Range_Order_By>>;
  where?: InputMaybe<Product_Allotment_Range_Bool_Exp>;
};


export type Subscription_RootProduct_Allotment_Range_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Allotment_Range_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Allotment_Range_Order_By>>;
  where?: InputMaybe<Product_Allotment_Range_Bool_Exp>;
};


export type Subscription_RootProduct_Allotment_Range_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProduct_Allotment_Range_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Allotment_Range_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Allotment_Range_Bool_Exp>;
};


export type Subscription_RootProduct_Business_ModelArgs = {
  distinct_on?: InputMaybe<Array<Product_Business_Model_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Business_Model_Order_By>>;
  where?: InputMaybe<Product_Business_Model_Bool_Exp>;
};


export type Subscription_RootProduct_Business_Model_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Business_Model_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Business_Model_Order_By>>;
  where?: InputMaybe<Product_Business_Model_Bool_Exp>;
};


export type Subscription_RootProduct_Business_Model_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProduct_Business_Model_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Business_Model_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Business_Model_Bool_Exp>;
};


export type Subscription_RootProduct_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProduct_DescriptionArgs = {
  distinct_on?: InputMaybe<Array<Product_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Description_Order_By>>;
  where?: InputMaybe<Product_Description_Bool_Exp>;
};


export type Subscription_RootProduct_Description_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Description_Order_By>>;
  where?: InputMaybe<Product_Description_Bool_Exp>;
};


export type Subscription_RootProduct_Description_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProduct_Description_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Description_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Description_Bool_Exp>;
};


export type Subscription_RootProduct_FeatureArgs = {
  distinct_on?: InputMaybe<Array<Product_Feature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Feature_Order_By>>;
  where?: InputMaybe<Product_Feature_Bool_Exp>;
};


export type Subscription_RootProduct_Feature_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Feature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Feature_Order_By>>;
  where?: InputMaybe<Product_Feature_Bool_Exp>;
};


export type Subscription_RootProduct_Feature_By_PkArgs = {
  feature_id: Scalars['uuid']['input'];
  product_id: Scalars['uuid']['input'];
};


export type Subscription_RootProduct_Feature_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Feature_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Feature_Bool_Exp>;
};


export type Subscription_RootProduct_GroupArgs = {
  distinct_on?: InputMaybe<Array<Product_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Group_Order_By>>;
  where?: InputMaybe<Product_Group_Bool_Exp>;
};


export type Subscription_RootProduct_Group_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Group_Order_By>>;
  where?: InputMaybe<Product_Group_Bool_Exp>;
};


export type Subscription_RootProduct_Group_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProduct_Group_ProductArgs = {
  distinct_on?: InputMaybe<Array<Product_Group_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Group_Product_Order_By>>;
  where?: InputMaybe<Product_Group_Product_Bool_Exp>;
};


export type Subscription_RootProduct_Group_Product_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Group_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Group_Product_Order_By>>;
  where?: InputMaybe<Product_Group_Product_Bool_Exp>;
};


export type Subscription_RootProduct_Group_Product_By_PkArgs = {
  group_id: Scalars['uuid']['input'];
  product_id: Scalars['uuid']['input'];
};


export type Subscription_RootProduct_Group_Product_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Group_Product_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Group_Product_Bool_Exp>;
};


export type Subscription_RootProduct_Group_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Group_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Group_Bool_Exp>;
};


export type Subscription_RootProduct_HeadlineArgs = {
  distinct_on?: InputMaybe<Array<Product_Headline_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Headline_Order_By>>;
  where?: InputMaybe<Product_Headline_Bool_Exp>;
};


export type Subscription_RootProduct_Headline_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Headline_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Headline_Order_By>>;
  where?: InputMaybe<Product_Headline_Bool_Exp>;
};


export type Subscription_RootProduct_Headline_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProduct_Headline_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Headline_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Headline_Bool_Exp>;
};


export type Subscription_RootProduct_NameArgs = {
  distinct_on?: InputMaybe<Array<Product_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Name_Order_By>>;
  where?: InputMaybe<Product_Name_Bool_Exp>;
};


export type Subscription_RootProduct_Name_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Name_Order_By>>;
  where?: InputMaybe<Product_Name_Bool_Exp>;
};


export type Subscription_RootProduct_Name_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProduct_Name_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Name_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Name_Bool_Exp>;
};


export type Subscription_RootProduct_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


export type Subscription_RootProduct_SupplementArgs = {
  distinct_on?: InputMaybe<Array<Product_Supplement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Supplement_Order_By>>;
  where?: InputMaybe<Product_Supplement_Bool_Exp>;
};


export type Subscription_RootProduct_Supplement_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Supplement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Supplement_Order_By>>;
  where?: InputMaybe<Product_Supplement_Bool_Exp>;
};


export type Subscription_RootProduct_Supplement_By_PkArgs = {
  product_id: Scalars['uuid']['input'];
  supplement_id: Scalars['uuid']['input'];
};


export type Subscription_RootProduct_Supplement_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Supplement_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Supplement_Bool_Exp>;
};


export type Subscription_RootRateArgs = {
  distinct_on?: InputMaybe<Array<Rate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rate_Order_By>>;
  where?: InputMaybe<Rate_Bool_Exp>;
};


export type Subscription_RootRate_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rate_Order_By>>;
  where?: InputMaybe<Rate_Bool_Exp>;
};


export type Subscription_RootRate_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRate_HeadlineArgs = {
  distinct_on?: InputMaybe<Array<Rate_Headline_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rate_Headline_Order_By>>;
  where?: InputMaybe<Rate_Headline_Bool_Exp>;
};


export type Subscription_RootRate_Headline_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rate_Headline_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rate_Headline_Order_By>>;
  where?: InputMaybe<Rate_Headline_Bool_Exp>;
};


export type Subscription_RootRate_Headline_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRate_Headline_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rate_Headline_Stream_Cursor_Input>>;
  where?: InputMaybe<Rate_Headline_Bool_Exp>;
};


export type Subscription_RootRate_NameArgs = {
  distinct_on?: InputMaybe<Array<Rate_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rate_Name_Order_By>>;
  where?: InputMaybe<Rate_Name_Bool_Exp>;
};


export type Subscription_RootRate_Name_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rate_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rate_Name_Order_By>>;
  where?: InputMaybe<Rate_Name_Bool_Exp>;
};


export type Subscription_RootRate_Name_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRate_Name_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rate_Name_Stream_Cursor_Input>>;
  where?: InputMaybe<Rate_Name_Bool_Exp>;
};


export type Subscription_RootRate_Price_RangeArgs = {
  distinct_on?: InputMaybe<Array<Rate_Price_Range_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rate_Price_Range_Order_By>>;
  where?: InputMaybe<Rate_Price_Range_Bool_Exp>;
};


export type Subscription_RootRate_Price_Range_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rate_Price_Range_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rate_Price_Range_Order_By>>;
  where?: InputMaybe<Rate_Price_Range_Bool_Exp>;
};


export type Subscription_RootRate_Price_Range_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRate_Price_Range_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rate_Price_Range_Stream_Cursor_Input>>;
  where?: InputMaybe<Rate_Price_Range_Bool_Exp>;
};


export type Subscription_RootRate_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rate_Stream_Cursor_Input>>;
  where?: InputMaybe<Rate_Bool_Exp>;
};


export type Subscription_RootRate_TypeArgs = {
  distinct_on?: InputMaybe<Array<Rate_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rate_Type_Order_By>>;
  where?: InputMaybe<Rate_Type_Bool_Exp>;
};


export type Subscription_RootRate_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rate_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rate_Type_Order_By>>;
  where?: InputMaybe<Rate_Type_Bool_Exp>;
};


export type Subscription_RootRate_Type_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootRate_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rate_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Rate_Type_Bool_Exp>;
};


export type Subscription_RootRoleArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootRole_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Role_Stream_Cursor_Input>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootSiteArgs = {
  distinct_on?: InputMaybe<Array<Site_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Site_Order_By>>;
  where?: InputMaybe<Site_Bool_Exp>;
};


export type Subscription_RootSite_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Site_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Site_Order_By>>;
  where?: InputMaybe<Site_Bool_Exp>;
};


export type Subscription_RootSite_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSite_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Site_Stream_Cursor_Input>>;
  where?: InputMaybe<Site_Bool_Exp>;
};


export type Subscription_RootSlugArgs = {
  distinct_on?: InputMaybe<Array<Slug_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Slug_Order_By>>;
  where?: InputMaybe<Slug_Bool_Exp>;
};


export type Subscription_RootSlug_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Slug_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Slug_Order_By>>;
  where?: InputMaybe<Slug_Bool_Exp>;
};


export type Subscription_RootSlug_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSlug_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Slug_Stream_Cursor_Input>>;
  where?: InputMaybe<Slug_Bool_Exp>;
};


export type Subscription_RootSupplementArgs = {
  distinct_on?: InputMaybe<Array<Supplement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Supplement_Order_By>>;
  where?: InputMaybe<Supplement_Bool_Exp>;
};


export type Subscription_RootSupplement_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Supplement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Supplement_Order_By>>;
  where?: InputMaybe<Supplement_Bool_Exp>;
};


export type Subscription_RootSupplement_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSupplement_PricesArgs = {
  distinct_on?: InputMaybe<Array<Supplement_Prices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Supplement_Prices_Order_By>>;
  where?: InputMaybe<Supplement_Prices_Bool_Exp>;
};


export type Subscription_RootSupplement_Prices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Supplement_Prices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Supplement_Prices_Order_By>>;
  where?: InputMaybe<Supplement_Prices_Bool_Exp>;
};


export type Subscription_RootSupplement_Prices_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Supplement_Prices_Stream_Cursor_Input>>;
  where?: InputMaybe<Supplement_Prices_Bool_Exp>;
};


export type Subscription_RootSupplement_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Supplement_Stream_Cursor_Input>>;
  where?: InputMaybe<Supplement_Bool_Exp>;
};


export type Subscription_RootSupplement_TypeArgs = {
  distinct_on?: InputMaybe<Array<Supplement_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Supplement_Type_Order_By>>;
  where?: InputMaybe<Supplement_Type_Bool_Exp>;
};


export type Subscription_RootSupplement_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Supplement_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Supplement_Type_Order_By>>;
  where?: InputMaybe<Supplement_Type_Bool_Exp>;
};


export type Subscription_RootSupplement_Type_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootSupplement_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Supplement_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Supplement_Type_Bool_Exp>;
};


export type Subscription_RootTranslated_TextArgs = {
  distinct_on?: InputMaybe<Array<Translated_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Translated_Text_Order_By>>;
  where?: InputMaybe<Translated_Text_Bool_Exp>;
};


export type Subscription_RootTranslated_Text_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Translated_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Translated_Text_Order_By>>;
  where?: InputMaybe<Translated_Text_Bool_Exp>;
};


export type Subscription_RootTranslated_Text_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTranslated_Text_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Translated_Text_Stream_Cursor_Input>>;
  where?: InputMaybe<Translated_Text_Bool_Exp>;
};


export type Subscription_RootUnit_ManagementArgs = {
  distinct_on?: InputMaybe<Array<Unit_Management_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Unit_Management_Order_By>>;
  where?: InputMaybe<Unit_Management_Bool_Exp>;
};


export type Subscription_RootUnit_Management_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Unit_Management_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Unit_Management_Order_By>>;
  where?: InputMaybe<Unit_Management_Bool_Exp>;
};


export type Subscription_RootUnit_Management_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootUnit_Management_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Unit_Management_Stream_Cursor_Input>>;
  where?: InputMaybe<Unit_Management_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootVenueArgs = {
  distinct_on?: InputMaybe<Array<Venue_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Order_By>>;
  where?: InputMaybe<Venue_Bool_Exp>;
};


export type Subscription_RootVenue_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Venue_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Order_By>>;
  where?: InputMaybe<Venue_Bool_Exp>;
};


export type Subscription_RootVenue_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootVenue_DescriptionArgs = {
  distinct_on?: InputMaybe<Array<Venue_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Description_Order_By>>;
  where?: InputMaybe<Venue_Description_Bool_Exp>;
};


export type Subscription_RootVenue_Description_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Venue_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Description_Order_By>>;
  where?: InputMaybe<Venue_Description_Bool_Exp>;
};


export type Subscription_RootVenue_Description_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootVenue_Description_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Venue_Description_Stream_Cursor_Input>>;
  where?: InputMaybe<Venue_Description_Bool_Exp>;
};


export type Subscription_RootVenue_FacilityArgs = {
  distinct_on?: InputMaybe<Array<Venue_Facility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Facility_Order_By>>;
  where?: InputMaybe<Venue_Facility_Bool_Exp>;
};


export type Subscription_RootVenue_Facility_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Venue_Facility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Facility_Order_By>>;
  where?: InputMaybe<Venue_Facility_Bool_Exp>;
};


export type Subscription_RootVenue_Facility_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootVenue_Facility_HeadlineArgs = {
  distinct_on?: InputMaybe<Array<Venue_Facility_Headline_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Facility_Headline_Order_By>>;
  where?: InputMaybe<Venue_Facility_Headline_Bool_Exp>;
};


export type Subscription_RootVenue_Facility_Headline_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Venue_Facility_Headline_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Facility_Headline_Order_By>>;
  where?: InputMaybe<Venue_Facility_Headline_Bool_Exp>;
};


export type Subscription_RootVenue_Facility_Headline_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootVenue_Facility_Headline_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Venue_Facility_Headline_Stream_Cursor_Input>>;
  where?: InputMaybe<Venue_Facility_Headline_Bool_Exp>;
};


export type Subscription_RootVenue_Facility_NameArgs = {
  distinct_on?: InputMaybe<Array<Venue_Facility_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Facility_Name_Order_By>>;
  where?: InputMaybe<Venue_Facility_Name_Bool_Exp>;
};


export type Subscription_RootVenue_Facility_Name_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Venue_Facility_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Facility_Name_Order_By>>;
  where?: InputMaybe<Venue_Facility_Name_Bool_Exp>;
};


export type Subscription_RootVenue_Facility_Name_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootVenue_Facility_Name_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Venue_Facility_Name_Stream_Cursor_Input>>;
  where?: InputMaybe<Venue_Facility_Name_Bool_Exp>;
};


export type Subscription_RootVenue_Facility_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Venue_Facility_Stream_Cursor_Input>>;
  where?: InputMaybe<Venue_Facility_Bool_Exp>;
};


export type Subscription_RootVenue_Good_To_KnowArgs = {
  distinct_on?: InputMaybe<Array<Venue_Good_To_Know_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Good_To_Know_Order_By>>;
  where?: InputMaybe<Venue_Good_To_Know_Bool_Exp>;
};


export type Subscription_RootVenue_Good_To_Know_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Venue_Good_To_Know_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Good_To_Know_Order_By>>;
  where?: InputMaybe<Venue_Good_To_Know_Bool_Exp>;
};


export type Subscription_RootVenue_Good_To_Know_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootVenue_Good_To_Know_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Venue_Good_To_Know_Stream_Cursor_Input>>;
  where?: InputMaybe<Venue_Good_To_Know_Bool_Exp>;
};


export type Subscription_RootVenue_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Venue_Stream_Cursor_Input>>;
  where?: InputMaybe<Venue_Bool_Exp>;
};


export type Subscription_RootVenue_UspsArgs = {
  distinct_on?: InputMaybe<Array<Venue_Usps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Usps_Order_By>>;
  where?: InputMaybe<Venue_Usps_Bool_Exp>;
};


export type Subscription_RootVenue_Usps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Venue_Usps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Usps_Order_By>>;
  where?: InputMaybe<Venue_Usps_Bool_Exp>;
};


export type Subscription_RootVenue_Usps_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootVenue_Usps_LineArgs = {
  distinct_on?: InputMaybe<Array<Venue_Usps_Line_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Usps_Line_Order_By>>;
  where?: InputMaybe<Venue_Usps_Line_Bool_Exp>;
};


export type Subscription_RootVenue_Usps_Line_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Venue_Usps_Line_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Usps_Line_Order_By>>;
  where?: InputMaybe<Venue_Usps_Line_Bool_Exp>;
};


export type Subscription_RootVenue_Usps_Line_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootVenue_Usps_Line_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Venue_Usps_Line_Stream_Cursor_Input>>;
  where?: InputMaybe<Venue_Usps_Line_Bool_Exp>;
};


export type Subscription_RootVenue_Usps_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Venue_Usps_Stream_Cursor_Input>>;
  where?: InputMaybe<Venue_Usps_Bool_Exp>;
};


export type Subscription_RootVirusArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootVirus_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Virus_Stream_Cursor_Input>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};


export type Subscription_RootVirusesArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};


export type Subscription_RootVirusesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};

/** columns and relationships of "supplement" */
export type Supplement = {
  __typename?: 'supplement';
  /** An object relationship */
  description: Translated_Text;
  description_id: Scalars['uuid']['output'];
  /** An object relationship */
  headline?: Maybe<Translated_Text>;
  headline_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  image?: Maybe<Files>;
  image_id?: Maybe<Scalars['uuid']['output']>;
  is_optional: Scalars['Boolean']['output'];
  /** An object relationship */
  name?: Maybe<Translated_Text>;
  name_id: Scalars['uuid']['output'];
  /** An object relationship */
  organization: Organization;
  organization_id: Scalars['uuid']['output'];
  price: Scalars['numeric']['output'];
  /** An array relationship */
  prices: Array<Supplement_Prices>;
  /** An aggregate relationship */
  prices_aggregate: Supplement_Prices_Aggregate;
  /** An array relationship */
  products: Array<Product_Supplement>;
  /** An aggregate relationship */
  products_aggregate: Product_Supplement_Aggregate;
  type: Supplement_Type_Enum;
};


/** columns and relationships of "supplement" */
export type SupplementPricesArgs = {
  distinct_on?: InputMaybe<Array<Supplement_Prices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Supplement_Prices_Order_By>>;
  where?: InputMaybe<Supplement_Prices_Bool_Exp>;
};


/** columns and relationships of "supplement" */
export type SupplementPrices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Supplement_Prices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Supplement_Prices_Order_By>>;
  where?: InputMaybe<Supplement_Prices_Bool_Exp>;
};


/** columns and relationships of "supplement" */
export type SupplementProductsArgs = {
  distinct_on?: InputMaybe<Array<Product_Supplement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Supplement_Order_By>>;
  where?: InputMaybe<Product_Supplement_Bool_Exp>;
};


/** columns and relationships of "supplement" */
export type SupplementProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Supplement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Supplement_Order_By>>;
  where?: InputMaybe<Product_Supplement_Bool_Exp>;
};

/** aggregated selection of "supplement" */
export type Supplement_Aggregate = {
  __typename?: 'supplement_aggregate';
  aggregate?: Maybe<Supplement_Aggregate_Fields>;
  nodes: Array<Supplement>;
};

export type Supplement_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Supplement_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Supplement_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Supplement_Aggregate_Bool_Exp_Count>;
};

export type Supplement_Aggregate_Bool_Exp_Bool_And = {
  arguments: Supplement_Select_Column_Supplement_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Supplement_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Supplement_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Supplement_Select_Column_Supplement_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Supplement_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Supplement_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Supplement_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Supplement_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "supplement" */
export type Supplement_Aggregate_Fields = {
  __typename?: 'supplement_aggregate_fields';
  avg?: Maybe<Supplement_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Supplement_Max_Fields>;
  min?: Maybe<Supplement_Min_Fields>;
  stddev?: Maybe<Supplement_Stddev_Fields>;
  stddev_pop?: Maybe<Supplement_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Supplement_Stddev_Samp_Fields>;
  sum?: Maybe<Supplement_Sum_Fields>;
  var_pop?: Maybe<Supplement_Var_Pop_Fields>;
  var_samp?: Maybe<Supplement_Var_Samp_Fields>;
  variance?: Maybe<Supplement_Variance_Fields>;
};


/** aggregate fields of "supplement" */
export type Supplement_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Supplement_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "supplement" */
export type Supplement_Aggregate_Order_By = {
  avg?: InputMaybe<Supplement_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Supplement_Max_Order_By>;
  min?: InputMaybe<Supplement_Min_Order_By>;
  stddev?: InputMaybe<Supplement_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Supplement_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Supplement_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Supplement_Sum_Order_By>;
  var_pop?: InputMaybe<Supplement_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Supplement_Var_Samp_Order_By>;
  variance?: InputMaybe<Supplement_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "supplement" */
export type Supplement_Arr_Rel_Insert_Input = {
  data: Array<Supplement_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Supplement_On_Conflict>;
};

/** aggregate avg on columns */
export type Supplement_Avg_Fields = {
  __typename?: 'supplement_avg_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "supplement" */
export type Supplement_Avg_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "supplement". All fields are combined with a logical 'AND'. */
export type Supplement_Bool_Exp = {
  _and?: InputMaybe<Array<Supplement_Bool_Exp>>;
  _not?: InputMaybe<Supplement_Bool_Exp>;
  _or?: InputMaybe<Array<Supplement_Bool_Exp>>;
  description?: InputMaybe<Translated_Text_Bool_Exp>;
  description_id?: InputMaybe<Uuid_Comparison_Exp>;
  headline?: InputMaybe<Translated_Text_Bool_Exp>;
  headline_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<Files_Bool_Exp>;
  image_id?: InputMaybe<Uuid_Comparison_Exp>;
  is_optional?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<Translated_Text_Bool_Exp>;
  name_id?: InputMaybe<Uuid_Comparison_Exp>;
  organization?: InputMaybe<Organization_Bool_Exp>;
  organization_id?: InputMaybe<Uuid_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  prices?: InputMaybe<Supplement_Prices_Bool_Exp>;
  prices_aggregate?: InputMaybe<Supplement_Prices_Aggregate_Bool_Exp>;
  products?: InputMaybe<Product_Supplement_Bool_Exp>;
  products_aggregate?: InputMaybe<Product_Supplement_Aggregate_Bool_Exp>;
  type?: InputMaybe<Supplement_Type_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "supplement" */
export enum Supplement_Constraint {
  /** unique or primary key constraint on columns "image_id" */
  SupplementImageIdKey = 'supplement_image_id_key',
  /** unique or primary key constraint on columns "id" */
  SupplementPkey = 'supplement_pkey'
}

export type Supplement_Create_Input = {
  id: Scalars['uuid']['input'];
  organization_id: Scalars['uuid']['input'];
};

/** input type for incrementing numeric columns in table "supplement" */
export type Supplement_Inc_Input = {
  price?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "supplement" */
export type Supplement_Insert_Input = {
  description?: InputMaybe<Translated_Text_Obj_Rel_Insert_Input>;
  description_id?: InputMaybe<Scalars['uuid']['input']>;
  headline?: InputMaybe<Translated_Text_Obj_Rel_Insert_Input>;
  headline_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  image_id?: InputMaybe<Scalars['uuid']['input']>;
  is_optional?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Translated_Text_Obj_Rel_Insert_Input>;
  name_id?: InputMaybe<Scalars['uuid']['input']>;
  organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  prices?: InputMaybe<Supplement_Prices_Arr_Rel_Insert_Input>;
  products?: InputMaybe<Product_Supplement_Arr_Rel_Insert_Input>;
  type?: InputMaybe<Supplement_Type_Enum>;
};

/** aggregate max on columns */
export type Supplement_Max_Fields = {
  __typename?: 'supplement_max_fields';
  description_id?: Maybe<Scalars['uuid']['output']>;
  headline_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_id?: Maybe<Scalars['uuid']['output']>;
  name_id?: Maybe<Scalars['uuid']['output']>;
  organization_id?: Maybe<Scalars['uuid']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
};

/** order by max() on columns of table "supplement" */
export type Supplement_Max_Order_By = {
  description_id?: InputMaybe<Order_By>;
  headline_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  name_id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Supplement_Min_Fields = {
  __typename?: 'supplement_min_fields';
  description_id?: Maybe<Scalars['uuid']['output']>;
  headline_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_id?: Maybe<Scalars['uuid']['output']>;
  name_id?: Maybe<Scalars['uuid']['output']>;
  organization_id?: Maybe<Scalars['uuid']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
};

/** order by min() on columns of table "supplement" */
export type Supplement_Min_Order_By = {
  description_id?: InputMaybe<Order_By>;
  headline_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  name_id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "supplement" */
export type Supplement_Mutation_Response = {
  __typename?: 'supplement_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Supplement>;
};

/** input type for inserting object relation for remote table "supplement" */
export type Supplement_Obj_Rel_Insert_Input = {
  data: Supplement_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Supplement_On_Conflict>;
};

/** on_conflict condition type for table "supplement" */
export type Supplement_On_Conflict = {
  constraint: Supplement_Constraint;
  update_columns?: Array<Supplement_Update_Column>;
  where?: InputMaybe<Supplement_Bool_Exp>;
};

/** Ordering options when selecting data from "supplement". */
export type Supplement_Order_By = {
  description?: InputMaybe<Translated_Text_Order_By>;
  description_id?: InputMaybe<Order_By>;
  headline?: InputMaybe<Translated_Text_Order_By>;
  headline_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Files_Order_By>;
  image_id?: InputMaybe<Order_By>;
  is_optional?: InputMaybe<Order_By>;
  name?: InputMaybe<Translated_Text_Order_By>;
  name_id?: InputMaybe<Order_By>;
  organization?: InputMaybe<Organization_Order_By>;
  organization_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  prices_aggregate?: InputMaybe<Supplement_Prices_Aggregate_Order_By>;
  products_aggregate?: InputMaybe<Product_Supplement_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: supplement */
export type Supplement_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "supplement_prices" */
export type Supplement_Prices = {
  __typename?: 'supplement_prices';
  from?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  to?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['numeric']['output']>;
};

/** aggregated selection of "supplement_prices" */
export type Supplement_Prices_Aggregate = {
  __typename?: 'supplement_prices_aggregate';
  aggregate?: Maybe<Supplement_Prices_Aggregate_Fields>;
  nodes: Array<Supplement_Prices>;
};

export type Supplement_Prices_Aggregate_Bool_Exp = {
  count?: InputMaybe<Supplement_Prices_Aggregate_Bool_Exp_Count>;
};

export type Supplement_Prices_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Supplement_Prices_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Supplement_Prices_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "supplement_prices" */
export type Supplement_Prices_Aggregate_Fields = {
  __typename?: 'supplement_prices_aggregate_fields';
  avg?: Maybe<Supplement_Prices_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Supplement_Prices_Max_Fields>;
  min?: Maybe<Supplement_Prices_Min_Fields>;
  stddev?: Maybe<Supplement_Prices_Stddev_Fields>;
  stddev_pop?: Maybe<Supplement_Prices_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Supplement_Prices_Stddev_Samp_Fields>;
  sum?: Maybe<Supplement_Prices_Sum_Fields>;
  var_pop?: Maybe<Supplement_Prices_Var_Pop_Fields>;
  var_samp?: Maybe<Supplement_Prices_Var_Samp_Fields>;
  variance?: Maybe<Supplement_Prices_Variance_Fields>;
};


/** aggregate fields of "supplement_prices" */
export type Supplement_Prices_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Supplement_Prices_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "supplement_prices" */
export type Supplement_Prices_Aggregate_Order_By = {
  avg?: InputMaybe<Supplement_Prices_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Supplement_Prices_Max_Order_By>;
  min?: InputMaybe<Supplement_Prices_Min_Order_By>;
  stddev?: InputMaybe<Supplement_Prices_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Supplement_Prices_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Supplement_Prices_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Supplement_Prices_Sum_Order_By>;
  var_pop?: InputMaybe<Supplement_Prices_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Supplement_Prices_Var_Samp_Order_By>;
  variance?: InputMaybe<Supplement_Prices_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "supplement_prices" */
export type Supplement_Prices_Arr_Rel_Insert_Input = {
  data: Array<Supplement_Prices_Insert_Input>;
};

/** aggregate avg on columns */
export type Supplement_Prices_Avg_Fields = {
  __typename?: 'supplement_prices_avg_fields';
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "supplement_prices" */
export type Supplement_Prices_Avg_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "supplement_prices". All fields are combined with a logical 'AND'. */
export type Supplement_Prices_Bool_Exp = {
  _and?: InputMaybe<Array<Supplement_Prices_Bool_Exp>>;
  _not?: InputMaybe<Supplement_Prices_Bool_Exp>;
  _or?: InputMaybe<Array<Supplement_Prices_Bool_Exp>>;
  from?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  to?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<Numeric_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "supplement_prices" */
export type Supplement_Prices_Inc_Input = {
  value?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "supplement_prices" */
export type Supplement_Prices_Insert_Input = {
  from?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate max on columns */
export type Supplement_Prices_Max_Fields = {
  __typename?: 'supplement_prices_max_fields';
  from?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  to?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['numeric']['output']>;
};

/** order by max() on columns of table "supplement_prices" */
export type Supplement_Prices_Max_Order_By = {
  from?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  to?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Supplement_Prices_Min_Fields = {
  __typename?: 'supplement_prices_min_fields';
  from?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  to?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['numeric']['output']>;
};

/** order by min() on columns of table "supplement_prices" */
export type Supplement_Prices_Min_Order_By = {
  from?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  to?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "supplement_prices" */
export type Supplement_Prices_Mutation_Response = {
  __typename?: 'supplement_prices_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Supplement_Prices>;
};

/** Ordering options when selecting data from "supplement_prices". */
export type Supplement_Prices_Order_By = {
  from?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  to?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** select columns of table "supplement_prices" */
export enum Supplement_Prices_Select_Column {
  /** column name */
  From = 'from',
  /** column name */
  Id = 'id',
  /** column name */
  To = 'to',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "supplement_prices" */
export type Supplement_Prices_Set_Input = {
  from?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate stddev on columns */
export type Supplement_Prices_Stddev_Fields = {
  __typename?: 'supplement_prices_stddev_fields';
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "supplement_prices" */
export type Supplement_Prices_Stddev_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Supplement_Prices_Stddev_Pop_Fields = {
  __typename?: 'supplement_prices_stddev_pop_fields';
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "supplement_prices" */
export type Supplement_Prices_Stddev_Pop_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Supplement_Prices_Stddev_Samp_Fields = {
  __typename?: 'supplement_prices_stddev_samp_fields';
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "supplement_prices" */
export type Supplement_Prices_Stddev_Samp_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "supplement_prices" */
export type Supplement_Prices_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Supplement_Prices_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Supplement_Prices_Stream_Cursor_Value_Input = {
  from?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Supplement_Prices_Sum_Fields = {
  __typename?: 'supplement_prices_sum_fields';
  value?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "supplement_prices" */
export type Supplement_Prices_Sum_Order_By = {
  value?: InputMaybe<Order_By>;
};

export type Supplement_Prices_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Supplement_Prices_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Supplement_Prices_Set_Input>;
  /** filter the rows which have to be updated */
  where: Supplement_Prices_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Supplement_Prices_Var_Pop_Fields = {
  __typename?: 'supplement_prices_var_pop_fields';
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "supplement_prices" */
export type Supplement_Prices_Var_Pop_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Supplement_Prices_Var_Samp_Fields = {
  __typename?: 'supplement_prices_var_samp_fields';
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "supplement_prices" */
export type Supplement_Prices_Var_Samp_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Supplement_Prices_Variance_Fields = {
  __typename?: 'supplement_prices_variance_fields';
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "supplement_prices" */
export type Supplement_Prices_Variance_Order_By = {
  value?: InputMaybe<Order_By>;
};

export type Supplement_Save_Input = {
  description: Multilanguage_Field_Input;
  headline: Multilanguage_Field_Input;
  id: Scalars['uuid']['input'];
  image_id: Scalars['uuid']['input'];
  name: Multilanguage_Field_Input;
  organization_id: Scalars['uuid']['input'];
  price: Scalars['numeric']['input'];
  products: Array<Selected_Item>;
  type: Scalars['String']['input'];
};

/** select columns of table "supplement" */
export enum Supplement_Select_Column {
  /** column name */
  DescriptionId = 'description_id',
  /** column name */
  HeadlineId = 'headline_id',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  IsOptional = 'is_optional',
  /** column name */
  NameId = 'name_id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  Price = 'price',
  /** column name */
  Type = 'type'
}

/** select "supplement_aggregate_bool_exp_bool_and_arguments_columns" columns of table "supplement" */
export enum Supplement_Select_Column_Supplement_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsOptional = 'is_optional'
}

/** select "supplement_aggregate_bool_exp_bool_or_arguments_columns" columns of table "supplement" */
export enum Supplement_Select_Column_Supplement_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsOptional = 'is_optional'
}

/** input type for updating data in table "supplement" */
export type Supplement_Set_Input = {
  description_id?: InputMaybe<Scalars['uuid']['input']>;
  headline_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_id?: InputMaybe<Scalars['uuid']['input']>;
  is_optional?: InputMaybe<Scalars['Boolean']['input']>;
  name_id?: InputMaybe<Scalars['uuid']['input']>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  type?: InputMaybe<Supplement_Type_Enum>;
};

/** aggregate stddev on columns */
export type Supplement_Stddev_Fields = {
  __typename?: 'supplement_stddev_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "supplement" */
export type Supplement_Stddev_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Supplement_Stddev_Pop_Fields = {
  __typename?: 'supplement_stddev_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "supplement" */
export type Supplement_Stddev_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Supplement_Stddev_Samp_Fields = {
  __typename?: 'supplement_stddev_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "supplement" */
export type Supplement_Stddev_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "supplement" */
export type Supplement_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Supplement_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Supplement_Stream_Cursor_Value_Input = {
  description_id?: InputMaybe<Scalars['uuid']['input']>;
  headline_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_id?: InputMaybe<Scalars['uuid']['input']>;
  is_optional?: InputMaybe<Scalars['Boolean']['input']>;
  name_id?: InputMaybe<Scalars['uuid']['input']>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  type?: InputMaybe<Supplement_Type_Enum>;
};

/** aggregate sum on columns */
export type Supplement_Sum_Fields = {
  __typename?: 'supplement_sum_fields';
  price?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "supplement" */
export type Supplement_Sum_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** columns and relationships of "supplement_type" */
export type Supplement_Type = {
  __typename?: 'supplement_type';
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
};

/** aggregated selection of "supplement_type" */
export type Supplement_Type_Aggregate = {
  __typename?: 'supplement_type_aggregate';
  aggregate?: Maybe<Supplement_Type_Aggregate_Fields>;
  nodes: Array<Supplement_Type>;
};

/** aggregate fields of "supplement_type" */
export type Supplement_Type_Aggregate_Fields = {
  __typename?: 'supplement_type_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Supplement_Type_Max_Fields>;
  min?: Maybe<Supplement_Type_Min_Fields>;
};


/** aggregate fields of "supplement_type" */
export type Supplement_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Supplement_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "supplement_type". All fields are combined with a logical 'AND'. */
export type Supplement_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Supplement_Type_Bool_Exp>>;
  _not?: InputMaybe<Supplement_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Supplement_Type_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "supplement_type" */
export enum Supplement_Type_Constraint {
  /** unique or primary key constraint on columns "id" */
  SupplementTypePkey = 'supplement_type_pkey'
}

export enum Supplement_Type_Enum {
  /** Per pax */
  PerPax = 'PER_PAX',
  /** Per pax per day */
  PerPaxPerDay = 'PER_PAX_PER_DAY',
  /** Per pax per hour */
  PerPaxPerHour = 'PER_PAX_PER_HOUR',
  /** Once per unit */
  PerUnit = 'PER_UNIT',
  /** Per unit per day */
  PerUnitDay = 'PER_UNIT_DAY',
  /** Per unit per hour */
  PerUnitHour = 'PER_UNIT_HOUR'
}

/** Boolean expression to compare columns of type "supplement_type_enum". All fields are combined with logical 'AND'. */
export type Supplement_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Supplement_Type_Enum>;
  _in?: InputMaybe<Array<Supplement_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Supplement_Type_Enum>;
  _nin?: InputMaybe<Array<Supplement_Type_Enum>>;
};

/** input type for inserting data into table "supplement_type" */
export type Supplement_Type_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Supplement_Type_Max_Fields = {
  __typename?: 'supplement_type_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Supplement_Type_Min_Fields = {
  __typename?: 'supplement_type_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "supplement_type" */
export type Supplement_Type_Mutation_Response = {
  __typename?: 'supplement_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Supplement_Type>;
};

/** on_conflict condition type for table "supplement_type" */
export type Supplement_Type_On_Conflict = {
  constraint: Supplement_Type_Constraint;
  update_columns?: Array<Supplement_Type_Update_Column>;
  where?: InputMaybe<Supplement_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "supplement_type". */
export type Supplement_Type_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: supplement_type */
export type Supplement_Type_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "supplement_type" */
export enum Supplement_Type_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "supplement_type" */
export type Supplement_Type_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "supplement_type" */
export type Supplement_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Supplement_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Supplement_Type_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "supplement_type" */
export enum Supplement_Type_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id'
}

export type Supplement_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Supplement_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Supplement_Type_Bool_Exp;
};

/** update columns of table "supplement" */
export enum Supplement_Update_Column {
  /** column name */
  DescriptionId = 'description_id',
  /** column name */
  HeadlineId = 'headline_id',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  IsOptional = 'is_optional',
  /** column name */
  NameId = 'name_id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  Price = 'price',
  /** column name */
  Type = 'type'
}

export type Supplement_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Supplement_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Supplement_Set_Input>;
  /** filter the rows which have to be updated */
  where: Supplement_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Supplement_Var_Pop_Fields = {
  __typename?: 'supplement_var_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "supplement" */
export type Supplement_Var_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Supplement_Var_Samp_Fields = {
  __typename?: 'supplement_var_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "supplement" */
export type Supplement_Var_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Supplement_Variance_Fields = {
  __typename?: 'supplement_variance_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "supplement" */
export type Supplement_Variance_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "translated_text" */
export type Translated_Text = {
  __typename?: 'translated_text';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
};

/** aggregated selection of "translated_text" */
export type Translated_Text_Aggregate = {
  __typename?: 'translated_text_aggregate';
  aggregate?: Maybe<Translated_Text_Aggregate_Fields>;
  nodes: Array<Translated_Text>;
};

/** aggregate fields of "translated_text" */
export type Translated_Text_Aggregate_Fields = {
  __typename?: 'translated_text_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Translated_Text_Max_Fields>;
  min?: Maybe<Translated_Text_Min_Fields>;
};


/** aggregate fields of "translated_text" */
export type Translated_Text_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Translated_Text_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "translated_text". All fields are combined with a logical 'AND'. */
export type Translated_Text_Bool_Exp = {
  _and?: InputMaybe<Array<Translated_Text_Bool_Exp>>;
  _not?: InputMaybe<Translated_Text_Bool_Exp>;
  _or?: InputMaybe<Array<Translated_Text_Bool_Exp>>;
  de?: InputMaybe<String_Comparison_Exp>;
  en?: InputMaybe<String_Comparison_Exp>;
  es?: InputMaybe<String_Comparison_Exp>;
  fr?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "translated_text" */
export enum Translated_Text_Constraint {
  /** unique or primary key constraint on columns "id" */
  TranslatedTextPkey = 'translated_text_pkey'
}

/** input type for inserting data into table "translated_text" */
export type Translated_Text_Insert_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Translated_Text_Max_Fields = {
  __typename?: 'translated_text_max_fields';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Translated_Text_Min_Fields = {
  __typename?: 'translated_text_min_fields';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "translated_text" */
export type Translated_Text_Mutation_Response = {
  __typename?: 'translated_text_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Translated_Text>;
};

/** input type for inserting object relation for remote table "translated_text" */
export type Translated_Text_Obj_Rel_Insert_Input = {
  data: Translated_Text_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Translated_Text_On_Conflict>;
};

/** on_conflict condition type for table "translated_text" */
export type Translated_Text_On_Conflict = {
  constraint: Translated_Text_Constraint;
  update_columns?: Array<Translated_Text_Update_Column>;
  where?: InputMaybe<Translated_Text_Bool_Exp>;
};

/** Ordering options when selecting data from "translated_text". */
export type Translated_Text_Order_By = {
  de?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  es?: InputMaybe<Order_By>;
  fr?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: translated_text */
export type Translated_Text_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "translated_text" */
export enum Translated_Text_Select_Column {
  /** column name */
  De = 'de',
  /** column name */
  En = 'en',
  /** column name */
  Es = 'es',
  /** column name */
  Fr = 'fr',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "translated_text" */
export type Translated_Text_Set_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "translated_text" */
export type Translated_Text_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Translated_Text_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Translated_Text_Stream_Cursor_Value_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "translated_text" */
export enum Translated_Text_Update_Column {
  /** column name */
  De = 'de',
  /** column name */
  En = 'en',
  /** column name */
  Es = 'es',
  /** column name */
  Fr = 'fr',
  /** column name */
  Id = 'id'
}

export type Translated_Text_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Translated_Text_Set_Input>;
  /** filter the rows which have to be updated */
  where: Translated_Text_Bool_Exp;
};

/** columns and relationships of "unit_management" */
export type Unit_Management = {
  __typename?: 'unit_management';
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
};

/** aggregated selection of "unit_management" */
export type Unit_Management_Aggregate = {
  __typename?: 'unit_management_aggregate';
  aggregate?: Maybe<Unit_Management_Aggregate_Fields>;
  nodes: Array<Unit_Management>;
};

/** aggregate fields of "unit_management" */
export type Unit_Management_Aggregate_Fields = {
  __typename?: 'unit_management_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Unit_Management_Max_Fields>;
  min?: Maybe<Unit_Management_Min_Fields>;
};


/** aggregate fields of "unit_management" */
export type Unit_Management_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Unit_Management_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "unit_management". All fields are combined with a logical 'AND'. */
export type Unit_Management_Bool_Exp = {
  _and?: InputMaybe<Array<Unit_Management_Bool_Exp>>;
  _not?: InputMaybe<Unit_Management_Bool_Exp>;
  _or?: InputMaybe<Array<Unit_Management_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "unit_management" */
export enum Unit_Management_Constraint {
  /** unique or primary key constraint on columns "id" */
  UnitManagementPkey = 'unit_management_pkey'
}

export enum Unit_Management_Enum {
  /** Availability and price is managed per pax. Each unit have one or more pax. */
  PerPax = 'PER_PAX',
  /** Availability and price is managed per resource. Each unit gets a resource. */
  PerResource = 'PER_RESOURCE'
}

/** Boolean expression to compare columns of type "unit_management_enum". All fields are combined with logical 'AND'. */
export type Unit_Management_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Unit_Management_Enum>;
  _in?: InputMaybe<Array<Unit_Management_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Unit_Management_Enum>;
  _nin?: InputMaybe<Array<Unit_Management_Enum>>;
};

/** input type for inserting data into table "unit_management" */
export type Unit_Management_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Unit_Management_Max_Fields = {
  __typename?: 'unit_management_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Unit_Management_Min_Fields = {
  __typename?: 'unit_management_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "unit_management" */
export type Unit_Management_Mutation_Response = {
  __typename?: 'unit_management_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Unit_Management>;
};

/** on_conflict condition type for table "unit_management" */
export type Unit_Management_On_Conflict = {
  constraint: Unit_Management_Constraint;
  update_columns?: Array<Unit_Management_Update_Column>;
  where?: InputMaybe<Unit_Management_Bool_Exp>;
};

/** Ordering options when selecting data from "unit_management". */
export type Unit_Management_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: unit_management */
export type Unit_Management_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "unit_management" */
export enum Unit_Management_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "unit_management" */
export type Unit_Management_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "unit_management" */
export type Unit_Management_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Unit_Management_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Unit_Management_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "unit_management" */
export enum Unit_Management_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id'
}

export type Unit_Management_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Unit_Management_Set_Input>;
  /** filter the rows which have to be updated */
  where: Unit_Management_Bool_Exp;
};

export type Update_Booking_Version_With_Optimistic_Lock_Input = {
  booking_id: Scalars['uuid']['input'];
  expected_version: Scalars['numeric']['input'];
  new_version: Scalars['numeric']['input'];
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users = {
  __typename?: 'users';
  activeMfaType?: Maybe<Scalars['String']['output']>;
  avatarUrl: Scalars['String']['output'];
  createdAt: Scalars['timestamptz']['output'];
  currentChallenge?: Maybe<Scalars['String']['output']>;
  defaultRole: Scalars['String']['output'];
  /** An object relationship */
  defaultRoleByRole: AuthRoles;
  disabled: Scalars['Boolean']['output'];
  displayName: Scalars['String']['output'];
  email?: Maybe<Scalars['citext']['output']>;
  emailVerified: Scalars['Boolean']['output'];
  id: Scalars['uuid']['output'];
  isAnonymous: Scalars['Boolean']['output'];
  lastSeen?: Maybe<Scalars['timestamptz']['output']>;
  locale: Scalars['String']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  newEmail?: Maybe<Scalars['citext']['output']>;
  otpHash?: Maybe<Scalars['String']['output']>;
  otpHashExpiresAt: Scalars['timestamptz']['output'];
  otpMethodLastUsed?: Maybe<Scalars['String']['output']>;
  passwordHash?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  phoneNumberVerified: Scalars['Boolean']['output'];
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  /** An array relationship */
  roles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  roles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  securityKeys: Array<AuthUserSecurityKeys>;
  /** An aggregate relationship */
  securityKeys_aggregate: AuthUserSecurityKeys_Aggregate;
  ticket?: Maybe<Scalars['String']['output']>;
  ticketExpiresAt: Scalars['timestamptz']['output'];
  totpSecret?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
  /** An array relationship */
  users_organization_members: Array<Organization_Member>;
  /** An aggregate relationship */
  users_organization_members_aggregate: Organization_Member_Aggregate;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUsers_Organization_MembersArgs = {
  distinct_on?: InputMaybe<Array<Organization_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Member_Order_By>>;
  where?: InputMaybe<Organization_Member_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUsers_Organization_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Member_Order_By>>;
  where?: InputMaybe<Organization_Member_Bool_Exp>;
};

/** aggregated selection of "auth.users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Users_Aggregate_Bool_Exp_Count>;
};

export type Users_Aggregate_Bool_Exp_Bool_And = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "auth.users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "auth.users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  activeMfaType?: InputMaybe<String_Comparison_Exp>;
  avatarUrl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  currentChallenge?: InputMaybe<String_Comparison_Exp>;
  defaultRole?: InputMaybe<String_Comparison_Exp>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  disabled?: InputMaybe<Boolean_Comparison_Exp>;
  displayName?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<Citext_Comparison_Exp>;
  emailVerified?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isAnonymous?: InputMaybe<Boolean_Comparison_Exp>;
  lastSeen?: InputMaybe<Timestamptz_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  newEmail?: InputMaybe<Citext_Comparison_Exp>;
  otpHash?: InputMaybe<String_Comparison_Exp>;
  otpHashExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  otpMethodLastUsed?: InputMaybe<String_Comparison_Exp>;
  passwordHash?: InputMaybe<String_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  phoneNumberVerified?: InputMaybe<Boolean_Comparison_Exp>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp>;
  roles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>;
  securityKeys?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp>;
  ticket?: InputMaybe<String_Comparison_Exp>;
  ticketExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  totpSecret?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>;
  users_organization_members?: InputMaybe<Organization_Member_Bool_Exp>;
  users_organization_members_aggregate?: InputMaybe<Organization_Member_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "phone_number" */
  UsersPhoneNumberKey = 'users_phone_number_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "auth.users" */
export type Users_Insert_Input = {
  activeMfaType?: InputMaybe<Scalars['String']['input']>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  currentChallenge?: InputMaybe<Scalars['String']['input']>;
  defaultRole?: InputMaybe<Scalars['String']['input']>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['citext']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  newEmail?: InputMaybe<Scalars['citext']['input']>;
  otpHash?: InputMaybe<Scalars['String']['input']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']['input']>;
  passwordHash?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  roles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  securityKeys?: InputMaybe<AuthUserSecurityKeys_Arr_Rel_Insert_Input>;
  ticket?: InputMaybe<Scalars['String']['input']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  totpSecret?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
  users_organization_members?: InputMaybe<Organization_Member_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  activeMfaType?: Maybe<Scalars['String']['output']>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  currentChallenge?: Maybe<Scalars['String']['output']>;
  defaultRole?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['citext']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastSeen?: Maybe<Scalars['timestamptz']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  newEmail?: Maybe<Scalars['citext']['output']>;
  otpHash?: Maybe<Scalars['String']['output']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  otpMethodLastUsed?: Maybe<Scalars['String']['output']>;
  passwordHash?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  ticket?: Maybe<Scalars['String']['output']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  totpSecret?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "auth.users" */
export type Users_Max_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  activeMfaType?: Maybe<Scalars['String']['output']>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  currentChallenge?: Maybe<Scalars['String']['output']>;
  defaultRole?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['citext']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastSeen?: Maybe<Scalars['timestamptz']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  newEmail?: Maybe<Scalars['citext']['output']>;
  otpHash?: Maybe<Scalars['String']['output']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  otpMethodLastUsed?: Maybe<Scalars['String']['output']>;
  passwordHash?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  ticket?: Maybe<Scalars['String']['output']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  totpSecret?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "auth.users" */
export type Users_Min_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "auth.users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Users_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Order_By>;
  disabled?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isAnonymous?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  phoneNumberVerified?: InputMaybe<Order_By>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
  users_organization_members_aggregate?: InputMaybe<Organization_Member_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "auth.users" */
export enum Users_Select_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** select "users_aggregate_bool_exp_bool_and_arguments_columns" columns of table "auth.users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Disabled = 'disabled',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified'
}

/** select "users_aggregate_bool_exp_bool_or_arguments_columns" columns of table "auth.users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Disabled = 'disabled',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified'
}

/** input type for updating data in table "auth.users" */
export type Users_Set_Input = {
  activeMfaType?: InputMaybe<Scalars['String']['input']>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  currentChallenge?: InputMaybe<Scalars['String']['input']>;
  defaultRole?: InputMaybe<Scalars['String']['input']>;
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['citext']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  newEmail?: InputMaybe<Scalars['citext']['input']>;
  otpHash?: InputMaybe<Scalars['String']['input']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']['input']>;
  passwordHash?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  ticket?: InputMaybe<Scalars['String']['input']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  totpSecret?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  activeMfaType?: InputMaybe<Scalars['String']['input']>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  currentChallenge?: InputMaybe<Scalars['String']['input']>;
  defaultRole?: InputMaybe<Scalars['String']['input']>;
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['citext']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  newEmail?: InputMaybe<Scalars['citext']['input']>;
  otpHash?: InputMaybe<Scalars['String']['input']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']['input']>;
  passwordHash?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  ticket?: InputMaybe<Scalars['String']['input']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  totpSecret?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "auth.users" */
export enum Users_Update_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Users_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Users_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Users_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** columns and relationships of "venue" */
export type Venue = {
  __typename?: 'venue';
  /** An object relationship */
  description: Venue_Description;
  description_id: Scalars['uuid']['output'];
  /** An array relationship */
  facilities: Array<Venue_Facility>;
  /** An aggregate relationship */
  facilities_aggregate: Venue_Facility_Aggregate;
  /** An object relationship */
  gallery?: Maybe<Media_Gallery>;
  gallery_id?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  good_to_know: Venue_Good_To_Know;
  good_to_know_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  organization: Organization;
  organization_id: Scalars['uuid']['output'];
  /** An object relationship */
  place: Place;
  place_id: Scalars['uuid']['output'];
  /** An object relationship */
  usps: Venue_Usps;
  usps_id: Scalars['uuid']['output'];
};


/** columns and relationships of "venue" */
export type VenueFacilitiesArgs = {
  distinct_on?: InputMaybe<Array<Venue_Facility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Facility_Order_By>>;
  where?: InputMaybe<Venue_Facility_Bool_Exp>;
};


/** columns and relationships of "venue" */
export type VenueFacilities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Venue_Facility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Facility_Order_By>>;
  where?: InputMaybe<Venue_Facility_Bool_Exp>;
};

/** aggregated selection of "venue" */
export type Venue_Aggregate = {
  __typename?: 'venue_aggregate';
  aggregate?: Maybe<Venue_Aggregate_Fields>;
  nodes: Array<Venue>;
};

export type Venue_Aggregate_Bool_Exp = {
  count?: InputMaybe<Venue_Aggregate_Bool_Exp_Count>;
};

export type Venue_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Venue_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Venue_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "venue" */
export type Venue_Aggregate_Fields = {
  __typename?: 'venue_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Venue_Max_Fields>;
  min?: Maybe<Venue_Min_Fields>;
};


/** aggregate fields of "venue" */
export type Venue_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Venue_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "venue" */
export type Venue_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Venue_Max_Order_By>;
  min?: InputMaybe<Venue_Min_Order_By>;
};

/** input type for inserting array relation for remote table "venue" */
export type Venue_Arr_Rel_Insert_Input = {
  data: Array<Venue_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Venue_On_Conflict>;
};

/** Boolean expression to filter rows from the table "venue". All fields are combined with a logical 'AND'. */
export type Venue_Bool_Exp = {
  _and?: InputMaybe<Array<Venue_Bool_Exp>>;
  _not?: InputMaybe<Venue_Bool_Exp>;
  _or?: InputMaybe<Array<Venue_Bool_Exp>>;
  description?: InputMaybe<Venue_Description_Bool_Exp>;
  description_id?: InputMaybe<Uuid_Comparison_Exp>;
  facilities?: InputMaybe<Venue_Facility_Bool_Exp>;
  facilities_aggregate?: InputMaybe<Venue_Facility_Aggregate_Bool_Exp>;
  gallery?: InputMaybe<Media_Gallery_Bool_Exp>;
  gallery_id?: InputMaybe<Uuid_Comparison_Exp>;
  good_to_know?: InputMaybe<Venue_Good_To_Know_Bool_Exp>;
  good_to_know_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  organization?: InputMaybe<Organization_Bool_Exp>;
  organization_id?: InputMaybe<Uuid_Comparison_Exp>;
  place?: InputMaybe<Place_Bool_Exp>;
  place_id?: InputMaybe<Uuid_Comparison_Exp>;
  usps?: InputMaybe<Venue_Usps_Bool_Exp>;
  usps_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "venue" */
export enum Venue_Constraint {
  /** unique or primary key constraint on columns "id" */
  VenuePkey = 'venue_pkey'
}

/** columns and relationships of "venue_description" */
export type Venue_Description = {
  __typename?: 'venue_description';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
};

/** aggregated selection of "venue_description" */
export type Venue_Description_Aggregate = {
  __typename?: 'venue_description_aggregate';
  aggregate?: Maybe<Venue_Description_Aggregate_Fields>;
  nodes: Array<Venue_Description>;
};

/** aggregate fields of "venue_description" */
export type Venue_Description_Aggregate_Fields = {
  __typename?: 'venue_description_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Venue_Description_Max_Fields>;
  min?: Maybe<Venue_Description_Min_Fields>;
};


/** aggregate fields of "venue_description" */
export type Venue_Description_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Venue_Description_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "venue_description". All fields are combined with a logical 'AND'. */
export type Venue_Description_Bool_Exp = {
  _and?: InputMaybe<Array<Venue_Description_Bool_Exp>>;
  _not?: InputMaybe<Venue_Description_Bool_Exp>;
  _or?: InputMaybe<Array<Venue_Description_Bool_Exp>>;
  de?: InputMaybe<String_Comparison_Exp>;
  en?: InputMaybe<String_Comparison_Exp>;
  es?: InputMaybe<String_Comparison_Exp>;
  fr?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "venue_description" */
export enum Venue_Description_Constraint {
  /** unique or primary key constraint on columns "id" */
  VenueDescriptionPkey = 'venue_description_pkey'
}

/** input type for inserting data into table "venue_description" */
export type Venue_Description_Insert_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Venue_Description_Max_Fields = {
  __typename?: 'venue_description_max_fields';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Venue_Description_Min_Fields = {
  __typename?: 'venue_description_min_fields';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "venue_description" */
export type Venue_Description_Mutation_Response = {
  __typename?: 'venue_description_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Venue_Description>;
};

/** input type for inserting object relation for remote table "venue_description" */
export type Venue_Description_Obj_Rel_Insert_Input = {
  data: Venue_Description_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Venue_Description_On_Conflict>;
};

/** on_conflict condition type for table "venue_description" */
export type Venue_Description_On_Conflict = {
  constraint: Venue_Description_Constraint;
  update_columns?: Array<Venue_Description_Update_Column>;
  where?: InputMaybe<Venue_Description_Bool_Exp>;
};

/** Ordering options when selecting data from "venue_description". */
export type Venue_Description_Order_By = {
  de?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  es?: InputMaybe<Order_By>;
  fr?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: venue_description */
export type Venue_Description_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "venue_description" */
export enum Venue_Description_Select_Column {
  /** column name */
  De = 'de',
  /** column name */
  En = 'en',
  /** column name */
  Es = 'es',
  /** column name */
  Fr = 'fr',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "venue_description" */
export type Venue_Description_Set_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "venue_description" */
export type Venue_Description_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Venue_Description_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Venue_Description_Stream_Cursor_Value_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "venue_description" */
export enum Venue_Description_Update_Column {
  /** column name */
  De = 'de',
  /** column name */
  En = 'en',
  /** column name */
  Es = 'es',
  /** column name */
  Fr = 'fr',
  /** column name */
  Id = 'id'
}

export type Venue_Description_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Venue_Description_Set_Input>;
  /** filter the rows which have to be updated */
  where: Venue_Description_Bool_Exp;
};

export type Venue_Facilities_Save_Input = {
  id: Scalars['String']['input'];
  items: Array<Venue_Facility_Input>;
};

/** columns and relationships of "venue_facility" */
export type Venue_Facility = {
  __typename?: 'venue_facility';
  /** An object relationship */
  headline: Venue_Facility_Headline;
  headline_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  image: Files;
  image_id: Scalars['uuid']['output'];
  /** An object relationship */
  name: Venue_Facility_Name;
  name_id: Scalars['uuid']['output'];
  position: Scalars['smallint']['output'];
  /** An object relationship */
  slug: Slug;
  slug_id: Scalars['uuid']['output'];
  /** An object relationship */
  venue: Venue;
  venue_id: Scalars['uuid']['output'];
};

/** aggregated selection of "venue_facility" */
export type Venue_Facility_Aggregate = {
  __typename?: 'venue_facility_aggregate';
  aggregate?: Maybe<Venue_Facility_Aggregate_Fields>;
  nodes: Array<Venue_Facility>;
};

export type Venue_Facility_Aggregate_Bool_Exp = {
  count?: InputMaybe<Venue_Facility_Aggregate_Bool_Exp_Count>;
};

export type Venue_Facility_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Venue_Facility_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Venue_Facility_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "venue_facility" */
export type Venue_Facility_Aggregate_Fields = {
  __typename?: 'venue_facility_aggregate_fields';
  avg?: Maybe<Venue_Facility_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Venue_Facility_Max_Fields>;
  min?: Maybe<Venue_Facility_Min_Fields>;
  stddev?: Maybe<Venue_Facility_Stddev_Fields>;
  stddev_pop?: Maybe<Venue_Facility_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Venue_Facility_Stddev_Samp_Fields>;
  sum?: Maybe<Venue_Facility_Sum_Fields>;
  var_pop?: Maybe<Venue_Facility_Var_Pop_Fields>;
  var_samp?: Maybe<Venue_Facility_Var_Samp_Fields>;
  variance?: Maybe<Venue_Facility_Variance_Fields>;
};


/** aggregate fields of "venue_facility" */
export type Venue_Facility_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Venue_Facility_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "venue_facility" */
export type Venue_Facility_Aggregate_Order_By = {
  avg?: InputMaybe<Venue_Facility_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Venue_Facility_Max_Order_By>;
  min?: InputMaybe<Venue_Facility_Min_Order_By>;
  stddev?: InputMaybe<Venue_Facility_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Venue_Facility_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Venue_Facility_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Venue_Facility_Sum_Order_By>;
  var_pop?: InputMaybe<Venue_Facility_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Venue_Facility_Var_Samp_Order_By>;
  variance?: InputMaybe<Venue_Facility_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "venue_facility" */
export type Venue_Facility_Arr_Rel_Insert_Input = {
  data: Array<Venue_Facility_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Venue_Facility_On_Conflict>;
};

/** aggregate avg on columns */
export type Venue_Facility_Avg_Fields = {
  __typename?: 'venue_facility_avg_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "venue_facility" */
export type Venue_Facility_Avg_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "venue_facility". All fields are combined with a logical 'AND'. */
export type Venue_Facility_Bool_Exp = {
  _and?: InputMaybe<Array<Venue_Facility_Bool_Exp>>;
  _not?: InputMaybe<Venue_Facility_Bool_Exp>;
  _or?: InputMaybe<Array<Venue_Facility_Bool_Exp>>;
  headline?: InputMaybe<Venue_Facility_Headline_Bool_Exp>;
  headline_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<Files_Bool_Exp>;
  image_id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<Venue_Facility_Name_Bool_Exp>;
  name_id?: InputMaybe<Uuid_Comparison_Exp>;
  position?: InputMaybe<Smallint_Comparison_Exp>;
  slug?: InputMaybe<Slug_Bool_Exp>;
  slug_id?: InputMaybe<Uuid_Comparison_Exp>;
  venue?: InputMaybe<Venue_Bool_Exp>;
  venue_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "venue_facility" */
export enum Venue_Facility_Constraint {
  /** unique or primary key constraint on columns "id" */
  VenueFacilityPkey = 'venue_facility_pkey'
}

/** columns and relationships of "venue_facility_headline" */
export type Venue_Facility_Headline = {
  __typename?: 'venue_facility_headline';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
};

/** aggregated selection of "venue_facility_headline" */
export type Venue_Facility_Headline_Aggregate = {
  __typename?: 'venue_facility_headline_aggregate';
  aggregate?: Maybe<Venue_Facility_Headline_Aggregate_Fields>;
  nodes: Array<Venue_Facility_Headline>;
};

/** aggregate fields of "venue_facility_headline" */
export type Venue_Facility_Headline_Aggregate_Fields = {
  __typename?: 'venue_facility_headline_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Venue_Facility_Headline_Max_Fields>;
  min?: Maybe<Venue_Facility_Headline_Min_Fields>;
};


/** aggregate fields of "venue_facility_headline" */
export type Venue_Facility_Headline_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Venue_Facility_Headline_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "venue_facility_headline". All fields are combined with a logical 'AND'. */
export type Venue_Facility_Headline_Bool_Exp = {
  _and?: InputMaybe<Array<Venue_Facility_Headline_Bool_Exp>>;
  _not?: InputMaybe<Venue_Facility_Headline_Bool_Exp>;
  _or?: InputMaybe<Array<Venue_Facility_Headline_Bool_Exp>>;
  de?: InputMaybe<String_Comparison_Exp>;
  en?: InputMaybe<String_Comparison_Exp>;
  es?: InputMaybe<String_Comparison_Exp>;
  fr?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "venue_facility_headline" */
export enum Venue_Facility_Headline_Constraint {
  /** unique or primary key constraint on columns "id" */
  VenueFacilityHeadlinePkey = 'venue_facility_headline_pkey'
}

/** input type for inserting data into table "venue_facility_headline" */
export type Venue_Facility_Headline_Insert_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Venue_Facility_Headline_Max_Fields = {
  __typename?: 'venue_facility_headline_max_fields';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Venue_Facility_Headline_Min_Fields = {
  __typename?: 'venue_facility_headline_min_fields';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "venue_facility_headline" */
export type Venue_Facility_Headline_Mutation_Response = {
  __typename?: 'venue_facility_headline_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Venue_Facility_Headline>;
};

/** input type for inserting object relation for remote table "venue_facility_headline" */
export type Venue_Facility_Headline_Obj_Rel_Insert_Input = {
  data: Venue_Facility_Headline_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Venue_Facility_Headline_On_Conflict>;
};

/** on_conflict condition type for table "venue_facility_headline" */
export type Venue_Facility_Headline_On_Conflict = {
  constraint: Venue_Facility_Headline_Constraint;
  update_columns?: Array<Venue_Facility_Headline_Update_Column>;
  where?: InputMaybe<Venue_Facility_Headline_Bool_Exp>;
};

/** Ordering options when selecting data from "venue_facility_headline". */
export type Venue_Facility_Headline_Order_By = {
  de?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  es?: InputMaybe<Order_By>;
  fr?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: venue_facility_headline */
export type Venue_Facility_Headline_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "venue_facility_headline" */
export enum Venue_Facility_Headline_Select_Column {
  /** column name */
  De = 'de',
  /** column name */
  En = 'en',
  /** column name */
  Es = 'es',
  /** column name */
  Fr = 'fr',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "venue_facility_headline" */
export type Venue_Facility_Headline_Set_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "venue_facility_headline" */
export type Venue_Facility_Headline_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Venue_Facility_Headline_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Venue_Facility_Headline_Stream_Cursor_Value_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "venue_facility_headline" */
export enum Venue_Facility_Headline_Update_Column {
  /** column name */
  De = 'de',
  /** column name */
  En = 'en',
  /** column name */
  Es = 'es',
  /** column name */
  Fr = 'fr',
  /** column name */
  Id = 'id'
}

export type Venue_Facility_Headline_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Venue_Facility_Headline_Set_Input>;
  /** filter the rows which have to be updated */
  where: Venue_Facility_Headline_Bool_Exp;
};

/** input type for incrementing numeric columns in table "venue_facility" */
export type Venue_Facility_Inc_Input = {
  position?: InputMaybe<Scalars['smallint']['input']>;
};

export type Venue_Facility_Input = {
  headline: Multilanguage_Field_Input;
  image_id: Scalars['String']['input'];
  name: Multilanguage_Field_Input;
};

/** input type for inserting data into table "venue_facility" */
export type Venue_Facility_Insert_Input = {
  headline?: InputMaybe<Venue_Facility_Headline_Obj_Rel_Insert_Input>;
  headline_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  image_id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Venue_Facility_Name_Obj_Rel_Insert_Input>;
  name_id?: InputMaybe<Scalars['uuid']['input']>;
  position?: InputMaybe<Scalars['smallint']['input']>;
  slug?: InputMaybe<Slug_Obj_Rel_Insert_Input>;
  slug_id?: InputMaybe<Scalars['uuid']['input']>;
  venue?: InputMaybe<Venue_Obj_Rel_Insert_Input>;
  venue_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Venue_Facility_Max_Fields = {
  __typename?: 'venue_facility_max_fields';
  headline_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_id?: Maybe<Scalars['uuid']['output']>;
  name_id?: Maybe<Scalars['uuid']['output']>;
  position?: Maybe<Scalars['smallint']['output']>;
  slug_id?: Maybe<Scalars['uuid']['output']>;
  venue_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "venue_facility" */
export type Venue_Facility_Max_Order_By = {
  headline_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  name_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  slug_id?: InputMaybe<Order_By>;
  venue_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Venue_Facility_Min_Fields = {
  __typename?: 'venue_facility_min_fields';
  headline_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_id?: Maybe<Scalars['uuid']['output']>;
  name_id?: Maybe<Scalars['uuid']['output']>;
  position?: Maybe<Scalars['smallint']['output']>;
  slug_id?: Maybe<Scalars['uuid']['output']>;
  venue_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "venue_facility" */
export type Venue_Facility_Min_Order_By = {
  headline_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  name_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  slug_id?: InputMaybe<Order_By>;
  venue_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "venue_facility" */
export type Venue_Facility_Mutation_Response = {
  __typename?: 'venue_facility_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Venue_Facility>;
};

/** columns and relationships of "venue_facility_name" */
export type Venue_Facility_Name = {
  __typename?: 'venue_facility_name';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
};

/** aggregated selection of "venue_facility_name" */
export type Venue_Facility_Name_Aggregate = {
  __typename?: 'venue_facility_name_aggregate';
  aggregate?: Maybe<Venue_Facility_Name_Aggregate_Fields>;
  nodes: Array<Venue_Facility_Name>;
};

/** aggregate fields of "venue_facility_name" */
export type Venue_Facility_Name_Aggregate_Fields = {
  __typename?: 'venue_facility_name_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Venue_Facility_Name_Max_Fields>;
  min?: Maybe<Venue_Facility_Name_Min_Fields>;
};


/** aggregate fields of "venue_facility_name" */
export type Venue_Facility_Name_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Venue_Facility_Name_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "venue_facility_name". All fields are combined with a logical 'AND'. */
export type Venue_Facility_Name_Bool_Exp = {
  _and?: InputMaybe<Array<Venue_Facility_Name_Bool_Exp>>;
  _not?: InputMaybe<Venue_Facility_Name_Bool_Exp>;
  _or?: InputMaybe<Array<Venue_Facility_Name_Bool_Exp>>;
  de?: InputMaybe<String_Comparison_Exp>;
  en?: InputMaybe<String_Comparison_Exp>;
  es?: InputMaybe<String_Comparison_Exp>;
  fr?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "venue_facility_name" */
export enum Venue_Facility_Name_Constraint {
  /** unique or primary key constraint on columns "id" */
  VenueFacilityNamePkey = 'venue_facility_name_pkey'
}

/** input type for inserting data into table "venue_facility_name" */
export type Venue_Facility_Name_Insert_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Venue_Facility_Name_Max_Fields = {
  __typename?: 'venue_facility_name_max_fields';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Venue_Facility_Name_Min_Fields = {
  __typename?: 'venue_facility_name_min_fields';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "venue_facility_name" */
export type Venue_Facility_Name_Mutation_Response = {
  __typename?: 'venue_facility_name_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Venue_Facility_Name>;
};

/** input type for inserting object relation for remote table "venue_facility_name" */
export type Venue_Facility_Name_Obj_Rel_Insert_Input = {
  data: Venue_Facility_Name_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Venue_Facility_Name_On_Conflict>;
};

/** on_conflict condition type for table "venue_facility_name" */
export type Venue_Facility_Name_On_Conflict = {
  constraint: Venue_Facility_Name_Constraint;
  update_columns?: Array<Venue_Facility_Name_Update_Column>;
  where?: InputMaybe<Venue_Facility_Name_Bool_Exp>;
};

/** Ordering options when selecting data from "venue_facility_name". */
export type Venue_Facility_Name_Order_By = {
  de?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  es?: InputMaybe<Order_By>;
  fr?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: venue_facility_name */
export type Venue_Facility_Name_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "venue_facility_name" */
export enum Venue_Facility_Name_Select_Column {
  /** column name */
  De = 'de',
  /** column name */
  En = 'en',
  /** column name */
  Es = 'es',
  /** column name */
  Fr = 'fr',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "venue_facility_name" */
export type Venue_Facility_Name_Set_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "venue_facility_name" */
export type Venue_Facility_Name_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Venue_Facility_Name_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Venue_Facility_Name_Stream_Cursor_Value_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "venue_facility_name" */
export enum Venue_Facility_Name_Update_Column {
  /** column name */
  De = 'de',
  /** column name */
  En = 'en',
  /** column name */
  Es = 'es',
  /** column name */
  Fr = 'fr',
  /** column name */
  Id = 'id'
}

export type Venue_Facility_Name_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Venue_Facility_Name_Set_Input>;
  /** filter the rows which have to be updated */
  where: Venue_Facility_Name_Bool_Exp;
};

/** on_conflict condition type for table "venue_facility" */
export type Venue_Facility_On_Conflict = {
  constraint: Venue_Facility_Constraint;
  update_columns?: Array<Venue_Facility_Update_Column>;
  where?: InputMaybe<Venue_Facility_Bool_Exp>;
};

/** Ordering options when selecting data from "venue_facility". */
export type Venue_Facility_Order_By = {
  headline?: InputMaybe<Venue_Facility_Headline_Order_By>;
  headline_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Files_Order_By>;
  image_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Venue_Facility_Name_Order_By>;
  name_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  slug?: InputMaybe<Slug_Order_By>;
  slug_id?: InputMaybe<Order_By>;
  venue?: InputMaybe<Venue_Order_By>;
  venue_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: venue_facility */
export type Venue_Facility_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "venue_facility" */
export enum Venue_Facility_Select_Column {
  /** column name */
  HeadlineId = 'headline_id',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  NameId = 'name_id',
  /** column name */
  Position = 'position',
  /** column name */
  SlugId = 'slug_id',
  /** column name */
  VenueId = 'venue_id'
}

/** input type for updating data in table "venue_facility" */
export type Venue_Facility_Set_Input = {
  headline_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_id?: InputMaybe<Scalars['uuid']['input']>;
  name_id?: InputMaybe<Scalars['uuid']['input']>;
  position?: InputMaybe<Scalars['smallint']['input']>;
  slug_id?: InputMaybe<Scalars['uuid']['input']>;
  venue_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Venue_Facility_Stddev_Fields = {
  __typename?: 'venue_facility_stddev_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "venue_facility" */
export type Venue_Facility_Stddev_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Venue_Facility_Stddev_Pop_Fields = {
  __typename?: 'venue_facility_stddev_pop_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "venue_facility" */
export type Venue_Facility_Stddev_Pop_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Venue_Facility_Stddev_Samp_Fields = {
  __typename?: 'venue_facility_stddev_samp_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "venue_facility" */
export type Venue_Facility_Stddev_Samp_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "venue_facility" */
export type Venue_Facility_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Venue_Facility_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Venue_Facility_Stream_Cursor_Value_Input = {
  headline_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_id?: InputMaybe<Scalars['uuid']['input']>;
  name_id?: InputMaybe<Scalars['uuid']['input']>;
  position?: InputMaybe<Scalars['smallint']['input']>;
  slug_id?: InputMaybe<Scalars['uuid']['input']>;
  venue_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Venue_Facility_Sum_Fields = {
  __typename?: 'venue_facility_sum_fields';
  position?: Maybe<Scalars['smallint']['output']>;
};

/** order by sum() on columns of table "venue_facility" */
export type Venue_Facility_Sum_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** update columns of table "venue_facility" */
export enum Venue_Facility_Update_Column {
  /** column name */
  HeadlineId = 'headline_id',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  NameId = 'name_id',
  /** column name */
  Position = 'position',
  /** column name */
  SlugId = 'slug_id',
  /** column name */
  VenueId = 'venue_id'
}

export type Venue_Facility_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Venue_Facility_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Venue_Facility_Set_Input>;
  /** filter the rows which have to be updated */
  where: Venue_Facility_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Venue_Facility_Var_Pop_Fields = {
  __typename?: 'venue_facility_var_pop_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "venue_facility" */
export type Venue_Facility_Var_Pop_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Venue_Facility_Var_Samp_Fields = {
  __typename?: 'venue_facility_var_samp_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "venue_facility" */
export type Venue_Facility_Var_Samp_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Venue_Facility_Variance_Fields = {
  __typename?: 'venue_facility_variance_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "venue_facility" */
export type Venue_Facility_Variance_Order_By = {
  position?: InputMaybe<Order_By>;
};

export type Venue_Gallery_Save_Input = {
  gallery: Media_Gallery_Input;
  id: Scalars['String']['input'];
};

/** columns and relationships of "venue_good_to_know" */
export type Venue_Good_To_Know = {
  __typename?: 'venue_good_to_know';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
};

/** aggregated selection of "venue_good_to_know" */
export type Venue_Good_To_Know_Aggregate = {
  __typename?: 'venue_good_to_know_aggregate';
  aggregate?: Maybe<Venue_Good_To_Know_Aggregate_Fields>;
  nodes: Array<Venue_Good_To_Know>;
};

/** aggregate fields of "venue_good_to_know" */
export type Venue_Good_To_Know_Aggregate_Fields = {
  __typename?: 'venue_good_to_know_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Venue_Good_To_Know_Max_Fields>;
  min?: Maybe<Venue_Good_To_Know_Min_Fields>;
};


/** aggregate fields of "venue_good_to_know" */
export type Venue_Good_To_Know_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Venue_Good_To_Know_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "venue_good_to_know". All fields are combined with a logical 'AND'. */
export type Venue_Good_To_Know_Bool_Exp = {
  _and?: InputMaybe<Array<Venue_Good_To_Know_Bool_Exp>>;
  _not?: InputMaybe<Venue_Good_To_Know_Bool_Exp>;
  _or?: InputMaybe<Array<Venue_Good_To_Know_Bool_Exp>>;
  de?: InputMaybe<String_Comparison_Exp>;
  en?: InputMaybe<String_Comparison_Exp>;
  es?: InputMaybe<String_Comparison_Exp>;
  fr?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "venue_good_to_know" */
export enum Venue_Good_To_Know_Constraint {
  /** unique or primary key constraint on columns "id" */
  VenueGoodToKnowPkey = 'venue_good_to_know_pkey'
}

/** input type for inserting data into table "venue_good_to_know" */
export type Venue_Good_To_Know_Insert_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Venue_Good_To_Know_Max_Fields = {
  __typename?: 'venue_good_to_know_max_fields';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Venue_Good_To_Know_Min_Fields = {
  __typename?: 'venue_good_to_know_min_fields';
  de?: Maybe<Scalars['String']['output']>;
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  fr?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "venue_good_to_know" */
export type Venue_Good_To_Know_Mutation_Response = {
  __typename?: 'venue_good_to_know_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Venue_Good_To_Know>;
};

/** input type for inserting object relation for remote table "venue_good_to_know" */
export type Venue_Good_To_Know_Obj_Rel_Insert_Input = {
  data: Venue_Good_To_Know_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Venue_Good_To_Know_On_Conflict>;
};

/** on_conflict condition type for table "venue_good_to_know" */
export type Venue_Good_To_Know_On_Conflict = {
  constraint: Venue_Good_To_Know_Constraint;
  update_columns?: Array<Venue_Good_To_Know_Update_Column>;
  where?: InputMaybe<Venue_Good_To_Know_Bool_Exp>;
};

/** Ordering options when selecting data from "venue_good_to_know". */
export type Venue_Good_To_Know_Order_By = {
  de?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  es?: InputMaybe<Order_By>;
  fr?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: venue_good_to_know */
export type Venue_Good_To_Know_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "venue_good_to_know" */
export enum Venue_Good_To_Know_Select_Column {
  /** column name */
  De = 'de',
  /** column name */
  En = 'en',
  /** column name */
  Es = 'es',
  /** column name */
  Fr = 'fr',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "venue_good_to_know" */
export type Venue_Good_To_Know_Set_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "venue_good_to_know" */
export type Venue_Good_To_Know_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Venue_Good_To_Know_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Venue_Good_To_Know_Stream_Cursor_Value_Input = {
  de?: InputMaybe<Scalars['String']['input']>;
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  fr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "venue_good_to_know" */
export enum Venue_Good_To_Know_Update_Column {
  /** column name */
  De = 'de',
  /** column name */
  En = 'en',
  /** column name */
  Es = 'es',
  /** column name */
  Fr = 'fr',
  /** column name */
  Id = 'id'
}

export type Venue_Good_To_Know_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Venue_Good_To_Know_Set_Input>;
  /** filter the rows which have to be updated */
  where: Venue_Good_To_Know_Bool_Exp;
};

/** input type for inserting data into table "venue" */
export type Venue_Insert_Input = {
  description?: InputMaybe<Venue_Description_Obj_Rel_Insert_Input>;
  description_id?: InputMaybe<Scalars['uuid']['input']>;
  facilities?: InputMaybe<Venue_Facility_Arr_Rel_Insert_Input>;
  gallery?: InputMaybe<Media_Gallery_Obj_Rel_Insert_Input>;
  gallery_id?: InputMaybe<Scalars['uuid']['input']>;
  good_to_know?: InputMaybe<Venue_Good_To_Know_Obj_Rel_Insert_Input>;
  good_to_know_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  place?: InputMaybe<Place_Obj_Rel_Insert_Input>;
  place_id?: InputMaybe<Scalars['uuid']['input']>;
  usps?: InputMaybe<Venue_Usps_Obj_Rel_Insert_Input>;
  usps_id?: InputMaybe<Scalars['uuid']['input']>;
};

export type Venue_Main_Save_Input = {
  description: Multilanguage_Field_Input;
  good_to_know: Multilanguage_Field_Input;
  id: Scalars['String']['input'];
  place?: InputMaybe<Place_Input>;
};

/** aggregate max on columns */
export type Venue_Max_Fields = {
  __typename?: 'venue_max_fields';
  description_id?: Maybe<Scalars['uuid']['output']>;
  gallery_id?: Maybe<Scalars['uuid']['output']>;
  good_to_know_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  organization_id?: Maybe<Scalars['uuid']['output']>;
  place_id?: Maybe<Scalars['uuid']['output']>;
  usps_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "venue" */
export type Venue_Max_Order_By = {
  description_id?: InputMaybe<Order_By>;
  gallery_id?: InputMaybe<Order_By>;
  good_to_know_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  place_id?: InputMaybe<Order_By>;
  usps_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Venue_Min_Fields = {
  __typename?: 'venue_min_fields';
  description_id?: Maybe<Scalars['uuid']['output']>;
  gallery_id?: Maybe<Scalars['uuid']['output']>;
  good_to_know_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  organization_id?: Maybe<Scalars['uuid']['output']>;
  place_id?: Maybe<Scalars['uuid']['output']>;
  usps_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "venue" */
export type Venue_Min_Order_By = {
  description_id?: InputMaybe<Order_By>;
  gallery_id?: InputMaybe<Order_By>;
  good_to_know_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  place_id?: InputMaybe<Order_By>;
  usps_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "venue" */
export type Venue_Mutation_Response = {
  __typename?: 'venue_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Venue>;
};

/** input type for inserting object relation for remote table "venue" */
export type Venue_Obj_Rel_Insert_Input = {
  data: Venue_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Venue_On_Conflict>;
};

/** on_conflict condition type for table "venue" */
export type Venue_On_Conflict = {
  constraint: Venue_Constraint;
  update_columns?: Array<Venue_Update_Column>;
  where?: InputMaybe<Venue_Bool_Exp>;
};

/** Ordering options when selecting data from "venue". */
export type Venue_Order_By = {
  description?: InputMaybe<Venue_Description_Order_By>;
  description_id?: InputMaybe<Order_By>;
  facilities_aggregate?: InputMaybe<Venue_Facility_Aggregate_Order_By>;
  gallery?: InputMaybe<Media_Gallery_Order_By>;
  gallery_id?: InputMaybe<Order_By>;
  good_to_know?: InputMaybe<Venue_Good_To_Know_Order_By>;
  good_to_know_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organization?: InputMaybe<Organization_Order_By>;
  organization_id?: InputMaybe<Order_By>;
  place?: InputMaybe<Place_Order_By>;
  place_id?: InputMaybe<Order_By>;
  usps?: InputMaybe<Venue_Usps_Order_By>;
  usps_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: venue */
export type Venue_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "venue" */
export enum Venue_Select_Column {
  /** column name */
  DescriptionId = 'description_id',
  /** column name */
  GalleryId = 'gallery_id',
  /** column name */
  GoodToKnowId = 'good_to_know_id',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  PlaceId = 'place_id',
  /** column name */
  UspsId = 'usps_id'
}

/** input type for updating data in table "venue" */
export type Venue_Set_Input = {
  description_id?: InputMaybe<Scalars['uuid']['input']>;
  gallery_id?: InputMaybe<Scalars['uuid']['input']>;
  good_to_know_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  place_id?: InputMaybe<Scalars['uuid']['input']>;
  usps_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "venue" */
export type Venue_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Venue_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Venue_Stream_Cursor_Value_Input = {
  description_id?: InputMaybe<Scalars['uuid']['input']>;
  gallery_id?: InputMaybe<Scalars['uuid']['input']>;
  good_to_know_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  place_id?: InputMaybe<Scalars['uuid']['input']>;
  usps_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "venue" */
export enum Venue_Update_Column {
  /** column name */
  DescriptionId = 'description_id',
  /** column name */
  GalleryId = 'gallery_id',
  /** column name */
  GoodToKnowId = 'good_to_know_id',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  PlaceId = 'place_id',
  /** column name */
  UspsId = 'usps_id'
}

export type Venue_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Venue_Set_Input>;
  /** filter the rows which have to be updated */
  where: Venue_Bool_Exp;
};

/** columns and relationships of "venue_usps" */
export type Venue_Usps = {
  __typename?: 'venue_usps';
  id: Scalars['uuid']['output'];
  /** An object relationship */
  image?: Maybe<Files>;
  image_id?: Maybe<Scalars['uuid']['output']>;
  /** An array relationship */
  lines: Array<Venue_Usps_Line>;
  /** An aggregate relationship */
  lines_aggregate: Venue_Usps_Line_Aggregate;
};


/** columns and relationships of "venue_usps" */
export type Venue_UspsLinesArgs = {
  distinct_on?: InputMaybe<Array<Venue_Usps_Line_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Usps_Line_Order_By>>;
  where?: InputMaybe<Venue_Usps_Line_Bool_Exp>;
};


/** columns and relationships of "venue_usps" */
export type Venue_UspsLines_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Venue_Usps_Line_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Venue_Usps_Line_Order_By>>;
  where?: InputMaybe<Venue_Usps_Line_Bool_Exp>;
};

/** aggregated selection of "venue_usps" */
export type Venue_Usps_Aggregate = {
  __typename?: 'venue_usps_aggregate';
  aggregate?: Maybe<Venue_Usps_Aggregate_Fields>;
  nodes: Array<Venue_Usps>;
};

/** aggregate fields of "venue_usps" */
export type Venue_Usps_Aggregate_Fields = {
  __typename?: 'venue_usps_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Venue_Usps_Max_Fields>;
  min?: Maybe<Venue_Usps_Min_Fields>;
};


/** aggregate fields of "venue_usps" */
export type Venue_Usps_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Venue_Usps_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "venue_usps". All fields are combined with a logical 'AND'. */
export type Venue_Usps_Bool_Exp = {
  _and?: InputMaybe<Array<Venue_Usps_Bool_Exp>>;
  _not?: InputMaybe<Venue_Usps_Bool_Exp>;
  _or?: InputMaybe<Array<Venue_Usps_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<Files_Bool_Exp>;
  image_id?: InputMaybe<Uuid_Comparison_Exp>;
  lines?: InputMaybe<Venue_Usps_Line_Bool_Exp>;
  lines_aggregate?: InputMaybe<Venue_Usps_Line_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "venue_usps" */
export enum Venue_Usps_Constraint {
  /** unique or primary key constraint on columns "id" */
  VenueUspsPkey = 'venue_usps_pkey'
}

/** input type for inserting data into table "venue_usps" */
export type Venue_Usps_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  image_id?: InputMaybe<Scalars['uuid']['input']>;
  lines?: InputMaybe<Venue_Usps_Line_Arr_Rel_Insert_Input>;
};

/** columns and relationships of "venue_usps_line" */
export type Venue_Usps_Line = {
  __typename?: 'venue_usps_line';
  /** An object relationship */
  headline?: Maybe<Translated_Text>;
  headline_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  name: Translated_Text;
  name_id: Scalars['uuid']['output'];
  position: Scalars['smallint']['output'];
  /** An object relationship */
  venue_usps: Venue_Usps;
  venue_usps_id: Scalars['uuid']['output'];
};

/** aggregated selection of "venue_usps_line" */
export type Venue_Usps_Line_Aggregate = {
  __typename?: 'venue_usps_line_aggregate';
  aggregate?: Maybe<Venue_Usps_Line_Aggregate_Fields>;
  nodes: Array<Venue_Usps_Line>;
};

export type Venue_Usps_Line_Aggregate_Bool_Exp = {
  count?: InputMaybe<Venue_Usps_Line_Aggregate_Bool_Exp_Count>;
};

export type Venue_Usps_Line_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Venue_Usps_Line_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Venue_Usps_Line_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "venue_usps_line" */
export type Venue_Usps_Line_Aggregate_Fields = {
  __typename?: 'venue_usps_line_aggregate_fields';
  avg?: Maybe<Venue_Usps_Line_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Venue_Usps_Line_Max_Fields>;
  min?: Maybe<Venue_Usps_Line_Min_Fields>;
  stddev?: Maybe<Venue_Usps_Line_Stddev_Fields>;
  stddev_pop?: Maybe<Venue_Usps_Line_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Venue_Usps_Line_Stddev_Samp_Fields>;
  sum?: Maybe<Venue_Usps_Line_Sum_Fields>;
  var_pop?: Maybe<Venue_Usps_Line_Var_Pop_Fields>;
  var_samp?: Maybe<Venue_Usps_Line_Var_Samp_Fields>;
  variance?: Maybe<Venue_Usps_Line_Variance_Fields>;
};


/** aggregate fields of "venue_usps_line" */
export type Venue_Usps_Line_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Venue_Usps_Line_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "venue_usps_line" */
export type Venue_Usps_Line_Aggregate_Order_By = {
  avg?: InputMaybe<Venue_Usps_Line_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Venue_Usps_Line_Max_Order_By>;
  min?: InputMaybe<Venue_Usps_Line_Min_Order_By>;
  stddev?: InputMaybe<Venue_Usps_Line_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Venue_Usps_Line_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Venue_Usps_Line_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Venue_Usps_Line_Sum_Order_By>;
  var_pop?: InputMaybe<Venue_Usps_Line_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Venue_Usps_Line_Var_Samp_Order_By>;
  variance?: InputMaybe<Venue_Usps_Line_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "venue_usps_line" */
export type Venue_Usps_Line_Arr_Rel_Insert_Input = {
  data: Array<Venue_Usps_Line_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Venue_Usps_Line_On_Conflict>;
};

/** aggregate avg on columns */
export type Venue_Usps_Line_Avg_Fields = {
  __typename?: 'venue_usps_line_avg_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "venue_usps_line" */
export type Venue_Usps_Line_Avg_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "venue_usps_line". All fields are combined with a logical 'AND'. */
export type Venue_Usps_Line_Bool_Exp = {
  _and?: InputMaybe<Array<Venue_Usps_Line_Bool_Exp>>;
  _not?: InputMaybe<Venue_Usps_Line_Bool_Exp>;
  _or?: InputMaybe<Array<Venue_Usps_Line_Bool_Exp>>;
  headline?: InputMaybe<Translated_Text_Bool_Exp>;
  headline_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<Translated_Text_Bool_Exp>;
  name_id?: InputMaybe<Uuid_Comparison_Exp>;
  position?: InputMaybe<Smallint_Comparison_Exp>;
  venue_usps?: InputMaybe<Venue_Usps_Bool_Exp>;
  venue_usps_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "venue_usps_line" */
export enum Venue_Usps_Line_Constraint {
  /** unique or primary key constraint on columns "id" */
  VenueUspsLinePkey = 'venue_usps_line_pkey'
}

/** input type for incrementing numeric columns in table "venue_usps_line" */
export type Venue_Usps_Line_Inc_Input = {
  position?: InputMaybe<Scalars['smallint']['input']>;
};

export type Venue_Usps_Line_Input = {
  headline: Multilanguage_Field_Input;
  name: Multilanguage_Field_Input;
};

/** input type for inserting data into table "venue_usps_line" */
export type Venue_Usps_Line_Insert_Input = {
  headline?: InputMaybe<Translated_Text_Obj_Rel_Insert_Input>;
  headline_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Translated_Text_Obj_Rel_Insert_Input>;
  name_id?: InputMaybe<Scalars['uuid']['input']>;
  position?: InputMaybe<Scalars['smallint']['input']>;
  venue_usps?: InputMaybe<Venue_Usps_Obj_Rel_Insert_Input>;
  venue_usps_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Venue_Usps_Line_Max_Fields = {
  __typename?: 'venue_usps_line_max_fields';
  headline_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name_id?: Maybe<Scalars['uuid']['output']>;
  position?: Maybe<Scalars['smallint']['output']>;
  venue_usps_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "venue_usps_line" */
export type Venue_Usps_Line_Max_Order_By = {
  headline_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  venue_usps_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Venue_Usps_Line_Min_Fields = {
  __typename?: 'venue_usps_line_min_fields';
  headline_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name_id?: Maybe<Scalars['uuid']['output']>;
  position?: Maybe<Scalars['smallint']['output']>;
  venue_usps_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "venue_usps_line" */
export type Venue_Usps_Line_Min_Order_By = {
  headline_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  venue_usps_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "venue_usps_line" */
export type Venue_Usps_Line_Mutation_Response = {
  __typename?: 'venue_usps_line_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Venue_Usps_Line>;
};

/** on_conflict condition type for table "venue_usps_line" */
export type Venue_Usps_Line_On_Conflict = {
  constraint: Venue_Usps_Line_Constraint;
  update_columns?: Array<Venue_Usps_Line_Update_Column>;
  where?: InputMaybe<Venue_Usps_Line_Bool_Exp>;
};

/** Ordering options when selecting data from "venue_usps_line". */
export type Venue_Usps_Line_Order_By = {
  headline?: InputMaybe<Translated_Text_Order_By>;
  headline_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Translated_Text_Order_By>;
  name_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  venue_usps?: InputMaybe<Venue_Usps_Order_By>;
  venue_usps_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: venue_usps_line */
export type Venue_Usps_Line_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "venue_usps_line" */
export enum Venue_Usps_Line_Select_Column {
  /** column name */
  HeadlineId = 'headline_id',
  /** column name */
  Id = 'id',
  /** column name */
  NameId = 'name_id',
  /** column name */
  Position = 'position',
  /** column name */
  VenueUspsId = 'venue_usps_id'
}

/** input type for updating data in table "venue_usps_line" */
export type Venue_Usps_Line_Set_Input = {
  headline_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name_id?: InputMaybe<Scalars['uuid']['input']>;
  position?: InputMaybe<Scalars['smallint']['input']>;
  venue_usps_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Venue_Usps_Line_Stddev_Fields = {
  __typename?: 'venue_usps_line_stddev_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "venue_usps_line" */
export type Venue_Usps_Line_Stddev_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Venue_Usps_Line_Stddev_Pop_Fields = {
  __typename?: 'venue_usps_line_stddev_pop_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "venue_usps_line" */
export type Venue_Usps_Line_Stddev_Pop_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Venue_Usps_Line_Stddev_Samp_Fields = {
  __typename?: 'venue_usps_line_stddev_samp_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "venue_usps_line" */
export type Venue_Usps_Line_Stddev_Samp_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "venue_usps_line" */
export type Venue_Usps_Line_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Venue_Usps_Line_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Venue_Usps_Line_Stream_Cursor_Value_Input = {
  headline_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name_id?: InputMaybe<Scalars['uuid']['input']>;
  position?: InputMaybe<Scalars['smallint']['input']>;
  venue_usps_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Venue_Usps_Line_Sum_Fields = {
  __typename?: 'venue_usps_line_sum_fields';
  position?: Maybe<Scalars['smallint']['output']>;
};

/** order by sum() on columns of table "venue_usps_line" */
export type Venue_Usps_Line_Sum_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** update columns of table "venue_usps_line" */
export enum Venue_Usps_Line_Update_Column {
  /** column name */
  HeadlineId = 'headline_id',
  /** column name */
  Id = 'id',
  /** column name */
  NameId = 'name_id',
  /** column name */
  Position = 'position',
  /** column name */
  VenueUspsId = 'venue_usps_id'
}

export type Venue_Usps_Line_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Venue_Usps_Line_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Venue_Usps_Line_Set_Input>;
  /** filter the rows which have to be updated */
  where: Venue_Usps_Line_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Venue_Usps_Line_Var_Pop_Fields = {
  __typename?: 'venue_usps_line_var_pop_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "venue_usps_line" */
export type Venue_Usps_Line_Var_Pop_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Venue_Usps_Line_Var_Samp_Fields = {
  __typename?: 'venue_usps_line_var_samp_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "venue_usps_line" */
export type Venue_Usps_Line_Var_Samp_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Venue_Usps_Line_Variance_Fields = {
  __typename?: 'venue_usps_line_variance_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "venue_usps_line" */
export type Venue_Usps_Line_Variance_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Venue_Usps_Max_Fields = {
  __typename?: 'venue_usps_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  image_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Venue_Usps_Min_Fields = {
  __typename?: 'venue_usps_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  image_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "venue_usps" */
export type Venue_Usps_Mutation_Response = {
  __typename?: 'venue_usps_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Venue_Usps>;
};

/** input type for inserting object relation for remote table "venue_usps" */
export type Venue_Usps_Obj_Rel_Insert_Input = {
  data: Venue_Usps_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Venue_Usps_On_Conflict>;
};

/** on_conflict condition type for table "venue_usps" */
export type Venue_Usps_On_Conflict = {
  constraint: Venue_Usps_Constraint;
  update_columns?: Array<Venue_Usps_Update_Column>;
  where?: InputMaybe<Venue_Usps_Bool_Exp>;
};

/** Ordering options when selecting data from "venue_usps". */
export type Venue_Usps_Order_By = {
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Files_Order_By>;
  image_id?: InputMaybe<Order_By>;
  lines_aggregate?: InputMaybe<Venue_Usps_Line_Aggregate_Order_By>;
};

/** primary key columns input for table: venue_usps */
export type Venue_Usps_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

export type Venue_Usps_Save_Input = {
  id: Scalars['uuid']['input'];
  image_id: Scalars['uuid']['input'];
  lines: Array<Venue_Usps_Line_Input>;
};

/** select columns of table "venue_usps" */
export enum Venue_Usps_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id'
}

/** input type for updating data in table "venue_usps" */
export type Venue_Usps_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "venue_usps" */
export type Venue_Usps_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Venue_Usps_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Venue_Usps_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "venue_usps" */
export enum Venue_Usps_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id'
}

export type Venue_Usps_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Venue_Usps_Set_Input>;
  /** filter the rows which have to be updated */
  where: Venue_Usps_Bool_Exp;
};

/** columns and relationships of "storage.virus" */
export type Virus = {
  __typename?: 'virus';
  createdAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  file: Files;
  fileId: Scalars['uuid']['output'];
  filename: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  updatedAt: Scalars['timestamptz']['output'];
  userSession: Scalars['jsonb']['output'];
  virus: Scalars['String']['output'];
};


/** columns and relationships of "storage.virus" */
export type VirusUserSessionArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "storage.virus" */
export type Virus_Aggregate = {
  __typename?: 'virus_aggregate';
  aggregate?: Maybe<Virus_Aggregate_Fields>;
  nodes: Array<Virus>;
};

/** aggregate fields of "storage.virus" */
export type Virus_Aggregate_Fields = {
  __typename?: 'virus_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Virus_Max_Fields>;
  min?: Maybe<Virus_Min_Fields>;
};


/** aggregate fields of "storage.virus" */
export type Virus_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Virus_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Virus_Append_Input = {
  userSession?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "storage.virus". All fields are combined with a logical 'AND'. */
export type Virus_Bool_Exp = {
  _and?: InputMaybe<Array<Virus_Bool_Exp>>;
  _not?: InputMaybe<Virus_Bool_Exp>;
  _or?: InputMaybe<Array<Virus_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  file?: InputMaybe<Files_Bool_Exp>;
  fileId?: InputMaybe<Uuid_Comparison_Exp>;
  filename?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userSession?: InputMaybe<Jsonb_Comparison_Exp>;
  virus?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.virus" */
export enum Virus_Constraint {
  /** unique or primary key constraint on columns "id" */
  VirusPkey = 'virus_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Virus_Delete_At_Path_Input = {
  userSession?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Virus_Delete_Elem_Input = {
  userSession?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Virus_Delete_Key_Input = {
  userSession?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "storage.virus" */
export type Virus_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  file?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userSession?: InputMaybe<Scalars['jsonb']['input']>;
  virus?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Virus_Max_Fields = {
  __typename?: 'virus_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  virus?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Virus_Min_Fields = {
  __typename?: 'virus_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  virus?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "storage.virus" */
export type Virus_Mutation_Response = {
  __typename?: 'virus_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Virus>;
};

/** on_conflict condition type for table "storage.virus" */
export type Virus_On_Conflict = {
  constraint: Virus_Constraint;
  update_columns?: Array<Virus_Update_Column>;
  where?: InputMaybe<Virus_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.virus". */
export type Virus_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  file?: InputMaybe<Files_Order_By>;
  fileId?: InputMaybe<Order_By>;
  filename?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userSession?: InputMaybe<Order_By>;
  virus?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.virus */
export type Virus_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Virus_Prepend_Input = {
  userSession?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "storage.virus" */
export enum Virus_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FileId = 'fileId',
  /** column name */
  Filename = 'filename',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserSession = 'userSession',
  /** column name */
  Virus = 'virus'
}

/** input type for updating data in table "storage.virus" */
export type Virus_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userSession?: InputMaybe<Scalars['jsonb']['input']>;
  virus?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "virus" */
export type Virus_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Virus_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Virus_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userSession?: InputMaybe<Scalars['jsonb']['input']>;
  virus?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "storage.virus" */
export enum Virus_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FileId = 'fileId',
  /** column name */
  Filename = 'filename',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserSession = 'userSession',
  /** column name */
  Virus = 'virus'
}

export type Virus_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Virus_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Virus_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Virus_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Virus_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Virus_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Virus_Set_Input>;
  /** filter the rows which have to be updated */
  where: Virus_Bool_Exp;
};
