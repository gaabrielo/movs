/**
 * @generated SignedSource<<b0565f8d36f3d0ceb69840118b189041>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type MovieId = {
  _id: string;
};
export type UpdateMovieProps = {
  description?: string | null;
  name?: string | null;
  cover?: string | null;
  category?: string | null;
};
export type EditMovieFormMutation$variables = {
  movieId: MovieId;
  input: UpdateMovieProps;
};
export type EditMovieFormMutation$data = {
  readonly updateMovie: {
    readonly _id: string;
  };
};
export type EditMovieFormMutation = {
  variables: EditMovieFormMutation$variables;
  response: EditMovieFormMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "movieId"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "movieId",
        "variableName": "movieId"
      },
      {
        "kind": "Variable",
        "name": "movieInput",
        "variableName": "input"
      }
    ],
    "concreteType": "Movie",
    "kind": "LinkedField",
    "name": "updateMovie",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "EditMovieFormMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "EditMovieFormMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "e631b57a0d10f870571d77755f00a038",
    "id": null,
    "metadata": {},
    "name": "EditMovieFormMutation",
    "operationKind": "mutation",
    "text": "mutation EditMovieFormMutation(\n  $movieId: MovieId!\n  $input: UpdateMovieProps!\n) {\n  updateMovie(movieId: $movieId, movieInput: $input) {\n    _id\n  }\n}\n"
  }
};
})();

(node as any).hash = "c2c386ddc9e20f299bf361372fab8470";

export default node;
