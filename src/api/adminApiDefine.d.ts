export interface Attachment {
  createTime: string;
  fileKey: string;
  height: number;
  id: number;
  mediaType: string;
  name: string;
  path: string;
  size: number;
  suffix: string;
  thumbPath: string;
  type:
    | "ALIOSS"
    | "BAIDUBOS"
    | "HUAWEIOBS"
    | "LOCAL"
    | "MINIO"
    | "QINIUOSS"
    | "SMMS"
    | "TENCENTCOS"
    | "UPOSS";
  updateTime: string;
  width: number;
}

export interface AttachmentDTO {
  createTime: string;
  fileKey: string;
  height: number;
  id: number;
  mediaType: string;
  name: string;
  path: string;
  size: number;
  suffix: string;
  thumbPath: string;
  type:
    | "ALIOSS"
    | "BAIDUBOS"
    | "HUAWEIOBS"
    | "LOCAL"
    | "MINIO"
    | "QINIUOSS"
    | "SMMS"
    | "TENCENTCOS"
    | "UPOSS";
  width: number;
}

export interface AttachmentParam {
  name: string;
}

export interface AuthToken {
  access_token: string;
  expired_in: number;
  refresh_token: string;
}

export interface Author {
  avatar: string;
  name: string;
  website: string;
}

export interface BackupDTO {
  downloadLink: string;
  fileSize: number;
  filename: string;
  updateTime: number;
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

export interface BasePostDetailDTO {
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
  metaKeywords: string;
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

export interface BasePostMinimalDTO {
  createTime: string;
  editTime: string;
  editorType: "MARKDOWN" | "RICHTEXT";
  fullPath: string;
  id: number;
  metaDescription: string;
  metaKeywords: string;
  slug: string;
  status: "DRAFT" | "INTIMATE" | "PUBLISHED" | "RECYCLE";
  title: string;
  updateTime: string;
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

export interface BaseResponseboolean {
  data: boolean;
  devMessage: string;
  message: string;
  status: number;
}

export interface BaseResponseobject {
  data: any;
  devMessage: string;
  message: string;
  status: number;
}

export interface BaseResponsestring {
  data: string;
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

export interface CategoryParam {
  description: string;
  name: string;
  parentId: number;
  slug: string;
  thumbnail: string;
}

export interface CategoryVO {
  children: Array<CategoryVO>;
  createTime: string;
  description: string;
  fullPath: string;
  id: number;
  name: string;
  parentId: number;
  slug: string;
  thumbnail: string;
}

export interface EnvironmentDTO {
  database: string;
  mode: "DEMO" | "DEVELOPMENT" | "PRODUCTION" | "TEST";
  startTime: number;
  version: string;
}

export interface Group {
  items: Array<Item>;
  label: string;
  name: string;
}

export interface IndependentSheetDTO {
  available: boolean;
  fullPath: string;
  id: number;
  routeName: string;
  title: string;
}

export interface InputStream {}

export interface InstallParam {
  avatar: string;
  description: string;
  email: string;
  locale: string;
  nickname: string;
  password: string;
  title: string;
  url: string;
  username: string;
}

export interface Item {
  dataType: "BOOL" | "DOUBLE" | "LONG" | "STRING";
  defaultValue: any;
  description: string;
  label: string;
  name: string;
  options: Array<Option>;
  placeholder: string;
  type:
    | "ATTACHMENT"
    | "COLOR"
    | "NUMBER"
    | "RADIO"
    | "SELECT"
    | "SWITCH"
    | "TEXT"
    | "TEXTAREA";
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

export interface JournalCommentWithJournalVO {
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
  journal: JournalDTO;
  parentId: number;
  status: "AUDITING" | "PUBLISHED" | "RECYCLE";
  userAgent: string;
}

export interface JournalDTO {
  content: string;
  createTime: string;
  id: number;
  likes: number;
  sourceContent: string;
  type: "INTIMATE" | "PUBLIC";
}

export interface JournalParam {
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

export interface LinkParam {
  description: string;
  logo: string;
  name: string;
  priority: number;
  team: string;
  url: string;
}

export interface LogDTO {
  content: string;
  createTime: string;
  id: number;
  ipAddress: string;
  logKey: string;
  type:
    | "BLOG_INITIALIZED"
    | "LOGGED_IN"
    | "LOGGED_OUT"
    | "LOGGED_PRE_CHECK"
    | "LOGIN_FAILED"
    | "MFA_UPDATED"
    | "PASSWORD_UPDATED"
    | "POST_DELETED"
    | "POST_EDITED"
    | "POST_PUBLISHED"
    | "PROFILE_UPDATED"
    | "SHEET_DELETED"
    | "SHEET_EDITED"
    | "SHEET_PUBLISHED";
}

export interface LoginParam {
  authcode: string;
  password: string;
  username: string;
}

export interface LoginPreCheckDTO {
  needMFACode: boolean;
}

export interface MailParam {
  content: string;
  subject: string;
  to: string;
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

export interface MenuParam {
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

export interface MultiFactorAuthParam {
  authcode: string;
  mfaKey: string;
  mfaType: "NONE" | "TFA_TOTP";
}

export interface MultiFactorAuthVO {
  mfaKey: string;
  mfaType: "NONE" | "TFA_TOTP";
  optAuthUrl: string;
  qrImage: string;
}

export interface Option {
  label: string;
  value: any;
}

export interface OptionDTO {
  key: string;
  value: any;
}

export interface OptionParam {
  key: string;
  type: "CUSTOM" | "INTERNAL";
  value: string;
}

export interface OptionSimpleDTO {
  createTime: string;
  id: number;
  key: string;
  type: "CUSTOM" | "INTERNAL";
  updateTime: string;
  value: any;
}

export interface Pageable {
  page: number;
  size: number;
  sort: Array<string>;
}

export interface PageAttachmentDTO {
  content: Array<AttachmentDTO>;
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

export interface PageJournalCommentWithJournalVO {
  content: Array<JournalCommentWithJournalVO>;
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

export interface PageLogDTO {
  content: Array<LogDTO>;
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

export interface PageOptionSimpleDTO {
  content: Array<OptionSimpleDTO>;
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

export interface PagePostCommentWithPostVO {
  content: Array<PostCommentWithPostVO>;
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

export interface PageSheetCommentWithSheetVO {
  content: Array<SheetCommentWithSheetVO>;
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

export interface PasswordParam {
  newPassword: string;
  oldPassword: string;
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

export interface PhotoParam {
  description: string;
  location: string;
  name: string;
  takeTime: string;
  team: string;
  thumbnail: string;
  url: string;
}

export interface Post {
  createTime: string;
  disallowComment: boolean;
  editTime: string;
  editorType: "MARKDOWN" | "RICHTEXT";
  formatContent: string;
  id: number;
  likes: number;
  metaDescription: string;
  metaKeywords: string;
  originalContent: string;
  password: string;
  slug: string;
  status: "DRAFT" | "INTIMATE" | "PUBLISHED" | "RECYCLE";
  summary: string;
  template: string;
  thumbnail: string;
  title: string;
  topPriority: number;
  updateTime: string;
  url: string;
  visits: number;
  wordCount: number;
}

export interface PostComment {
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
  postId: number;
  status: "AUDITING" | "PUBLISHED" | "RECYCLE";
  topPriority: number;
  updateTime: string;
  userAgent: string;
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

export interface PostCommentWithPostVO {
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
  post: BasePostMinimalDTO;
  status: "AUDITING" | "PUBLISHED" | "RECYCLE";
  userAgent: string;
}

export interface PostContentParam {
  content: string;
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

export interface PostMarkdownParam {
  needFrontMatter: boolean;
}

export interface PostMetaParam {
  key: string;
  postId: number;
  value: string;
}

export interface PostParam {
  categoryIds: Array<number>;
  createTime: string;
  disallowComment: boolean;
  editorType: "MARKDOWN" | "RICHTEXT";
  metaDescription: string;
  metaKeywords: string;
  metas: Array<PostMetaParam>;
  originalContent: string;
  password: string;
  slug: string;
  status: "DRAFT" | "INTIMATE" | "PUBLISHED" | "RECYCLE";
  summary: string;
  tagIds: Array<number>;
  template: string;
  thumbnail: string;
  title: string;
  topPriority: number;
}

export interface ResetPasswordParam {
  code: string;
  email: string;
  password: string;
  username: string;
}

export interface Resource {
  description: string;
  file: any;
  filename: string;
  inputStream: InputStream;
  open: boolean;
  readable: boolean;
  uri: string;
  url: string;
}

export interface SheetComment {
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
  postId: number;
  status: "AUDITING" | "PUBLISHED" | "RECYCLE";
  topPriority: number;
  updateTime: string;
  userAgent: string;
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

export interface SheetCommentWithSheetVO {
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
  sheet: BasePostMinimalDTO;
  status: "AUDITING" | "PUBLISHED" | "RECYCLE";
  userAgent: string;
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

export interface SheetMetaParam {
  key: string;
  postId: number;
  value: string;
}

export interface SheetParam {
  createTime: string;
  disallowComment: boolean;
  editorType: "MARKDOWN" | "RICHTEXT";
  metaDescription: string;
  metaKeywords: string;
  metas: Array<SheetMetaParam>;
  originalContent: string;
  password: string;
  slug: string;
  status: "DRAFT" | "INTIMATE" | "PUBLISHED" | "RECYCLE";
  summary: string;
  template: string;
  thumbnail: string;
  title: string;
  topPriority: number;
}

export interface Sort {
  sort: Array<string>;
}

export interface StaticContentParam {
  content: string;
  path: string;
}

export interface StaticFile {
  children: Array<StaticFile>;
  createTime: number;
  id: string;
  isFile: boolean;
  mimeType: string;
  name: string;
  path: string;
  relativePath: string;
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

export interface TagParam {
  name: string;
  slug: string;
  thumbnail: string;
}

export interface ThemeContentParam {
  content: string;
  path: string;
}

export interface ThemeFile {
  editable: boolean;
  isFile: boolean;
  name: string;
  node: Array<ThemeFile>;
  path: string;
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

export interface UserParam {
  avatar: string;
  description: string;
  email: string;
  nickname: string;
  password: string;
  username: string;
}
