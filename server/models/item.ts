import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class Item extends Model {
  public id!: number;
  public name!: string;
  public description?: string;
  public recycle_method!: string;
  public recycle_location!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Item.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    description: {
      type: new DataTypes.STRING(256),
      allowNull: true
    },
    recycle_method: {
      type: new DataTypes.STRING(256),
      allowNull: false
    },
    recycle_location: {
      type: new DataTypes.STRING(256),
      allowNull: false
    }
  },
  {
    tableName: 'items',
    sequelize
  }
);

export default Item;
