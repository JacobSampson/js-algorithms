import { findIntersection, LinkedList } from "./findIntersection";

describe("findIntersection", () => {
  it("succeeds", () => {
    let list = new LinkedList();
    list.add(0);
    list.add(1);
    list.add(2);
    let intersectingNode = list.add(3);
    list.add(4);

    let list2 = new LinkedList();
    list2.add(-1);
    list2.add(-2);
    // let lastNode = list2.add(-3);
    // lastNode.next = intersectingNode;

    expect(intersectingNode).equals(findIntersection(list, list2));
  });
});
