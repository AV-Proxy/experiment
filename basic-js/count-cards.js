let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    default:
      count--;
      break;
  }

  switch (count) {
    case count > 0:
      return `${count} Bet`;
    default:
      return `${count} Hold`;
  }
}

cc(2);
cc(3);
cc('K');
cc('Q');
cc('A');
