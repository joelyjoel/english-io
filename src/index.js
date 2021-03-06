/**
 * @module entity-game
 */

module.exports = {
  Dictionary: require('./Dictionary'),

  PredicateSyntax: require('./PredicateSyntax'),
  Predicate: require('./Predicate'),
  //PredicateSet: require('./PredicateSet'),


  Entity: require('./Entity'),
  //parseImperative: require('./parseImperative'),
  Sentence: require('./Sentence'),
  //SentenceQueue: require('./SentenceQueue'),

  DescriptionContext: require('./DescriptionContext'),
  WanderingDescriber: require('./WanderingDescriber'),
  FactListener: require('./FactListener'),

  search: require('./search'),

  sentencify: require('./util/spellcheck').sentencify,

  EntitySpawner: require('./EntitySpawner'),

  Declarer: require('./Declarer'),

  //util: require('./util'),
}
