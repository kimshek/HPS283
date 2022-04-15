import React, { useState, useEffect } from 'react';

function AlanTuring(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <p style={{textAlign: 'left', color:'black', paddingLeft: '2%'}}>Alan Turing played a pivotal role 
            in decryption during the war but also in the birth of artificial intelligence. 
            </p>
        <h1 style={{textAlign: 'left', color:'black', paddingLeft: '2%'}}>During the War</h1>
            <p style={{textAlign: 'left', color:'black', paddingLeft: '2%'}}>During the war, the Nazis sent radio 
            messages to each other using Enigma machine encryption [2]. Unlike the more destructive forms of 
            engineering seen in other wars ( atom bombs, guns,etc.) a different wartime engineering was taking 
            place with Alan Turing as he helped to lead the development of a decryption machine called the Bombe 
            that was made to decrypt these messages [2]. The machine was based off an earlier Polish version called 
            the Bomba that was rendered ineffective after the Nazis altered their encryption procedures [2]. After 
            a collaboration between the Polish and British [7, Appendix A], this technopolitical artifact was 
            created. With this innovation, the Allied forces were able to leverage this engineering feat for 
            political advancement as it provided them with critical information about Nazi plans and would help 
            them prepare for advances [2]. Soon after its creation, 39,000 messages were being decoded per month 
            and eventually ramped up to 84,000 messages per month [2]. The Bombe was specifically noted to help 
            the Allies not be overrun by German U-Boats in __[8, p9]. <br />  <br />
            In addition to the Bombe, Turing played an important part in decoding the Tunny by finding a method 
            to break the encryption by hand[4]. Although it was relatively slow, these methods helped influence 
            the construction of the Colossus, which was a machine built specifically to decode the Tunny encryption 
            [4]. 
            </p>
        <h1 style={{textAlign: 'left', color:'black', paddingLeft: '2%'}}>After the War</h1>
            <p style={{textAlign: 'left', color:'black', paddingLeft: '2%', paddingBottom: '5%'}}> After the war, Alan Turing still 
            had a major influence on the world we live in today through his thoughts on artificial intelligence. 
            Even during his time at Bletchley Park, Turing spoke about his ideas on intelligent computers to his 
            peers. In one case, he spoke about a computer’s ability to play chess by changing its own program due 
            to its experience [3]. Similar to the Chess-Playing Turk, he had a vision of a machine that seemed to 
            learn and think on its own and hide the underlying logic and mechanics behind these decisions. Today, 
            artificial intelligence is used in many facets of our lives, however problems have arisen due to the 
            training of these machines. As humans train machines using human picked data, biases creep into these 
            systems and can lead unwanted outcomes such as discrimination and oppression (Lohman, week 7).
            </p>
        </div>
    )
}

export default AlanTuring;