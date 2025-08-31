import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class foods extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    food_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'food_types',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'foods',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "FK_foods_food_types",
        using: "BTREE",
        fields: [
          { name: "food_type_id" },
        ]
      },
    ]
  });
  }
}
