import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './authApi';
import { blogsApi } from './blogsApi';
import { audioApi } from './audioApi';
import { videoApi } from './videoApi';
import { galleryApi } from './galleryApi';
import { usersApi } from './usersApi';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [blogsApi.reducerPath]: blogsApi.reducer,
    [audioApi.reducerPath]: audioApi.reducer,
    [videoApi.reducerPath]: videoApi.reducer,
    [galleryApi.reducerPath]: galleryApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(blogsApi.middleware)
      .concat(audioApi.middleware)
      .concat(videoApi.middleware)
      .concat(galleryApi.middleware)
      .concat(usersApi.middleware),
});
