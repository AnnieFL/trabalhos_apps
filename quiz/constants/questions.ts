export interface IQUESTION {
  question: string,
  answers: string[],
  correct: number,
  difficulty: 'easy' | 'medium' | 'hard'
}

  export const QUESTIONS:IQUESTION[] = [
    {question: "Qual dos seguintes é um sauropoda?", answers: [
      "Tiranossauro Rex", "Velociraptor", "Barionyx", "Braquiossauro"
    ], correct: 3, difficulty: 'hard'},
    {question: "Qual dos seguintes é um terópode?", answers: [
      "Spinossauro", "Argentinossauro", "Pterossauro", "Elasmossauro"
    ], correct: 0, difficulty: 'hard' },
    {question: "Qual desses é um exemplo de um dinossauro ainda vivo?", answers: [
      "Crocodilo", "Corvo", "Lobo", "Tartaruga"
    ], correct: 1, difficulty: 'medium'},
    {question: "Qual desses NÃO é um dinossauro?", answers: [
      "Elasmossauro", "Utahraptor", "Ceratossauro", "Alossauro"
    ], correct: 0, difficulty: 'medium'},
    {question: "Um desses foi descoberto no Brasil, qual?", answers: [
      "Velociraptor", "Argentinossauro", "Tapejara", "Paquirrinossauro"
    ], correct: 2, difficulty: 'easy'},
    {question: "O que significa o nome Deinonychus?", answers: [
      "Dente afiado", "Dente grande", "Garra pontuda", "Garra terrível"
    ], correct: 3, difficulty: 'medium'},
    {question: "Qual dos seguintes é NÃO é um período no qual os dinossauros viveram?", answers: [
      "Cretáceo", "Jurássico", "Paleolítico", "Triássico"
    ], correct: 2, difficulty: 'easy'},
    {question: "Qual foi a causa da extinção dos dinossauros?", answers: [
      "Explosão nuclear", "Meteoro", "Inundações", "Pandemia"
    ], correct: 1, difficulty: 'easy'},
    {question: "Qual desses é um ceratopsia?", answers: [
      "Triceratops", "Lambeossauro", "Quetzalcoatlus", "Parasaurolopus"
    ], correct: 0, difficulty: 'easy'},
    {question: "Qual desses NÃO é um espinossaurídeo?", answers: [
      "Spinosaurus", "Ceratosuchops", "Baryonyx", "Neovenator"
    ], correct: 3, difficulty: 'hard'},
    {question: "Qual foi o primeiro dinossauro a ser descoberto?", answers: [
      "Tiranossauro Rex", "Velociraptor", "Megalossauro", "Braquiossauro"
    ], correct: 2, difficulty: 'medium'},
    {question: "Qual foi o segundo dinossauro a ser descoberto?", answers: [
      "Iguanodon", "Ceratossauro", "Concavenator", "Tarbossauro"
    ], correct: 0, difficulty: 'hard'},
    {question: "De qual dinossauro nós sabemos a cor exata?", answers: [
      "Edmontossauro", "Stegossauro", "Psittacossauro", "Tiranossauro Rex"
    ], correct: 2, difficulty: 'hard'}
  ];