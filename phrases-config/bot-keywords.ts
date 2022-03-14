export const typicalHelloResponse: Array<String> = [
    "Bonjour, tu vas bien?",
    "Coucou, tu vas bien?",
    "Salut, tu vas bien?",
    "Bonjour, what's up?",
    "Coucou, tu racontes quoi?",
    "Salut, comment vas-tu?"
]; 

export const atypicalHelloResponse: Array<String> = [
    "Wesh le sang, comment vas?",
    "Yo ! La bess?", 
    "Hey, ça fait plaiz de te voir!",
    "Oh compèère!", 
    "Wesh gros!", 
    "Oh habibi!"
]; 

export const triggerWords = {
    bonjour: typicalHelloResponse,
    coucou: typicalHelloResponse, 
    calut: typicalHelloResponse, 
    wesh: atypicalHelloResponse,
    hey: atypicalHelloResponse, 
    yo: atypicalHelloResponse
};