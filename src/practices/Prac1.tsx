export const Prac1 = () => {
  const calctotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice = () => calctotalFee(1000);

  return (
    <div>
      <p>練習問題1: 引数の方指定</p>
      <button onClick={onClickPractice}>練習問題1を実行</button>
    </div>
  );
};
