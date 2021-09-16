/** 実行間隔(ミリ秒) */
const intervalMilliSeconds = 3000;

/**
 * 指定された時間待機する
 *
 * @param ms 待機時間(ミリ秒)
 * @return 待機時間が完了したら発火するPromise
 */
function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  })
}

/**
 * 定期的に実行する処理
 *
 * @return 処理が完了したら発火するPromise
 */
async function main() {
  const now = () => new Date().toString();
  console.log(`${now()} start main function`);
  await wait(1000);
  console.log(`${now()} end main function`);
  console.log(`${'-'.repeat(100)}`);
}

(async () => {
  while (true) {
    const start = Date.now();
    await main();
    const end = Date.now();
    const executedTime = end - start;
    const waitTime = Math.max(intervalMilliSeconds - executedTime, 0);
    await wait(waitTime);
  }
})();