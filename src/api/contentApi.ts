import {
  ArchiveMonthVO,
  ArchiveYearVO,
  Author,
  BaseCommentDTO,
  BaseCommentVO,
  BaseCommentWithParentVO,
  BaseMetaDTO,
  BasePostSimpleDTO,
  BaseResponseobject,
  CategoryDTO,
  CommentWithHasChildrenVO,
  JournalCommentParam,
  JournalDTO,
  JournalWithCmtCountDTO,
  LinkDTO,
  LinkTeamVO,
  MenuDTO,
  MenuVO,
  OptionDTO,
  Pageable,
  PageBaseCommentVO,
  PageBaseCommentWithParentVO,
  PageBasePostSimpleDTO,
  PageCommentWithHasChildrenVO,
  PageJournalWithCmtCountDTO,
  PagePhotoDTO,
  PagePostListVO,
  PageSheetListVO,
  PhotoDTO,
  PostCommentParam,
  PostDetailVO,
  PostListVO,
  SheetCommentParam,
  SheetDetailVO,
  SheetListVO,
  Sort,
  StatisticDTO,
  StatisticWithUserDTO,
  TagDTO,
  ThemeProperty,
  UserDTO,
} from "./contentApiDefine";

import * as R from "../request";

export const api = {
  archivesMonthsGet(): Promise<Array<ArchiveMonthVO>> {
    return R.get("/api/content/archives/months");
  },
  archivesYearsGet(): Promise<Array<ArchiveYearVO>> {
    return R.get("/api/content/archives/years");
  },
  categoriesGet(opt: {
    more: boolean;
    sort: Array<string>;
  }): Promise<Array<CategoryDTO>> {
    return R.get("/api/content/categories", opt);
  },
  categoriesSlugPostsGet(opt: {
    page: number;
    size: number;
    slug: string;
    sort: Array<string>;
  }): Promise<PagePostListVO> {
    return R.get("/api/content/categories/{slug}/posts", opt);
  },
  journalsGet(opt: {
    page: number;
    size: number;
    sort: Array<string>;
  }): Promise<PageJournalWithCmtCountDTO> {
    return R.get("/api/content/journals", opt);
  },
  journalsCommentsPost(opt: {
    journalCommentParam: any;
  }): Promise<BaseCommentDTO> {
    return R.post("/api/content/journals/comments", opt);
  },
  journalsIdLikesPost(opt: { id: number }): Promise<void> {
    return R.post("/api/content/journals/{id}/likes", opt);
  },
  journalsJournalIdGet(opt: { journalId: number }): Promise<JournalDTO> {
    return R.get("/api/content/journals/{journalId}", opt);
  },
  journalsJournalIdCommentsList_viewGet(opt: {
    journalId: number;
    page: number;
    sort: Array<string>;
  }): Promise<PageBaseCommentWithParentVO> {
    return R.get("/api/content/journals/{journalId}/comments/list_view", opt);
  },
  journalsJournalIdCommentsTop_viewGet(opt: {
    journalId: number;
    page: number;
    sort: Array<string>;
  }): Promise<PageCommentWithHasChildrenVO> {
    return R.get("/api/content/journals/{journalId}/comments/top_view", opt);
  },
  journalsJournalIdCommentsTree_viewGet(opt: {
    journalId: number;
    page: number;
    sort: Array<string>;
  }): Promise<PageBaseCommentVO> {
    return R.get("/api/content/journals/{journalId}/comments/tree_view", opt);
  },
  journalsJournalIdCommentsCommentParentIdChildrenGet(opt: {
    commentParentId: number;
    journalId: number;
    sort: Array<string>;
  }): Promise<Array<BaseCommentDTO>> {
    return R.get(
      "/api/content/journals/{journalId}/comments/{commentParentId}/children",
      opt
    );
  },
  linksGet(opt: { sort: Array<string> }): Promise<Array<LinkDTO>> {
    return R.get("/api/content/links", opt);
  },
  linksTeam_viewGet(opt: { sort: Array<string> }): Promise<Array<LinkTeamVO>> {
    return R.get("/api/content/links/team_view", opt);
  },
  menusGet(opt: { sort: Array<string> }): Promise<Array<MenuDTO>> {
    return R.get("/api/content/menus", opt);
  },
  menusTree_viewGet(opt: { sort: Array<string> }): Promise<Array<MenuVO>> {
    return R.get("/api/content/menus/tree_view", opt);
  },
  optionsCommentGet(): Promise<any> {
    return R.get("/api/content/options/comment");
  },
  optionsKeysKeyGet(opt: { key: string }): Promise<BaseResponseobject> {
    return R.get("/api/content/options/keys/{key}", opt);
  },
  optionsList_viewGet(): Promise<Array<OptionDTO>> {
    return R.get("/api/content/options/list_view");
  },
  optionsMap_viewGet(opt: { key: Array<string> }): Promise<any> {
    return R.get("/api/content/options/map_view", opt);
  },
  photosGet(opt: {
    keyword: string;
    page: number;
    size: number;
    sort: Array<string>;
    team: string;
  }): Promise<PagePhotoDTO> {
    return R.get("/api/content/photos", opt);
  },
  photosLatestGet(opt: { sort: Array<string> }): Promise<Array<PhotoDTO>> {
    return R.get("/api/content/photos/latest", opt);
  },
  postsGet(opt: {
    page: number;
    size: number;
    sort: Array<string>;
  }): Promise<PagePostListVO> {
    return R.get("/api/content/posts", opt);
  },
  postsCommentsPost(opt: { postCommentParam: any }): Promise<BaseCommentDTO> {
    return R.post("/api/content/posts/comments", opt);
  },
  postsSearchPost(opt: {
    keyword: string;
    page: number;
    size: number;
    sort: Array<string>;
  }): Promise<PageBasePostSimpleDTO> {
    return R.post("/api/content/posts/search", opt);
  },
  postsSlugGet(opt: {
    formatDisabled: boolean;
    slug: string;
    sourceDisabled: boolean;
  }): Promise<PostDetailVO> {
    return R.get("/api/content/posts/slug", opt);
  },
  postsPostIdGet(opt: {
    formatDisabled: boolean;
    postId: number;
    sourceDisabled: boolean;
  }): Promise<PostDetailVO> {
    return R.get("/api/content/posts/{postId}", opt);
  },
  postsPostIdCommentsList_viewGet(opt: {
    page: number;
    postId: number;
    sort: Array<string>;
  }): Promise<PageBaseCommentWithParentVO> {
    return R.get("/api/content/posts/{postId}/comments/list_view", opt);
  },
  postsPostIdCommentsTop_viewGet(opt: {
    page: number;
    postId: number;
    sort: Array<string>;
  }): Promise<PageCommentWithHasChildrenVO> {
    return R.get("/api/content/posts/{postId}/comments/top_view", opt);
  },
  postsPostIdCommentsTree_viewGet(opt: {
    page: number;
    postId: number;
    sort: Array<string>;
  }): Promise<PageBaseCommentVO> {
    return R.get("/api/content/posts/{postId}/comments/tree_view", opt);
  },
  postsPostIdCommentsCommentParentIdChildrenGet(opt: {
    commentParentId: number;
    postId: number;
    sort: Array<string>;
  }): Promise<Array<BaseCommentDTO>> {
    return R.get(
      "/api/content/posts/{postId}/comments/{commentParentId}/children",
      opt
    );
  },
  postsPostIdLikesPost(opt: { postId: number }): Promise<void> {
    return R.post("/api/content/posts/{postId}/likes", opt);
  },
  postsPostIdNextGet(opt: { postId: number }): Promise<PostDetailVO> {
    return R.get("/api/content/posts/{postId}/next", opt);
  },
  postsPostIdPrevGet(opt: { postId: number }): Promise<PostDetailVO> {
    return R.get("/api/content/posts/{postId}/prev", opt);
  },
  sheetsGet(opt: {
    page: number;
    size: number;
    sort: Array<string>;
  }): Promise<PageSheetListVO> {
    return R.get("/api/content/sheets", opt);
  },
  sheetsCommentsPost(opt: { sheetCommentParam: any }): Promise<BaseCommentDTO> {
    return R.post("/api/content/sheets/comments", opt);
  },
  sheetsSlugGet(opt: {
    formatDisabled: boolean;
    slug: string;
    sourceDisabled: boolean;
  }): Promise<SheetDetailVO> {
    return R.get("/api/content/sheets/slug", opt);
  },
  sheetsSheetIdGet(opt: {
    formatDisabled: boolean;
    sheetId: number;
    sourceDisabled: boolean;
  }): Promise<SheetDetailVO> {
    return R.get("/api/content/sheets/{sheetId}", opt);
  },
  sheetsSheetIdCommentsList_viewGet(opt: {
    page: number;
    sheetId: number;
    sort: Array<string>;
  }): Promise<PageBaseCommentWithParentVO> {
    return R.get("/api/content/sheets/{sheetId}/comments/list_view", opt);
  },
  sheetsSheetIdCommentsTop_viewGet(opt: {
    page: number;
    sheetId: number;
    sort: Array<string>;
  }): Promise<PageCommentWithHasChildrenVO> {
    return R.get("/api/content/sheets/{sheetId}/comments/top_view", opt);
  },
  sheetsSheetIdCommentsTree_viewGet(opt: {
    page: number;
    sheetId: number;
    sort: Array<string>;
  }): Promise<PageBaseCommentVO> {
    return R.get("/api/content/sheets/{sheetId}/comments/tree_view", opt);
  },
  sheetsSheetIdCommentsCommentParentIdChildrenGet(opt: {
    commentParentId: number;
    sheetId: number;
    sort: Array<string>;
  }): Promise<Array<BaseCommentDTO>> {
    return R.get(
      "/api/content/sheets/{sheetId}/comments/{commentParentId}/children",
      opt
    );
  },
  statisticsGet(): Promise<StatisticDTO> {
    return R.get("/api/content/statistics");
  },
  statisticsUserGet(): Promise<StatisticWithUserDTO> {
    return R.get("/api/content/statistics/user");
  },
  tagsGet(opt: { more: boolean; sort: Array<string> }): Promise<Array<TagDTO>> {
    return R.get("/api/content/tags", opt);
  },
  tagsSlugPostsGet(opt: {
    page: number;
    size: number;
    slug: string;
    sort: Array<string>;
  }): Promise<PagePostListVO> {
    return R.get("/api/content/tags/{slug}/posts", opt);
  },
  themesActivationGet(): Promise<ThemeProperty> {
    return R.get("/api/content/themes/activation");
  },
  themesActivationSettingsGet(): Promise<any> {
    return R.get("/api/content/themes/activation/settings");
  },
  usersProfileGet(): Promise<UserDTO> {
    return R.get("/api/content/users/profile");
  },
};
