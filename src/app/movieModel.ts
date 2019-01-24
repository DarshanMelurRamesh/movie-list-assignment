//Movie list model interface
export interface movieListModel {
    id: number;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
    vote_average: number;
}

//Movie complete details model interface
export interface movieDetailsModel{
    adult: boolean;
    budget: number;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    revenue: number;
    runtime: number;
    status: string;
    tagline: string;
    title: string;
    vote_average: number;
    vote_count: number;
    genres: Genre[];
    production_companies: Productioncompany[];
}

//Production Company model interface
interface Productioncompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}
  
//Genre model interface
interface Genre {
    id: number;
    name: string;
}