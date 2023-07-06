// Display list of all Blogs.
const card_list = (req, res) => {
    BlogModel.find({}, (err, blogs) =>{
      if(err) {
          res.status(500).send({
              status: 500,
              msg: 'No Blogs Available.'
          });
      }
      res.status(200).send(blogs)
  })
};

const card_name_get = (req, res) => {
    BlogModel.find({}, (err, blogs) =>{
      if(err) {
          res.status(500).send({
              status: 500,
              msg: 'No Blogs Available.'
          });
      }
      res.status(200).send(blogs)
  })
};


module.exports = { blog_list_get ,blog_create_post };