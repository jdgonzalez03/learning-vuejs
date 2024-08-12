<script setup>
import { ref } from 'vue'
import { provide } from 'vue'

import HelloWorld from './components/HelloWorld.vue'
import TextDynamic from './components/TextDynamic.vue'
import BindingAttributes from './components/BindingAttirbutes.vue'
import GlobalStyles from './components/assets/GlobalStyles.vue'
import HandlingEvents from './components/HandlingEvents.vue'
import VIfElse from './components/VIfElse.vue'
import ListRendering from './components/ListRendering.vue'
import InputBinding from './components/InputBinding.vue'
import StaticsPropsComponent from './components/StaticsPropsComponent.vue'
import DynamicPropsComponent from './components/DynamicPropsComponent.vue'
import ComponentEvent from './components/ComponentEvent.vue'
import EventValidation from './components/EventValidation.vue'
import SlotComponent from './components/SlotComponent.vue'
import FallBackComponent from './components/FallBackComponent.vue'
import NamedSlot from './components/NamedSlot.vue'
import SchoolComponent from './components/SchoolComponent.vue'
import LifeCycleComponent from './components/LifeCycleComponent.vue'
import BasicComponent from './components/BasicComponent.vue'
import ReactiveComponent from './components/ReactiveComponent.vue'
import BasicRef from './components/BasicRef.vue'
import AsyncComponent from './components/AsyncComponent.vue'
import ComposableComponent from './components/ComposableComponent.vue'
import CustomDirective from './components/CustomDirective.vue'
import DynamicComponent from './components/DynamicComponent.vue'
import GettingDataFetch from './components/GettingDataFetch.vue'
import GettingDataAxios from './components/GettingDataAxios.vue'

const firstName = ref('Daiana')
const lastName = ref('Campos')

const counterEvent = ref(0)
// const emit = defineEmits({
//   userInfo: ({ username, email, password }) => {
//     if (!username) {
//       console.log("Please enter your name");
//       return false;
//     }
//     if (!email) {
//       console.log("Please enter your email");
//       return false;
//     }
//     if (!password) {
//       console.log("Please enter your password");
//       return false;
//     } else {
//       return true;
//     }
//   },
// });

const formHandler = (username, email, password) => {
  // emit("userInfo", { username, email, password });
  console.log("username: ", username);
  console.log("email: ", email);
  console.log("password: ", password);
};

provide('studentName', 'Juanito')
provide('studentAge', 21)
provide('studentLocation',['CO', 'UK'])

const showHide = ref(true)
</script>

<template>
  <div>
    <HelloWorld />
    <h2>This is a app with VueJS</h2>
    <section>
      <h3>Text interpolation</h3>
      <TextDynamic />
    </section>
    <hr />
    <section>
      <h3>Binding attributes</h3>
      <BindingAttributes />
    </section>
    <hr />
    <section>
      <h3>Styles in depht</h3>
      <GlobalStyles />
    </section>
    <hr />
    <section>
      <h3>Handling event</h3>
      <HandlingEvents />
    </section>
    <hr />
    <section>
      <h3>Handling event</h3>
      <VIfElse />
    </section>
    <hr />
    <section>
      <h3>List Rendering</h3>
      <ListRendering />
    </section>
    <hr />
    <section>
      <h3>Inputs Binding</h3>
      <InputBinding />
    </section>
    <hr />
    <section>
      <h3>Passing props</h3>
      <StaticsPropsComponent name="Juan1to" />
      <DynamicPropsComponent
        :firstName="firstName"
        :lastName="lastName"
        :friends="['alex', 'john', 'jordan', 'orestis']"
        :userInfo="{ name: 'alex', age: 20, location: ['Earth', 'IDK'] }"
      />
    </section>
    <hr>
    <section>
      <h3>component Event</h3>
      <p>Count in app.vue: {{counterEvent}}</p>
      <ComponentEvent @incrementCounter="counterEvent++" />
      <EventValidation @userInfo="formHandler" />
    </section>
    <hr>
    <section>
      <h3>Slot</h3>
      <SlotComponent>
        <p>Saving a paragraph tag in the slot</p>
      </SlotComponent>
      <FallBackComponent />
      <FallBackComponent>
        <p>Insert new content</p>
      </FallBackComponent>

      <NamedSlot>
        <template v-slot:one>
          <p>Insert some random data in the slot "one"</p>
        </template>
        <template #two>
          <p>Insert some random data in the slot "two"</p>
        </template>

      </NamedSlot>
    </section>
    <hr>
    <section>
      <h3>Provide / Inject </h3>
      <SchoolComponent />
    </section>
    <hr>
    <section>
      <h3>Life Cycle Hooks </h3>
      <LifeCycleComponent v-if="showHide"/>
      <button @click="showHide = !showHide">Show/Hide</button>
    </section>

    <hr>
    <section>
      <h3>Watchers </h3>
      <BasicComponent />
      <ReactiveComponent />
    </section>

    <hr>
    <section>
      <h3>Template REF </h3>
      <BasicRef />
    </section>

    <hr>
    <section>
      <h3>Async Components </h3>
      <AsyncComponent />
    </section>

    <hr>
    <section>
      <h3>Composableee </h3>
      <ComposableComponent />
    </section>

    <hr>
    <section>
      <h3>Custom directives </h3>
      <CustomDirective />
    </section>

    <hr>
    <section>
      <h3>Dynamic Components </h3>
      <DynamicComponent />
    </section>

    <hr>
    <section>
      <h3>Fetch Data </h3>
      <GettingDataFetch />
    </section>

    <hr>
    <section>
      <h3>Axios Data </h3>
      <GettingDataAxios />
    </section>
  </div>
</template>

<style scoped>
h3 {
  color: green;
  text-transform: uppercase;
}
</style>
