- initially i use to download it with typescript

- i installed navigation npm install @react-navigation/native and npm install react-native-screens react-native-safe-area-context
  and later i installed npm install @react-navigation/native-stack and npm install @react-navigation/bottom-tabs (native stack and bottom stack)

- working on the header in the bottom navigation and stack navigation , styling in the bottom bar

- adding toFixed and toString and Dateformater

- passing the navigation inside the screenOptions like object like structure and tintColor passing

- presentation :modal new css styling

- new property that going to check the current id contains values or not const idval=route.params?.id and converting the value into the boolean it is javascript method const val=!!valueid

- using useLayout its making the animation very good (besically it synchronously render or came with the compoenent rendering but useEffect not like that)

- date function getting used and also toString

- typing the entire function and without returning any thing Exampl is onPress:()=>void

- In React Native with TypeScript, the common and correct way to type a style prop that accepts inline objects (like { minWidth: 120, marginHorizontal: 8 }) or StyleSheet references

is: style?: StyleProp<ViewStyle>

- In TypeScript, the ? symbol after a property name means that the property is optional, so the value can be provided or left out — for example, style?: StyleProp<ViewStyle> means the style prop may be passed or omitted, and if omitted it will be treated as undefined.

- 1. style?: StyleProp<ViewStyle>

* The ? means the prop is optional.
* If omitted, TypeScript treats it as StyleProp<ViewStyle> | undefined.

2. Typing Arrays

- Use number[] or Array<number> for numbers.
- Use Expense[] or Array<Expense> for your custom type.
- Example: expenses: Expense[].

3. Context Typing (Omit)

- Omit<Type, Keys> creates a new type by removing keys.
- Omit<Expense, "id"> → { description: string; amount: number; date: Date }.
- Perfect for addExpenses and updateExpenses where id is generated separately.

4. Parameter Names

- In function types, parameter names don’t matter for TypeScript.
- Example:
  addExpenses: (expense: Omit<Expense, "id">) => void;
  addExpenses: (data: Omit<Expense, "id">) => void;

- Both are valid — choose descriptive names for readability.

5. Omit<Expense> Alone- Invalid. Omit always needs two arguments: the type and the keys to remove.

- Correct: Omit<Expense, "id">.

6. useReducer Typing- Don’t force <State, Action> generics.

- Instead, type the reducer function:
  function ExpenseReducer(state: Expense[], action: Action): Expense[] { ... }
  const [ExpenseState, dispatch] = useReducer(ExpenseReducer, Dummy_Expenses);



- This way, TypeScript infers state and action types automatically.

7. How FlatList works

- FlatList expects a renderItem function.
- That function does not receive your custom ListProps.
- Instead, React Native passes an object shaped like:
  {
  item: T; // the actual data element
  index: number; // position in the array
  separators: { ... } // helpers for rendering
  }
- So you should destructure { item } directly.
  const renderItems: ListRenderItem<ExpensesObjectType> = ({ item }) => {
  return <ExpenseItem {...item} />;
  };

* What useReducer is

- A React hook for managing complex state logic (like arrays or objects) with predictable updates.
- It’s an alternative to useState when you need multiple actions (add, update, delete).

How it works
useReducer takes two arguments:

- Reducer function → (state, action) => newState
- Initial state → your starting data (like Dummy_Expenses)
  It returns:
- [state, dispatch]
- state → the current state value
- dispatch → a function you call with an action to update state

* marginVertical and marginHorizontal need to know about it clearly some time confusing

* autoCorrect and autoCaptalize , mutiline ,keyBoardtype ,placeHolder,onChageText,maxLength

\*minHeight and textAlignVertical

\*on entered value in the input box always string

- need to know about the function bind in the input handler


* Unary Plus Operator (+): This is a shorthand method that uses implicit type coercion to convert a string to a number


* const UpdatedExpense = { 
  ...NeedForUpdate, 
  ...action.payload.data 
};  If a property already exists, the last one overrides it.

* - date.toISOString().slice(0,10) is a quick way to get just the date (YYYY-MM-DD) from a Date object.

* TextInputProps is the built-in React Native TypeScript type that defines all the valid properties (like value, onChangeText, placeholder, keyboardType, etc.) that you can pass to a <TextInput /> component.


* TypeScript guessed your style array must only contain styles shaped like the first one, so we use StyleProp<TextStyle> to tell it the array can contain any valid TextInput styles. (for TextStyle array)


* In one line:
children: React.ReactNode means your component can accept any renderable React content inside it.
