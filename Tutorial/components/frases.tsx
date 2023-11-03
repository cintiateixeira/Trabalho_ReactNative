import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


const frases: string[] = [
    "Um homem que ousa desperdiçar uma hora ainda não descobriu o valor da vida.",
    "Um homem da ciência não deve ter desejos, nem afeições, somente um mero coração de pedra.",
    "Conseguimos realizar nossos propósitos, economizando os minutos.",
    "Para ser um bom observador é preciso ser um bom teórico.",
    "Se a miséria dos nossos pobres não fosse causada pelas leis da natureza, mas pelas nossas instituições, grande seria no nosso pecado.",
    "Me transformei num tipo de máquina de observar fatos e formular conclusões.",
    "Não gostamos que os animais, a quem tornamos nossos escravos, sejam considerados nossos iguais.",
    "A compaixão para com os animais é das mais nobres virtudes da natureza humana.",
    "Devemos, no entanto, reconhecer, como me parece, que o homem com todas as suas nobres qualidades... ainda sofre em sua prisão corpórea a indelével marca de sua humilde origem.",
    "Na sobrevivência dos indivíduos e raças favorecidas, durante a luta constante e recorrente pela existência, vemos uma forma poderosa e incessante de seleção.",
    "A atenção é a mais importante de todas as faculdades para o desenvolvimento da inteligência humana.",
    "Não consigo me convencer de que um Deus caridoso e onipotente teria propositalmente criado vespas parasitas com a intenção expressa de alimentá-las dentro de corpos vivos de lagartas.",
    "Tem sido uma amarga penitência para mim digerir a conclusão de que 'essa corrida é para os fortes' e que eu provavelmente farei pouco mais do que me contentar em admirar os avanços que outros obtiveram na ciência.",
    "Fatos falsos são altamente prejudiciais ao progresso da ciência, por sua natureza prolongada; mas falsas opiniões, se suportadas por alguma evidência, causam pequenos danos, pois todos sentem um prazer salutar em provar sua falsidade.",
    "A ignorância gera confiança com mais frequência do que o conhecimento: são aqueles que sabem pouco, e não aqueles que sabem muito, que tão positivamente afirmam que esse ou aquele problema jamais será resolvido pela ciência.",
    "Se o mistério da pobreza não for causado pelas leis da natureza, mas pelas nossas instituições, grande é o nosso delito.",
    "O rubor é a mais peculiar e humana de todas as expressões.",
    "A história se repete. Esse é um dos horrores da História."
]

export function Componente() {
    let numberRandom = Math.floor(Math.random() * frases.length)
    return (
        frases[numberRandom]
    );
}
