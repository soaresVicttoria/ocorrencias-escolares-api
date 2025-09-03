import { ClassModel } from "./class.model";
import { GradeLevelModel } from "./grade-level.model";

GradeLevelModel.hasMany(ClassModel, {
  foreignKey: "gradeLevelId",
});
ClassModel.belongsTo(GradeLevelModel, {
  constraints: true,
  foreignKey: "gradeLevelId",
});
