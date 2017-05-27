export default (sequelize, DataType) => {
  const Endereco = sequelize.define('Endereco', {
    rua: {
      type: DataType.STRING(120),
      allowNull: false
    },
    numero: {
      type: DataType.INTEGER
    },
    bairro: {
      type: DataType.STRING(120),
      allowNull: false
    },
    userId: {
      type: DataType.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      },
      field: 'user_id'
    }
  }, {
    createdAt: 'created_at',
    updatedAt: 'update_at',
    tableName: 'endereco',

    classMethods: {
      associate: (models) => {
        Endereco.belongsTo(models.User, {
          foreignKey: 'userId'
        });
      }
    },

    scopes: {
      user: function (userId) {
        return {
          where: {
            id: userId
          }
        };
      }
    }
  });

  return Endereco;
};
