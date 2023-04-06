module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      published: {
        type: DataTypes.DATE,
      },
      updated: {
        type: DataTypes.DATE,
      },
    },
    {
      timestamps: true,
      createdAt: 'published',
      updatedAt: 'updated',
      underscored: true,
      tableName: 'categories',
    }
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      {
        foreignKey: 'id',
        as: 'user',
      }
    );
  };

  return BlogPost;
}