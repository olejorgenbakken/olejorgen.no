export type Pokemon = {
  name: string;
  id: number;
  order: number;
  sprites: {
    other: {
      showdown: {
        front_default: string;
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
};
