import * as Typegen from 'nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
    first?: boolean
    last?: boolean
    before?: boolean
    after?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'DateTime'

// Prisma model type definitions
interface PrismaModels {
  Account: Prisma.Account
  Session: Prisma.Session
  User: Prisma.User
  VerificationRequest: Prisma.VerificationRequest
  Question: Prisma.Question
  Answer: Prisma.Answer
  Category: Prisma.Category
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    accounts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'compoundId' | 'userId' | 'providerType' | 'providerId' | 'providerAccountId' | 'refreshToken' | 'accessToken' | 'accessTokenExpires' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'compoundId' | 'userId' | 'providerType' | 'providerId' | 'providerAccountId' | 'refreshToken' | 'accessToken' | 'accessTokenExpires' | 'createdAt' | 'updatedAt'
    }
    sessions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'userId' | 'expires' | 'sessionToken' | 'accessToken' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'userId' | 'expires' | 'sessionToken' | 'accessToken' | 'createdAt' | 'updatedAt'
    }
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'email' | 'emailVerified' | 'image' | 'createdAt' | 'updatedAt' | 'questions' | 'answers'
      ordering: 'id' | 'name' | 'email' | 'emailVerified' | 'image' | 'createdAt' | 'updatedAt'
    }
    verificationRequests: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'identifier' | 'token' | 'expires' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'identifier' | 'token' | 'expires' | 'createdAt' | 'updatedAt'
    }
    questions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'question' | 'createdAt' | 'updatedAt' | 'author' | 'authorId' | 'answers' | 'category' | 'categoryName'
      ordering: 'id' | 'title' | 'question' | 'createdAt' | 'updatedAt' | 'authorId' | 'categoryName'
    }
    answers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'answer' | 'createdAt' | 'updatedAt' | 'author' | 'authorId' | 'question' | 'questionId'
      ordering: 'id' | 'answer' | 'createdAt' | 'updatedAt' | 'authorId' | 'questionId'
    }
    categories: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'questions'
      ordering: 'id' | 'name'
    }
  },
  Account: {

  }
  Session: {

  }
  User: {
    questions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'question' | 'createdAt' | 'updatedAt' | 'author' | 'authorId' | 'answers' | 'category' | 'categoryName'
      ordering: 'id' | 'title' | 'question' | 'createdAt' | 'updatedAt' | 'authorId' | 'categoryName'
    }
    answers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'answer' | 'createdAt' | 'updatedAt' | 'author' | 'authorId' | 'question' | 'questionId'
      ordering: 'id' | 'answer' | 'createdAt' | 'updatedAt' | 'authorId' | 'questionId'
    }
  }
  VerificationRequest: {

  }
  Question: {
    answers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'answer' | 'createdAt' | 'updatedAt' | 'author' | 'authorId' | 'question' | 'questionId'
      ordering: 'id' | 'answer' | 'createdAt' | 'updatedAt' | 'authorId' | 'questionId'
    }
  }
  Answer: {

  }
  Category: {
    questions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'question' | 'createdAt' | 'updatedAt' | 'author' | 'authorId' | 'answers' | 'category' | 'categoryName'
      ordering: 'id' | 'title' | 'question' | 'createdAt' | 'updatedAt' | 'authorId' | 'categoryName'
    }
  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    account: 'Account'
    accounts: 'Account'
    session: 'Session'
    sessions: 'Session'
    user: 'User'
    users: 'User'
    verificationRequest: 'VerificationRequest'
    verificationRequests: 'VerificationRequest'
    question: 'Question'
    questions: 'Question'
    answer: 'Answer'
    answers: 'Answer'
    category: 'Category'
    categories: 'Category'
  },
  Mutation: {
    createOneAccount: 'Account'
    updateOneAccount: 'Account'
    updateManyAccount: 'AffectedRowsOutput'
    deleteOneAccount: 'Account'
    deleteManyAccount: 'AffectedRowsOutput'
    upsertOneAccount: 'Account'
    createOneSession: 'Session'
    updateOneSession: 'Session'
    updateManySession: 'AffectedRowsOutput'
    deleteOneSession: 'Session'
    deleteManySession: 'AffectedRowsOutput'
    upsertOneSession: 'Session'
    createOneUser: 'User'
    updateOneUser: 'User'
    updateManyUser: 'AffectedRowsOutput'
    deleteOneUser: 'User'
    deleteManyUser: 'AffectedRowsOutput'
    upsertOneUser: 'User'
    createOneVerificationRequest: 'VerificationRequest'
    updateOneVerificationRequest: 'VerificationRequest'
    updateManyVerificationRequest: 'AffectedRowsOutput'
    deleteOneVerificationRequest: 'VerificationRequest'
    deleteManyVerificationRequest: 'AffectedRowsOutput'
    upsertOneVerificationRequest: 'VerificationRequest'
    createOneQuestion: 'Question'
    updateOneQuestion: 'Question'
    updateManyQuestion: 'AffectedRowsOutput'
    deleteOneQuestion: 'Question'
    deleteManyQuestion: 'AffectedRowsOutput'
    upsertOneQuestion: 'Question'
    createOneAnswer: 'Answer'
    updateOneAnswer: 'Answer'
    updateManyAnswer: 'AffectedRowsOutput'
    deleteOneAnswer: 'Answer'
    deleteManyAnswer: 'AffectedRowsOutput'
    upsertOneAnswer: 'Answer'
    createOneCategory: 'Category'
    updateOneCategory: 'Category'
    updateManyCategory: 'AffectedRowsOutput'
    deleteOneCategory: 'Category'
    deleteManyCategory: 'AffectedRowsOutput'
    upsertOneCategory: 'Category'
  },
  Account: {
    id: 'Int'
    compoundId: 'String'
    userId: 'Int'
    providerType: 'String'
    providerId: 'String'
    providerAccountId: 'String'
    refreshToken: 'String'
    accessToken: 'String'
    accessTokenExpires: 'DateTime'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
  Session: {
    id: 'Int'
    userId: 'Int'
    expires: 'DateTime'
    sessionToken: 'String'
    accessToken: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
  User: {
    id: 'Int'
    name: 'String'
    email: 'String'
    emailVerified: 'DateTime'
    image: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    questions: 'Question'
    answers: 'Answer'
  }
  VerificationRequest: {
    id: 'Int'
    identifier: 'String'
    token: 'String'
    expires: 'DateTime'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
  Question: {
    id: 'String'
    title: 'String'
    question: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    author: 'User'
    authorId: 'Int'
    answers: 'Answer'
    category: 'Category'
    categoryName: 'String'
  }
  Answer: {
    id: 'String'
    answer: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    author: 'User'
    authorId: 'Int'
    question: 'Question'
    questionId: 'String'
  }
  Category: {
    id: 'String'
    name: 'String'
    questions: 'Question'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  Account: Typegen.NexusPrismaFields<'Account'>
  Session: Typegen.NexusPrismaFields<'Session'>
  User: Typegen.NexusPrismaFields<'User'>
  VerificationRequest: Typegen.NexusPrismaFields<'VerificationRequest'>
  Question: Typegen.NexusPrismaFields<'Question'>
  Answer: Typegen.NexusPrismaFields<'Answer'>
  Category: Typegen.NexusPrismaFields<'Category'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  