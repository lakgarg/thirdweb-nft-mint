export default async function checkBalance(sdk, address) {
  const editionDrop = await sdk.getContract("0x564E946893313aFE0694e06A09Cb8693191e4949");

  const balance = await editionDrop.erc721.balanceOf(address, 0);
  
  // gt = greater than
  return balance.gt(0);
}

