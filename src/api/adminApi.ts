import {
  Attachment,
  AttachmentDTO,
  AttachmentParam,
  AuthToken,
  Author,
  BackupDTO,
  BaseCommentDTO,
  BaseCommentVO,
  BaseCommentWithParentVO,
  BaseMetaDTO,
  BasePostDetailDTO,
  BasePostMinimalDTO,
  BasePostSimpleDTO,
  BaseResponseboolean,
  BaseResponseobject,
  BaseResponsestring,
  CategoryDTO,
  CategoryParam,
  CategoryVO,
  EnvironmentDTO,
  Group,
  IndependentSheetDTO,
  InputStream,
  InstallParam,
  Item,
  JournalCommentParam,
  JournalCommentWithJournalVO,
  JournalDTO,
  JournalParam,
  JournalWithCmtCountDTO,
  LinkDTO,
  LinkParam,
  LogDTO,
  LoginParam,
  LoginPreCheckDTO,
  MailParam,
  MenuDTO,
  MenuParam,
  MenuVO,
  MultiFactorAuthParam,
  MultiFactorAuthVO,
  Option,
  OptionDTO,
  OptionParam,
  OptionSimpleDTO,
  Pageable,
  PageAttachmentDTO,
  PageBaseCommentVO,
  PageBaseCommentWithParentVO,
  PageBasePostSimpleDTO,
  PageJournalCommentWithJournalVO,
  PageJournalWithCmtCountDTO,
  PageLogDTO,
  PageOptionSimpleDTO,
  PagePhotoDTO,
  PagePostCommentWithPostVO,
  PageSheetCommentWithSheetVO,
  PageSheetListVO,
  PasswordParam,
  PhotoDTO,
  PhotoParam,
  Post,
  PostComment,
  PostCommentParam,
  PostCommentWithPostVO,
  PostContentParam,
  PostDetailVO,
  PostMarkdownParam,
  PostMetaParam,
  PostParam,
  ResetPasswordParam,
  Resource,
  SheetComment,
  SheetCommentParam,
  SheetCommentWithSheetVO,
  SheetDetailVO,
  SheetListVO,
  SheetMetaParam,
  SheetParam,
  Sort,
  StaticContentParam,
  StaticFile,
  StatisticDTO,
  StatisticWithUserDTO,
  TagDTO,
  TagParam,
  ThemeContentParam,
  ThemeFile,
  ThemeProperty,
  UserDTO,
  UserParam,
} from "./adminApiDefine";

import * as R from "../request";

export const api = {
  ApiAdminAttachmentsGet(opt: {
    attachmentType:
      | "ALIOSS"
      | "BAIDUBOS"
      | "HUAWEIOBS"
      | "LOCAL"
      | "MINIO"
      | "QINIUOSS"
      | "SMMS"
      | "TENCENTCOS"
      | "UPOSS";
    keyword: string;
    mediaType: string;
    page: number;
    size: number;
    sort: Array<string>;
  }): Promise<PageAttachmentDTO> {
    return R.get("/api/admin/attachments", opt);
  },
  ApiAdminAttachmentsRemove(opt: { ids: any }): Promise<Array<Attachment>> {
    return R.remove("/api/admin/attachments", opt);
  },
  ApiAdminAttachmentsMedia_typesGet(): Promise<Array<string>> {
    return R.get("/api/admin/attachments/media_types");
  },
  ApiAdminAttachmentsTypesGet(): Promise<
    Array<
      | "ALIOSS"
      | "BAIDUBOS"
      | "HUAWEIOBS"
      | "LOCAL"
      | "MINIO"
      | "QINIUOSS"
      | "SMMS"
      | "TENCENTCOS"
      | "UPOSS"
    >
  > {
    return R.get("/api/admin/attachments/types");
  },
  ApiAdminAttachmentsUploadPost(opt: { file: any }): Promise<AttachmentDTO> {
    return R.post("/api/admin/attachments/upload", opt);
  },
  ApiAdminAttachmentsUploadsPost(opt: {
    files: Array<any>;
  }): Promise<Array<AttachmentDTO>> {
    return R.post("/api/admin/attachments/uploads", opt);
  },
  ApiAdminAttachmentsAttachmentIdPut(opt: {
    attachmentId: number;
    attachmentParam: any;
  }): Promise<AttachmentDTO> {
    return R.put("/api/admin/attachments/{attachmentId}", opt);
  },
  ApiAdminAttachmentsIdGet(opt: { id: number }): Promise<AttachmentDTO> {
    return R.get("/api/admin/attachments/{id}", opt);
  },
  ApiAdminAttachmentsIdRemove(opt: { id: number }): Promise<AttachmentDTO> {
    return R.remove("/api/admin/attachments/{id}", opt);
  },
  ApiAdminBackupsDataGet(): Promise<Array<BackupDTO>> {
    return R.get("/api/admin/backups/data");
  },
  ApiAdminBackupsDataPost(): Promise<BackupDTO> {
    return R.post("/api/admin/backups/data");
  },
  ApiAdminBackupsDataRemove(opt: { filename: string }): Promise<void> {
    return R.remove("/api/admin/backups/data", opt);
  },
  ApiAdminBackupsDataFileNameGet(opt: { fileName: string }): Promise<Resource> {
    return R.get("/api/admin/backups/data/{fileName}", opt);
  },
  ApiAdminBackupsMarkdownExportGet(): Promise<Array<BackupDTO>> {
    return R.get("/api/admin/backups/markdown/export");
  },
  ApiAdminBackupsMarkdownExportPost(opt: {
    postMarkdownParam: any;
  }): Promise<BackupDTO> {
    return R.post("/api/admin/backups/markdown/export", opt);
  },
  ApiAdminBackupsMarkdownExportRemove(opt: {
    filename: string;
  }): Promise<void> {
    return R.remove("/api/admin/backups/markdown/export", opt);
  },
  ApiAdminBackupsMarkdownExportFileNameGet(opt: {
    fileName: string;
  }): Promise<Resource> {
    return R.get("/api/admin/backups/markdown/export/{fileName}", opt);
  },
  ApiAdminBackupsMarkdownImportPost(opt: {
    file: any;
  }): Promise<BasePostDetailDTO> {
    return R.post("/api/admin/backups/markdown/import", opt);
  },
  "ApiAdminBackupsWork-dirGet"(): Promise<Array<BackupDTO>> {
    return R.get("/api/admin/backups/work-dir");
  },
  "ApiAdminBackupsWork-dirPost"(): Promise<BackupDTO> {
    return R.post("/api/admin/backups/work-dir");
  },
  "ApiAdminBackupsWork-dirRemove"(opt: { filename: string }): Promise<void> {
    return R.remove("/api/admin/backups/work-dir", opt);
  },
  "ApiAdminBackupsWork-dirFileNameGet"(opt: {
    fileName: string;
  }): Promise<Resource> {
    return R.get("/api/admin/backups/work-dir/{fileName}", opt);
  },
  ApiAdminCategoriesGet(opt: {
    more: boolean;
    sort: Array<string>;
  }): Promise<Array<CategoryDTO>> {
    return R.get("/api/admin/categories", opt);
  },
  ApiAdminCategoriesPost(opt: { categoryParam: any }): Promise<CategoryDTO> {
    return R.post("/api/admin/categories", opt);
  },
  ApiAdminCategoriesTree_viewGet(opt: {
    sort: Array<string>;
  }): Promise<Array<CategoryVO>> {
    return R.get("/api/admin/categories/tree_view", opt);
  },
  ApiAdminCategoriesCategoryIdGet(opt: {
    categoryId: number;
  }): Promise<CategoryDTO> {
    return R.get("/api/admin/categories/{categoryId}", opt);
  },
  ApiAdminCategoriesCategoryIdPut(opt: {
    categoryId: number;
    categoryParam: any;
  }): Promise<CategoryDTO> {
    return R.put("/api/admin/categories/{categoryId}", opt);
  },
  ApiAdminCategoriesCategoryIdRemove(opt: {
    categoryId: number;
  }): Promise<void> {
    return R.remove("/api/admin/categories/{categoryId}", opt);
  },
  ApiAdminCountsGet(): Promise<StatisticDTO> {
    return R.get("/api/admin/counts");
  },
  ApiAdminEnvironmentsGet(): Promise<EnvironmentDTO> {
    return R.get("/api/admin/environments");
  },
  ApiAdminHaloLogfileGet(opt: { lines: number }): Promise<BaseResponsestring> {
    return R.get("/api/admin/halo/logfile", opt);
  },
  ApiAdminInstallationsPost(opt: {
    installParam: any;
  }): Promise<BaseResponsestring> {
    return R.post("/api/admin/installations", opt);
  },
  ApiAdminIs_installedGet(): Promise<boolean> {
    return R.get("/api/admin/is_installed");
  },
  ApiAdminJournalsGet(opt: {
    keyword: string;
    page: number;
    size: number;
    sort: Array<string>;
    type: "INTIMATE" | "PUBLIC";
  }): Promise<PageJournalWithCmtCountDTO> {
    return R.get("/api/admin/journals", opt);
  },
  ApiAdminJournalsPost(opt: { journalParam: any }): Promise<JournalDTO> {
    return R.post("/api/admin/journals", opt);
  },
  ApiAdminJournalsCommentsGet(opt: {
    keyword: string;
    page: number;
    size: number;
    sort: Array<string>;
    status: "AUDITING" | "PUBLISHED" | "RECYCLE";
  }): Promise<PageJournalCommentWithJournalVO> {
    return R.get("/api/admin/journals/comments", opt);
  },
  ApiAdminJournalsCommentsPost(opt: {
    journalCommentParam: any;
  }): Promise<BaseCommentDTO> {
    return R.post("/api/admin/journals/comments", opt);
  },
  ApiAdminJournalsCommentsLatestGet(opt: {
    status: "AUDITING" | "PUBLISHED" | "RECYCLE";
    top: number;
  }): Promise<Array<JournalCommentWithJournalVO>> {
    return R.get("/api/admin/journals/comments/latest", opt);
  },
  ApiAdminJournalsCommentsCommentIdRemove(opt: {
    commentId: number;
  }): Promise<BaseCommentDTO> {
    return R.remove("/api/admin/journals/comments/{commentId}", opt);
  },
  ApiAdminJournalsCommentsCommentIdStatusStatusPut(opt: {
    commentId: number;
    status: "AUDITING" | "PUBLISHED" | "RECYCLE";
  }): Promise<BaseCommentDTO> {
    return R.put(
      "/api/admin/journals/comments/{commentId}/status/{status}",
      opt
    );
  },
  ApiAdminJournalsCommentsJournalIdList_viewGet(opt: {
    journalId: number;
    page: number;
    sort: Array<string>;
  }): Promise<PageBaseCommentWithParentVO> {
    return R.get("/api/admin/journals/comments/{journalId}/list_view", opt);
  },
  ApiAdminJournalsCommentsJournalIdTree_viewGet(opt: {
    journalId: number;
    page: number;
    sort: Array<string>;
  }): Promise<PageBaseCommentVO> {
    return R.get("/api/admin/journals/comments/{journalId}/tree_view", opt);
  },
  ApiAdminJournalsLatestGet(opt: {
    top: number;
  }): Promise<Array<JournalWithCmtCountDTO>> {
    return R.get("/api/admin/journals/latest", opt);
  },
  ApiAdminJournalsIdPut(opt: {
    id: number;
    journalParam: any;
  }): Promise<JournalDTO> {
    return R.put("/api/admin/journals/{id}", opt);
  },
  ApiAdminJournalsJournalIdRemove(opt: {
    journalId: number;
  }): Promise<JournalDTO> {
    return R.remove("/api/admin/journals/{journalId}", opt);
  },
  ApiAdminLinksGet(opt: { sort: Array<string> }): Promise<Array<LinkDTO>> {
    return R.get("/api/admin/links", opt);
  },
  ApiAdminLinksPost(opt: { linkParam: any }): Promise<LinkDTO> {
    return R.post("/api/admin/links", opt);
  },
  ApiAdminLinksTeamsGet(): Promise<Array<string>> {
    return R.get("/api/admin/links/teams");
  },
  ApiAdminLinksIdGet(opt: { id: number }): Promise<LinkDTO> {
    return R.get("/api/admin/links/{id}", opt);
  },
  ApiAdminLinksIdPut(opt: { id: number; linkParam: any }): Promise<LinkDTO> {
    return R.put("/api/admin/links/{id}", opt);
  },
  ApiAdminLinksIdRemove(opt: { id: number }): Promise<void> {
    return R.remove("/api/admin/links/{id}", opt);
  },
  ApiAdminLoginPost(opt: { loginParam: any }): Promise<AuthToken> {
    return R.post("/api/admin/login", opt);
  },
  ApiAdminLoginPrecheckPost(opt: {
    loginParam: any;
  }): Promise<LoginPreCheckDTO> {
    return R.post("/api/admin/login/precheck", opt);
  },
  ApiAdminLogoutPost(): Promise<void> {
    return R.post("/api/admin/logout");
  },
  ApiAdminLogsGet(opt: {
    page: number;
    size: number;
    sort: Array<string>;
  }): Promise<PageLogDTO> {
    return R.get("/api/admin/logs", opt);
  },
  ApiAdminLogsClearGet(): Promise<void> {
    return R.get("/api/admin/logs/clear");
  },
  ApiAdminLogsLatestGet(opt: { top: number }): Promise<Array<LogDTO>> {
    return R.get("/api/admin/logs/latest", opt);
  },
  ApiAdminMailsTestPost(opt: { mailParam: any }): Promise<BaseResponsestring> {
    return R.post("/api/admin/mails/test", opt);
  },
  ApiAdminMailsTestConnectionPost(): Promise<BaseResponsestring> {
    return R.post("/api/admin/mails/test/connection");
  },
  ApiAdminMenusGet(opt: { sort: Array<string> }): Promise<Array<MenuDTO>> {
    return R.get("/api/admin/menus", opt);
  },
  ApiAdminMenusPost(opt: { menuParam: any }): Promise<MenuDTO> {
    return R.post("/api/admin/menus", opt);
  },
  ApiAdminMenusBatchPost(opt: { menuParams: any }): Promise<Array<MenuDTO>> {
    return R.post("/api/admin/menus/batch", opt);
  },
  ApiAdminMenusBatchPut(opt: { menuParams: any }): Promise<Array<MenuDTO>> {
    return R.put("/api/admin/menus/batch", opt);
  },
  ApiAdminMenusBatchRemove(opt: { menuIds: any }): Promise<Array<MenuDTO>> {
    return R.remove("/api/admin/menus/batch", opt);
  },
  ApiAdminMenusTeamTree_viewGet(opt: {
    sort: Array<string>;
    team: string;
  }): Promise<Array<MenuVO>> {
    return R.get("/api/admin/menus/team/tree_view", opt);
  },
  ApiAdminMenusTeamsGet(): Promise<Array<string>> {
    return R.get("/api/admin/menus/teams");
  },
  ApiAdminMenusTree_viewGet(opt: {
    sort: Array<string>;
  }): Promise<Array<MenuVO>> {
    return R.get("/api/admin/menus/tree_view", opt);
  },
  ApiAdminMenusMenuIdGet(opt: { menuId: number }): Promise<MenuDTO> {
    return R.get("/api/admin/menus/{menuId}", opt);
  },
  ApiAdminMenusMenuIdPut(opt: {
    menuId: number;
    menuParam: any;
  }): Promise<MenuDTO> {
    return R.put("/api/admin/menus/{menuId}", opt);
  },
  ApiAdminMenusMenuIdRemove(opt: { menuId: number }): Promise<MenuDTO> {
    return R.remove("/api/admin/menus/{menuId}", opt);
  },
  ApiAdminMigrationsHaloPost(opt: { file: any }): Promise<void> {
    return R.post("/api/admin/migrations/halo", opt);
  },
  ApiAdminOptionsGet(): Promise<Array<OptionDTO>> {
    return R.get("/api/admin/options");
  },
  ApiAdminOptionsPost(opt: { optionParam: any }): Promise<void> {
    return R.post("/api/admin/options", opt);
  },
  ApiAdminOptionsList_viewGet(opt: {
    keyword: string;
    page: number;
    size: number;
    sort: Array<string>;
    type: "CUSTOM" | "INTERNAL";
  }): Promise<PageOptionSimpleDTO> {
    return R.get("/api/admin/options/list_view", opt);
  },
  ApiAdminOptionsMap_viewGet(): Promise<any> {
    return R.get("/api/admin/options/map_view");
  },
  ApiAdminOptionsMap_viewKeysPost(opt: { keys: any }): Promise<any> {
    return R.post("/api/admin/options/map_view/keys", opt);
  },
  ApiAdminOptionsMap_viewSavingPost(opt: { optionMap: any }): Promise<void> {
    return R.post("/api/admin/options/map_view/saving", opt);
  },
  ApiAdminOptionsSavingPost(opt: { optionParams: any }): Promise<void> {
    return R.post("/api/admin/options/saving", opt);
  },
  ApiAdminOptionsIdGet(opt: { id: number }): Promise<OptionSimpleDTO> {
    return R.get("/api/admin/options/{id}", opt);
  },
  ApiAdminOptionsOptionIdPut(opt: {
    optionId: number;
    optionParam: any;
  }): Promise<void> {
    return R.put("/api/admin/options/{optionId}", opt);
  },
  ApiAdminOptionsOptionIdRemove(opt: { optionId: number }): Promise<void> {
    return R.remove("/api/admin/options/{optionId}", opt);
  },
  ApiAdminPasswordCodePost(opt: { param: any }): Promise<void> {
    return R.post("/api/admin/password/code", opt);
  },
  ApiAdminPasswordResetPut(opt: { param: any }): Promise<void> {
    return R.put("/api/admin/password/reset", opt);
  },
  ApiAdminPhotosGet(opt: {
    keyword: string;
    page: number;
    size: number;
    sort: Array<string>;
    team: string;
  }): Promise<PagePhotoDTO> {
    return R.get("/api/admin/photos", opt);
  },
  ApiAdminPhotosPost(opt: { photoParam: any }): Promise<PhotoDTO> {
    return R.post("/api/admin/photos", opt);
  },
  ApiAdminPhotosLatestGet(opt: {
    sort: Array<string>;
  }): Promise<Array<PhotoDTO>> {
    return R.get("/api/admin/photos/latest", opt);
  },
  ApiAdminPhotosTeamsGet(): Promise<Array<string>> {
    return R.get("/api/admin/photos/teams");
  },
  ApiAdminPhotosPhotoIdGet(opt: { photoId: number }): Promise<PhotoDTO> {
    return R.get("/api/admin/photos/{photoId}", opt);
  },
  ApiAdminPhotosPhotoIdPut(opt: {
    photoId: number;
    photoParam: any;
  }): Promise<PhotoDTO> {
    return R.put("/api/admin/photos/{photoId}", opt);
  },
  ApiAdminPhotosPhotoIdRemove(opt: { photoId: number }): Promise<void> {
    return R.remove("/api/admin/photos/{photoId}", opt);
  },
  ApiAdminPostsGet(opt: {
    categoryId: number;
    keyword: string;
    more: boolean;
    page: number;
    size: number;
    sort: Array<string>;
    status: "DRAFT" | "INTIMATE" | "PUBLISHED" | "RECYCLE";
  }): Promise<PageBasePostSimpleDTO> {
    return R.get("/api/admin/posts", opt);
  },
  ApiAdminPostsPost(opt: {
    autoSave: boolean;
    postParam: any;
  }): Promise<PostDetailVO> {
    return R.post("/api/admin/posts", opt);
  },
  ApiAdminPostsRemove(opt: { ids: any }): Promise<Array<Post>> {
    return R.remove("/api/admin/posts", opt);
  },
  ApiAdminPostsCommentsGet(opt: {
    keyword: string;
    page: number;
    size: number;
    sort: Array<string>;
    status: "AUDITING" | "PUBLISHED" | "RECYCLE";
  }): Promise<PagePostCommentWithPostVO> {
    return R.get("/api/admin/posts/comments", opt);
  },
  ApiAdminPostsCommentsPost(opt: {
    postCommentParam: any;
  }): Promise<BaseCommentDTO> {
    return R.post("/api/admin/posts/comments", opt);
  },
  ApiAdminPostsCommentsRemove(opt: { ids: any }): Promise<Array<PostComment>> {
    return R.remove("/api/admin/posts/comments", opt);
  },
  ApiAdminPostsCommentsLatestGet(opt: {
    status: "AUDITING" | "PUBLISHED" | "RECYCLE";
    top: number;
  }): Promise<Array<PostCommentWithPostVO>> {
    return R.get("/api/admin/posts/comments/latest", opt);
  },
  ApiAdminPostsCommentsStatusStatusPut(opt: {
    ids: any;
    status: "AUDITING" | "PUBLISHED" | "RECYCLE";
  }): Promise<Array<BaseCommentDTO>> {
    return R.put("/api/admin/posts/comments/status/{status}", opt);
  },
  ApiAdminPostsCommentsCommentIdGet(opt: {
    commentId: number;
  }): Promise<PostCommentWithPostVO> {
    return R.get("/api/admin/posts/comments/{commentId}", opt);
  },
  ApiAdminPostsCommentsCommentIdPut(opt: {
    commentId: number;
    commentParam: any;
  }): Promise<BaseCommentDTO> {
    return R.put("/api/admin/posts/comments/{commentId}", opt);
  },
  ApiAdminPostsCommentsCommentIdRemove(opt: {
    commentId: number;
  }): Promise<BaseCommentDTO> {
    return R.remove("/api/admin/posts/comments/{commentId}", opt);
  },
  ApiAdminPostsCommentsCommentIdStatusStatusPut(opt: {
    commentId: number;
    status: "AUDITING" | "PUBLISHED" | "RECYCLE";
  }): Promise<BaseCommentDTO> {
    return R.put("/api/admin/posts/comments/{commentId}/status/{status}", opt);
  },
  ApiAdminPostsCommentsPostIdList_viewGet(opt: {
    page: number;
    postId: number;
    sort: Array<string>;
  }): Promise<PageBaseCommentWithParentVO> {
    return R.get("/api/admin/posts/comments/{postId}/list_view", opt);
  },
  ApiAdminPostsCommentsPostIdTree_viewGet(opt: {
    page: number;
    postId: number;
    sort: Array<string>;
  }): Promise<PageBaseCommentVO> {
    return R.get("/api/admin/posts/comments/{postId}/tree_view", opt);
  },
  ApiAdminPostsLatestGet(opt: {
    top: number;
  }): Promise<Array<BasePostMinimalDTO>> {
    return R.get("/api/admin/posts/latest", opt);
  },
  ApiAdminPostsPreviewPostIdGet(opt: { postId: number }): Promise<string> {
    return R.get("/api/admin/posts/preview/{postId}", opt);
  },
  ApiAdminPostsStatusStatusGet(opt: {
    more: boolean;
    page: number;
    size: number;
    sort: Array<string>;
    status: "DRAFT" | "INTIMATE" | "PUBLISHED" | "RECYCLE";
  }): Promise<PageBasePostSimpleDTO> {
    return R.get("/api/admin/posts/status/{status}", opt);
  },
  ApiAdminPostsStatusStatusPut(opt: {
    ids: any;
    status: "DRAFT" | "INTIMATE" | "PUBLISHED" | "RECYCLE";
  }): Promise<Array<Post>> {
    return R.put("/api/admin/posts/status/{status}", opt);
  },
  ApiAdminPostsPostIdGet(opt: { postId: number }): Promise<PostDetailVO> {
    return R.get("/api/admin/posts/{postId}", opt);
  },
  ApiAdminPostsPostIdPut(opt: {
    autoSave: boolean;
    postId: number;
    postParam: any;
  }): Promise<PostDetailVO> {
    return R.put("/api/admin/posts/{postId}", opt);
  },
  ApiAdminPostsPostIdRemove(opt: { postId: number }): Promise<void> {
    return R.remove("/api/admin/posts/{postId}", opt);
  },
  ApiAdminPostsPostIdLikesPut(opt: { postId: number }): Promise<void> {
    return R.put("/api/admin/posts/{postId}/likes", opt);
  },
  ApiAdminPostsPostIdPreviewGet(opt: { postId: number }): Promise<string> {
    return R.get("/api/admin/posts/{postId}/preview", opt);
  },
  ApiAdminPostsPostIdStatusDraftContentPut(opt: {
    contentParam: any;
    postId: number;
  }): Promise<BasePostDetailDTO> {
    return R.put("/api/admin/posts/{postId}/status/draft/content", opt);
  },
  ApiAdminPostsPostIdStatusStatusPut(opt: {
    postId: number;
    status: "DRAFT" | "INTIMATE" | "PUBLISHED" | "RECYCLE";
  }): Promise<BasePostMinimalDTO> {
    return R.put("/api/admin/posts/{postId}/status/{status}", opt);
  },
  ApiAdminRefreshRefreshTokenPost(opt: {
    refreshToken: string;
  }): Promise<AuthToken> {
    return R.post("/api/admin/refresh/{refreshToken}", opt);
  },
  ApiAdminSheetsGet(opt: {
    page: number;
    size: number;
    sort: Array<string>;
  }): Promise<PageSheetListVO> {
    return R.get("/api/admin/sheets", opt);
  },
  ApiAdminSheetsPost(opt: {
    autoSave: boolean;
    sheetParam: any;
  }): Promise<SheetDetailVO> {
    return R.post("/api/admin/sheets", opt);
  },
  ApiAdminSheetsCommentsGet(opt: {
    keyword: string;
    page: number;
    size: number;
    sort: Array<string>;
    status: "AUDITING" | "PUBLISHED" | "RECYCLE";
  }): Promise<PageSheetCommentWithSheetVO> {
    return R.get("/api/admin/sheets/comments", opt);
  },
  ApiAdminSheetsCommentsPost(opt: {
    commentParam: any;
  }): Promise<BaseCommentDTO> {
    return R.post("/api/admin/sheets/comments", opt);
  },
  ApiAdminSheetsCommentsRemove(opt: {
    ids: any;
  }): Promise<Array<SheetComment>> {
    return R.remove("/api/admin/sheets/comments", opt);
  },
  ApiAdminSheetsCommentsLatestGet(opt: {
    status: "AUDITING" | "PUBLISHED" | "RECYCLE";
    top: number;
  }): Promise<Array<SheetCommentWithSheetVO>> {
    return R.get("/api/admin/sheets/comments/latest", opt);
  },
  ApiAdminSheetsCommentsStatusStatusPut(opt: {
    ids: any;
    status: "AUDITING" | "PUBLISHED" | "RECYCLE";
  }): Promise<Array<BaseCommentDTO>> {
    return R.put("/api/admin/sheets/comments/status/{status}", opt);
  },
  ApiAdminSheetsCommentsCommentIdGet(opt: {
    commentId: number;
  }): Promise<SheetCommentWithSheetVO> {
    return R.get("/api/admin/sheets/comments/{commentId}", opt);
  },
  ApiAdminSheetsCommentsCommentIdPut(opt: {
    commentId: number;
    commentParam: any;
  }): Promise<BaseCommentDTO> {
    return R.put("/api/admin/sheets/comments/{commentId}", opt);
  },
  ApiAdminSheetsCommentsCommentIdRemove(opt: {
    commentId: number;
  }): Promise<BaseCommentDTO> {
    return R.remove("/api/admin/sheets/comments/{commentId}", opt);
  },
  ApiAdminSheetsCommentsCommentIdStatusStatusPut(opt: {
    commentId: number;
    status: "AUDITING" | "PUBLISHED" | "RECYCLE";
  }): Promise<BaseCommentDTO> {
    return R.put("/api/admin/sheets/comments/{commentId}/status/{status}", opt);
  },
  ApiAdminSheetsCommentsSheetIdList_viewGet(opt: {
    page: number;
    sheetId: number;
    sort: Array<string>;
  }): Promise<PageBaseCommentWithParentVO> {
    return R.get("/api/admin/sheets/comments/{sheetId}/list_view", opt);
  },
  ApiAdminSheetsCommentsSheetIdTree_viewGet(opt: {
    page: number;
    sheetId: number;
    sort: Array<string>;
  }): Promise<PageBaseCommentVO> {
    return R.get("/api/admin/sheets/comments/{sheetId}/tree_view", opt);
  },
  ApiAdminSheetsIndependentGet(): Promise<Array<IndependentSheetDTO>> {
    return R.get("/api/admin/sheets/independent");
  },
  ApiAdminSheetsPreviewSheetIdGet(opt: { sheetId: number }): Promise<string> {
    return R.get("/api/admin/sheets/preview/{sheetId}", opt);
  },
  ApiAdminSheetsSheetIdGet(opt: { sheetId: number }): Promise<SheetDetailVO> {
    return R.get("/api/admin/sheets/{sheetId}", opt);
  },
  ApiAdminSheetsSheetIdPut(opt: {
    autoSave: boolean;
    sheetId: number;
    sheetParam: any;
  }): Promise<SheetDetailVO> {
    return R.put("/api/admin/sheets/{sheetId}", opt);
  },
  ApiAdminSheetsSheetIdRemove(opt: {
    sheetId: number;
  }): Promise<SheetDetailVO> {
    return R.remove("/api/admin/sheets/{sheetId}", opt);
  },
  ApiAdminSheetsSheetIdStatusDraftContentPut(opt: {
    contentParam: any;
    sheetId: number;
  }): Promise<BasePostDetailDTO> {
    return R.put("/api/admin/sheets/{sheetId}/status/draft/content", opt);
  },
  ApiAdminSheetsSheetIdStatusPut(opt: {
    sheetId: number;
    status: "DRAFT" | "INTIMATE" | "PUBLISHED" | "RECYCLE";
  }): Promise<void> {
    return R.put("/api/admin/sheets/{sheetId}/{status}", opt);
  },
  ApiAdminStaticsGet(): Promise<Array<StaticFile>> {
    return R.get("/api/admin/statics");
  },
  ApiAdminStaticsPost(opt: {
    basePath: string;
    folderName: string;
  }): Promise<void> {
    return R.post("/api/admin/statics", opt);
  },
  ApiAdminStaticsRemove(opt: { path: string }): Promise<void> {
    return R.remove("/api/admin/statics", opt);
  },
  ApiAdminStaticsFilesPut(opt: { param: any }): Promise<void> {
    return R.put("/api/admin/statics/files", opt);
  },
  ApiAdminStaticsRenamePost(opt: {
    basePath: string;
    newName: string;
  }): Promise<void> {
    return R.post("/api/admin/statics/rename", opt);
  },
  ApiAdminStaticsUploadPost(opt: {
    basePath: string;
    file: any;
  }): Promise<void> {
    return R.post("/api/admin/statics/upload", opt);
  },
  ApiAdminStatisticsGet(): Promise<StatisticDTO> {
    return R.get("/api/admin/statistics");
  },
  ApiAdminStatisticsUserGet(): Promise<StatisticWithUserDTO> {
    return R.get("/api/admin/statistics/user");
  },
  ApiAdminTagsGet(opt: {
    more: boolean;
    sort: Array<string>;
  }): Promise<Array<TagDTO>> {
    return R.get("/api/admin/tags", opt);
  },
  ApiAdminTagsPost(opt: { tagParam: any }): Promise<TagDTO> {
    return R.post("/api/admin/tags", opt);
  },
  ApiAdminTagsTagIdGet(opt: { tagId: number }): Promise<TagDTO> {
    return R.get("/api/admin/tags/{tagId}", opt);
  },
  ApiAdminTagsTagIdPut(opt: { tagId: number; tagParam: any }): Promise<TagDTO> {
    return R.put("/api/admin/tags/{tagId}", opt);
  },
  ApiAdminTagsTagIdRemove(opt: { tagId: number }): Promise<TagDTO> {
    return R.remove("/api/admin/tags/{tagId}", opt);
  },
  ApiAdminThemesGet(): Promise<Array<ThemeProperty>> {
    return R.get("/api/admin/themes");
  },
  ApiAdminThemesActivationGet(): Promise<ThemeProperty> {
    return R.get("/api/admin/themes/activation");
  },
  ApiAdminThemesActivationConfigurationsGet(): Promise<BaseResponseobject> {
    return R.get("/api/admin/themes/activation/configurations");
  },
  ApiAdminThemesActivationFilesGet(): Promise<Array<ThemeFile>> {
    return R.get("/api/admin/themes/activation/files");
  },
  ApiAdminThemesActivationSettingsGet(): Promise<any> {
    return R.get("/api/admin/themes/activation/settings");
  },
  ApiAdminThemesActivationSettingsPost(opt: { settings: any }): Promise<void> {
    return R.post("/api/admin/themes/activation/settings", opt);
  },
  ApiAdminThemesActivationTemplateCustomPostGet(): Promise<Array<string>> {
    return R.get("/api/admin/themes/activation/template/custom/post");
  },
  ApiAdminThemesActivationTemplateCustomSheetGet(): Promise<Array<string>> {
    return R.get("/api/admin/themes/activation/template/custom/sheet");
  },
  ApiAdminThemesActivationTemplateExistsGet(opt: {
    template: string;
  }): Promise<BaseResponseboolean> {
    return R.get("/api/admin/themes/activation/template/exists", opt);
  },
  ApiAdminThemesFetchBranchGet(opt: {
    branch: string;
    uri: string;
  }): Promise<ThemeProperty> {
    return R.get("/api/admin/themes/fetchBranch", opt);
  },
  ApiAdminThemesFetchLatestReleaseGet(opt: {
    uri: string;
  }): Promise<ThemeProperty> {
    return R.get("/api/admin/themes/fetchLatestRelease", opt);
  },
  ApiAdminThemesFetchingPost(opt: { uri: string }): Promise<ThemeProperty> {
    return R.post("/api/admin/themes/fetching", opt);
  },
  ApiAdminThemesFetchingGitBranchesPost(opt: {
    uri: string;
  }): Promise<Array<ThemeProperty>> {
    return R.post("/api/admin/themes/fetching/git/branches", opt);
  },
  ApiAdminThemesFetchingThemeIdPut(opt: {
    themeId: string;
  }): Promise<ThemeProperty> {
    return R.put("/api/admin/themes/fetching/{themeId}", opt);
  },
  ApiAdminThemesFetchingBranchesPost(opt: {
    uri: string;
  }): Promise<Array<ThemeProperty>> {
    return R.post("/api/admin/themes/fetchingBranches", opt);
  },
  ApiAdminThemesFetchingReleaseGet(opt: {
    tag: string;
    uri: string;
  }): Promise<ThemeProperty> {
    return R.get("/api/admin/themes/fetchingRelease", opt);
  },
  ApiAdminThemesFetchingReleasesPost(opt: {
    uri: string;
  }): Promise<Array<ThemeProperty>> {
    return R.post("/api/admin/themes/fetchingReleases", opt);
  },
  ApiAdminThemesFilesContentGet(opt: {
    path: string;
  }): Promise<BaseResponsestring> {
    return R.get("/api/admin/themes/files/content", opt);
  },
  ApiAdminThemesFilesContentPut(opt: { param: any }): Promise<void> {
    return R.put("/api/admin/themes/files/content", opt);
  },
  ApiAdminThemesReloadPost(): Promise<void> {
    return R.post("/api/admin/themes/reload");
  },
  ApiAdminThemesUploadPost(opt: { file: any }): Promise<ThemeProperty> {
    return R.post("/api/admin/themes/upload", opt);
  },
  ApiAdminThemesUploadThemeIdPut(opt: {
    file: any;
    themeId: string;
  }): Promise<ThemeProperty> {
    return R.put("/api/admin/themes/upload/{themeId}", opt);
  },
  ApiAdminThemesThemeIdGet(opt: { themeId: string }): Promise<ThemeProperty> {
    return R.get("/api/admin/themes/{themeId}", opt);
  },
  ApiAdminThemesThemeIdRemove(opt: {
    deleteSettings: boolean;
    themeId: string;
  }): Promise<void> {
    return R.remove("/api/admin/themes/{themeId}", opt);
  },
  ApiAdminThemesThemeIdActivationPost(opt: {
    themeId: string;
  }): Promise<ThemeProperty> {
    return R.post("/api/admin/themes/{themeId}/activation", opt);
  },
  ApiAdminThemesThemeIdConfigurationsGet(opt: {
    themeId: string;
  }): Promise<Array<Group>> {
    return R.get("/api/admin/themes/{themeId}/configurations", opt);
  },
  ApiAdminThemesThemeIdFilesGet(opt: {
    themeId: string;
  }): Promise<Array<ThemeFile>> {
    return R.get("/api/admin/themes/{themeId}/files", opt);
  },
  ApiAdminThemesThemeIdFilesContentGet(opt: {
    path: string;
    themeId: string;
  }): Promise<BaseResponsestring> {
    return R.get("/api/admin/themes/{themeId}/files/content", opt);
  },
  ApiAdminThemesThemeIdFilesContentPut(opt: {
    param: any;
    themeId: string;
  }): Promise<void> {
    return R.put("/api/admin/themes/{themeId}/files/content", opt);
  },
  ApiAdminThemesThemeIdSettingsGet(opt: { themeId: string }): Promise<any> {
    return R.get("/api/admin/themes/{themeId}/settings", opt);
  },
  ApiAdminThemesThemeIdSettingsPost(opt: {
    settings: any;
    themeId: string;
  }): Promise<void> {
    return R.post("/api/admin/themes/{themeId}/settings", opt);
  },
  ApiAdminUsersMfaGeneratePut(opt: {
    multiFactorAuthParam: any;
  }): Promise<MultiFactorAuthVO> {
    return R.put("/api/admin/users/mfa/generate", opt);
  },
  ApiAdminUsersMfaUpdatePut(opt: {
    multiFactorAuthParam: any;
  }): Promise<MultiFactorAuthVO> {
    return R.put("/api/admin/users/mfa/update", opt);
  },
  ApiAdminUsersProfilesGet(): Promise<UserDTO> {
    return R.get("/api/admin/users/profiles");
  },
  ApiAdminUsersProfilesPut(opt: { userParam: any }): Promise<UserDTO> {
    return R.put("/api/admin/users/profiles", opt);
  },
  ApiAdminUsersProfilesPasswordPut(opt: {
    passwordParam: any;
  }): Promise<BaseResponsestring> {
    return R.put("/api/admin/users/profiles/password", opt);
  },
};
