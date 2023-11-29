fetch(
  'https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&count=3&from=1&aid=2608&uuid=7145810834685003271&spider=0'
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.error(err)
  })
