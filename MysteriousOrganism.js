// Returns a random DNA base

const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
    }
  
  //console.log('returnRandBase:' + returnRandBase());
  // Returns a random single strand of DNA containing 15 bases
  
  const mockUpStrand = () => {
    const newStrand = []
      for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
    }
  
  //console.log('mockUpStrand:' + mockUpStrand());
  
  function pAequorFactory(specimenNum, dna) {
    return {
      specimenNum: specimenNum,  
      dna: dna,  
      mutate() {
        
        this.dna = mockUpStrand();
        return this.dna;
      },
  
  //console.log(mutate(randomIndex));
  
   compareDNA(otherPAequor) {
        let identicalBases = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === otherPAequor.dna[i]) {
            identicalBases++;
          }
        }
        const percentageCommon = (identicalBases / this.dna.length) * 100;
        console.log(
          `Specimen #${this.specimenNum} and Specimen #${otherPAequor.specimenNum} have ${percentageCommon.toFixed(
            2
          )}% DNA in common`
        );
      },
  
      willLikelySurvive() {
        const survivalBases = this.dna.filter(base => base === 'C' || base === 'G');
        return (survivalBases.length / this.dna.length) >= 0.6;
      }
  
    };
  }
  
  //const exampleSpecimen = pAequorFactory(1, mockUpStrand());
  //console.log("Original DNA:", exampleSpecimen.dna);
  //console.log("Mutated DNA:", exampleSpecimen.mutate());
  
  const specimen1 = pAequorFactory(1, mockUpStrand());
  const specimen2 = pAequorFactory(2, mockUpStrand());
  
  console.log("Specimen 1 DNA:", specimen1.dna);
  console.log("Specimen 2 DNA:", specimen2.dna);
  
  specimen1.compareDNA(specimen2);
  
  const survivingSpecimens = [];
  let specimenNum = 1;
  
  while (survivingSpecimens.length < 30) {
    const newSpecimen = pAequorFactory(specimenNum, mockUpStrand());
    if (newSpecimen.willLikelySurvive()) {
      survivingSpecimens.push(newSpecimen);
    }
    specimenNum++;
  }
  
  console.log(survivingSpecimens);
  
  
  