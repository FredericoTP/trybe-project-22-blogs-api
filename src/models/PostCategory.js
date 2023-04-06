module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      postId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
    },
    {
      timestamps: false,
      tableName: 'posts_categories',
      underscored: true
    })

  PostCategory.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'id',
      otherKey: 'id'
    })

    Category.belongsToMany(BlogPost, {
      as: 'blog_posts',
      through: PostCategory,
      foreignKey: 'id',
      otherKey: 'id'
    })
  }

  return PostCategory;
}