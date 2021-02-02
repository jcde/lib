



export class AppSession {
  Salt: string;
  
  
}




export class Artifact {
  
  
}




export class BasinDem {
  P: number;
  Hoq: number;
  Depth: number;
  Geoid: BasinDemGeoid;
  Curvature: number;
  
  
}




export class BasinDemGeoid {
  X: number;
  Y: number;
  Z: number;
  A: number;
  B: number;
  C: number;
  D: number;
  
  
}




export class CalcTemplate {
  Id: string;
  Url: string;
  ParentDoc: Doc;
  Group: string;
  WikidataItemId: number;
  Translation: string;
  Sites: Site[];
  
  SyncType: SyncType;
  
}



export class Config {
  Id: number;
  Value: string;
  DefaultValue: string;
  
  Setting: SettingEnum;
  
}




export class Coor {
  Lambda: number;
  Beta: number;
  
  
}




export class DbObject {
  
  
}


export class Doc extends Artifact {
  Id: string;
  Parent: Doc;
  AddedBy: User;
  Added: Date;
  Mover: Person;
  Url: string;
  WikidataItemId: number;
  Translation: string;
  
  Type: DocType;
  
}






export class DocPart {
  Id: string;
  Doc: Doc;
  Number: string;
  Translation: string;
  
  
}
 
export enum DocType {
  Oral = 64,
  Common = 65,
  Model = 66,
  PaperDocument = 67,
  Photo = 68,
  Audio = 69,
  Video = 70
}

 
export enum EntityType {
  None = 0,
  Person = 1,
  PName = 2,
  Translation = 16,
  Doc = 64,
  DocPart = 32,
  EventType = 128,
  Event = 256,
  ETime = 512,
  EPlace = 1024,
  Family = 32768
}





export class Event {
  Id: string;
  EventType: EventType;
  CauseArtifactId: string;
  EffectArtifactId: string;
  
  CauseArtifactType: EntityType;
  EffectArtifactType: EntityType;
  
}




export class EventType {
  Id: string;
  Parent: EventType;
  Label: string;
  
  
}


export class Family extends Artifact {
  Id: string;
  MilkMother: Person;
  Father: Person;
  BioFather: Person;
  BioMother: Person;
  Mother: Person;
  FirstLover: Person;
  EventType: string;
  X: number;
  Y: number;
  Z: number;
  
  
}




export class HealCoor extends Coor {
  Altitude: number;
  Ring: number;
  PixelInRing: number;
  
  
}






export class HealDem {
  SquareKeys: number[];
  SquareValues: BasinDem[][];
  
  
}




export class IdObject {
  Id: string;
  
  ThisEntityType: EntityType;
  
}




export class ImportStatus {
  Ready4Calc: number;
  Result: any[];
  Error: string;
  Warning: string;
  Job: Job;
  JobHistory: string;
  
  
}
 
export enum InconsistencyType {
  SexDuplicate = 10
}





export class Job {
  Id: string;
  AddedBy: User;
  Added: Date;
  Finished: Date;
  Site: Site;
  Template: CalcTemplate;
  Url: string;
  Result: string;
  Parameters: string;
  
  Status: JobStatus;
  ActionType: JobAction;
  
}
 
export enum JobAction {
  Import = 1,
  EstimateEffort = 2,
  Refresh = 3
}

 
export enum JobStatus {
  Offered = 0,
  Starting = 1,
  Started = 2,
  Failed = 3,
  Done = 4,
  Canceling = 5,
  Canceled = 6,
  ProgressGetting = 7
}





export class JsonResult {
  Data: any;
  Success: boolean;
  Errors: string[];
  
  
}




export class Link {
  Id: string;
  Doc: Doc;
  DocPart: DocPart;
  Event: Event;
  PName: PName;
  PSex: PSex;
  Family: Family;
  Trust: Trust;
  Job: Job;
  
  Type: InconsistencyType;
  
}




export class NameInFamily {
  PName: PName;
  DocParts: DocPart[];
  Families: Family[];
  Relations: Relations;
  PersonProperties: PersonProperties;
  X: number;
  Z: number;
  
  
}


export class Person extends Artifact {
  Id: string;
  
  Type: PersonType;
  
}






export class PersonProperties {
  Birthday: Date;
  BirthdayText: string;
  Deathday: Date;
  Description: string;
  
  Sex: Sex;
  
}




export class PersonProperty {
  Person: Person;
  
  
}
 
export enum PersonType {
  Person = 1,
  Organization = 2,
  Human = 3,
  Spirit = 4,
  Animal = 5,
  Dynasty = 7
}



export class PName extends PersonProperty {
  Id: string;
  Name: string;
  ShortName: string;
  Url: string;
  Language: string;
  Translation: string;
  TranslationUrl: string;
  
  
}






export class PropertyValue {
  Name: string;
  Raw: string;
  Fulltext: string;
  Lat: string;
  Lon: string;
  DateTime: Date;
  
  
}


export class PSex extends PersonProperty {
  Id: string;
  
  Sex: Sex;
  
}






export class Relations {
  Generation: number;
  
  
}
 
export enum SettingEnum {
  MediaPath = 100
}

 
export enum Sex {
  Male = 6581097,
  Female = 6581072
}





export class Site {
  Id: string;
  BaseUrl: string;
  Languages: string;
  
  
}
 
export enum SyncType {
  ImportFromMW = 2,
  ExportToMW = 4,
  MW = 6,
  ImportFromWikiData = 8
}





export class Template4Site {
  Id: string;
  
  
}




export class Translation {
  Id: string;
  Language: string;
  ColumnName: string;
  EntityId: string;
  Value: string;
  
  EntityType: EntityType;
  
}


export class Trust extends Artifact {
  Id: string;
  Believer: Person;
  WhoToTrust: Person;
  
  Type: TrustType;
  
}


 
export enum TrustType {
  All = 0,
  PartOf = 1,
  Likes = 2,
  Doubt = 3,
  Dislike = 4
}





export class User {
  Id: number;
  Login: string;
  Email: string;
  
  Permission: UserPermission;
  
}




export class UserData {
  Id: number;
  Login: string;
  Email: string;
  
  
}
 
export enum UserPermission {
  Admin = 2147483647
}
