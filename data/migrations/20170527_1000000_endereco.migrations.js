import Endereco from '../../src/models/endereco.model';

module.exports = { up, down };

async function up (db) {
  const DataType = db.Sequelize;

  const Endereco = db.sequelize.define('Endereco', {
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
    tableName: 'endereco'
  });

  await Endereco.sync();
}

async function down (db) {
  await Endereco(db.sequelize, db.Sequelize).drop();
}
