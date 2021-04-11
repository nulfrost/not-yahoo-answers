import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Answer = {
  __typename?: 'Answer';
  id: Scalars['String'];
  answer: Scalars['String'];
  createdAt: Scalars['DateTime'];
  author: User;
  updatedAt: Scalars['DateTime'];
  question?: Maybe<Question>;
};

export type AnswerCreateInput = {
  id?: Maybe<Scalars['String']>;
  answer: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  author: UserCreateNestedOneWithoutAnswersInput;
  question?: Maybe<QuestionCreateNestedOneWithoutAnswersInput>;
};

export type AnswerCreateNestedManyWithoutAuthorInput = {
  create?: Maybe<Array<AnswerCreateWithoutAuthorInput>>;
  connectOrCreate?: Maybe<Array<AnswerCreateOrConnectWithoutAuthorInput>>;
  connect?: Maybe<Array<AnswerWhereUniqueInput>>;
};

export type AnswerCreateNestedManyWithoutQuestionInput = {
  create?: Maybe<Array<AnswerCreateWithoutQuestionInput>>;
  connectOrCreate?: Maybe<Array<AnswerCreateOrConnectWithoutQuestionInput>>;
  connect?: Maybe<Array<AnswerWhereUniqueInput>>;
};

export type AnswerCreateOrConnectWithoutAuthorInput = {
  where: AnswerWhereUniqueInput;
  create: AnswerCreateWithoutAuthorInput;
};

export type AnswerCreateOrConnectWithoutQuestionInput = {
  where: AnswerWhereUniqueInput;
  create: AnswerCreateWithoutQuestionInput;
};

export type AnswerCreateWithoutAuthorInput = {
  id?: Maybe<Scalars['String']>;
  answer: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  question?: Maybe<QuestionCreateNestedOneWithoutAnswersInput>;
};

export type AnswerCreateWithoutQuestionInput = {
  id?: Maybe<Scalars['String']>;
  answer: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  author: UserCreateNestedOneWithoutAnswersInput;
};

export type AnswerListRelationFilter = {
  every?: Maybe<AnswerWhereInput>;
  some?: Maybe<AnswerWhereInput>;
  none?: Maybe<AnswerWhereInput>;
};

export type AnswerScalarWhereInput = {
  AND?: Maybe<Array<AnswerScalarWhereInput>>;
  OR?: Maybe<Array<AnswerScalarWhereInput>>;
  NOT?: Maybe<Array<AnswerScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  answer?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  authorId?: Maybe<IntFilter>;
  questionId?: Maybe<StringNullableFilter>;
};

export type AnswerUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  answer?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  author?: Maybe<UserUpdateOneRequiredWithoutAnswersInput>;
  question?: Maybe<QuestionUpdateOneWithoutAnswersInput>;
};

export type AnswerUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  answer?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type AnswerUpdateManyWithWhereWithoutAuthorInput = {
  where: AnswerScalarWhereInput;
  data: AnswerUpdateManyMutationInput;
};

export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
  where: AnswerScalarWhereInput;
  data: AnswerUpdateManyMutationInput;
};

export type AnswerUpdateManyWithoutAuthorInput = {
  create?: Maybe<Array<AnswerCreateWithoutAuthorInput>>;
  connectOrCreate?: Maybe<Array<AnswerCreateOrConnectWithoutAuthorInput>>;
  upsert?: Maybe<Array<AnswerUpsertWithWhereUniqueWithoutAuthorInput>>;
  connect?: Maybe<Array<AnswerWhereUniqueInput>>;
  set?: Maybe<Array<AnswerWhereUniqueInput>>;
  disconnect?: Maybe<Array<AnswerWhereUniqueInput>>;
  delete?: Maybe<Array<AnswerWhereUniqueInput>>;
  update?: Maybe<Array<AnswerUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<AnswerUpdateManyWithWhereWithoutAuthorInput>>;
  deleteMany?: Maybe<Array<AnswerScalarWhereInput>>;
};

export type AnswerUpdateManyWithoutQuestionInput = {
  create?: Maybe<Array<AnswerCreateWithoutQuestionInput>>;
  connectOrCreate?: Maybe<Array<AnswerCreateOrConnectWithoutQuestionInput>>;
  upsert?: Maybe<Array<AnswerUpsertWithWhereUniqueWithoutQuestionInput>>;
  connect?: Maybe<Array<AnswerWhereUniqueInput>>;
  set?: Maybe<Array<AnswerWhereUniqueInput>>;
  disconnect?: Maybe<Array<AnswerWhereUniqueInput>>;
  delete?: Maybe<Array<AnswerWhereUniqueInput>>;
  update?: Maybe<Array<AnswerUpdateWithWhereUniqueWithoutQuestionInput>>;
  updateMany?: Maybe<Array<AnswerUpdateManyWithWhereWithoutQuestionInput>>;
  deleteMany?: Maybe<Array<AnswerScalarWhereInput>>;
};

export type AnswerUpdateWithWhereUniqueWithoutAuthorInput = {
  where: AnswerWhereUniqueInput;
  data: AnswerUpdateWithoutAuthorInput;
};

export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
  where: AnswerWhereUniqueInput;
  data: AnswerUpdateWithoutQuestionInput;
};

export type AnswerUpdateWithoutAuthorInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  answer?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  question?: Maybe<QuestionUpdateOneWithoutAnswersInput>;
};

export type AnswerUpdateWithoutQuestionInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  answer?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  author?: Maybe<UserUpdateOneRequiredWithoutAnswersInput>;
};

export type AnswerUpsertWithWhereUniqueWithoutAuthorInput = {
  where: AnswerWhereUniqueInput;
  update: AnswerUpdateWithoutAuthorInput;
  create: AnswerCreateWithoutAuthorInput;
};

export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
  where: AnswerWhereUniqueInput;
  update: AnswerUpdateWithoutQuestionInput;
  create: AnswerCreateWithoutQuestionInput;
};

export type AnswerWhereInput = {
  AND?: Maybe<Array<AnswerWhereInput>>;
  OR?: Maybe<Array<AnswerWhereInput>>;
  NOT?: Maybe<Array<AnswerWhereInput>>;
  id?: Maybe<StringFilter>;
  answer?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  author?: Maybe<UserWhereInput>;
  authorId?: Maybe<IntFilter>;
  question?: Maybe<QuestionWhereInput>;
  questionId?: Maybe<StringNullableFilter>;
};

export type AnswerWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['String'];
  name: Scalars['String'];
  questions: Array<Question>;
};


export type CategoryQuestionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<QuestionWhereUniqueInput>;
  after?: Maybe<QuestionWhereUniqueInput>;
};

export type CategoryCreateNestedOneWithoutQuestionsInput = {
  create?: Maybe<CategoryCreateWithoutQuestionsInput>;
  connectOrCreate?: Maybe<CategoryCreateOrConnectWithoutQuestionsInput>;
  connect?: Maybe<CategoryWhereUniqueInput>;
};

export type CategoryCreateOrConnectWithoutQuestionsInput = {
  where: CategoryWhereUniqueInput;
  create: CategoryCreateWithoutQuestionsInput;
};

export type CategoryCreateWithoutQuestionsInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CategoryUpdateOneWithoutQuestionsInput = {
  create?: Maybe<CategoryCreateWithoutQuestionsInput>;
  connectOrCreate?: Maybe<CategoryCreateOrConnectWithoutQuestionsInput>;
  upsert?: Maybe<CategoryUpsertWithoutQuestionsInput>;
  connect?: Maybe<CategoryWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CategoryUpdateWithoutQuestionsInput>;
};

export type CategoryUpdateWithoutQuestionsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CategoryUpsertWithoutQuestionsInput = {
  update: CategoryUpdateWithoutQuestionsInput;
  create: CategoryCreateWithoutQuestionsInput;
};

export type CategoryWhereInput = {
  AND?: Maybe<Array<CategoryWhereInput>>;
  OR?: Maybe<Array<CategoryWhereInput>>;
  NOT?: Maybe<Array<CategoryWhereInput>>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  questions?: Maybe<QuestionListRelationFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneQuestion: Question;
  deleteOneQuestion?: Maybe<Question>;
  updateOneQuestion?: Maybe<Question>;
  createOneAnswer: Answer;
  deleteOneAnswer?: Maybe<Answer>;
  updateOneAnswer?: Maybe<Answer>;
};


export type MutationCreateOneQuestionArgs = {
  data: QuestionCreateInput;
};


export type MutationDeleteOneQuestionArgs = {
  where: QuestionWhereUniqueInput;
};


export type MutationUpdateOneQuestionArgs = {
  data: QuestionUpdateInput;
  where: QuestionWhereUniqueInput;
};


export type MutationCreateOneAnswerArgs = {
  data: AnswerCreateInput;
};


export type MutationDeleteOneAnswerArgs = {
  where: AnswerWhereUniqueInput;
};


export type MutationUpdateOneAnswerArgs = {
  data: AnswerUpdateInput;
  where: AnswerWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  question?: Maybe<Question>;
  questions: Array<Question>;
  categories: Array<Category>;
  category?: Maybe<Category>;
};


export type QueryQuestionArgs = {
  where: QuestionWhereUniqueInput;
};


export type QueryQuestionsArgs = {
  where?: Maybe<QuestionWhereInput>;
  orderBy?: Maybe<Array<QuestionOrderByInput>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<QuestionWhereUniqueInput>;
  after?: Maybe<QuestionWhereUniqueInput>;
};


export type QueryCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<CategoryWhereUniqueInput>;
  after?: Maybe<CategoryWhereUniqueInput>;
};


export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Question = {
  __typename?: 'Question';
  id: Scalars['String'];
  title: Scalars['String'];
  question: Scalars['String'];
  answers: Array<Answer>;
  Category?: Maybe<Category>;
  createdAt: Scalars['DateTime'];
};


export type QuestionAnswersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<AnswerWhereUniqueInput>;
  after?: Maybe<AnswerWhereUniqueInput>;
};

export type QuestionCreateInput = {
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  question: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  author: UserCreateNestedOneWithoutQuestionInput;
  answers?: Maybe<AnswerCreateNestedManyWithoutQuestionInput>;
  Category?: Maybe<CategoryCreateNestedOneWithoutQuestionsInput>;
  upvote: UserCreateNestedOneWithoutQuestionsInput;
};

export type QuestionCreateNestedManyWithoutAuthorInput = {
  create?: Maybe<Array<QuestionCreateWithoutAuthorInput>>;
  connectOrCreate?: Maybe<Array<QuestionCreateOrConnectWithoutAuthorInput>>;
  connect?: Maybe<Array<QuestionWhereUniqueInput>>;
};

export type QuestionCreateNestedManyWithoutUpvoteInput = {
  create?: Maybe<Array<QuestionCreateWithoutUpvoteInput>>;
  connectOrCreate?: Maybe<Array<QuestionCreateOrConnectWithoutUpvoteInput>>;
  connect?: Maybe<Array<QuestionWhereUniqueInput>>;
};

export type QuestionCreateNestedOneWithoutAnswersInput = {
  create?: Maybe<QuestionCreateWithoutAnswersInput>;
  connectOrCreate?: Maybe<QuestionCreateOrConnectWithoutAnswersInput>;
  connect?: Maybe<QuestionWhereUniqueInput>;
};

export type QuestionCreateOrConnectWithoutAnswersInput = {
  where: QuestionWhereUniqueInput;
  create: QuestionCreateWithoutAnswersInput;
};

export type QuestionCreateOrConnectWithoutAuthorInput = {
  where: QuestionWhereUniqueInput;
  create: QuestionCreateWithoutAuthorInput;
};

export type QuestionCreateOrConnectWithoutUpvoteInput = {
  where: QuestionWhereUniqueInput;
  create: QuestionCreateWithoutUpvoteInput;
};

export type QuestionCreateWithoutAnswersInput = {
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  question: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  author: UserCreateNestedOneWithoutQuestionInput;
  Category?: Maybe<CategoryCreateNestedOneWithoutQuestionsInput>;
  upvote: UserCreateNestedOneWithoutQuestionsInput;
};

export type QuestionCreateWithoutAuthorInput = {
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  question: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  answers?: Maybe<AnswerCreateNestedManyWithoutQuestionInput>;
  Category?: Maybe<CategoryCreateNestedOneWithoutQuestionsInput>;
  upvote: UserCreateNestedOneWithoutQuestionsInput;
};

export type QuestionCreateWithoutUpvoteInput = {
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  question: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  author: UserCreateNestedOneWithoutQuestionInput;
  answers?: Maybe<AnswerCreateNestedManyWithoutQuestionInput>;
  Category?: Maybe<CategoryCreateNestedOneWithoutQuestionsInput>;
};

export type QuestionListRelationFilter = {
  every?: Maybe<QuestionWhereInput>;
  some?: Maybe<QuestionWhereInput>;
  none?: Maybe<QuestionWhereInput>;
};

export type QuestionOrderByInput = {
  id?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  question?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  authorId?: Maybe<SortOrder>;
  categoryId?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type QuestionScalarWhereInput = {
  AND?: Maybe<Array<QuestionScalarWhereInput>>;
  OR?: Maybe<Array<QuestionScalarWhereInput>>;
  NOT?: Maybe<Array<QuestionScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  question?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  authorId?: Maybe<IntFilter>;
  categoryId?: Maybe<StringNullableFilter>;
  userId?: Maybe<IntFilter>;
};

export type QuestionUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  question?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  author?: Maybe<UserUpdateOneRequiredWithoutQuestionInput>;
  answers?: Maybe<AnswerUpdateManyWithoutQuestionInput>;
  Category?: Maybe<CategoryUpdateOneWithoutQuestionsInput>;
  upvote?: Maybe<UserUpdateOneRequiredWithoutQuestionsInput>;
};

export type QuestionUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  question?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type QuestionUpdateManyWithWhereWithoutAuthorInput = {
  where: QuestionScalarWhereInput;
  data: QuestionUpdateManyMutationInput;
};

export type QuestionUpdateManyWithWhereWithoutUpvoteInput = {
  where: QuestionScalarWhereInput;
  data: QuestionUpdateManyMutationInput;
};

export type QuestionUpdateManyWithoutAuthorInput = {
  create?: Maybe<Array<QuestionCreateWithoutAuthorInput>>;
  connectOrCreate?: Maybe<Array<QuestionCreateOrConnectWithoutAuthorInput>>;
  upsert?: Maybe<Array<QuestionUpsertWithWhereUniqueWithoutAuthorInput>>;
  connect?: Maybe<Array<QuestionWhereUniqueInput>>;
  set?: Maybe<Array<QuestionWhereUniqueInput>>;
  disconnect?: Maybe<Array<QuestionWhereUniqueInput>>;
  delete?: Maybe<Array<QuestionWhereUniqueInput>>;
  update?: Maybe<Array<QuestionUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<QuestionUpdateManyWithWhereWithoutAuthorInput>>;
  deleteMany?: Maybe<Array<QuestionScalarWhereInput>>;
};

export type QuestionUpdateManyWithoutUpvoteInput = {
  create?: Maybe<Array<QuestionCreateWithoutUpvoteInput>>;
  connectOrCreate?: Maybe<Array<QuestionCreateOrConnectWithoutUpvoteInput>>;
  upsert?: Maybe<Array<QuestionUpsertWithWhereUniqueWithoutUpvoteInput>>;
  connect?: Maybe<Array<QuestionWhereUniqueInput>>;
  set?: Maybe<Array<QuestionWhereUniqueInput>>;
  disconnect?: Maybe<Array<QuestionWhereUniqueInput>>;
  delete?: Maybe<Array<QuestionWhereUniqueInput>>;
  update?: Maybe<Array<QuestionUpdateWithWhereUniqueWithoutUpvoteInput>>;
  updateMany?: Maybe<Array<QuestionUpdateManyWithWhereWithoutUpvoteInput>>;
  deleteMany?: Maybe<Array<QuestionScalarWhereInput>>;
};

export type QuestionUpdateOneWithoutAnswersInput = {
  create?: Maybe<QuestionCreateWithoutAnswersInput>;
  connectOrCreate?: Maybe<QuestionCreateOrConnectWithoutAnswersInput>;
  upsert?: Maybe<QuestionUpsertWithoutAnswersInput>;
  connect?: Maybe<QuestionWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<QuestionUpdateWithoutAnswersInput>;
};

export type QuestionUpdateWithWhereUniqueWithoutAuthorInput = {
  where: QuestionWhereUniqueInput;
  data: QuestionUpdateWithoutAuthorInput;
};

export type QuestionUpdateWithWhereUniqueWithoutUpvoteInput = {
  where: QuestionWhereUniqueInput;
  data: QuestionUpdateWithoutUpvoteInput;
};

export type QuestionUpdateWithoutAnswersInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  question?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  author?: Maybe<UserUpdateOneRequiredWithoutQuestionInput>;
  Category?: Maybe<CategoryUpdateOneWithoutQuestionsInput>;
  upvote?: Maybe<UserUpdateOneRequiredWithoutQuestionsInput>;
};

export type QuestionUpdateWithoutAuthorInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  question?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  answers?: Maybe<AnswerUpdateManyWithoutQuestionInput>;
  Category?: Maybe<CategoryUpdateOneWithoutQuestionsInput>;
  upvote?: Maybe<UserUpdateOneRequiredWithoutQuestionsInput>;
};

export type QuestionUpdateWithoutUpvoteInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  question?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  author?: Maybe<UserUpdateOneRequiredWithoutQuestionInput>;
  answers?: Maybe<AnswerUpdateManyWithoutQuestionInput>;
  Category?: Maybe<CategoryUpdateOneWithoutQuestionsInput>;
};

export type QuestionUpsertWithWhereUniqueWithoutAuthorInput = {
  where: QuestionWhereUniqueInput;
  update: QuestionUpdateWithoutAuthorInput;
  create: QuestionCreateWithoutAuthorInput;
};

export type QuestionUpsertWithWhereUniqueWithoutUpvoteInput = {
  where: QuestionWhereUniqueInput;
  update: QuestionUpdateWithoutUpvoteInput;
  create: QuestionCreateWithoutUpvoteInput;
};

export type QuestionUpsertWithoutAnswersInput = {
  update: QuestionUpdateWithoutAnswersInput;
  create: QuestionCreateWithoutAnswersInput;
};

export type QuestionWhereInput = {
  AND?: Maybe<Array<QuestionWhereInput>>;
  OR?: Maybe<Array<QuestionWhereInput>>;
  NOT?: Maybe<Array<QuestionWhereInput>>;
  id?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  question?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  author?: Maybe<UserWhereInput>;
  authorId?: Maybe<IntFilter>;
  answers?: Maybe<AnswerListRelationFilter>;
  Category?: Maybe<CategoryWhereInput>;
  categoryId?: Maybe<StringNullableFilter>;
  upvote?: Maybe<UserWhereInput>;
  userId?: Maybe<IntFilter>;
};

export type QuestionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
};

export type UserCreateNestedOneWithoutAnswersInput = {
  create?: Maybe<UserCreateWithoutAnswersInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutAnswersInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutQuestionInput = {
  create?: Maybe<UserCreateWithoutQuestionInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutQuestionInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutQuestionsInput = {
  create?: Maybe<UserCreateWithoutQuestionsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutQuestionsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOrConnectWithoutAnswersInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutAnswersInput;
};

export type UserCreateOrConnectWithoutQuestionInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutQuestionInput;
};

export type UserCreateOrConnectWithoutQuestionsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutQuestionsInput;
};

export type UserCreateWithoutAnswersInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  image?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Questions?: Maybe<QuestionCreateNestedManyWithoutUpvoteInput>;
  Question?: Maybe<QuestionCreateNestedManyWithoutAuthorInput>;
};

export type UserCreateWithoutQuestionInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  image?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Questions?: Maybe<QuestionCreateNestedManyWithoutUpvoteInput>;
  Answers?: Maybe<AnswerCreateNestedManyWithoutAuthorInput>;
};

export type UserCreateWithoutQuestionsInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  image?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Answers?: Maybe<AnswerCreateNestedManyWithoutAuthorInput>;
  Question?: Maybe<QuestionCreateNestedManyWithoutAuthorInput>;
};

export type UserUpdateOneRequiredWithoutAnswersInput = {
  create?: Maybe<UserCreateWithoutAnswersInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutAnswersInput>;
  upsert?: Maybe<UserUpsertWithoutAnswersInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutAnswersInput>;
};

export type UserUpdateOneRequiredWithoutQuestionInput = {
  create?: Maybe<UserCreateWithoutQuestionInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutQuestionInput>;
  upsert?: Maybe<UserUpsertWithoutQuestionInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutQuestionInput>;
};

export type UserUpdateOneRequiredWithoutQuestionsInput = {
  create?: Maybe<UserCreateWithoutQuestionsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutQuestionsInput>;
  upsert?: Maybe<UserUpsertWithoutQuestionsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutQuestionsInput>;
};

export type UserUpdateWithoutAnswersInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Questions?: Maybe<QuestionUpdateManyWithoutUpvoteInput>;
  Question?: Maybe<QuestionUpdateManyWithoutAuthorInput>;
};

export type UserUpdateWithoutQuestionInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Questions?: Maybe<QuestionUpdateManyWithoutUpvoteInput>;
  Answers?: Maybe<AnswerUpdateManyWithoutAuthorInput>;
};

export type UserUpdateWithoutQuestionsInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Answers?: Maybe<AnswerUpdateManyWithoutAuthorInput>;
  Question?: Maybe<QuestionUpdateManyWithoutAuthorInput>;
};

export type UserUpsertWithoutAnswersInput = {
  update: UserUpdateWithoutAnswersInput;
  create: UserCreateWithoutAnswersInput;
};

export type UserUpsertWithoutQuestionInput = {
  update: UserUpdateWithoutQuestionInput;
  create: UserCreateWithoutQuestionInput;
};

export type UserUpsertWithoutQuestionsInput = {
  update: UserUpdateWithoutQuestionsInput;
  create: UserCreateWithoutQuestionsInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringNullableFilter>;
  email?: Maybe<StringNullableFilter>;
  emailVerified?: Maybe<DateTimeNullableFilter>;
  image?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  Questions?: Maybe<QuestionListRelationFilter>;
  Answers?: Maybe<AnswerListRelationFilter>;
  Question?: Maybe<QuestionListRelationFilter>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
};

export type CategoryWithQuestionsQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoryWithQuestionsQuery = (
  { __typename?: 'Query' }
  & { categories: Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id'>
    & { questions: Array<(
      { __typename?: 'Question' }
      & Pick<Question, 'id' | 'title'>
    )> }
  )> }
);

export type QuestionsQueryVariables = Exact<{ [key: string]: never; }>;


export type QuestionsQuery = (
  { __typename?: 'Query' }
  & { questions: Array<(
    { __typename?: 'Question' }
    & Pick<Question, 'id' | 'title'>
  )> }
);


export const CategoryWithQuestionsDocument = gql`
    query CategoryWithQuestions {
  categories {
    id
    questions {
      id
      title
    }
  }
}
    `;

/**
 * __useCategoryWithQuestionsQuery__
 *
 * To run a query within a React component, call `useCategoryWithQuestionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryWithQuestionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryWithQuestionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoryWithQuestionsQuery(baseOptions?: Apollo.QueryHookOptions<CategoryWithQuestionsQuery, CategoryWithQuestionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryWithQuestionsQuery, CategoryWithQuestionsQueryVariables>(CategoryWithQuestionsDocument, options);
      }
export function useCategoryWithQuestionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryWithQuestionsQuery, CategoryWithQuestionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryWithQuestionsQuery, CategoryWithQuestionsQueryVariables>(CategoryWithQuestionsDocument, options);
        }
export type CategoryWithQuestionsQueryHookResult = ReturnType<typeof useCategoryWithQuestionsQuery>;
export type CategoryWithQuestionsLazyQueryHookResult = ReturnType<typeof useCategoryWithQuestionsLazyQuery>;
export type CategoryWithQuestionsQueryResult = Apollo.QueryResult<CategoryWithQuestionsQuery, CategoryWithQuestionsQueryVariables>;
export const QuestionsDocument = gql`
    query Questions {
  questions {
    id
    title
  }
}
    `;

/**
 * __useQuestionsQuery__
 *
 * To run a query within a React component, call `useQuestionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuestionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuestionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useQuestionsQuery(baseOptions?: Apollo.QueryHookOptions<QuestionsQuery, QuestionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QuestionsQuery, QuestionsQueryVariables>(QuestionsDocument, options);
      }
export function useQuestionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuestionsQuery, QuestionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QuestionsQuery, QuestionsQueryVariables>(QuestionsDocument, options);
        }
export type QuestionsQueryHookResult = ReturnType<typeof useQuestionsQuery>;
export type QuestionsLazyQueryHookResult = ReturnType<typeof useQuestionsLazyQuery>;
export type QuestionsQueryResult = Apollo.QueryResult<QuestionsQuery, QuestionsQueryVariables>;