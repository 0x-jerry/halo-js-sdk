export interface ArchiveMonthVO {
  month: number;
  posts: Array<PostListVO>;
  year: number;
}

export interface ArchiveYearVO {
  posts: Array<PostListVO>;
  year: number;
}

export interface Author {
  avatar: string;
  name: string;
  website: string;
}

export interface BaseCommentDTO {
  allowNotification: boolean;
  author: string;
  authorUrl: string;
  content: string;
  createTime: string;
  email: string;
  gravatarMd5: string;
  id: number;
  ipAddress: string;
  isAdmin: boolean;
  parentId: number;
  status: "AUDITING" | "PUBLISHED" | "RECYCLE";
  userAgent: string;
}

export interface BaseCommentVO {
  allowNotification: boolean;
  author: string;
  authorUrl: string;
  children: Array<BaseCommentVO>;
  content: string;
  createTime: string;
  email: string;
  gravatarMd5: string;
  id: number;
  ipAddress: string;
  isAdmin: boolean;
  parentId: number;
  status: "AUDITING" | "PUBLISHED" | "RECYCLE";
  userAgent: string;
}

export interface BaseCommentWithParentVO {
  allowNotification: boolean;
  author: string;
  authorUrl: string;
  content: string;
  createTime: string;
  email: string;
  gravatarMd5: string;
  id: number;
  ipAddress: string;
  isAdmin: boolean;
  parent: BaseCommentWithParentVO;
  parentId: number;
  status: "AUDITING" | "PUBLISHED" | "RECYCLE";
  userAgent: string;
}

export interface BaseMetaDTO {
  createTime: string;
  id: number;
  key: string;
  postId: number;
  value: string;
}

export interface BasePostSimpleDTO {
  createTime: string;
  disallowComment: boolean;
  editTime: string;
  editorType: "MARKDOWN" | "RICHTEXT";
  fullPath: string;
  id: number;
  likes: number;
  metaDescription: string;
  metaKeywords: string;
  password: string;
  slug: string;
  status: "DRAFT" | "INTIMATE" | "PUBLISHED" | "RECYCLE";
  summary: string;
  template: string;
  thumbnail: string;
  title: string;
  topPriority: number;
  topped: boolean;
  updateTime: string;
  visits: number;
  wordCount: number;
}

export interface BaseResponseobject {
  data: any;
  devMessage: string;
  message: string;
  status: number;
}

export interface CategoryDTO {
  createTime: string;
  description: string;
  fullPath: string;
  id: number;
  name: string;
  parentId: number;
  slug: string;
  thumbnail: string;
}

export interface CommentWithHasChildrenVO {
  allowNotification: boolean;
  author: string;
  authorUrl: string;
  content: string;
  createTime: string;
  email: string;
  gravatarMd5: string;
  hasChildren: boolean;
  id: number;
  ipAddress: string;
  isAdmin: boolean;
  parentId: number;
  status: "AUDITING" | "PUBLISHED" | "RECYCLE";
  userAgent: string;
}

export interface JournalCommentParam {
  allowNotification: boolean;
  author: string;
  authorUrl: string;
  content: string;
  email: string;
  parentId: number;
  postId: number;
}

export interface JournalDTO {
  content: string;
  createTime: string;
  id: number;
  likes: number;
  sourceContent: string;
  type: "INTIMATE" | "PUBLIC";
}

export interface JournalWithCmtCountDTO {
  commentCount: number;
  content: string;
  createTime: string;
  id: number;
  likes: number;
  sourceContent: string;
  type: "INTIMATE" | "PUBLIC";
}

export interface LinkDTO {
  description: string;
  id: number;
  logo: string;
  name: string;
  priority: number;
  team: string;
  url: string;
}

export interface LinkTeamVO {
  links: Array<LinkDTO>;
  team: string;
}

export interface MenuDTO {
  icon: string;
  id: number;
  name: string;
  parentId: number;
  priority: number;
  target: string;
  team: string;
  url: string;
}

export interface MenuVO {
  children: Array<MenuVO>;
  icon: string;
  id: number;
  name: string;
  parentId: number;
  priority: number;
  target: string;
  team: string;
  url: string;
}

export interface OptionDTO {
  key: string;
  value: any;
}

export interface Pageable {
  page: number;
  size: number;
  sort: Array<string>;
}

export interface PageBaseCommentVO {
  content: Array<BaseCommentVO>;
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: Pageable;
  size: number;
  sort: Sort;
  totalElements: number;
  totalPages: number;
}

export interface PageBaseCommentWithParentVO {
  content: Array<BaseCommentWithParentVO>;
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: Pageable;
  size: number;
  sort: Sort;
  totalElements: number;
  totalPages: number;
}

export interface PageBasePostSimpleDTO {
  content: Array<BasePostSimpleDTO>;
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: Pageable;
  size: number;
  sort: Sort;
  totalElements: number;
  totalPages: number;
}

export interface PageCommentWithHasChildrenVO {
  content: Array<CommentWithHasChildrenVO>;
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: Pageable;
  size: number;
  sort: Sort;
  totalElements: number;
  totalPages: number;
}

export interface PageJournalWithCmtCountDTO {
  content: Array<JournalWithCmtCountDTO>;
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: Pageable;
  size: number;
  sort: Sort;
  totalElements: number;
  totalPages: number;
}

export interface PagePhotoDTO {
  content: Array<PhotoDTO>;
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: Pageable;
  size: number;
  sort: Sort;
  totalElements: number;
  totalPages: number;
}

export interface PagePostListVO {
  content: Array<PostListVO>;
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: Pageable;
  size: number;
  sort: Sort;
  totalElements: number;
  totalPages: number;
}

export interface PageSheetListVO {
  content: Array<SheetListVO>;
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: Pageable;
  size: number;
  sort: Sort;
  totalElements: number;
  totalPages: number;
}

export interface PhotoDTO {
  description: string;
  id: number;
  location: string;
  name: string;
  takeTime: string;
  team: string;
  thumbnail: string;
  url: string;
}

export interface PostCommentParam {
  allowNotification: boolean;
  author: string;
  authorUrl: string;
  content: string;
  email: string;
  parentId: number;
  postId: number;
}

export interface PostDetailVO {
  categories: Array<CategoryDTO>;
  categoryIds: Array<number>;
  commentCount: number;
  createTime: string;
  disallowComment: boolean;
  editTime: string;
  editorType: "MARKDOWN" | "RICHTEXT";
  formatContent: string;
  fullPath: string;
  id: number;
  likes: number;
  metaDescription: string;
  metaIds: Array<number>;
  metaKeywords: string;
  metas: Array<BaseMetaDTO>;
  originalContent: string;
  password: string;
  slug: string;
  status: "DRAFT" | "INTIMATE" | "PUBLISHED" | "RECYCLE";
  summary: string;
  tagIds: Array<number>;
  tags: Array<TagDTO>;
  template: string;
  thumbnail: string;
  title: string;
  topPriority: number;
  topped: boolean;
  updateTime: string;
  visits: number;
  wordCount: number;
}

export interface PostListVO {
  categories: Array<CategoryDTO>;
  commentCount: number;
  createTime: string;
  disallowComment: boolean;
  editTime: string;
  editorType: "MARKDOWN" | "RICHTEXT";
  fullPath: string;
  id: number;
  likes: number;
  metaDescription: string;
  metaKeywords: string;
  metas: any;
  password: string;
  slug: string;
  status: "DRAFT" | "INTIMATE" | "PUBLISHED" | "RECYCLE";
  summary: string;
  tags: Array<TagDTO>;
  template: string;
  thumbnail: string;
  title: string;
  topPriority: number;
  topped: boolean;
  updateTime: string;
  visits: number;
  wordCount: number;
}

export interface SheetCommentParam {
  allowNotification: boolean;
  author: string;
  authorUrl: string;
  content: string;
  email: string;
  parentId: number;
  postId: number;
}

export interface SheetDetailVO {
  commentCount: number;
  createTime: string;
  disallowComment: boolean;
  editTime: string;
  editorType: "MARKDOWN" | "RICHTEXT";
  formatContent: string;
  fullPath: string;
  id: number;
  likes: number;
  metaDescription: string;
  metaIds: Array<number>;
  metaKeywords: string;
  metas: Array<BaseMetaDTO>;
  originalContent: string;
  password: string;
  slug: string;
  status: "DRAFT" | "INTIMATE" | "PUBLISHED" | "RECYCLE";
  summary: string;
  template: string;
  thumbnail: string;
  title: string;
  topPriority: number;
  topped: boolean;
  updateTime: string;
  visits: number;
  wordCount: number;
}

export interface SheetListVO {
  commentCount: number;
  createTime: string;
  disallowComment: boolean;
  editTime: string;
  editorType: "MARKDOWN" | "RICHTEXT";
  fullPath: string;
  id: number;
  likes: number;
  metaDescription: string;
  metaKeywords: string;
  password: string;
  slug: string;
  status: "DRAFT" | "INTIMATE" | "PUBLISHED" | "RECYCLE";
  summary: string;
  template: string;
  thumbnail: string;
  title: string;
  topPriority: number;
  topped: boolean;
  updateTime: string;
  visits: number;
  wordCount: number;
}

export interface Sort {
  sort: Array<string>;
}

export interface StatisticDTO {
  attachmentCount: number;
  birthday: number;
  categoryCount: number;
  commentCount: number;
  establishDays: number;
  journalCount: number;
  likeCount: number;
  linkCount: number;
  postCount: number;
  tagCount: number;
  visitCount: number;
}

export interface StatisticWithUserDTO {
  attachmentCount: number;
  birthday: number;
  categoryCount: number;
  commentCount: number;
  establishDays: number;
  journalCount: number;
  likeCount: number;
  linkCount: number;
  postCount: number;
  tagCount: number;
  user: UserDTO;
  visitCount: number;
}

export interface TagDTO {
  createTime: string;
  fullPath: string;
  id: number;
  name: string;
  slug: string;
  thumbnail: string;
}

export interface ThemeProperty {
  activated: boolean;
  author: Author;
  branch: string;
  description: string;
  folderName: string;
  hasOptions: boolean;
  id: string;
  logo: string;
  name: string;
  postMetaField: Array<string>;
  repo: string;
  require: string;
  screenshots: string;
  sheetMetaField: Array<string>;
  themePath: string;
  updateStrategy: "BRANCH" | "RELEASE";
  version: string;
  website: string;
}

export interface UserDTO {
  avatar: string;
  createTime: string;
  description: string;
  email: string;
  id: number;
  mfaType: "NONE" | "TFA_TOTP";
  nickname: string;
  updateTime: string;
  username: string;
}
