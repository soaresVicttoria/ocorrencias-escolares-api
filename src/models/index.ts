import Usuario from "./model-usuario.js";
import Responsavel from "./model-responsavel.js";
import Estudante from "./model-estudante.js";
import Ocorrencia from "./model-ocorrencia.js";
import OcorrenciaEstudante from "./model-ocorrencia-estudante.js";
import { setupAssociations } from "./associations.js";

setupAssociations();

export { Usuario, Ocorrencia, Estudante, Responsavel, OcorrenciaEstudante };
