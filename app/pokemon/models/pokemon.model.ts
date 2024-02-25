// PokeAPI docs: https://pokeapi.co/docs/v2

export type Pokemon = {
  name: string;
  id: number;
  sprites: {
    back_default?: string;
    front_default?: string;
    back_shiny?: string;
    front_shiny?: string;
    other: {
      showdown: {
        front_default?: string;
        front_shiny?: string;
        back_default?: string;
        back_shiny?: string;
      };
      home: {
        front_default?: string;
        front_shiny?: string;
      };
      dream_world: {
        front_default?: string;
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
  past_types: {
    generation: {
      name: string;
    };
    types: {
      type: {
        name: string;
      };
    }[];
  }[];
  forms: {
    name: string;
  }[];
  game_indices: {
    game_index: number;
  }[];
  height: number;
  weight: number;
  abilities: {
    ability: {
      name: string;
    };
    is_hidden: boolean;
  }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
    };
  }[];
  moves: {
    version_group_details: {
      level_learned_at: number;
      move_learn_method: {
        name: string;
      };
      version_group: {
        name: string;
      };
    }[];
    move: {
      name: string;
    };
  }[];
  species: {
    name: string;
  };
  base_experience: number;
  order: number;
  location_area_encounters: string;
  is_default: boolean;
  held_items: {
    item: {
      name: string;
    };
    version_details: {
      rarity: number;
      version: {
        name: string;
      };
    }[];
  }[];
  cries: {
    latest: string;
    legacy: string;
  };
};
