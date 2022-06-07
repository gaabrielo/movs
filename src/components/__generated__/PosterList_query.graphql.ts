/**
 * @generated SignedSource<<934d6f64b6c7771f20326acd165466e6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PosterList_query$data = {
  readonly movies: ReadonlyArray<{
    readonly name: string;
  }>;
  readonly " $fragmentType": "PosterList_query";
};
export type PosterList_query$key = {
  readonly " $data"?: PosterList_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"PosterList_query">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PosterList_query",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Movie",
      "kind": "LinkedField",
      "name": "movies",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "1c639cac43fdf9ff298a3fa3b3afea84";

export default node;
