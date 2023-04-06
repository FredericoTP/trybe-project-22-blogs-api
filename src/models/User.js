module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      displayName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      image: {
        type: DataTypes.STRING
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'users',
    }
  );

  User.associate = (models) => {
    User.hasMany(models.BlogPost,
      {
        foreignKey: 'user_id',
        as: 'blog_posts'
      }
    );
  }

  return User;
}