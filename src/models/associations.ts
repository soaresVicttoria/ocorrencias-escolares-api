import Usuario from "./model-usuario.js";
import Estudante from "./model-estudante.js";
import Ocorrencia from "./model-ocorrencia.js";
import Responsavel from "./model-responsavel.js";
import OcorrenciaEstudante from "./model-ocorrencia-estudante.js";

export function setupAssociations() {
  Usuario.hasMany(Ocorrencia, {
    foreignKey: "usuarioId",
  });

  Ocorrencia.belongsTo(Usuario, {
    foreignKey: "usuarioId",
  });

  Responsavel.hasMany(Estudante, {
    foreignKey: "responsavelId",
  });

  Estudante.belongsTo(Responsavel, {
    foreignKey: "responsavelId",
  });

  Ocorrencia.belongsToMany(Estudante, {
    through: OcorrenciaEstudante,
    foreignKey: "ocorrenciaId",
    otherKey: "estudanteId",
  });

  Estudante.belongsToMany(Ocorrencia, {
    through: OcorrenciaEstudante,
    foreignKey: "estudanteId",
    otherKey: "ocorrenciaId",
  });
}

export { Estudante, Ocorrencia, Responsavel, Usuario, OcorrenciaEstudante };
