const sortByAphabet = (data, inverse = false) => {
  return data.sort((a, b) => {
    let compare = 0;
    if (a.first_name.toLowerCase() > b.first_name.toLowerCase()) compare = 1;
    if (a.first_name.toLowerCase() < b.first_name.toLowerCase()) compare = -1;
    if (inverse) compare *= -1;
    return compare;
  });
};

export { sortByAphabet };
