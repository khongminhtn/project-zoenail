import React from "react";

function FunFacts(props) {
    const quotes = [
        "Fingernails grow quicker in the summer than the winter",
        "Fingernails grow an average of 3.5 millimeters per month.",
        "The fingernails on your dominant hand tend to grow faster.",
        "Fingernails are made out of the same stuff as hair—a hard material called keratin. It’s a protein made of dead cells, which is why cutting your fingernails and hair doesn’t hurt. Bird feathers and horse hooves are also made of keratin.",
        "Fingernails are what separate the primates from the mammals.",
        "Men’s fingernails grow faster than women’s nails. But, women’s fingernails do grow faster during pregnancy due to hormones.",
        "Our fingernails have no feeling. Zero. Zilch.",
        "Typing with your nails will actually stimulate their growth.",
        "In ancient Egypt, a women’s status symbol was based on the color of her nails. Red being the highest rank. No wonder red manicures are so iconic!",
        "Painting designs and pictures onto our fingernails isn’t something new and trendy. It was a familiar practice with the Incas, many of whom had eagle designs on their fingernails.",
        "Nails on a chalkboard make you cringe? There’s a reason.The noise hits a frequency that’s naturally amplified by the shape of our ear canals.",
        "Our cuticles aren’t just for decoration. They serve a purpose! The cuticle seals moisture and environmental germs out of the body. This is why it’s very important to not pick at your cuticles.",
        "Your thumbnail grows the slowest.",
        "Your middle fingernail grows faster than your other fingers.",
        "Fingernails are for protecting not only the fingertips but also the surrounding soft tissue from any external injuries.",
        "Nail polish originated in China as early as 3000 BC. The ingredients? Egg whites, gelatin, vegetable dyes and beeswax.",
        "Increasing your water intake can improve dry fingernails.",
    ]
    const style = {
        margin: "0 5% 30px 5%",
        fontSize: "15px",
    }
    return(
        <div style={style}>Did you know {quotes[props.selector]}</div>
    )
}

export {FunFacts}