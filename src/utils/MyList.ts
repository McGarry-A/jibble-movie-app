import { reactive } from "vue";

export const listState = reactive<MovieInterface[]>([]);

export interface MovieInterface {
  title: string;
  year: number;
  imdbID: string;
}

export const listActions = {
  handleAddToList(movie: MovieInterface): Array<MovieInterface> {
    listState.push(movie);
    return listState;
  },
};
