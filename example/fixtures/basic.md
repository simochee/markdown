# Markdownスタイル確認サンプル

## 見出し (h2)
### 見出し (h3)
#### 見出し (h4)
##### 見出し (h5)
###### 見出し (h6)

## テキストスタイル

通常のテキストです。

**太字のテキスト**や*斜体のテキスト*を使用できます。

***太字かつ斜体***も可能です。

~~取り消し線~~も使えます。

<u>下線付きテキスト</u>（HTMLタグ使用）

`インラインコード`を表示できます。

## リスト

### 番号なしリスト
- アイテム1
- アイテム2
  - ネストしたアイテム2.1
  - ネストしたアイテム2.2
- アイテム3

### 番号付きリスト
1. 最初のアイテム
2. 2番目のアイテム
   1. ネストしたアイテム2.1
   2. ネストしたアイテム2.2
3. 3番目のアイテム

### チェックリスト（GitHub Flavored Markdown）
- [x] 完了したタスク
- [ ] 未完了のタスク
- [ ] もう一つの未完了タスク

## 引用

> これは引用文です。
> 
> 複数行にわたる引用も可能です。
>
>> ネストした引用もできます。

## コードブロック

### TSX (React)

```tsx
// TSXのコードブロック
import React, { useState } from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button 
      className="primary-button"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  
  return (
    <div>
      <h2>カウンター: {count}</h2>
      <Button 
        label="増加" 
        onClick={() => setCount(count + 1)} 
      />
    </div>
  );
};

export default Counter;
```

### Vue

```vue
<template>
  <div class="greeting-card">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <button @click="changeMessage">メッセージを変更</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const title = ref('こんにちは、Vue！');
const message = ref('これはVue 3のコンポーネントです。');

function changeMessage() {
  message.value = '新しいメッセージに変更されました！';
}
</script>

<style scoped>
.greeting-card {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 400px;
  margin: 0 auto;
}

h1 {
  color: #42b983;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
```

### JSON

```json
{
  "サイト": {
    "名前": "サンプルサイト",
    "URL": "https://example.com",
    "作成日": "2023-04-01"
  },
  "管理者": {
    "名前": "山田花子",
    "メール": "hanako@example.com",
    "ロール": ["管理者", "編集者"]
  },
  "設定": {
    "テーマ": "ダーク",
    "言語": "ja",
    "通知": true,
    "表示件数": 10
  },
  "記事": [
    {
      "id": 1,
      "タイトル": "はじめてのJSON",
      "公開日": "2023-04-05",
      "タグ": ["JSON", "入門", "データ形式"]
    },
    {
      "id": 2,
      "タイトル": "JSONの応用例",
      "公開日": "2023-04-10",
      "タグ": ["JSON", "応用", "API"]
    }
  ]
}
```

## 表（GitHub Flavored Markdown）

| 左揃え | 中央揃え | 右揃え |
|:-------|:--------:|-------:|
| セル1  | セル2    | セル3  |
| 長いテキスト | 中央 | 1000円 |
| 日本語対応 | 表組み | OK |

## 水平線

---

## リンク

[外部リンク](https://github.com)

[内部リンク](#見出し-h2)

## 画像

![画像の代替テキスト](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)

## 数式（GitHub Flavored Markdown）

インライン数式: $E=mc^2$

ブロック数式:

$$
\frac{d}{dx}e^x = e^x
$$

## 脚注（GitHub Flavored Markdown）

脚注の例[^1]です。

[^1]: これは脚注の内容です。

## 定義リスト

<dl>
  <dt>定義リスト</dt>
  <dd>HTMLタグを使用した定義リストです。</dd>
  
  <dt>Markdown</dt>
  <dd>軽量マークアップ言語の一つです。</dd>
</dl>

## 絵文字（GitHub Flavored Markdown）

:smile: :heart: :thumbsup: :japan:

## 詳細折りたたみセクション（GitHub Flavored Markdown）

<details>
<summary>クリックして詳細を表示</summary>

ここに折りたたまれた内容が表示されます。
- リストアイテム
- コードブロックなども含められます

```json
{
  "name": "折りたたみセクション内のコード",
  "type": "json"
}
```

</details>

## メンション（GitHub Flavored Markdown）

@username でユーザーをメンションできます。

## 取り消し線付きのチェックボックス（GitHub Flavored Markdown）

- [x] ~~完了して取り消し線付きのタスク~~
- [ ] 未完了のタスク

## GitHubアラートブロック

> [!NOTE]
> これは情報アラートです。役立つ情報や補足説明を提供します。

> [!TIP]
> これはヒントアラートです。便利なアドバイスを提供します。

> [!IMPORTANT]
> これは重要アラートです。重要な情報を強調します。

> [!WARNING]
> これは警告アラートです。問題が発生する可能性がある場合に使用します。

> [!CAUTION]
> これは注意アラートです。重大な問題が発生する可能性がある場合に使用します。