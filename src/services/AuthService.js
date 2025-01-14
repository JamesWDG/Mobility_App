import baseApi from './api';

const login = body => {
  return {
    url: '/login',
    method: 'POST',
    body,
  };
};

export const AuthService = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({query: login}),
  }),
  overrideExisting: true,
});

export const {useLoginMutation} = AuthService;
