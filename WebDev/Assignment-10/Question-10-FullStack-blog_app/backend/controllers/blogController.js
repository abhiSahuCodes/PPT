import Blog from '../models/Blog.js';


// Adding Blog
export const addBlog = async (req, res) => {
  try {
    const { title, desc, img, content } = req.body;
    const author = req.user.id; 

    const newBlog = new Blog({ title, desc, img, content, author });
    await newBlog.save();

    res.status(201).json({ message: 'Blog post created successfully', blog: newBlog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Getting all Blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate('author', 'name email');
    res.status(200).json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Deleting blog
export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }

    if (blog.author.toString() !== req.user.id) {
      return res.status(403).json({ message: 'You are not authorized to delete this blog post' });
    }

    await Blog.deleteOne({ _id: id });
    res.status(200).json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Updating Blog
export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }

    if (blog.author.toString() !== req.user.id) {
      return res.status(403).json({ message: 'You are not authorized to update this blog post' });
    }

    const { title, desc, img, content } = req.body;
    blog.title = title;
    blog.desc = desc;
    blog.img = img;
    blog.content = content;

    await blog.save();

    res.status(200).json({ message: 'Blog post updated successfully', blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Getting blog by Id
export const getBlogByID = async (req, res) => {
  try {
    const { blogID } = req.params;
    const blog = await Blog.findById(blogID).populate('author', 'name email');

    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }

    res.status(200).json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


//Getting blog of the user
export const getBlogsOfUser = async (req, res) => {
  try {
    const { authorID } = req.params;

    if (authorID !== req.user.id) {
      return res.status(403).json({ message: 'You are not authorized to access these blog posts' });
    }

    const blogs = await Blog.find({ author: authorID }).populate('author', 'name email');
    res.status(200).json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
