const graph = {
      'Abşeron': ['Bakı', 'Sumqayıt', 'Xızı', 'Qobustan', 'Hacıqabul'], 
      'Ağstafa': ['Qazax', 'Tovuz'], 
      'Ağcabədi': ['Bərdə', 'Zərdab', 'Füzuli', 'Ağdam', 'Xocavənd', 'Beyləqan'], 
      'Ağdaş': ['Bərdə', 'Yevlax', 'Qəbələ', 'Göyçay', 'Ucar', 'Zərdab','Şəki'], 
      'Ağdam': ['Xocalı', 'Kəlbəcər', 'Tərtər', 'Bərdə', 'Ağcabədi', 'Xocavənd'], 
      'Ağsu': ['Şamaxı', 'Hacıqabul', 'Kürdəmir', 'İsmayıllı'], 
      'Astara': ['Lənkəran', 'Lerik'], 
      'Bakı': ['Salyan', 'Hacıqabul', 'Abşeron', 'Sumqayıt'], 
      'Babək': ['Kəngərli', 'Şahbuz', 'Culfa', 'Naxçıvan','Zəngəzur'], 
      'Balakən': ['Zaqatala'], 
      'Bərdə': ['Yevlax', 'Ağdaş', 'Zərdab', 'Ağcabədi', 'Ağdam', 'Tərtər'], 
      'Beyləqan': ['Ağcabədi', 'Zərdab', 'Füzuli', 'İmişli'], 
      'Biləsuvar': ['İmişli', 'Saatlı', 'Sabirabad', 'Salyan', 'Neftçala', 'Cəlilabad'], 
      'Cəbrayıl': ['Zəngilan', 'Qubadlı', 'Xocavənd', 'Füzuli'], 
      'Cəlilabad': ['Biləsuvar', 'Salyan', 'Neftçala', 'Masallı', 'Yardımlı'], 
      'Culfa': ['Babək', 'Şahbuz', 'Ordubad','Zəngəzur'], 
      'Daşkəsən': ['Şəmkir', 'Kəlbəcər', 'Gədəbəy', 'Göygöl'], 
      'Füzuli': ['Cəbrayıl', 'Xocavənd', 'Ağcabədi', 'Beyləqan'],
      'Gəncə': ['Göygöl', 'Samux'], 
      'Gədəbəy': ['Tovuz', 'Şəmkir', 'Daşkəsən'], 
      'Goranboy': ['Samux', 'Göygöl', 'Kəlbəcər', 'Tərtər', 'Yevlax'], 
      'Göyçay': ['İsmayıllı', 'Kürdəmir', 'Ucar', 'Ağdaş','Qəbələ'], 
      'Göygöl': ['Gəncə', 'Samux', 'Goranboy', 'Kəlbəcər', 'Daşkəsən', 'Şəmkir'], 
      'Hacıqabul': ['Sabirabad', 'Kürdəmir', 'Ağsu', 'Şamaxı', 'Qobustan', 'Abşeron', 'Bakı', 'Salyan'], 
      'İmişli': ['Beyləqan', 'Zərdab', 'Kürdəmir', 'Sabirabad', 'Saatlı', 'Biləsuvar'], 
      'İsmayıllı': ['Quba', 'Şamaxı', 'Ağsu', 'Kürdəmir', 'Göyçay', 'Qəbələ'], 
      'Kəlbəcər': ['Daşkəsən', 'Göygöl', 'Goranboy', 'Tərtər', 'Ağdam', 'Xocalı', 'Laçın','Zəngəzur'], 
      'Kəngərli': ['Şərur', 'Babək','Zəngəzur'], 
      'Kürdəmir': ['Hacıqabul', 'Sabirabad', 'İmişli', 'Zərdab', 'Ucar', 'Göyçay', 'İsmayıllı', 'Ağsu'], 
      'Laçın': ['Kəlbəcər', 'Xocalı', 'Şuşa', 'Xocavənd', 'Qubadlı','Zəngəzur'], 
      'Lənkəran': ['Neftçala', 'Masallı', 'Lerik', 'Astara'], 
      'Lerik': ['Yardımlı', 'Masallı', 'Astara', 'Lənkəran'], 
      'Masallı': ['Lənkəran', 'Lerik', 'Yardımlı', 'Cəlilabad', 'Neftçala'], 
      'Mingəçevir': ['Yevlax'], 
      'Neftçala': ['Salyan', 'Biləsuvar', 'Cəlilabad', 'Masallı', 'Lənkəran'], 
      'Naxçıvan': ['Babək'], 
      'Oğuz': ['Şəki', 'Qəbələ'], 
      'Ordubad': ['Culfa','Zəngəzur'], 
      'Qəbələ': ['Oğuz', 'Qusar', 'Quba', 'İsmayıllı', 'Ağdaş', 'Göyçay','Şəki'], 
      'Qax': ['Zaqatala', 'Şəki', 'Yevlax', 'Samux'], 
      'Qazax': ['Ağstafa'], 
      'Quba': ['Qusar', 'Xaçmaz', 'Şabran', 'Şamaxı', 'İsmayıllı', 'Qəbələ'], 
      'Qubadlı': ['Laçın', 'Zəngilan', 'Xocavənd', 'Cəbrayıl','Zəngəzur'], 
      'Qobustan': ['Şamaxı', 'Xızı', 'Abşeron', 'Hacıqabul'], 
      'Qusar': ['Qəbələ', 'Quba', 'Xaçmaz'], 
      'Sabirabad': ['Saatlı', 'İmişli', 'Kürdəmir', 'Hacıqabul', 'Salyan', 'Biləsuvar'], 
      'Sədərək': ['Şərur'], 
      'Şahbuz': ['Babək', 'Culfa','Zəngəzur'], 
      'Şəki': ['Qax', 'Yevlax', 'Ağdaş', 'Qəbələ', 'Oğuz'], 
      'Salyan': ['Hacıqabul', 'Neftçala', 'Biləsuvar', 'Sabirabad', 'Bakı', 'Cəlilabad'], 
      'Şərur': ['Sədərək', 'Kəngərli','Zəngəzur'], 
      'Saatlı': ['Biləsuvar', 'İmişli', 'Sabirabad'], 
      'Şabran': ['Quba', 'Xaçmaz', 'Siyəzən','Şamaxı','Xızı'], 
      'Siyəzən': ['Şabran', 'Xızı'], 
      'Şəmkir': ['Tovuz', 'Gədəbəy', 'Daşkəsən', 'Göygöl', 'Samux'], 
      'Sumqayıt': ['Xızı', 'Abşeron', 'Bakı'], 
      'Şamaxı': ['Şabran', 'Quba', 'İsmayıllı', 'Ağsu', 'Hacıqabul', 'Qobustan', 'Xızı'], 
      'Samux': ['Gəncə', 'Göygöl', 'Şəmkir', 'Tovuz', 'Qax', 'Yevlax', 'Goranboy'], 
      'Şuşa': ['Xocalı', 'Xocavənd', 'Laçın'], 
      'Tərtər': ['Ağdam', 'Goranboy', 'Yevlax', 'Bərdə','Kəlbəcər'], 
      'Tovuz': ['Ağstafa', 'Şəmkir', 'Gədəbəy', 'Samux'], 
      'Ucar': ['Göyçay', 'Kürdəmir', 'Zərdab', 'Ağdaş'], 
      'Xaçmaz': ['Qusar', 'Quba', 'Şabran'], 
      'Xocalı': ['Laçın', 'Kəlbəcər', 'Ağdam', 'Xocavənd', 'Şuşa'], 
      'Xızı': ['Siyəzən', 'Quba', 'Şamaxı', 'Qobustan', 'Abşeron','Şabran','Sumqayıt'], 
      'Xocavənd': ['Ağdam', 'Ağcabədi', 'Füzuli', 'Cəbrayıl', 'Qubadlı', 'Laçın', 'Şuşa', 'Xocalı'], 
      'Yardımlı': ['Lerik', 'Masallı', 'Cəlilabad'], 
      'Yevlax': ['Ağdaş', 'Bərdə', 'Tərtər', 'Goranboy', 'Samux', 'Qax', 'Şəki','Mingəçevir'], 
      'Zəngilan': ['Qubadlı', 'Cəbrayıl','Zəngəzur'], 
      'Zaqatala': ['Balakən', 'Qax'], 
      'Zərdab': ['Ucar', 'Ağdaş', 'Bərdə', 'Ağcabədi', 'Beyləqan', 'İmişli', 'Kürdəmir'],
      'Zəngəzur': ['Kəlbəcər', 'Laçın', 'Qubadlı', 'Zəngilan', 'Ordubad', 'Culfa','Şahbuz','Babək','Kəngərli','Şərur']
      };


function getThreeRegion(starting, ending, current, target, path){
      let current1 = graph[current];
      let current_neighbors = current1.filter(element => element !== target);
      let key = Object.keys(graph);
      let keys = key.filter(element => (![starting, ending, current, target].includes(element) && !current_neighbors.includes(element)));
      let shuffledKeys = keys.sort(() => 0.5 - Math.random());
      
      console.log(current_neighbors);
      console.log(keys.includes('Şərur'));
      if (current_neighbors.length == 0){
            var randomKeys = shuffledKeys.slice(0, 2);
      };
      if (current_neighbors.length == 1){
            var randomKeys = shuffledKeys.slice(0, 1);
      }
      if (randomKeys){
      for (let i = 0; i < randomKeys.length; i++) {
          if ([starting, ending, current, target].includes(randomKeys[i])){
              getThreeRegion(starting, ending, current, target, path);
          }  
      }
      }
      else{
            var randomKeys = [];
            var shuffledNeighbors = current_neighbors.sort(() => 0.5 - Math.random());
            var remaining_neighbors = shuffledNeighbors.slice(0,2);
            current_neighbors = remaining_neighbors;
      }
      current_neighbors.push(target);
      var result = current_neighbors.concat(randomKeys);
      var shuffledResult = result.sort(() => 0.5 - Math.random());
      result = shuffledResult;
      index = result.indexOf(target)
      console.log(result, index);
  }

  getThreeRegion('İsmayıllı', 'Balakən', 'Biləsuvar', 'İmişli', ['Şərur', 'Kəngərli', 'Babək', 'Culfa'])