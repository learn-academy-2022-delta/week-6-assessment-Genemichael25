# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This is defining the first method in the controller.
class BlogPostsController < ApplicationController
  def index
    # ---2) This will display all the blogs when calling on the index method. 
    @posts = BlogPost.all
  end

  # ---3) This method is to display a specific blog.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) This will allow us to see a form for a new blog post. 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) If the new blog post meets the param requirements, it will create the new blog and redirect us to see the blog post individually. If not successful, it will send us back to the form. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) This will take us to a form to edit an entry based on the id we pass. 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) This is after an edit has been submitted and it will redirect to the post that was updated if successful or back to the edit form if not. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) This redirect will send us back to the individual blog post if destroy is not succesful. 
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) This is the declaration of the private params which will only be able to be used in this class/controller. 
  private
  def blog_post_params
    # ---10) These are the requirements for a new blog to created. It will require a title and content.
    params.require(:blog_post).permit(:title, :content)
  end
end
