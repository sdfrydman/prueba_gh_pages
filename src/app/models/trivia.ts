import { Pregunta, PreguntaUsuario } from "./pregunta";

export class Trivia {
    cuestionario: Pregunta[] = [];
    PositionX:number=0;
    PositionY:number=0;
}

export class TriviaUser {
    cuestionarioUsuario: PreguntaUsuario[] = [];
}