export const getPagination = (query) => {
  const page = Math.max(1, parseInt(query.page, 10) || 1);
  const limit = Math.min(100, Math.max(1, parseInt(query.limit, 10) || 12));
  const offset = (page - 1) * limit;
  const sort = query.sort || 'createdAt';
  const order = (query.order || 'DESC').toUpperCase();

  return { page, limit, offset, sort, order };
};

export const formatPaginationResponse = (total, page, limit) => {
  const totalPages = Math.ceil(total / limit) || 1;
  return {
    page,
    limit,
    total,
    totalPages,
  };
};
