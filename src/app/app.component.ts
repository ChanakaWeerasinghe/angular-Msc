import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = {
    value: [
      {
        id: '80705223-4ebd-474d-aba8-ab754801fad6',
        type: 'transcript',
        start: 'PT4.52S',
        end: 'PT9.218S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'Hello everyone, welcome to the lecture of systems architecture'
        },
        hidden: false,
        userData: null
      },
      {
        id: '70a71908-807c-45ef-98ea-19fe272f8e46',
        type: 'transcript',
        start: 'PT9.218S',
        end: 'PT14.438S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'and security models delivered as part of the secure software'
        },
        hidden: false,
        userData: null
      },
      {
        id: '105f4673-8fe2-4a99-998e-78a7a9ee1d56',
        type: 'transcript',
        start: 'PT14.438S',
        end: 'PT18.614S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'lifecycle engineering, and this is actually second discussion.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '8b446e78-eb47-4488-9102-5fcc3622f70c',
        type: 'transcript',
        start: 'PT18.614S',
        end: 'PT24.356S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "So today we're going to look at what defines the security"
        },
        hidden: false,
        userData: null
      },
      {
        id: '42a3fe8e-474c-4664-bc50-aa1229c99f6f',
        type: 'transcript',
        start: 'PT24.356S',
        end: 'PT29.576S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'architecture of a given platform or an application or software.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '4e95e1e3-ae32-4226-bbda-bffbac49d3bb',
        type: 'transcript',
        start: 'PT29.68S',
        end: 'PT33.519S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'And also when we are defining these policies and how these'
        },
        hidden: false,
        userData: null
      },
      {
        id: '078639b3-dc9c-46f9-8de7-a0274f5ce0f9',
        type: 'transcript',
        start: 'PT33.519S',
        end: 'PT37.707S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'policies affect the architecture and also we want to look at what'
        },
        hidden: false,
        userData: null
      },
      {
        id: '5325bed3-0e24-4e6e-b339-224e84be1cb1',
        type: 'transcript',
        start: 'PT37.707S',
        end: 'PT41.197S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'kind of models can be used to implement these architectures.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '672f6b11-91c3-44af-ac96-e1d7bc3713c8',
        type: 'transcript',
        start: 'PT41.197S',
        end: 'PT45.734S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'So today these two are the main topics that we want to cover.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a0e4d73e-b263-40a6-8b2c-6fd677586767',
        type: 'transcript',
        start: 'PT46.98S',
        end: 'PT50.7S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "So first of all, let's understand that security"
        },
        hidden: false,
        userData: null
      },
      {
        id: '0b2dba22-0803-4153-b2b3-741b175faeb6',
        type: 'transcript',
        start: 'PT50.7S',
        end: 'PT53.025S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'architecture or first of all'
        },
        hidden: false,
        userData: null
      },
      {
        id: '601a42ff-1629-4b05-bd0f-e7726b9643c1',
        type: 'transcript',
        start: 'PT53.025S',
        end: 'PT56.834S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'system architecture. Is usually dependent on, but the'
        },
        hidden: false,
        userData: null
      },
      {
        id: '89dcd381-ac35-4948-96ff-51977f8d95c4',
        type: 'transcript',
        start: 'PT56.834S',
        end: 'PT1M0.948S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "requirements of the client is right, so that's very simple. We"
        },
        hidden: false,
        userData: null
      },
      {
        id: '2bc72755-3f66-44da-8f7a-3ff82e2124ff',
        type: 'transcript',
        start: 'PT1M0.948S',
        end: 'PT1M5.81S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'know this for a long period of time that users or the clients'
        },
        hidden: false,
        userData: null
      },
      {
        id: '3ebfe036-905a-42a8-8b23-635ba74e5386',
        type: 'transcript',
        start: 'PT1M5.81S',
        end: 'PT1M10.298S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'or the end users will give us requirements and based on the'
        },
        hidden: false,
        userData: null
      },
      {
        id: '882fe5d3-6860-4afb-8f1d-1bbb2604bd9b',
        type: 'transcript',
        start: 'PT1M10.298S',
        end: 'PT1M12.916S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'requirements the application architecture will be defined.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '3168a6ab-c94b-4e98-a829-de6eb07a6d5b',
        type: 'transcript',
        start: 'PT1M13.91S',
        end: 'PT1M17.947S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'But today our main discussion is not just any requirement, we'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'f63ef789-1e63-463d-8804-d2343c04cf77',
        type: 'transcript',
        start: 'PT1M17.947S',
        end: 'PT1M20.516S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'want to also look at what the'
        },
        hidden: false,
        userData: null
      },
      {
        id: '1f44cf4a-ba30-4827-b309-d8cdb88b4225',
        type: 'transcript',
        start: 'PT1M20.516S',
        end: 'PT1M23.79S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'security requirements. How the security requirements are'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a033bb0d-7850-4954-b079-de5301c282f6',
        type: 'transcript',
        start: 'PT1M23.79S',
        end: 'PT1M27.264S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'actually defined. So this is very interesting because usually'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a6e6a0cb-8f3e-49f8-96c3-e4fda33b07d3',
        type: 'transcript',
        start: 'PT1M27.264S',
        end: 'PT1M31.124S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'security requirements are not something that you get from end'
        },
        hidden: false,
        userData: null
      },
      {
        id: '7430919e-60a7-40c4-a8d8-0d70dff7a61f',
        type: 'transcript',
        start: 'PT1M31.124S',
        end: 'PT1M35.756S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "users, right? It's not something that you get from end users or"
        },
        hidden: false,
        userData: null
      },
      {
        id: 'be762b7d-cb44-44e8-aa8c-886caf319b86',
        type: 'transcript',
        start: 'PT1M35.756S',
        end: 'PT1M39.616S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'day-to-day active users of a given system or an application,'
        },
        hidden: false,
        userData: null
      },
      {
        id: '9ad7c452-6fd4-49bd-a679-929ecf30b877',
        type: 'transcript',
        start: 'PT1M39.616S',
        end: 'PT1M43.09S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'so there are, for security requirements are usually derived'
        },
        hidden: false,
        userData: null
      },
      {
        id: '03e0a9f0-f609-4da4-8e54-8404f528ea69',
        type: 'transcript',
        start: 'PT1M43.09S',
        end: 'PT1M48.108S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'from something else, so we want to first of all look at what'
        },
        hidden: false,
        userData: null
      },
      {
        id: '76b4a451-2bb4-485d-bd71-d04090e2909d',
        type: 'transcript',
        start: 'PT1M48.108S',
        end: 'PT1M51.968S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'this something else means. So then we will look at.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '0c502f5a-a662-4c13-9bf7-24ab51865b9b',
        type: 'transcript',
        start: 'PT1M51.98S',
        end: 'PT1M56.974S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Security models. Security models are the sort of like a'
        },
        hidden: false,
        userData: null
      },
      {
        id: '96def548-2f70-453a-a333-7cd928506984',
        type: 'transcript',
        start: 'PT1M56.974S',
        end: 'PT2M1.953S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'tool that we can use, or the helping hand that we can use'
        },
        hidden: false,
        userData: null
      },
      {
        id: '6fc0e6c8-6d2e-416c-a34a-b42f6fec7e89',
        type: 'transcript',
        start: 'PT2M1.953S',
        end: 'PT2M4.634S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'to implement the necessary security requirements to'
        },
        hidden: false,
        userData: null
      },
      {
        id: '3ec8f200-891a-4537-a7d9-2109ee8af0cf',
        type: 'transcript',
        start: 'PT2M4.634S',
        end: 'PT2M6.166S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'fulfill the security requirements.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'b3fc8107-ee26-448a-b439-f6603a6e9e7b',
        type: 'transcript',
        start: 'PT2M7.78S',
        end: 'PT2M12.906S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'So system architecture as we know we have already sort of'
        },
        hidden: false,
        userData: null
      },
      {
        id: '9108d2c8-dcca-4112-bb30-4faf04797a5a',
        type: 'transcript',
        start: 'PT2M12.906S',
        end: 'PT2M18.498S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'almost all of you have an idea what is an architecture is'
        },
        hidden: false,
        userData: null
      },
      {
        id: '4dbb6364-127f-4bd5-88fa-df0cbdf08a5f',
        type: 'transcript',
        start: 'PT2M18.498S',
        end: 'PT2M22.226S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'specially system architecture, so all the hardware, the'
        },
        hidden: false,
        userData: null
      },
      {
        id: '0d276504-5a20-4447-bed6-3e7880f84b63',
        type: 'transcript',
        start: 'PT2M22.226S',
        end: 'PT2M25.022S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'operating system, applications and networking components,'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a07cac6c-8ed9-49cf-b3cf-9d6dccb2c65f',
        type: 'transcript',
        start: 'PT2M25.022S',
        end: 'PT2M28.75S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'middleware, everything belongs to the system architecture. So'
        },
        hidden: false,
        userData: null
      },
      {
        id: '9015e304-6a7c-4dfa-9133-77cd80ecac69',
        type: 'transcript',
        start: 'PT2M28.75S',
        end: 'PT2M33.41S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'how this overall components are interacting with each other, how'
        },
        hidden: false,
        userData: null
      },
      {
        id: '4b5e5bc0-5ccc-4800-ab55-b6b0ead7128e',
        type: 'transcript',
        start: 'PT2M33.41S',
        end: 'PT2M34.808S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'they are placed?'
        },
        hidden: false,
        userData: null
      },
      {
        id: '36c7aba0-087a-449d-8481-61aa9b7ce1c3',
        type: 'transcript',
        start: 'PT2M35.34S',
        end: 'PT2M40.332S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'In the overall system, that is what we called by the system'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'd0454f15-8ad1-49e2-b454-5556b721dfff',
        type: 'transcript',
        start: 'PT2M40.332S',
        end: 'PT2M44.076S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'architecture. So this design or the system architecture should'
        },
        hidden: false,
        userData: null
      },
      {
        id: '2dadf34b-0c8b-4265-bd0e-8a495f902646',
        type: 'transcript',
        start: 'PT2M44.076S',
        end: 'PT2M47.82S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'meet the specifications that that are mandated by the'
        },
        hidden: false,
        userData: null
      },
      {
        id: '503df9ae-9616-470a-aca0-559a8531236d',
        type: 'transcript',
        start: 'PT2M47.82S',
        end: 'PT2M51.98S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'security model. So security model will tell us when the'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'afeda9ff-03aa-48eb-9ebd-dda3dc0276d0',
        type: 'transcript',
        start: 'PT2M51.98S',
        end: 'PT2M54.892S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'system architecture is defined. These security requirements'
        },
        hidden: false,
        userData: null
      },
      {
        id: '33d03be0-2011-41f0-9726-18ccc90ce197',
        type: 'transcript',
        start: 'PT2M54.892S',
        end: 'PT2M59.468S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "should be meant, so that's how the system architecture is going"
        },
        hidden: false,
        userData: null
      },
      {
        id: 'dd5ad53d-22ca-48d9-96d5-a73552e2fb3d',
        type: 'transcript',
        start: 'PT2M59.468S',
        end: 'PT3M4.044S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'to be used. But to be improved using security requirements. So'
        },
        hidden: false,
        userData: null
      },
      {
        id: '157e67fa-952a-436e-b56a-e1f43b85f7cc',
        type: 'transcript',
        start: 'PT3M4.044S',
        end: 'PT3M5.292S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "that's the idea."
        },
        hidden: false,
        userData: null
      },
      {
        id: 'd31023c3-5fbf-4417-880d-5eca3a282065',
        type: 'transcript',
        start: 'PT3M6.84S',
        end: 'PT3M11.581S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'So first of all, when it comes to a system architecture,'
        },
        hidden: false,
        userData: null
      },
      {
        id: '25800084-ff1f-4582-bf6f-49ec6ece5807',
        type: 'transcript',
        start: 'PT3M11.581S',
        end: 'PT3M15.46S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'specially with the perspective of security, there are few'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'e408805d-6372-4a53-bc6e-87b470e0ee64',
        type: 'transcript',
        start: 'PT3M15.46S',
        end: 'PT3M20.201S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'elements that we need to talk about, right? So these elements'
        },
        hidden: false,
        userData: null
      },
      {
        id: '0cbf5f60-55b2-4906-b526-8d0a4ac227f0',
        type: 'transcript',
        start: 'PT3M20.201S',
        end: 'PT3M24.08S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'include the trusted computing days, so the trusted computing'
        },
        hidden: false,
        userData: null
      },
      {
        id: '835e7cc4-fb6f-4f7a-9d20-396e38381dcc',
        type: 'transcript',
        start: 'PT3M24.08S',
        end: 'PT3M29.252S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'base or the TCBY Y is basically all the hardware and software'
        },
        hidden: false,
        userData: null
      },
      {
        id: '9ea00d90-658b-4de3-9854-36e05eb6f501',
        type: 'transcript',
        start: 'PT3M29.252S',
        end: 'PT3M30.976S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'components that we have.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '240956da-08b8-49b8-98bc-5a74c263da0a',
        type: 'transcript',
        start: 'PT3M30.98S',
        end: 'PT3M35.748S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'In place. Hardware, firmware, software, all these important'
        },
        hidden: false,
        userData: null
      },
      {
        id: '4d5dd508-3d21-4dd4-a68a-1c0779918e8f',
        type: 'transcript',
        start: 'PT3M35.748S',
        end: 'PT3M41.831S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'components. So the TCBY are the components that are critical to'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'e5e7c352-92df-4727-816f-bafc877e1ae5',
        type: 'transcript',
        start: 'PT3M41.831S',
        end: 'PT3M47.361S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'this overall security of the system, right? So critical to'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'bc710382-9f2b-453f-8f62-fd15f6ec130d',
        type: 'transcript',
        start: 'PT3M47.361S',
        end: 'PT3M52.338S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'the overall security means. So integrity of the application,'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c6c4ee9f-23d0-4d0e-90d2-1ce166508979',
        type: 'transcript',
        start: 'PT3M52.338S',
        end: 'PT3M56.762S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'confidentiality of the application, right? So all these'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c3eab526-52f3-4253-b6c2-73712860a20d',
        type: 'transcript',
        start: 'PT3M56.762S',
        end: 'PT4M1.739S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'things might be depending on these hardware firmware and'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'd8066a3d-23bb-4ec6-9321-6dd2d7e40576',
        type: 'transcript',
        start: 'PT4M1.739S',
        end: 'PT4M5.292S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'software components. So there can be a piece of hardware, or'
        },
        hidden: false,
        userData: null
      },
      {
        id: '58521620-686a-48f7-bf47-9b539c275b41',
        type: 'transcript',
        start: 'PT4M5.292S',
        end: 'PT4M8.776S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'there can be a piece of software that is not critical to the'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'b71eec98-0aad-4645-bab7-734140c64faa',
        type: 'transcript',
        start: 'PT4M8.776S',
        end: 'PT4M11.992S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'security of the application, so that does not belong to the TCP.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'f9b20f52-2c40-4679-89fc-f9c7cc2b2d73',
        type: 'transcript',
        start: 'PT4M12.66S',
        end: 'PT4M13.07S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Right?'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'cdcb2ef9-0e7c-4989-b9e6-2c4e1a1ce55c',
        type: 'transcript',
        start: 'PT4M14.09S',
        end: 'PT4M19.802S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'So any bug or ability or a problem that is inside occurring'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'eddd6d5e-d1a7-46fc-9d39-49c1ad75f811',
        type: 'transcript',
        start: 'PT4M19.802S',
        end: 'PT4M21.23S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'inside the TCBY?'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'f1e72a14-ca0e-4083-9fb3-7405292f7d38',
        type: 'transcript',
        start: 'PT4M21.92S',
        end: 'PT4M26.26S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'That can affect the overall performance and the security of'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a4c4becf-63da-4035-bef2-f3592ee6e72b',
        type: 'transcript',
        start: 'PT4M26.26S',
        end: 'PT4M31.902S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "the entire system, so that's how we define the TCP OK, so the"
        },
        hidden: false,
        userData: null
      },
      {
        id: 'bc47b5e0-b665-4fa9-9f22-8cc04fa8898c',
        type: 'transcript',
        start: 'PT4M31.902S',
        end: 'PT4M35.374S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'TCBY includes the security perimiter security perimiter is'
        },
        hidden: false,
        userData: null
      },
      {
        id: '5bae6460-55a2-41a9-a8d6-4fb70a18fe11',
        type: 'transcript',
        start: 'PT4M35.374S',
        end: 'PT4M40.582S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "basically it's not a physical thing that we see. It's just an"
        },
        hidden: false,
        userData: null
      },
      {
        id: '49ad6464-5c6a-4c4b-a40c-5fb5034f7442',
        type: 'transcript',
        start: 'PT4M40.582S',
        end: 'PT4M41.884S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'idea for us.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '3cf9e411-9f20-4429-9d47-8de4702fe677',
        type: 'transcript',
        start: 'PT4M42.44S',
        end: 'PT4M46.301S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Which line should separate the trusted environment and the'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ae5fa76c-c37f-447d-9772-4537dfbfd113',
        type: 'transcript',
        start: 'PT4M46.301S',
        end: 'PT4M50.162S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'untrusted environment so when we talk about the trusted'
        },
        hidden: false,
        userData: null
      },
      {
        id: '10a06039-62cf-44ed-993e-e8e05fcf84e9',
        type: 'transcript',
        start: 'PT4M50.162S',
        end: 'PT4M54.023S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "environment, we're talking about all the hardware, software and"
        },
        hidden: false,
        userData: null
      },
      {
        id: '99ef96f9-30c1-44ca-9729-90ee29b39e09',
        type: 'transcript',
        start: 'PT4M54.023S',
        end: 'PT4M58.313S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'firmware part that we trust as part of your application.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '70cd8354-4ac3-4f18-9c7a-0e0e16369ff1',
        type: 'transcript',
        start: 'PT4M59.02S',
        end: 'PT5M4.363S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'On the other hand, on the other side of the boundary we have'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'dfb06d82-1132-41e7-a741-c85150ded158',
        type: 'transcript',
        start: 'PT5M4.363S',
        end: 'PT5M7.651S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'untrusted components. Untrusted components can come from using'
        },
        hidden: false,
        userData: null
      },
      {
        id: '6bd9d99a-a6c4-4e38-be48-f5050b8a842a',
        type: 'transcript',
        start: 'PT5M7.651S',
        end: 'PT5M11.761S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'puts right. Untrusted components can come from user devices like'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'dcc8568d-7211-47bb-a741-286241132e8d',
        type: 'transcript',
        start: 'PT5M11.761S',
        end: 'PT5M15.871S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'external pin drives, so those can be delineated as the'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'f52f3f36-f8bb-427f-8971-a1b446a8701b',
        type: 'transcript',
        start: 'PT5M15.871S',
        end: 'PT5M17.104S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'untrusted environment, right?'
        },
        hidden: false,
        userData: null
      },
      {
        id: '519418a8-20d0-4f69-9a72-39793f23056c',
        type: 'transcript',
        start: 'PT5M17.78S',
        end: 'PT5M22.378S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "By the trusted environment is basically the one that I've been"
        },
        hidden: false,
        userData: null
      },
      {
        id: 'abadc452-e0d0-48ec-a72c-6a2a73e025c7',
        type: 'transcript',
        start: 'PT5M22.378S',
        end: 'PT5M26.558S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'telling you about. That is basically the TCBY or the'
        },
        hidden: false,
        userData: null
      },
      {
        id: '3691d5a1-74df-4601-a4ca-d2c3f759a430',
        type: 'transcript',
        start: 'PT5M26.558S',
        end: 'PT5M30.738S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'trusted computing base. So there is a concept called reference'
        },
        hidden: false,
        userData: null
      },
      {
        id: '741ef5f4-7fc9-4c32-b50b-a1f6b2744e53',
        type: 'transcript',
        start: 'PT5M30.738S',
        end: 'PT5M34.082S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'monitor and the reference monitor. Come concept is'
        },
        hidden: false,
        userData: null
      },
      {
        id: '23ddcaee-0fda-4bd8-bf76-8234004a8261',
        type: 'transcript',
        start: 'PT5M34.082S',
        end: 'PT5M37.844S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "basically an abstract machine. Come set abstract means it's"
        },
        hidden: false,
        userData: null
      },
      {
        id: '24c1a158-6eff-4d90-97cd-0c150b9d47e5',
        type: 'transcript',
        start: 'PT5M37.844S',
        end: 'PT5M42.442S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "just an idea, kind of. It's not physically implemented, but it"
        },
        hidden: false,
        userData: null
      },
      {
        id: '4c78bec6-effd-41bc-afe5-0f117b3ee35d',
        type: 'transcript',
        start: 'PT5M42.442S',
        end: 'PT5M48.712S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'is there as a usually a firmware or else it can be there as a.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c96dfead-a3dd-4688-88f2-d96358e7564b',
        type: 'transcript',
        start: 'PT5M48.73S',
        end: 'PT5M52.906S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Software level implementation that what it does is usually'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'bf65f25d-8155-4a02-8d93-4983d8046854',
        type: 'transcript',
        start: 'PT5M52.906S',
        end: 'PT5M57.546S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'this happens even in the operating systems. Every time a'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c51dced9-db7b-44ff-836a-7bfb1df008c8',
        type: 'transcript',
        start: 'PT5M57.546S',
        end: 'PT6M2.186S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'subject is trying to access an object. This reference monitor'
        },
        hidden: false,
        userData: null
      },
      {
        id: '01ec7df0-2e36-48ea-b5a6-d689859a44a0',
        type: 'transcript',
        start: 'PT6M2.186S',
        end: 'PT6M7.29S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'behaves like a security card to check whether the current and'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'f1622c6b-fd06-41c1-8ab4-92f5f78862f9',
        type: 'transcript',
        start: 'PT6M7.29S',
        end: 'PT6M10.538S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'existing security rules and implementations allow this'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a41e14a5-376b-4134-b6fe-fb6e3f01a6a7',
        type: 'transcript',
        start: 'PT6M10.538S',
        end: 'PT6M15.178S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'subject to access a given object. So reference monitor is'
        },
        hidden: false,
        userData: null
      },
      {
        id: '3cc29c9d-2a89-422b-b10c-b8d8fd57760c',
        type: 'transcript',
        start: 'PT6M15.178S',
        end: 'PT6M19.818S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'more like a security car. So in operating systems architecture.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '778f5cbc-f377-4db5-985b-17e3e998b357',
        type: 'transcript',
        start: 'PT6M19.86S',
        end: 'PT6M23.334S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'We always use this fully testable module that controls'
        },
        hidden: false,
        userData: null
      },
      {
        id: '82aca38d-48c2-4e62-bcd5-abf5ffff1571',
        type: 'transcript',
        start: 'PT6M23.334S',
        end: 'PT6M27.966S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'all the software access to data objects or devices. So not only'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'd8625b4c-f802-4c62-a0a1-170666e5674b',
        type: 'transcript',
        start: 'PT6M27.966S',
        end: 'PT6M32.598S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'objects it can be devices because at the end of the day'
        },
        hidden: false,
        userData: null
      },
      {
        id: '99b8cfff-4d0e-4e9d-b044-02537f54c549',
        type: 'transcript',
        start: 'PT6M32.598S',
        end: 'PT6M36.844S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'operating system will also allow the users to interact with their'
        },
        hidden: false,
        userData: null
      },
      {
        id: '451ad0ab-0f3c-4fad-9bc1-53dcf6ec166a',
        type: 'transcript',
        start: 'PT6M36.844S',
        end: 'PT6M40.318S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'devices, right? So usually these devices belong to that'
        },
        hidden: false,
        userData: null
      },
      {
        id: '08435d97-75c7-472d-b04d-a39c514e3b1f',
        type: 'transcript',
        start: 'PT6M40.318S',
        end: 'PT6M45.336S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'particular PC or the server, so we have to make sure there is'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'cc797293-ec1e-4beb-ad5d-b0b9c520f3b8',
        type: 'transcript',
        start: 'PT6M45.336S',
        end: 'PT6M49.196S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'sort of like a security guard implementation where every time'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'f67329d4-6c01-4ccc-90d6-47f3dc9ffe5d',
        type: 'transcript',
        start: 'PT6M49.196S',
        end: 'PT6M53.739S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'every time. This device of this piece of data is trying to be'
        },
        hidden: false,
        userData: null
      },
      {
        id: '62d1a53f-cf66-4a4b-a78e-5064d1dcf2ab',
        type: 'transcript',
        start: 'PT6M53.739S',
        end: 'PT6M57.468S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'accessed. You have to check you have to check whether this'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'e414d960-564b-4136-9093-150204057389',
        type: 'transcript',
        start: 'PT6M57.468S',
        end: 'PT7M1.197S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'subject is allowed to access that. So this is implemented by'
        },
        hidden: false,
        userData: null
      },
      {
        id: '1d56758d-a49c-4c4e-afc5-4a14f9f97e21',
        type: 'transcript',
        start: 'PT7M1.197S',
        end: 'PT7M2.553S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'this concept called reference'
        },
        hidden: false,
        userData: null
      },
      {
        id: '9b917e42-b143-44b4-bb14-ec97f3d78c65',
        type: 'transcript',
        start: 'PT7M2.553S',
        end: 'PT7M7.548S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'monitor. So you have a subject and then you have the reference'
        },
        hidden: false,
        userData: null
      },
      {
        id: '7d291e18-3f00-428b-8915-def7b736242d',
        type: 'transcript',
        start: 'PT7M7.548S',
        end: 'PT7M11.486S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'monitor and then you have the object, so every subject will'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c2f004b6-38d8-4f1e-8482-5bf6ec564db5',
        type: 'transcript',
        start: 'PT7M11.486S',
        end: 'PT7M15.424S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'have to go through the reference monitor before it access the'
        },
        hidden: false,
        userData: null
      },
      {
        id: '8a6e668b-4998-4903-9ab1-27c9d3d07a04',
        type: 'transcript',
        start: 'PT7M15.424S',
        end: 'PT7M19.004S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'object, so there is no bypassing mechanism. Subject can never'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ac5623af-371f-42fa-a6b1-cda2cb38ea13',
        type: 'transcript',
        start: 'PT7M19.004S',
        end: 'PT7M22.226S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'directly interact with an object, so always the reference'
        },
        hidden: false,
        userData: null
      },
      {
        id: '6f015021-ea0d-4e5c-9678-fb9bdf3a53a0',
        type: 'transcript',
        start: 'PT7M22.226S',
        end: 'PT7M23.658S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'monitor will be implemented.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '33219618-8cc9-4f85-852d-1ded0002e0e6',
        type: 'transcript',
        start: 'PT7M24.21S',
        end: 'PT7M27.306S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'So reference monitor is basically implemented in the'
        },
        hidden: false,
        userData: null
      },
      {
        id: '23a342c3-700d-46a4-a135-fe5bf4b401cb',
        type: 'transcript',
        start: 'PT7M27.306S',
        end: 'PT7M30.789S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'security kernel right in the security kernel. So security'
        },
        hidden: false,
        userData: null
      },
      {
        id: '50abc522-077a-45f5-b281-83c5eb43b2f4',
        type: 'transcript',
        start: 'PT7M30.789S',
        end: 'PT7M33.885S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'kernel, specially in an operating system. The security'
        },
        hidden: false,
        userData: null
      },
      {
        id: '1bb84e23-18b3-445e-aa09-43916826e498',
        type: 'transcript',
        start: 'PT7M33.885S',
        end: 'PT7M36.981S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'kernel is the implementation that enforces the security'
        },
        hidden: false,
        userData: null
      },
      {
        id: '76f5d8c2-1714-435b-b998-f172dcde9bc6',
        type: 'transcript',
        start: 'PT7M36.981S',
        end: 'PT7M40.851S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'monitor concept. So basically you have a security guard and'
        },
        hidden: false,
        userData: null
      },
      {
        id: '18d4a00e-3f74-4cc5-a944-5bddf6a80cf1',
        type: 'transcript',
        start: 'PT7M40.851S',
        end: 'PT7M45.882S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'you give all the powers to the security guard and give all the'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'd312b36f-5d04-4bf6-8902-668a2ab494ff',
        type: 'transcript',
        start: 'PT7M45.882S',
        end: 'PT7M50.139S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'rules that the security guard should go through. That is what'
        },
        hidden: false,
        userData: null
      },
      {
        id: '24efa302-c794-42fc-b25a-f0dbb5f7e481',
        type: 'transcript',
        start: 'PT7M50.139S',
        end: 'PT7M51.687S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'the responsibility of the'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'cb06818a-df7c-41ee-b495-06cbd932bfc8',
        type: 'transcript',
        start: 'PT7M51.687S',
        end: 'PT7M55.444S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'security kernel. And security kernel should also also'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'aae6c007-797d-47e0-a701-5ccbd2a9d051',
        type: 'transcript',
        start: 'PT7M55.444S',
        end: 'PT7M59.234S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'implement the isolation of processes. What do you mean by'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'bbe2e4c1-c827-4cbb-9603-43bad55a6fb9',
        type: 'transcript',
        start: 'PT7M59.234S',
        end: 'PT8M2.645S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'isolation of processes where basically there can be processes'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c5f2f37d-a0fa-4814-881d-8d4348f651d4',
        type: 'transcript',
        start: 'PT8M2.645S',
        end: 'PT8M7.572S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'that are using the same object that can be a process that is'
        },
        hidden: false,
        userData: null
      },
      {
        id: '4972ddfe-7217-492c-afd9-fc517f2c98ed',
        type: 'transcript',
        start: 'PT8M7.572S',
        end: 'PT8M12.499S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'using the same object. There can be a process that are using the'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'dc8de6ab-8c27-489c-a852-e264a1213cf6',
        type: 'transcript',
        start: 'PT8M12.499S',
        end: 'PT8M16.668S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'same device hardware part of your system, right? In that kind'
        },
        hidden: false,
        userData: null
      },
      {
        id: '8d4eba7f-da1c-4bd0-9579-b44ae93dce8f',
        type: 'transcript',
        start: 'PT8M16.668S',
        end: 'PT8M21.595S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'of a case you have to make sure just becausw a subject get'
        },
        hidden: false,
        userData: null
      },
      {
        id: '3d62327e-3029-4d9a-8001-fc5f8c181819',
        type: 'transcript',
        start: 'PT8M21.595S',
        end: 'PT8M23.49S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'access to one of the.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '5d005042-8278-4496-97ac-5cd4c9e6acd8',
        type: 'transcript',
        start: 'PT8M23.49S',
        end: 'PT8M29.056S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'Objects through a process that does not give the permission to'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'f2f64d01-6d33-43ff-a62d-b03581ab202b',
        type: 'transcript',
        start: 'PT8M29.056S',
        end: 'PT8M32.598S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'that particular subject to access other processes.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '2230393f-55b8-459f-ac67-9828f8e9bb93',
        type: 'transcript',
        start: 'PT8M33.13S',
        end: 'PT8M38.122S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'Other subjects that are related to the same process, I hope that'
        },
        hidden: false,
        userData: null
      },
      {
        id: '03a3bee0-403c-4586-ac2e-0127ffbb3673',
        type: 'transcript',
        start: 'PT8M38.122S',
        end: 'PT8M42.698S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'is clear, right? So there should be a clear isolation between'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'f07bb762-01e5-4e17-8b81-38989b511226',
        type: 'transcript',
        start: 'PT8M42.698S',
        end: 'PT8M46.858S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'processes, an objects and therefore every time a user is'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'd0946e82-2c2a-4161-9fb1-c8e37b89b998',
        type: 'transcript',
        start: 'PT8M46.858S',
        end: 'PT8M52.682S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'trying to every time we use is trying to access an object or a'
        },
        hidden: false,
        userData: null
      },
      {
        id: '7a03b5f7-3c0c-464c-9977-69cf8856535f',
        type: 'transcript',
        start: 'PT8M52.682S',
        end: 'PT8M56.716S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'device. This security kernel must be involved, so reference'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'afecb5fd-949c-478c-ae89-d2898db23bc1',
        type: 'transcript',
        start: 'PT8M56.716S',
        end: 'PT9M0.536S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'monitor must be involved at every access setting, right? So'
        },
        hidden: false,
        userData: null
      },
      {
        id: '91456fe9-668a-4417-bd2c-acd0d8ab273d',
        type: 'transcript',
        start: 'PT9M0.536S',
        end: 'PT9M1.682S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "that's the idea."
        },
        hidden: false,
        userData: null
      },
      {
        id: 'cfc0ca22-5227-499d-9022-6d4f9bf1cb1b',
        type: 'transcript',
        start: 'PT9M2.3S',
        end: 'PT9M7.239S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'So security kernel is a very important part of even an'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'f64b0c32-4a9c-45a6-8f6c-68f64e495148',
        type: 'transcript',
        start: 'PT9M7.239S',
        end: 'PT9M8.586S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'operating system architecture.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'b5fb9d2a-ec21-4af8-8a84-c9fcf78a0941',
        type: 'transcript',
        start: 'PT9M8.66S',
        end: 'PT9M13.83S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "So it's important to understand that the hardware, firmware and"
        },
        hidden: false,
        userData: null
      },
      {
        id: '2b73a333-cee4-4fc2-b905-98fc03d8ecc0',
        type: 'transcript',
        start: 'PT9M13.83S',
        end: 'PT9M16.415S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'software elements of a trusted'
        },
        hidden: false,
        userData: null
      },
      {
        id: '3e5c6c46-10b4-4e6d-953b-c741a2d0fc09',
        type: 'transcript',
        start: 'PT9M16.415S',
        end: 'PT9M19.385S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'computing base. Implement the reference. This reference'
        },
        hidden: false,
        userData: null
      },
      {
        id: '6a0bb931-6f65-4d12-9375-974d8788c31f',
        type: 'transcript',
        start: 'PT9M19.385S',
        end: 'PT9M22.85S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'monitor concept through the security kernel, so these other'
        },
        hidden: false,
        userData: null
      },
      {
        id: '528e60b7-2552-4375-a030-8e7f9ac37f36',
        type: 'transcript',
        start: 'PT9M22.85S',
        end: 'PT9M27.085S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'terms that you should be familiar with. So in order to'
        },
        hidden: false,
        userData: null
      },
      {
        id: '2620fbc0-ae98-4fa3-9969-ebf2c540f1a4',
        type: 'transcript',
        start: 'PT9M27.085S',
        end: 'PT9M31.32S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'understand this. So first of all, we have to understand what'
        },
        hidden: false,
        userData: null
      },
      {
        id: '3b4d5a86-a0dc-4523-8c32-04d9ba3bfd95',
        type: 'transcript',
        start: 'PT9M31.32S',
        end: 'PT9M36.325S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'files are so we know what files are we deal with files everyday,'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ead3c284-93a0-4a3f-a7cd-acc32d5672d9',
        type: 'transcript',
        start: 'PT9M36.325S',
        end: 'PT9M40.945S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'but when it comes to operating system level as well as critical'
        },
        hidden: false,
        userData: null
      },
      {
        id: '5bf87829-f4c7-4bbc-8063-24314f9f41ad',
        type: 'transcript',
        start: 'PT9M40.945S',
        end: 'PT9M44.795S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'applications, there can be two different types of files easily'
        },
        hidden: false,
        userData: null
      },
      {
        id: '2725b1ad-7206-49d5-8c11-f80a20c4644e',
        type: 'transcript',
        start: 'PT9M44.795S',
        end: 'PT9M48.645S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'identify which is high integrity files and low integrity files.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a0d46284-c34c-4324-b8c8-9d332d4ba287',
        type: 'transcript',
        start: 'PT9M48.65S',
        end: 'PT9M53.27S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'So high integrity files are usually what we call system'
        },
        hidden: false,
        userData: null
      },
      {
        id: '3ed5065a-9bba-4533-8bf7-2e5fd1deaed7',
        type: 'transcript',
        start: 'PT9M53.27S',
        end: 'PT9M57.89S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'objects right there. What we call system objects. So system'
        },
        hidden: false,
        userData: null
      },
      {
        id: '54071a57-5cb5-4c04-af6e-a8af94736616',
        type: 'transcript',
        start: 'PT9M57.89S',
        end: 'PT10M0.36S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'objects usually. Um?'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ab41e208-1674-492a-81ec-8accd8bcd82a',
        type: 'transcript',
        start: 'PT10M1.25S',
        end: 'PT10M6.068S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Anything in the user folder right route? You know you have.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a4360009-c49a-43d3-b19a-c1345f5fdbbe',
        type: 'transcript',
        start: 'PT10M6.068S',
        end: 'PT10M8.258S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Have you heard of rootkits?'
        },
        hidden: false,
        userData: null
      },
      {
        id: '9425bdc6-089c-4f10-bc1c-29cffbe0e76f',
        type: 'transcript',
        start: 'PT10M8.81S',
        end: 'PT10M13.502S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Night rootkits are a set of tools that attack us use to'
        },
        hidden: false,
        userData: null
      },
      {
        id: '173d2884-0513-4dd4-b574-902675a60b41',
        type: 'transcript',
        start: 'PT10M13.502S',
        end: 'PT10M18.194S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'directly affect the system. So what is the target of a rootkit'
        },
        hidden: false,
        userData: null
      },
      {
        id: '24d9d22a-d424-4776-a8da-6e41729a59df',
        type: 'transcript',
        start: 'PT10M18.194S',
        end: 'PT10M22.886S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'where the target of a rootkit is high integrity files, so high'
        },
        hidden: false,
        userData: null
      },
      {
        id: '6ae6d8a5-27d2-4383-8076-4601ac6d6f9e',
        type: 'transcript',
        start: 'PT10M22.886S',
        end: 'PT10M27.578S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'integrity files are any type of a file that affects the behavior'
        },
        hidden: false,
        userData: null
      },
      {
        id: '6f7c4b75-c89a-46f5-b717-05b913ebfb6c',
        type: 'transcript',
        start: 'PT10M27.578S',
        end: 'PT10M28.751S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'of the system.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '3d43b23c-586a-486a-8fa8-97227c07ea95',
        type: 'transcript',
        start: 'PT10M29.43S',
        end: 'PT10M33.753S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'Right, that affects the behavior of the system that affects the'
        },
        hidden: false,
        userData: null
      },
      {
        id: '499515ac-2d8a-4736-a793-86efcd3bfc8a',
        type: 'transcript',
        start: 'PT10M33.753S',
        end: 'PT10M37.683S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'behavior of devices attached to the system. So very high'
        },
        hidden: false,
        userData: null
      },
      {
        id: '0543eb98-3364-4d77-89a9-9b0d50b98fee',
        type: 'transcript',
        start: 'PT10M37.683S',
        end: 'PT10M42.006S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "integrity files we're talking about. So any type of file that"
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ea4fd8ec-fa6d-4b73-bc24-fc2f6edf1fbc',
        type: 'transcript',
        start: 'PT10M42.006S',
        end: 'PT10M46.329S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'is inside the boot folder. If you are talking about Linux'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'cdf6024a-d99c-400e-b0c8-5efc1632d9a2',
        type: 'transcript',
        start: 'PT10M46.329S',
        end: 'PT10M49.473S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Environment Library folder is Bing, Bing or configuration'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'adcb9f1b-6944-4d85-be83-9f7fd8f199a0',
        type: 'transcript',
        start: 'PT10M49.473S',
        end: 'PT10M54.189S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'files stored in the ETC folder, right? So all these are high'
        },
        hidden: false,
        userData: null
      },
      {
        id: '5df4f8ff-5d1d-4919-ab7c-5ebd034115de',
        type: 'transcript',
        start: 'PT10M54.189S',
        end: 'PT10M58.119S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'integrity files so we cannot treat high integrity files the'
        },
        hidden: false,
        userData: null
      },
      {
        id: '5ca90f86-4ca8-4440-aa5f-1901a74c7b8e',
        type: 'transcript',
        start: 'PT10M58.119S',
        end: 'PT11M0.477S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'same way that we treat low'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'd6843451-794f-4841-8a5a-4071e3ee95fe',
        type: 'transcript',
        start: 'PT11M0.477S',
        end: 'PT11M2.502S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'integrity files. So what are low'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'b1926c70-6aea-49ba-8c92-95c3197361d5',
        type: 'transcript',
        start: 'PT11M2.502S',
        end: 'PT11M6.974S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'integrity files? On the other hand, low integrity files are'
        },
        hidden: false,
        userData: null
      },
      {
        id: '68fa702a-41a5-4d2a-9786-dc6b0061647e',
        type: 'transcript',
        start: 'PT11M6.974S',
        end: 'PT11M12.126S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "any type of a file. That is what we call untrusted. So why don't"
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ebbfba8e-1aea-43cc-9a28-a8d26200a917',
        type: 'transcript',
        start: 'PT11M12.126S',
        end: 'PT11M16.174S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "we trust some files? Well, it's basically because that file does"
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c656cb42-0e57-4b5f-8238-8ad4a0ef9d9c',
        type: 'transcript',
        start: 'PT11M16.174S',
        end: 'PT11M20.958S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'not have anything to do with the integrity or the behavior or the'
        },
        hidden: false,
        userData: null
      },
      {
        id: '97956d3e-8104-4cf1-b502-a2facf4c37cb',
        type: 'transcript',
        start: 'PT11M20.958S',
        end: 'PT11M24.638S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'functionality of our overall system. So, for example, if you'
        },
        hidden: false,
        userData: null
      },
      {
        id: '88e1dfd3-aa54-44c0-93cf-3cb986ea37cf',
        type: 'transcript',
        start: 'PT11M24.638S',
        end: 'PT11M29.054S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "have a file just created in the home documents folder, let's say"
        },
        hidden: false,
        userData: null
      },
      {
        id: '6c124930-7556-4bcf-b7bf-7e2ee5de23f1',
        type: 'transcript',
        start: 'PT11M29.054S',
        end: 'PT11M33.838S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "it's an Excel file or a word file, well, that belongs to low"
        },
        hidden: false,
        userData: null
      },
      {
        id: '6ea83208-89f0-4948-a388-a49d5052b256',
        type: 'transcript',
        start: 'PT11M33.838S',
        end: 'PT11M35.01S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'integrity category. Time.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '4a28027c-335f-43ab-a6ec-82af315c3e2a',
        type: 'transcript',
        start: 'PT11M35.92S',
        end: 'PT11M39.862S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'That belongs to your low integrity category, so usually'
        },
        hidden: false,
        userData: null
      },
      {
        id: '57422c35-fa5f-4cba-a146-4729d6e8eaf1',
        type: 'transcript',
        start: 'PT11M39.862S',
        end: 'PT11M44.68S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'anything that is derived or anything that is created by the'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'f822ca02-ea50-42d0-9fd1-56743eeb030d',
        type: 'transcript',
        start: 'PT11M44.68S',
        end: 'PT11M46.87S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'users are considered as low'
        },
        hidden: false,
        userData: null
      },
      {
        id: '7b682d54-eb08-4642-9c6b-656f64a67662',
        type: 'transcript',
        start: 'PT11M46.87S',
        end: 'PT11M50.982S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'integrity files. It belongs to the low integrity domain, right?'
        },
        hidden: false,
        userData: null
      },
      {
        id: '44361ebb-1e78-4142-97d4-d6576ebd5515',
        type: 'transcript',
        start: 'PT11M50.982S',
        end: 'PT11M55.129S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'So I hope this is clear, so we have two different types of'
        },
        hidden: false,
        userData: null
      },
      {
        id: '87190407-47b3-421b-93b4-1eac54fe5a12',
        type: 'transcript',
        start: 'PT11M55.129S',
        end: 'PT11M58S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'files. Clearly low integrity files and high integrity files.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'e70aab03-8142-4713-a1cb-a33d161a2ac7',
        type: 'transcript',
        start: 'PT11M59.87S',
        end: 'PT12M2.675S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'And of course, we know that the security requirements for these'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ed7c7a7b-2a84-402b-aa75-4cfea61d2a12',
        type: 'transcript',
        start: 'PT12M2.675S',
        end: 'PT12M3.95S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'two different types of files'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'f6f7a76c-30f2-45e2-bb15-da64bbe04331',
        type: 'transcript',
        start: 'PT12M3.95S',
        end: 'PT12M8.791S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'will be different. So based on the integrity of the file high'
        },
        hidden: false,
        userData: null
      },
      {
        id: '2fbd1d6e-abba-4ec8-9c70-fac62f4f693d',
        type: 'transcript',
        start: 'PT12M8.791S',
        end: 'PT12M11.065S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'or low, we can also define.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '2fb016a3-c268-4848-9501-3ccdef202664',
        type: 'transcript',
        start: 'PT12M11.72S',
        end: 'PT12M16.877S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'High integrity processes and low integrity processes. So for'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'adc6d363-3b9b-4a18-9fa4-c5c1f57f0f09',
        type: 'transcript',
        start: 'PT12M16.877S',
        end: 'PT12M22.91S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'example. Low integrity process is when you know it is a process'
        },
        hidden: false,
        userData: null
      },
      {
        id: '4944312f-b26a-4dff-a598-a7d01ea200ab',
        type: 'transcript',
        start: 'PT12M22.91S',
        end: 'PT12M26.87S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'that reads data from an untrusted network or untrusted'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a2942e8a-689b-4294-812c-82a1e08cb1c7',
        type: 'transcript',
        start: 'PT12M26.87S',
        end: 'PT12M31.71S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'file low integrity file. So we said untrusted files are also'
        },
        hidden: false,
        userData: null
      },
      {
        id: '18a92b51-ad13-4486-8f6b-398c2e0723bc',
        type: 'transcript',
        start: 'PT12M31.71S',
        end: 'PT12M36.99S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'called low integrity files. So if there is a process that is'
        },
        hidden: false,
        userData: null
      },
      {
        id: '1e862cac-273c-464b-8e87-a4ff5d85159c',
        type: 'transcript',
        start: 'PT12M36.99S',
        end: 'PT12M38.31S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'usually reading data.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '22a818af-44c8-4890-8a10-d5f5001ec9ac',
        type: 'transcript',
        start: 'PT12M38.86S',
        end: 'PT12M43.288S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'Right from an untrusted file or a low integrity file, we can'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'f9744f79-e74b-4955-9c05-177ec84df45a',
        type: 'transcript',
        start: 'PT12M43.288S',
        end: 'PT12M45.502S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'call it a low integrity process.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c7d6d814-4f26-44a8-8fb7-4b55f16f1700',
        type: 'transcript',
        start: 'PT12M46.01S',
        end: 'PT12M51.235S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "Here's an example, an Apache Web server which is reading from"
        },
        hidden: false,
        userData: null
      },
      {
        id: '4e1c155d-87d3-466c-9408-e31781686616',
        type: 'transcript',
        start: 'PT12M51.235S',
        end: 'PT12M56.46S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'home slash public dot HTML file and receives queries from the'
        },
        hidden: false,
        userData: null
      },
      {
        id: '88966db6-adaf-4c64-9916-964b2a8f06e6',
        type: 'transcript',
        start: 'PT12M56.46S',
        end: 'PT13M0.735S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Internet is low integrity because we can clearly see.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '2327332a-0991-4efe-a01c-95e4b608c26b',
        type: 'transcript',
        start: 'PT13M1.96S',
        end: 'PT13M6.184S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Public HTML file is a user created files and not only that,'
        },
        hidden: false,
        userData: null
      },
      {
        id: '827a5131-6c39-4931-a85b-48c231ce9221',
        type: 'transcript',
        start: 'PT13M6.184S',
        end: 'PT13M10.408S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'if it is receiving queries from the Internet, so that is the'
        },
        hidden: false,
        userData: null
      },
      {
        id: '5cdc1a11-d229-4355-8ee7-903a98ef8d63',
        type: 'transcript',
        start: 'PT13M10.408S',
        end: 'PT13M14.28S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'outside of the network, which is definitely untrusted. Then it is'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'eb0568e6-640d-49b2-bd8c-f8ee020030fa',
        type: 'transcript',
        start: 'PT13M14.28S',
        end: 'PT13M18.152S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'low integrity. On the other hand, we can have something like'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'b3a31c5e-79ca-4933-b4e5-5807011ef575',
        type: 'transcript',
        start: 'PT13M18.152S',
        end: 'PT13M22.024S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'an RPM ordered had package manage are so Red Hat package'
        },
        hidden: false,
        userData: null
      },
      {
        id: '1a1f3611-a42f-4213-9d26-8a926ec95c66',
        type: 'transcript',
        start: 'PT13M22.024S',
        end: 'PT13M25.192S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'manager is implemented by the administrator right? And then'
        },
        hidden: false,
        userData: null
      },
      {
        id: '4d142585-8a40-4e00-8716-af01d366894a',
        type: 'transcript',
        start: 'PT13M25.192S',
        end: 'PT13M28.712S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'our PM can download directly from your windows site. We'
        },
        hidden: false,
        userData: null
      },
      {
        id: '72b8ea04-3ff5-4458-83a5-131ba0db6571',
        type: 'transcript',
        start: 'PT13M28.712S',
        end: 'PT13M32.232S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'assume that it is the windows side, but there are.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '1a1ec9ad-18d9-4e43-af9b-cf2a18aed37e',
        type: 'transcript',
        start: 'PT13M32.27S',
        end: 'PT13M36.142S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'Digital signatures and so many things that are used to verify'
        },
        hidden: false,
        userData: null
      },
      {
        id: '2ba154ee-bf60-4ed2-80bf-0eeeffd8d1b4',
        type: 'transcript',
        start: 'PT13M36.142S',
        end: 'PT13M41.07S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'that it is the vendor, so it can be read had an 80s basically'
        },
        hidden: false,
        userData: null
      },
      {
        id: '79e875da-9873-4011-8b57-96f1bc3d5419',
        type: 'transcript',
        start: 'PT13M41.07S',
        end: 'PT13M44.59S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'installed over the system and then it is high integrity'
        },
        hidden: false,
        userData: null
      },
      {
        id: '30e9e406-9e0d-4584-989a-ebde86cebef6',
        type: 'transcript',
        start: 'PT13M44.59S',
        end: 'PT13M48.462S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'because it is affecting the way that the system operates, right?'
        },
        hidden: false,
        userData: null
      },
      {
        id: '9e554993-de0a-4075-a71f-f41966561126',
        type: 'transcript',
        start: 'PT13M48.462S',
        end: 'PT13M51.982S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "We don't know where there is free of vulnerabilities or"
        },
        hidden: false,
        userData: null
      },
      {
        id: '497bf0f0-60cc-4a0a-9b48-f6b784b14ec6',
        type: 'transcript',
        start: 'PT13M51.982S',
        end: 'PT13M56.558S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'errors, but right now we are, but we have to understand is Red'
        },
        hidden: false,
        userData: null
      },
      {
        id: '8725fa6a-0b1f-4833-8877-d8ef253e428f',
        type: 'transcript',
        start: 'PT13M56.558S',
        end: 'PT13M59.726S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Hat package manager will download the files and even'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'd6bd12d8-e044-4a14-87fb-a5ae884c05c8',
        type: 'transcript',
        start: 'PT13M59.726S',
        end: 'PT14M2.542S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'install over your system and therefore it will.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '732099ac-9cc8-4512-a514-2828444afa2c',
        type: 'transcript',
        start: 'PT14M2.61S',
        end: 'PT14M6.636S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "Affect the high integrity files because it's an update. Or maybe"
        },
        hidden: false,
        userData: null
      },
      {
        id: '257ae68a-0c48-4ed8-9125-72cfea769d75',
        type: 'transcript',
        start: 'PT14M6.636S',
        end: 'PT14M11.76S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "it's a Patch or an update tool system, so I hope that is clear."
        },
        hidden: false,
        userData: null
      },
      {
        id: '93465e00-5dcc-46d2-a85a-735b56e9c370',
        type: 'transcript',
        start: 'PT14M11.76S',
        end: 'PT14M16.152S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'So we have two different types of files as well as two'
        },
        hidden: false,
        userData: null
      },
      {
        id: '1935a0ab-6a54-459e-9842-15487c7eb729',
        type: 'transcript',
        start: 'PT14M16.152S',
        end: 'PT14M20.178S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "different types of processes. So now let's go deep into the"
        },
        hidden: false,
        userData: null
      },
      {
        id: '2aa3aaf6-946d-4ae0-8c0f-baa1f77da932',
        type: 'transcript',
        start: 'PT14M20.178S',
        end: 'PT14M24.57S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'details of how these now that we know how integrity low integrity'
        },
        hidden: false,
        userData: null
      },
      {
        id: '35166809-866a-4c47-bd2d-6c304143636d',
        type: 'transcript',
        start: 'PT14M24.57S',
        end: 'PT14M28.596S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'concept system architecture is also clear to us. What is the'
        },
        hidden: false,
        userData: null
      },
      {
        id: '8cf9b37a-3be2-4bd2-b356-11e05c29a7cb',
        type: 'transcript',
        start: 'PT14M28.596S',
        end: 'PT14M31.524S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'system architecture? Well, system architectures I said is'
        },
        hidden: false,
        userData: null
      },
      {
        id: '4404062c-61ab-4437-9bf2-3b08660e8c3f',
        type: 'transcript',
        start: 'PT14M31.524S',
        end: 'PT14M32.622S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'different components, hardware,'
        },
        hidden: false,
        userData: null
      },
      {
        id: '9cf8e946-628f-468d-a7f6-0539ef2c7200',
        type: 'transcript',
        start: 'PT14M32.622S',
        end: 'PT14M37.435S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'software, network. All these things. So how can we use this'
        },
        hidden: false,
        userData: null
      },
      {
        id: '5da6afaa-9c95-41d7-99bb-87742386c535',
        type: 'transcript',
        start: 'PT14M37.435S',
        end: 'PT14M41.885S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'concept called security models? OK, so there are so many'
        },
        hidden: false,
        userData: null
      },
      {
        id: '4097a5b1-f73f-4396-8c81-b0e2697a8c31',
        type: 'transcript',
        start: 'PT14M41.885S',
        end: 'PT14M46.335S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'different security models and each model has its advantage and'
        },
        hidden: false,
        userData: null
      },
      {
        id: '6e65fee8-aaef-481c-948d-b933a3ae9f93',
        type: 'transcript',
        start: 'PT14M46.335S',
        end: 'PT14M50.34S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'disadvantage. OK, so the principle behind all the concept'
        },
        hidden: false,
        userData: null
      },
      {
        id: '263fcc74-75e0-4701-9310-a618a4592f27',
        type: 'transcript',
        start: 'PT14M50.34S',
        end: 'PT14M55.68S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "behind security models is that it's based on the file and the"
        },
        hidden: false,
        userData: null
      },
      {
        id: '568ef42f-2ab9-4a38-a934-516da17783c0',
        type: 'transcript',
        start: 'PT14M55.68S',
        end: 'PT14M59.685S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'process integrity definitions. So we already talked about it.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '6c473cef-62c6-405d-9d0e-911243ad8e57',
        type: 'transcript',
        start: 'PT14M59.685S',
        end: 'PT15M4.135S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'We have high integrity and low integrity files, high integrity'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'b44e47f6-6eff-4022-a40e-860763416e12',
        type: 'transcript',
        start: 'PT15M4.135S',
        end: 'PT15M5.915S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'processes and low integrity'
        },
        hidden: false,
        userData: null
      },
      {
        id: '3bebb3a5-38be-4142-bd7f-021a773e393d',
        type: 'transcript',
        start: 'PT15M5.915S',
        end: 'PT15M10.461S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "processes. So today we're going to look at a few few different"
        },
        hidden: false,
        userData: null
      },
      {
        id: '9a1ae3ea-3d5a-417e-b80a-17db2d5ad121',
        type: 'transcript',
        start: 'PT15M10.461S',
        end: 'PT15M14.542S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'security models that have been proposed, and some of them are'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'd46e49e1-a6d9-4d9c-b630-86054c601d3d',
        type: 'transcript',
        start: 'PT15M14.542S',
        end: 'PT15M18.623S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "used for different purposes, right? So it doesn't say one is"
        },
        hidden: false,
        userData: null
      },
      {
        id: '49dfead2-ebcc-44e5-86ff-40721a0943de',
        type: 'transcript',
        start: 'PT15M18.623S',
        end: 'PT15M23.446S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'good and the other one is bad, so these are the security models'
        },
        hidden: false,
        userData: null
      },
      {
        id: '6bad1353-9c64-4941-be24-082c0f9056ed',
        type: 'transcript',
        start: 'PT15M23.446S',
        end: 'PT15M27.527S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "that we won't discuss. And mainly we will try to discuss"
        },
        hidden: false,
        userData: null
      },
      {
        id: '423c0995-a5f9-48e4-a2d1-cdd7c17af72c',
        type: 'transcript',
        start: 'PT15M27.527S',
        end: 'PT15M32.35S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'these first 2 the Blep model and Bieber model and we will also'
        },
        hidden: false,
        userData: null
      },
      {
        id: '0ffdcdc6-251e-4ebc-810f-aadb2b4f012a',
        type: 'transcript',
        start: 'PT15M32.35S',
        end: 'PT15M36.431S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'look at the other three BLP stands for Bill Lapadula module.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '4160d9f3-7c34-4d9e-a20d-395734a8e74e',
        type: 'transcript',
        start: 'PT15M36.49S',
        end: 'PT15M37.948S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Then we also have deep amount.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'e2f97fec-7735-4d1f-ae36-5537380bd6ca',
        type: 'transcript',
        start: 'PT15M38.57S',
        end: 'PT15M42.944S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'So for cybersecurity students, you might already be familiar'
        },
        hidden: false,
        userData: null
      },
      {
        id: '7109eb8b-8053-449f-8c50-f9e7e5e67c67',
        type: 'transcript',
        start: 'PT15M42.944S',
        end: 'PT15M46.832S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'with security models concepts. However, other students might'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a961b3e0-e560-4ee6-ad84-94b3306f7076',
        type: 'transcript',
        start: 'PT15M46.832S',
        end: 'PT15M51.92S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'be. Confronting these two models for the first time, right? So'
        },
        hidden: false,
        userData: null
      },
      {
        id: '575f825f-6351-4547-85b7-3242e62ea098',
        type: 'transcript',
        start: 'PT15M51.92S',
        end: 'PT15M57.44S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "let's look at the LP model or Bella padula model Bella Padilla"
        },
        hidden: false,
        userData: null
      },
      {
        id: '68f3b9e8-4b2e-4155-9fe6-033fec6ffb6c',
        type: 'transcript',
        start: 'PT15M57.44S',
        end: 'PT16M3.88S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'model, or the LP model is based on simple 3 rolls, 3 rules are'
        },
        hidden: false,
        userData: null
      },
      {
        id: '7a9b3cb5-89a9-4211-9eb7-0a4ede8b3196',
        type: 'transcript',
        start: 'PT16M3.88S',
        end: 'PT16M9.223S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'there. These three rules define what a subject can do to an'
        },
        hidden: false,
        userData: null
      },
      {
        id: '10856544-4835-4f53-a8a9-ea598a4b8ae1',
        type: 'transcript',
        start: 'PT16M9.223S',
        end: 'PT16M13.653S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'object, right? So very important to understand, we define this'
        },
        hidden: false,
        userData: null
      },
      {
        id: '0afa7dfa-6133-4646-9b12-0ca4274fb8ed',
        type: 'transcript',
        start: 'PT16M13.653S',
        end: 'PT16M18.969S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'high integrity and low integrity model right so high and low, but'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'b3a23178-9a33-4d7b-90ae-90b59f366319',
        type: 'transcript',
        start: 'PT16M18.969S',
        end: 'PT16M23.842S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'like that an operating system or application can define more than'
        },
        hidden: false,
        userData: null
      },
      {
        id: '7027d7b2-51e0-4e59-8e79-10e64cef6b5d',
        type: 'transcript',
        start: 'PT16M23.842S',
        end: 'PT16M29.601S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'two levels more than two level, so it can be high, medium, low,'
        },
        hidden: false,
        userData: null
      },
      {
        id: '0567d900-62a5-43ee-953d-8f83d44cf440',
        type: 'transcript',
        start: 'PT16M29.601S',
        end: 'PT16M34.474S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'right? So if you want, you can define like that, OK?'
        },
        hidden: false,
        userData: null
      },
      {
        id: '39d3c186-fbd9-48a6-a46d-0042aa0fb4e4',
        type: 'transcript',
        start: 'PT16M34.48S',
        end: 'PT16M40.288S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "So if let's assume that there can be multiple levels of"
        },
        hidden: false,
        userData: null
      },
      {
        id: '68821dde-cc37-4057-9585-f82f8890ae72',
        type: 'transcript',
        start: 'PT16M40.288S',
        end: 'PT16M45.568S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'security, multiple levels of security. So if we have multiple'
        },
        hidden: false,
        userData: null
      },
      {
        id: '7b4e792d-51f1-4a0a-afe1-917c376a3818',
        type: 'transcript',
        start: 'PT16M45.568S',
        end: 'PT16M51.904S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'levels of security be LP model defines 3 rules to utilize OK.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '7479528c-b463-4c5d-9141-daa4ae5b26b6',
        type: 'transcript',
        start: 'PT16M53.05S',
        end: 'PT16M57.461S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'So the first rule is simple security property. The best way'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'd14cb407-bd9a-44ae-a2d7-c777fd451c50',
        type: 'transcript',
        start: 'PT16M57.461S',
        end: 'PT16M59.867S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'to remember this says no read'
        },
        hidden: false,
        userData: null
      },
      {
        id: '7636cd85-76ac-4be0-8d5d-58a1221aa141',
        type: 'transcript',
        start: 'PT16M59.867S',
        end: 'PT17M5.34S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "up. Right, so basically what we're saying is a subject can"
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c29a6aae-37e2-41e6-b662-a46b03ca145d',
        type: 'transcript',
        start: 'PT17M5.34S',
        end: 'PT17M10.5S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'never read data from a security level that is higher than the'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'be64726c-7855-4701-9c13-ff94692350a1',
        type: 'transcript',
        start: 'PT17M10.5S',
        end: 'PT17M15.23S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'subject security level. So if I have the security level medium'
        },
        hidden: false,
        userData: null
      },
      {
        id: '408c8e90-ae0f-4752-9ffe-99135dd4390f',
        type: 'transcript',
        start: 'PT17M15.23S',
        end: 'PT17M19.96S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'as a subject, I cannot read data from high security level'
        },
        hidden: false,
        userData: null
      },
      {
        id: '7a474eda-405d-46f9-9605-21a0fbcf456f',
        type: 'transcript',
        start: 'PT17M19.96S',
        end: 'PT17M25.12S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'objects. I hope that is clear. So looking at this diagram, what'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'f30658c0-e20f-4c2e-9374-ed2c92ac65ef',
        type: 'transcript',
        start: 'PT17M25.12S',
        end: 'PT17M27.27S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "we're talking about is this"
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c09a30e8-a4ae-4587-849b-a9a702d852fd',
        type: 'transcript',
        start: 'PT17M27.27S',
        end: 'PT17M31.84S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'particular. Cross or that Red Sign. Red Cross means you cannot'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c82ce7f5-fc74-4867-8d0c-dfd389b359f7',
        type: 'transcript',
        start: 'PT17M31.84S',
        end: 'PT17M36.533S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'do that. So what cannot you do? You cannot read data from a'
        },
        hidden: false,
        userData: null
      },
      {
        id: '2dfe1208-0c53-470c-a9b4-5bd6ca77e58a',
        type: 'transcript',
        start: 'PT17M36.533S',
        end: 'PT17M40.504S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'higher level of security to a lower level of security. You'
        },
        hidden: false,
        userData: null
      },
      {
        id: '5015f75d-c215-4d13-a9e9-486a5402574a',
        type: 'transcript',
        start: 'PT17M40.504S',
        end: 'PT17M43.753S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'cannot read data, right? I hope that is clear.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '56ccd87a-b807-49cc-a549-0b0de25d7bac',
        type: 'transcript',
        start: 'PT17M44.27S',
        end: 'PT17M47.974S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'So that is basically the first security property.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'd5a360b5-6e71-4b9c-906e-78c54f2085cc',
        type: 'transcript',
        start: 'PT17M47.974S',
        end: 'PT17M51.215S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'First security property, simple security property and'
        },
        hidden: false,
        userData: null
      },
      {
        id: '3d8f61e4-7b98-460c-878b-8c610d3da3eb',
        type: 'transcript',
        start: 'PT17M51.215S',
        end: 'PT17M55.845S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'then the second security property of Blpi model is the'
        },
        hidden: false,
        userData: null
      },
      {
        id: '016e8554-86c9-47f3-b2ce-440a0e707449',
        type: 'transcript',
        start: 'PT17M55.845S',
        end: 'PT17M57.234S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'star security property.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '98ec4f7f-fb7c-4ae6-aab0-d4627114dce4',
        type: 'transcript',
        start: 'PT17M58.29S',
        end: 'PT18M2.811S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'So the star security property is basically no write down model,'
        },
        hidden: false,
        userData: null
      },
      {
        id: '76ccbe1d-adbf-4a1e-9fdb-2105d24cd679',
        type: 'transcript',
        start: 'PT18M2.811S',
        end: 'PT18M7.743S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'no right down, right? So a subject cannot write data to a'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ccbcef60-dc8b-4099-9cc4-b2dda38c97cf',
        type: 'transcript',
        start: 'PT18M7.743S',
        end: 'PT18M11.853S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'security level lower than the subject security level. So we'
        },
        hidden: false,
        userData: null
      },
      {
        id: '04d4efd5-79e2-49b6-9b93-5e55e7dc2660',
        type: 'transcript',
        start: 'PT18M11.853S',
        end: 'PT18M13.908S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'are talking about this cross'
        },
        hidden: false,
        userData: null
      },
      {
        id: '67c8da40-d96f-4ca1-bf6a-65570efff3f2',
        type: 'transcript',
        start: 'PT18M13.908S',
        end: 'PT18M19.15S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "here. This cross here so if I'm in the middle layer of security"
        },
        hidden: false,
        userData: null
      },
      {
        id: '360bc43e-36c4-4ff5-8205-3b36f7930145',
        type: 'transcript',
        start: 'PT18M19.15S',
        end: 'PT18M22.89S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'label I cannot write to this object to a lower level.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'bf0e83fc-1e9b-4467-b8bb-d2dc882dae39',
        type: 'transcript',
        start: 'PT18M23.5S',
        end: 'PT18M28.078S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'Right lower level, so you must be thinking why do we want to do'
        },
        hidden: false,
        userData: null
      },
      {
        id: '46dceca3-3061-463c-8a7b-13f2ef41dfcb',
        type: 'transcript',
        start: 'PT18M28.078S',
        end: 'PT18M31.021S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'that? But once again, these models are for different'
        },
        hidden: false,
        userData: null
      },
      {
        id: '701138ce-75d8-49a6-9eb0-e6626663fd58',
        type: 'transcript',
        start: 'PT18M31.021S',
        end: 'PT18M35.272S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'purposes, so we will talk about the purpose of this model in a'
        },
        hidden: false,
        userData: null
      },
      {
        id: '0d7bba83-0fcb-47e8-94e9-ac5256eed596',
        type: 'transcript',
        start: 'PT18M35.272S',
        end: 'PT18M38.869S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'bit, but understand that if you have a higher security level,'
        },
        hidden: false,
        userData: null
      },
      {
        id: '382b7e75-c989-4063-898c-ef26891d4dfa',
        type: 'transcript',
        start: 'PT18M38.869S',
        end: 'PT18M42.466S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'you cannot write to lower security levels. So that is what'
        },
        hidden: false,
        userData: null
      },
      {
        id: '4539a727-3b41-4ac8-8b4e-74948c932fd5',
        type: 'transcript',
        start: 'PT18M42.466S',
        end: 'PT18M46.39S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'we call by the star property. And then we have strong star'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'bb86877a-fb69-440a-b9c0-1ba11bf412e2',
        type: 'transcript',
        start: 'PT18M46.39S',
        end: 'PT18M51.691S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'property. Right store strong star property is no read write'
        },
        hidden: false,
        userData: null
      },
      {
        id: '1543e6c8-e887-48b3-a133-a4bbea0e89bc',
        type: 'transcript',
        start: 'PT18M51.691S',
        end: 'PT18M57.602S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'up. Right, no read, write up or down, right? No read, write up'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c622fecd-7c1f-4317-bac3-2dd455867cbb',
        type: 'transcript',
        start: 'PT18M57.602S',
        end: 'PT19M2.815S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "or down. So let's talk about what that is a subject with read"
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c08d8783-682c-4cf8-8f43-77b8412b8c98',
        type: 'transcript',
        start: 'PT19M2.815S',
        end: 'PT19M7.226S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'and write privileges can perform read and write functions only at'
        },
        hidden: false,
        userData: null
      },
      {
        id: '6badce92-f19f-4581-ab5e-bfaba0a66541',
        type: 'transcript',
        start: 'PT19M7.226S',
        end: 'PT19M12.439S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "the subject security level. So let's have a look at this in a"
        },
        hidden: false,
        userData: null
      },
      {
        id: '5f652985-5573-45cd-b14e-826511ad1179',
        type: 'transcript',
        start: 'PT19M12.439S',
        end: 'PT19M17.652S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'much better way. So as you can see there is. This is my'
        },
        hidden: false,
        userData: null
      },
      {
        id: '53d49f59-c5f4-4e09-a321-fabce87651e5',
        type: 'transcript',
        start: 'PT19M17.652S',
        end: 'PT19M22.063S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'security level for an example right. I cannot read or write.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'dcc7331f-23ca-41f7-820a-eaa7b2c26ecc',
        type: 'transcript',
        start: 'PT19M22.96S',
        end: 'PT19M24.94S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'I cannot read or write.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '2f0b8075-cb51-41b6-866e-337d7112d41a',
        type: 'transcript',
        start: 'PT19M26.3S',
        end: 'PT19M30.794S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'To the upper level as well as I cannot read or write to the'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'b8146bea-b9de-4d1c-bf9e-111b03737f75',
        type: 'transcript',
        start: 'PT19M30.794S',
        end: 'PT19M35.942S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'lower level. Alright, so this is basically only the same level'
        },
        hidden: false,
        userData: null
      },
      {
        id: '9cc87349-b003-4704-b3aa-910c19ae332b',
        type: 'transcript',
        start: 'PT19M35.942S',
        end: 'PT19M40.32S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'interaction, so there is nothing you can do about the upper'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'f5260ec4-8f24-4495-8ad6-f5bab22ed02e',
        type: 'transcript',
        start: 'PT19M40.32S',
        end: 'PT19M44.3S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "level, right? Oh, there's nothing you can do about the"
        },
        hidden: false,
        userData: null
      },
      {
        id: '973c9ee8-b98f-4c5a-86de-dbd41e0c6a9a',
        type: 'transcript',
        start: 'PT19M44.3S',
        end: 'PT19M49.076S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'lower level, but if you look at the star property you can'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'cbe02fec-39a0-4ffb-9c0d-2c90c7ed84e5',
        type: 'transcript',
        start: 'PT19M49.076S',
        end: 'PT19M53.41S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'actually. Go the above level right. You can go there but'
        },
        hidden: false,
        userData: null
      },
      {
        id: '104aaff9-3b53-4eb8-8ee6-2f5fe7550df3',
        type: 'transcript',
        start: 'PT19M53.41S',
        end: 'PT19M58.126S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'level, but you cannot write to the lower level, cannot write to'
        },
        hidden: false,
        userData: null
      },
      {
        id: '559ce2c7-e7ce-44c9-913a-db8ad369ebf7',
        type: 'transcript',
        start: 'PT19M58.126S',
        end: 'PT20M2.056S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'the lower level here on the simple property. Simple security'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'b957e75b-8353-45c2-bc51-65d6bf454b9b',
        type: 'transcript',
        start: 'PT20M2.056S',
        end: 'PT20M6.772S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'property you cannot read from the higher level. So if you look'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ecd302f9-4c56-43ed-885b-ee1e103258a3',
        type: 'transcript',
        start: 'PT20M6.772S',
        end: 'PT20M8.344S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'at this blep model.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '4d7cc45f-3d2e-4780-9725-23105a65fcc3',
        type: 'transcript',
        start: 'PT20M9.01S',
        end: 'PT20M13.582S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'This whole purpose of BMP model when you look at very closely,'
        },
        hidden: false,
        userData: null
      },
      {
        id: '38dabd80-982c-4901-a05f-150b14bda060',
        type: 'transcript',
        start: 'PT20M13.582S',
        end: 'PT20M18.154S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'when you take a little bit of time to understand what is'
        },
        hidden: false,
        userData: null
      },
      {
        id: '6fa18492-c352-4246-8fce-e9bd03b825d0',
        type: 'transcript',
        start: 'PT20M18.154S',
        end: 'PT20M19.678S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'happening, this is purely'
        },
        hidden: false,
        userData: null
      },
      {
        id: '6b610ecd-d8c8-4537-94ef-f92c138a5728',
        type: 'transcript',
        start: 'PT20M19.678S',
        end: 'PT20M21.81S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'created. For confidentiality'
        },
        hidden: false,
        userData: null
      },
      {
        id: '469af04f-449a-41fb-882e-4c7bd28d33d3',
        type: 'transcript',
        start: 'PT20M21.81S',
        end: 'PT20M25.786S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'purposes. Right confidentially purposes, as you can see, no'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'fddd1c17-ffe9-4a5b-a231-aa4bff128342',
        type: 'transcript',
        start: 'PT20M25.786S',
        end: 'PT20M29.106S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'stealing of secrets or no diverging of secrets. If you'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c5c9fb81-3b70-4a41-b676-3737c042d27f',
        type: 'transcript',
        start: 'PT20M29.106S',
        end: 'PT20M30.434S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'look at these properties.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '525d875c-3389-4484-bb88-d05ee001c5a0',
        type: 'transcript',
        start: 'PT20M31.21S',
        end: 'PT20M35.08S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Always these properties are trying to protect their higher'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'cac1ce04-c34d-42e5-83b5-7ed1566c6ea0',
        type: 'transcript',
        start: 'PT20M35.08S',
        end: 'PT20M38.95S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'level secrets right, right, high level secrets. So blep'
        },
        hidden: false,
        userData: null
      },
      {
        id: '42abc543-1274-44a6-a733-b410332fd891',
        type: 'transcript',
        start: 'PT20M38.95S',
        end: 'PT20M42.82S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'model is also known in the industry as the'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'd5ff8cd9-b3a7-410b-80d4-9270c3a972ab',
        type: 'transcript',
        start: 'PT20M42.82S',
        end: 'PT20M45.4S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'confidentiality only model, right? Confidentiality only'
        },
        hidden: false,
        userData: null
      },
      {
        id: '36705243-1987-48c8-b0b6-87d262cd8906',
        type: 'transcript',
        start: 'PT20M45.4S',
        end: 'PT20M45.83S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'model.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '517d9bfb-c5de-473d-8205-164ea803f51a',
        type: 'transcript',
        start: 'PT20M46.93S',
        end: 'PT20M52.013S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'So confidential tease the main focus in the BMP, but if we go'
        },
        hidden: false,
        userData: null
      },
      {
        id: '60ec9c73-6157-4c0e-bb39-42bfe14b751a',
        type: 'transcript',
        start: 'PT20M52.013S',
        end: 'PT20M56.314S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "to a different model, which is, here's an interesting one. This"
        },
        hidden: false,
        userData: null
      },
      {
        id: '489463de-7985-4086-901d-aa41113ed046',
        type: 'transcript',
        start: 'PT20M56.314S',
        end: 'PT21M1.397S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "is called the integrity model, and it's known as B Bar. So the"
        },
        hidden: false,
        userData: null
      },
      {
        id: '00eb320f-e74b-4cb4-b619-ca4b783a1b9d',
        type: 'transcript',
        start: 'PT21M1.397S',
        end: 'PT21M6.089S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'Biba model is the integrity model is once again known from 3'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a8cbfade-6c19-48c8-9568-4f8d67543b7f',
        type: 'transcript',
        start: 'PT21M6.089S',
        end: 'PT21M8.435S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'rules, one is called the simple'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ca0535d5-0460-49b6-8520-d3d07691f36f',
        type: 'transcript',
        start: 'PT21M8.435S',
        end: 'PT21M13.354S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'integrity axiom. The second one is called this time Integrity'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'b2a919b4-081a-4136-8913-476f84b7a34f',
        type: 'transcript',
        start: 'PT21M13.354S',
        end: 'PT21M16.618S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "Axiom, and there's another one called invocation property,"
        },
        hidden: false,
        userData: null
      },
      {
        id: '8a8128a3-c170-4e53-af15-5239092be1f7',
        type: 'transcript',
        start: 'PT21M16.618S',
        end: 'PT21M22.33S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "right? So let's have a look at all these three rules based on a"
        },
        hidden: false,
        userData: null
      },
      {
        id: '4ca9d9ef-3091-4aba-a4fc-34e621ee738b',
        type: 'transcript',
        start: 'PT21M22.33S',
        end: 'PT21M26.41S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'simple diagram. OK, a simple diagram that will explain these.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'f6c6c472-2995-4dde-a5e1-7855b0688188',
        type: 'transcript',
        start: 'PT21M27.65S',
        end: 'PT21M30.962S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'So we have high integrity objects and low integrity'
        },
        hidden: false,
        userData: null
      },
      {
        id: '93d76648-f77d-41b8-8a71-de37a7a7d044',
        type: 'transcript',
        start: 'PT21M30.962S',
        end: 'PT21M34.642S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'objects. OK, So what is happening here is high integrity'
        },
        hidden: false,
        userData: null
      },
      {
        id: '1e2d5503-5e9d-4618-892a-5ae95cc8046a',
        type: 'transcript',
        start: 'PT21M34.642S',
        end: 'PT21M37.954S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'processes. Also there are low integrity process also there.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '6e4768a5-8546-40a6-a1d3-8abc2c3e13bf',
        type: 'transcript',
        start: 'PT21M37.954S',
        end: 'PT21M42.002S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Now we know what these four types are. We have discussed'
        },
        hidden: false,
        userData: null
      },
      {
        id: '7b2baf27-269f-4f13-a46c-bdb26cd478c7',
        type: 'transcript',
        start: 'PT21M42.002S',
        end: 'PT21M45.682S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'this at the beginning today so high integrity processes right'
        },
        hidden: false,
        userData: null
      },
      {
        id: '77fd740d-b6e3-4d6d-b620-8e89ffecc45f',
        type: 'transcript',
        start: 'PT21M45.682S',
        end: 'PT21M49.362S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'has the capability of reading and writing from high integrity'
        },
        hidden: false,
        userData: null
      },
      {
        id: '13f0ff55-e637-4763-a0c1-5d8497542de3',
        type: 'transcript',
        start: 'PT21M49.362S',
        end: 'PT21M54.146S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'objects. So this can be a system file right? So a high integrity'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ff7cd043-ae71-4350-a614-5c71c37fd456',
        type: 'transcript',
        start: 'PT21M54.146S',
        end: 'PT21M57.458S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'process can read and write from a system file.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '8b15fb0e-b146-4e5a-90c1-60d92dac85e9',
        type: 'transcript',
        start: 'PT21M58.07S',
        end: 'PT22M1.42S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Right? So low integrity process.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '74ed6102-869e-4bcd-9276-622f20ce4077',
        type: 'transcript',
        start: 'PT22M2.05S',
        end: 'PT22M6.874S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'A process that we are not 100% trusting or untrusted. It might'
        },
        hidden: false,
        userData: null
      },
      {
        id: '6a720e99-a8c7-4154-a642-eeaefa156f01',
        type: 'transcript',
        start: 'PT22M6.874S',
        end: 'PT22M10.894S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'be network related process might be invocation from a remote'
        },
        hidden: false,
        userData: null
      },
      {
        id: '042fdf8a-6e7b-4891-afda-4606ddb4c8f3',
        type: 'transcript',
        start: 'PT22M10.894S',
        end: 'PT22M15.718S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'device, right remote network. So what they can do is they can'
        },
        hidden: false,
        userData: null
      },
      {
        id: '822fb8c6-c467-495a-892b-fb042a833cd4',
        type: 'transcript',
        start: 'PT22M15.718S',
        end: 'PT22M20.14S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'read from high integrity objects but they can never write it'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ce8334da-1bda-4529-8e14-adc016c890f5',
        type: 'transcript',
        start: 'PT22M20.14S',
        end: 'PT22M22.15S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'right. They can never right.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '0baf5335-0308-40a4-b331-e916846a5534',
        type: 'transcript',
        start: 'PT22M22.29S',
        end: 'PT22M25.38S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'They can never right. I hope that is clear, OK?'
        },
        hidden: false,
        userData: null
      },
      {
        id: '447ac4ab-8f40-44a9-bebb-261d521a5f79',
        type: 'transcript',
        start: 'PT22M26.13S',
        end: 'PT22M30.75S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'Anne, on the other hand, has a low integrity processes, have'
        },
        hidden: false,
        userData: null
      },
      {
        id: '89262d05-632a-4e95-97a9-c20ec4f8c311',
        type: 'transcript',
        start: 'PT22M30.75S',
        end: 'PT22M34.53S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'the capability, low integrity process, have the capability of'
        },
        hidden: false,
        userData: null
      },
      {
        id: '64e9ec5e-3c10-4b1c-86fa-41854ddde7a3',
        type: 'transcript',
        start: 'PT22M34.53S',
        end: 'PT22M38.73S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'reading and writing from low integrity objects. That is OK'
        },
        hidden: false,
        userData: null
      },
      {
        id: '28dcbab4-1a19-43ca-ae40-3104c8326301',
        type: 'transcript',
        start: 'PT22M38.73S',
        end: 'PT22M40.41S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'right? Because both are'
        },
        hidden: false,
        userData: null
      },
      {
        id: '7ab6a1be-de71-4173-9a14-c120b7ca0cb6',
        type: 'transcript',
        start: 'PT22M40.41S',
        end: 'PT22M44.621S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'untrusted. Other than that, high integrity processes also had the'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'b14c40ed-2c8d-4961-88d8-b84744ce8913',
        type: 'transcript',
        start: 'PT22M44.621S',
        end: 'PT22M48.811S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'capability of writing or we are talking about changing or'
        },
        hidden: false,
        userData: null
      },
      {
        id: '16b14a17-90a0-4b1b-aebf-f4c95919fc8a',
        type: 'transcript',
        start: 'PT22M48.811S',
        end: 'PT22M52.582S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'editing the file that is low integrity, low integrity.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '9f0cbc2a-5a43-41c1-87d0-75a993977d86',
        type: 'transcript',
        start: 'PT22M53.41S',
        end: 'PT22M58.363S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'So I hope that is clear, and of course you can see high'
        },
        hidden: false,
        userData: null
      },
      {
        id: '898f03f4-a24c-4e7b-bfd4-9ae8a2d5f17b',
        type: 'transcript',
        start: 'PT22M58.363S',
        end: 'PT23M1.03S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'integrity processes are prevented from reading anything'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'af45319f-b62c-4e3e-8637-4a4ed51f893c',
        type: 'transcript',
        start: 'PT23M1.03S',
        end: 'PT23M4.459S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'from low integrity objects, because that might affect the'
        },
        hidden: false,
        userData: null
      },
      {
        id: '46452ae5-6b18-4479-97c9-9a98a353f21d',
        type: 'transcript',
        start: 'PT23M4.459S',
        end: 'PT23M7.507S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'processing technique that might affect the process integrity,'
        },
        hidden: false,
        userData: null
      },
      {
        id: '93764c85-b5ad-4735-bed2-e8aa8e7e0b2c',
        type: 'transcript',
        start: 'PT23M7.507S',
        end: 'PT23M11.317S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "and we don't know what this object contains because we"
        },
        hidden: false,
        userData: null
      },
      {
        id: '1ba4aac6-43c6-4c62-893f-309857b40b69',
        type: 'transcript',
        start: 'PT23M11.317S',
        end: 'PT23M13.222S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'cannot trust it. OK, so.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a634e2b8-95b1-43c4-a2c6-f68559206993',
        type: 'transcript',
        start: 'PT23M13.75S',
        end: 'PT23M15.857S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'The sole purpose of the be by'
        },
        hidden: false,
        userData: null
      },
      {
        id: '9e875cbe-bc64-4fb1-b8c3-1a69b23e4492',
        type: 'transcript',
        start: 'PT23M15.857S',
        end: 'PT23M20.568S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'integrity model. Easy integrity itself is integrity itself.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '880c3229-aed7-4993-950e-0b4d90053391',
        type: 'transcript',
        start: 'PT23M21.59S',
        end: 'PT23M24.59S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'So coming back to this.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '444c3eb2-ca33-4e44-b27c-3e9ffd9c6695',
        type: 'transcript',
        start: 'PT23M25.77S',
        end: 'PT23M29.59S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'What you see is simples integrity axiom which says no'
        },
        hidden: false,
        userData: null
      },
      {
        id: '7f292c7f-2d52-48a6-a91e-5ed74b702275',
        type: 'transcript',
        start: 'PT23M29.59S',
        end: 'PT23M34.174S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'read down a subject cannot read data from an object of lower'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'aa7d6222-c67c-40ad-8207-7c717b578d2e',
        type: 'transcript',
        start: 'PT23M34.174S',
        end: 'PT23M38.376S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'integrity levels. So subject at a higher secret level is never'
        },
        hidden: false,
        userData: null
      },
      {
        id: '1e4e52c4-01e0-4a2a-b832-b3fb1262e545',
        type: 'transcript',
        start: 'PT23M38.376S',
        end: 'PT23M40.668S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'allowed to read data from a'
        },
        hidden: false,
        userData: null
      },
      {
        id: '2517f594-07ae-4b73-aee5-f8e5a78e55bf',
        type: 'transcript',
        start: 'PT23M40.668S',
        end: 'PT23M45.303S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "lower level. We want to maintain the integrity. That's why. OK"
        },
        hidden: false,
        userData: null
      },
      {
        id: 'eeb505a2-d697-42fc-a5ec-9b2d278fa13c',
        type: 'transcript',
        start: 'PT23M45.303S',
        end: 'PT23M48.773S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'and then we have style integrity axiom know right up.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '95c05407-7b12-4666-bb3c-664f715217bd',
        type: 'transcript',
        start: 'PT23M49.31S',
        end: 'PT23M55.07S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'Right, so that means a subject cannot write data to an object'
        },
        hidden: false,
        userData: null
      },
      {
        id: '2a7d3d75-0494-4717-8f98-599c087ccf76',
        type: 'transcript',
        start: 'PT23M55.07S',
        end: 'PT24M0.83S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'at a higher integrity level. So my security level I cannot write'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a1c090ce-ab06-44cd-aab8-73177077e53f',
        type: 'transcript',
        start: 'PT24M0.83S',
        end: 'PT24M6.59S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'to an upper security level, right? So if you look at this,'
        },
        hidden: false,
        userData: null
      },
      {
        id: '19ffee44-d044-4687-b62f-02bd68a1e826',
        type: 'transcript',
        start: 'PT24M6.59S',
        end: 'PT24M11.87S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'you can simply remember this by the capital letters WRD, right?'
        },
        hidden: false,
        userData: null
      },
      {
        id: '0eadaf26-44d5-41e6-a070-7ee8f1b3391c',
        type: 'transcript',
        start: 'PT24M11.87S',
        end: 'PT24M17.15S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'So what is not allowed in integrity model, WRD word, WRD'
        },
        hidden: false,
        userData: null
      },
      {
        id: '46a31fe1-6e2b-4d66-b5ab-2b51898fa99c',
        type: 'transcript',
        start: 'PT24M17.15S',
        end: 'PT24M19.55S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'word that is prohibited in'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ede2a3ee-74ad-4369-a625-7a0e3a3f610e',
        type: 'transcript',
        start: 'PT24M19.55S',
        end: 'PT24M24.528S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'integrity model. So what is prohibited? W means write up'
        },
        hidden: false,
        userData: null
      },
      {
        id: '95558531-c0e4-4089-981b-293acf397c67',
        type: 'transcript',
        start: 'PT24M24.528S',
        end: 'PT24M28S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "is prohibited. That's prohibited. Ann Reid down,"
        },
        hidden: false,
        userData: null
      },
      {
        id: '725cb83b-92bb-4326-bb2e-8ff6c24a8234',
        type: 'transcript',
        start: 'PT24M28S',
        end: 'PT24M32.96S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'right are demeans. Read down re down is also prohibited.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '93a9f4c7-734e-4fdc-8607-c7f56bd2def1',
        type: 'transcript',
        start: 'PT24M32.96S',
        end: 'PT24M34.944S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'So WRD is prohibited.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '80606160-3e1f-4c64-a6e0-044d408ef184',
        type: 'transcript',
        start: 'PT24M37.51S',
        end: 'PT24M40.59S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'So subject cannot invoke or call upon subjects at a higher'
        },
        hidden: false,
        userData: null
      },
      {
        id: '475ba298-6e82-4a3f-8bdb-5c9ee5b7a02a',
        type: 'transcript',
        start: 'PT24M40.59S',
        end: 'PT24M44.23S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'integrity level, so that is also very clear here. As you can see'
        },
        hidden: false,
        userData: null
      },
      {
        id: '04de1b6f-d890-43cf-a658-4b3fc2ed32f7',
        type: 'transcript',
        start: 'PT24M44.23S',
        end: 'PT24M47.87S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'if it is at a higher integrity level, you cannot call a point.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ea0bac0a-ce4f-450e-83c1-edac17647c65',
        type: 'transcript',
        start: 'PT24M47.87S',
        end: 'PT24M51.51S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'You can write to it. You cannot read write, you can write it,'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'bf594cc3-8e42-4b6c-839c-5ae1c8f051d5',
        type: 'transcript',
        start: 'PT24M51.51S',
        end: 'PT24M52.63S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'but you cannot read.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '074ca51d-821a-48c2-8547-e8a1e67681d6',
        type: 'transcript',
        start: 'PT24M53.79S',
        end: 'PT24M59.692S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "So be by integrity model is also quite famous an it's used here"
        },
        hidden: false,
        userData: null
      },
      {
        id: '1f47dbda-85cc-4302-9d52-32c93f70b04d',
        type: 'transcript',
        start: 'PT24M59.692S',
        end: 'PT25M4.232S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'and mainly the se Linux or the security. Enhanced Linux'
        },
        hidden: false,
        userData: null
      },
      {
        id: '3e61b95c-8a09-43ec-a2ae-4876cb8804ad',
        type: 'transcript',
        start: 'PT25M4.232S',
        end: 'PT25M8.318S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'policies tend to implement something similar to Biba, but'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'b4ade238-b498-4eb7-a3a1-79341d787343',
        type: 'transcript',
        start: 'PT25M8.318S',
        end: 'PT25M12.858S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "it's not entirely beeper. There are some other aspects involved"
        },
        hidden: false,
        userData: null
      },
      {
        id: 'fd61cd35-1cfe-4087-86cc-1eaebb26fe3c',
        type: 'transcript',
        start: 'PT25M12.858S',
        end: 'PT25M18.306S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'as well, so it can be something in between Beba and least'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ee5fc8e2-f1f3-438b-b8f7-56a6bee01276',
        type: 'transcript',
        start: 'PT25M18.306S',
        end: 'PT25M22.392S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'privilege concept, so least privilege we talked about during'
        },
        hidden: false,
        userData: null
      },
      {
        id: '9de64197-b5ca-42bf-a7b1-1179a3a67221',
        type: 'transcript',
        start: 'PT25M22.392S',
        end: 'PT25M24.662S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "office discussion, so it's A."
        },
        hidden: false,
        userData: null
      },
      {
        id: '20d0138f-208c-4b40-bc89-e6f3fba311d4',
        type: 'transcript',
        start: 'PT25M24.69S',
        end: 'PT25M28.245S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Nice balance is usually achieved, but important that if'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c2b25224-e17a-477b-bb4f-f5ecfb90ffb4',
        type: 'transcript',
        start: 'PT25M28.245S',
        end: 'PT25M32.195S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'you go for full Bieber model implementation for an operating'
        },
        hidden: false,
        userData: null
      },
      {
        id: '5549244d-d561-401d-97fb-684b673a7f4b',
        type: 'transcript',
        start: 'PT25M32.195S',
        end: 'PT25M34.17S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'system, it will all almost'
        },
        hidden: false,
        userData: null
      },
      {
        id: '8e08a6c3-0814-4b9d-9e9d-9be3449fac79',
        type: 'transcript',
        start: 'PT25M34.17S',
        end: 'PT25M38.99S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'become unusable. Right, so think about it because if you if you'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'eac66f23-8175-4ef6-a53d-6a198cc0c077',
        type: 'transcript',
        start: 'PT25M38.99S',
        end: 'PT25M43.54S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'cannot read data from a lower level down, that is a lot of big'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'b14d24fd-a605-4616-981c-f6a80d784417',
        type: 'transcript',
        start: 'PT25M43.54S',
        end: 'PT25M46.79S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "restriction. That is a big restriction, so we can't make"
        },
        hidden: false,
        userData: null
      },
      {
        id: '467ed65d-c04d-469d-a50a-24fdc480e402',
        type: 'transcript',
        start: 'PT25M46.79S',
        end: 'PT25M49.39S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'the entire system completely unusable with an implementation'
        },
        hidden: false,
        userData: null
      },
      {
        id: '79e8ff31-156e-4d16-b789-8993891cd1ad',
        type: 'transcript',
        start: 'PT25M49.39S',
        end: 'PT25M53.29S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'like that. But we can achieve a balance, right? It can achieve'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a1b97416-036b-402c-b887-971d0d8368a5',
        type: 'transcript',
        start: 'PT25M53.29S',
        end: 'PT25M57.19S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "balance so we don't want the full system to be unusable, but"
        },
        hidden: false,
        userData: null
      },
      {
        id: '461d24d1-a438-4d2c-9680-6d4166701999',
        type: 'transcript',
        start: 'PT25M57.19S',
        end: 'PT25M59.14S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'we want to achieve a balance.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '8b56d5f5-b031-48c2-9a53-acc61e423ee3',
        type: 'transcript',
        start: 'PT26M0.57S',
        end: 'PT26M3.93S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "Because Beba, as you know, it's not very flexible since"
        },
        hidden: false,
        userData: null
      },
      {
        id: '6c266d8c-cc8c-452a-9b6e-8847b96186e0',
        type: 'transcript',
        start: 'PT26M3.93S',
        end: 'PT26M7.29S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'processes and objects are simply labeled with their integrity. As'
        },
        hidden: false,
        userData: null
      },
      {
        id: '67167fdf-ded8-4646-b50e-ded39961a196',
        type: 'transcript',
        start: 'PT26M7.29S',
        end: 'PT26M11.658S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'we said, low high and there is no way to make practical changes'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'e32a6439-13d7-4bad-ab33-c0ff8cc99c34',
        type: 'transcript',
        start: 'PT26M11.658S',
        end: 'PT26M15.354S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "in the middle right. You can't change. But integrity model is"
        },
        hidden: false,
        userData: null
      },
      {
        id: '5ef5d2cc-037e-4f99-8acc-20a791878662',
        type: 'transcript',
        start: 'PT26M15.354S',
        end: 'PT26M19.05S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'very important in some scenarios and case studies like you know'
        },
        hidden: false,
        userData: null
      },
      {
        id: '6ebad5a5-ea5a-4ebe-8491-4e7b649c880b',
        type: 'transcript',
        start: 'PT26M19.05S',
        end: 'PT26M21.738S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'financial industry, right? If we are talking about.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'b62f8e5e-0e70-4e99-a49a-7d7ba0d4ee97',
        type: 'transcript',
        start: 'PT26M21.79S',
        end: 'PT26M26.461S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Core banking systems maybe integrity only model is idea'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'fd66ebb2-fff6-4ee0-92bf-4a7abb541824',
        type: 'transcript',
        start: 'PT26M26.461S',
        end: 'PT26M32.17S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'right? So think about those kind of scenarios. Here is another'
        },
        hidden: false,
        userData: null
      },
      {
        id: '556bfc41-43af-45c3-8a8a-32e24bc1a0fb',
        type: 'transcript',
        start: 'PT26M32.17S',
        end: 'PT26M36.841S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'integrity model. This one is called Clark Wilson Integrity'
        },
        hidden: false,
        userData: null
      },
      {
        id: '211e13b9-0470-4a42-a28e-2d1171be3533',
        type: 'transcript',
        start: 'PT26M36.841S',
        end: 'PT26M42.55S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "Model, so Clark Wilson Integrity model is it's once again based"
        },
        hidden: false,
        userData: null
      },
      {
        id: '856d983b-7422-442d-9be4-55be5802af2f',
        type: 'transcript',
        start: 'PT26M42.55S',
        end: 'PT26M46.702S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'on the concept call transactions transactions. So transactions'
        },
        hidden: false,
        userData: null
      },
      {
        id: '5e12bcb9-cea4-47a0-9d3e-680f6f023b75',
        type: 'transcript',
        start: 'PT26M46.702S',
        end: 'PT26M51.373S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'involve three items. Transaction involves three items or three'
        },
        hidden: false,
        userData: null
      },
      {
        id: '909deceb-d5d2-4983-8c2d-b944ba413103',
        type: 'transcript',
        start: 'PT26M51.373S',
        end: 'PT26M53.968S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'terms. We call the access'
        },
        hidden: false,
        userData: null
      },
      {
        id: '11e7c61d-1e87-4265-87c7-f8fb368d8b2d',
        type: 'transcript',
        start: 'PT26M53.968S',
        end: 'PT26M58.43S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'triple. So the access triple include the user, right? So user'
        },
        hidden: false,
        userData: null
      },
      {
        id: '86f266f9-e1ae-4724-8aad-bd31f71dcda9',
        type: 'transcript',
        start: 'PT26M58.43S',
        end: 'PT27M0.35S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'can be a human being.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '0ebe79ae-93ce-4dce-ad28-9ff98ab25ad4',
        type: 'transcript',
        start: 'PT27M0.9S',
        end: 'PT27M4.42S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'Or user can be another process requesting something right? So'
        },
        hidden: false,
        userData: null
      },
      {
        id: '90af8cb6-2078-4c36-870f-3f5c3a74d1dd',
        type: 'transcript',
        start: 'PT27M4.42S',
        end: 'PT27M8.644S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "use just because we say you say it doesn't necessarily mean it's"
        },
        hidden: false,
        userData: null
      },
      {
        id: '51828236-d11c-446b-85ea-a1ab210551be',
        type: 'transcript',
        start: 'PT27M8.644S',
        end: 'PT27M12.516S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'a human being. So user here means any active agent, any'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'cf3193a1-7043-4552-9c7d-e4217faec93b',
        type: 'transcript',
        start: 'PT27M12.516S',
        end: 'PT27M16.388S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'active agent, so it can be another process. Or actually a'
        },
        hidden: false,
        userData: null
      },
      {
        id: '08c38281-37a4-495d-9d4f-3c4060e8b2e9',
        type: 'transcript',
        start: 'PT27M16.388S',
        end: 'PT27M19.908S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'user. So any activation and then we have transformation procedia'
        },
        hidden: false,
        userData: null
      },
      {
        id: '0b38863a-b710-4dd6-af3b-5de47f9a9f44',
        type: 'transcript',
        start: 'PT27M19.908S',
        end: 'PT27M23.076S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'right? So what transformation procedure means what is the'
        },
        hidden: false,
        userData: null
      },
      {
        id: '52d10659-b6fa-4e32-921d-fb488a37c98d',
        type: 'transcript',
        start: 'PT27M23.076S',
        end: 'PT27M27.3S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "operation that we're trying to do? Are we trying to do a"
        },
        hidden: false,
        userData: null
      },
      {
        id: '6ce14b33-c064-4eaf-9837-31b3e128abea',
        type: 'transcript',
        start: 'PT27M27.3S',
        end: 'PT27M28.356S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'reading of it?'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c98b1b37-f17f-4308-a536-c4cee49b42b6',
        type: 'transcript',
        start: 'PT27M29.19S',
        end: 'PT27M30.768S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Will I be trying to write?'
        },
        hidden: false,
        userData: null
      },
      {
        id: '60571a74-6933-4349-a37f-ce08ce122dbb',
        type: 'transcript',
        start: 'PT27M31.35S',
        end: 'PT27M35.238S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'Or are we trying to modify an existing value, right? So read,'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a9d54e11-51b7-43e3-902c-3220ba9498c7',
        type: 'transcript',
        start: 'PT27M35.238S',
        end: 'PT27M38.154S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'write, modify right so it can be anything transformation'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'd2dbfde1-15e6-4f9e-a117-6e9f640718b3',
        type: 'transcript',
        start: 'PT27M38.154S',
        end: 'PT27M42.042S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'procedures that right? So what is the operation we want to do?'
        },
        hidden: false,
        userData: null
      },
      {
        id: '19548b8e-36af-4837-9fa1-24887d9cfd5c',
        type: 'transcript',
        start: 'PT27M42.6S',
        end: 'PT27M48.32S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'CBI or the constrained data item is that the data item that we'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'cfa299b7-74cd-49ea-8e3f-1ee6cc21cdb2',
        type: 'transcript',
        start: 'PT27M48.32S',
        end: 'PT27M53.16S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'want to protect the integrity right? But we have put some'
        },
        hidden: false,
        userData: null
      },
      {
        id: '1ed31f1f-9d87-4272-af06-f17a384c8b89',
        type: 'transcript',
        start: 'PT27M53.16S',
        end: 'PT27M55.36S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'constraints on this data item.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ec7c4708-cb26-4518-9af3-ca871ec63ed1',
        type: 'transcript',
        start: 'PT27M55.94S',
        end: 'PT28M1.544S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'Because we want to protect the integrity of the data item we'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'bef0da77-ad3f-4500-98cd-f76d667195cc',
        type: 'transcript',
        start: 'PT28M1.544S',
        end: 'PT28M5.28S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "have put some constraints. Constraints means it's like"
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a33319ab-f1d3-4d31-a313-b2690fd9d9d2',
        type: 'transcript',
        start: 'PT28M5.28S',
        end: 'PT28M9.483S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'conditions OK, you want to do the transformation procedure.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'f9560f7e-8a5b-4b20-80ea-7951d588ed9e',
        type: 'transcript',
        start: 'PT28M9.483S',
        end: 'PT28M13.686S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "Let's check if your procedure matches our constraints. Let's"
        },
        hidden: false,
        userData: null
      },
      {
        id: '473af14d-6881-4991-9b1a-5178797d0169',
        type: 'transcript',
        start: 'PT28M13.686S',
        end: 'PT28M18.356S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'check if your procedure matches are conditions, right? So this'
        },
        hidden: false,
        userData: null
      },
      {
        id: '4bbc392f-74cc-4bfd-8b6f-48e539322b28',
        type: 'transcript',
        start: 'PT28M18.356S',
        end: 'PT28M23.026S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'is the idea of CD, CD, constraint data item. So'
        },
        hidden: false,
        userData: null
      },
      {
        id: '25026b0f-5487-4dc4-9388-85407e63b669',
        type: 'transcript',
        start: 'PT28M23.026S',
        end: 'PT28M24.894S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'constraint data item can'
        },
        hidden: false,
        userData: null
      },
      {
        id: '49659677-a7c6-4643-b6f5-3e2c557c8bd5',
        type: 'transcript',
        start: 'PT28M24.894S',
        end: 'PT28M28.842S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'actually. Is basically what we call integrity verification'
        },
        hidden: false,
        userData: null
      },
      {
        id: '18da6055-fea7-4327-a9bb-49c273efcb28',
        type: 'transcript',
        start: 'PT28M28.842S',
        end: 'PT28M32.496S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'process idea. So whenever a transformation is requested or'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'b7384641-ca19-4212-b1e3-77d1f0c80cf2',
        type: 'transcript',
        start: 'PT28M32.496S',
        end: 'PT28M36.15S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'transformation is invoked by user, then these integrity goals'
        },
        hidden: false,
        userData: null
      },
      {
        id: '9be7969a-c8a9-44ba-beb7-5f0a14b2e52c',
        type: 'transcript',
        start: 'PT28M36.15S',
        end: 'PT28M41.022S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'are checked, right? So what are the integrity goals for a given'
        },
        hidden: false,
        userData: null
      },
      {
        id: '9a5a42c1-7361-4c9c-8aa6-d68932a6a4a8',
        type: 'transcript',
        start: 'PT28M41.022S',
        end: 'PT28M45.488S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'CDI or a constraint data item? We want to prevent unauthorized'
        },
        hidden: false,
        userData: null
      },
      {
        id: '62a65e41-10c4-47b4-bd2a-e96d96db231d',
        type: 'transcript',
        start: 'PT28M45.488S',
        end: 'PT28M49.548S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'users from making modifications right? So we want to prevent'
        },
        hidden: false,
        userData: null
      },
      {
        id: '3c41d8bc-b0aa-4b37-8f79-15a839aa7538',
        type: 'transcript',
        start: 'PT28M49.548S',
        end: 'PT28M53.202S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'unauthorized users from making modifications. So what are we'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'f87a1637-7c83-4615-9dd8-128c6cdcf3fe',
        type: 'transcript',
        start: 'PT28M53.202S',
        end: 'PT28M57.262S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'talking about here? So basically we we want to check.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'eeb9bc66-b8aa-4b9a-bae9-796d2c5ee63e',
        type: 'transcript',
        start: 'PT28M57.27S',
        end: 'PT29M0.672S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'Whether these transformation procedure is requested by a user'
        },
        hidden: false,
        userData: null
      },
      {
        id: '7c5109a6-36c4-4808-8e63-ce3c7155fd9a',
        type: 'transcript',
        start: 'PT29M0.672S',
        end: 'PT29M2.94S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'who has the permission to do'
        },
        hidden: false,
        userData: null
      },
      {
        id: '47b84542-69d5-47ee-ab0d-1f81fc7ca57a',
        type: 'transcript',
        start: 'PT29M2.94S',
        end: 'PT29M7.53S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'this? So it can be another process also, but we want to'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'bc83c520-ce8c-4ec8-8bc9-efc45efe8b86',
        type: 'transcript',
        start: 'PT29M7.53S',
        end: 'PT29M10.41S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'check the security level or security authorization so that'
        },
        hidden: false,
        userData: null
      },
      {
        id: '96bd0069-ba03-4f36-91e8-a5523a6ae7c5',
        type: 'transcript',
        start: 'PT29M10.41S',
        end: 'PT29M13.61S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'will be a one constraint, right? So the first constraint'
        },
        hidden: false,
        userData: null
      },
      {
        id: '837994e1-e6dd-4096-af67-d798c25ecba7',
        type: 'transcript',
        start: 'PT29M13.61S',
        end: 'PT29M17.13S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'is do you have the permission so the second one needs?'
        },
        hidden: false,
        userData: null
      },
      {
        id: '4cb54950-b464-4f22-976a-91f79018a857',
        type: 'transcript',
        start: 'PT29M18.99S',
        end: 'PT29M24.325S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Even if you have permission, are you allowed to do this'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'af8617c7-7933-4e7e-91c4-f07fe5ea7a02',
        type: 'transcript',
        start: 'PT29M24.325S',
        end: 'PT29M28.94S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'modification? Because now this is very important. OK making'
        },
        hidden: false,
        userData: null
      },
      {
        id: '278f17af-a5c0-4868-a144-3c2d3a475865',
        type: 'transcript',
        start: 'PT29M28.94S',
        end: 'PT29M31.95S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'improper modifications means improper modifications means any'
        },
        hidden: false,
        userData: null
      },
      {
        id: '09129900-c9fa-4be1-be7b-9c4565c16cde',
        type: 'transcript',
        start: 'PT29M31.95S',
        end: 'PT29M38.4S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'change that you are trying to do to a data item that if you do'
        },
        hidden: false,
        userData: null
      },
      {
        id: '72890e54-2540-48ab-97ed-da20449f610e',
        type: 'transcript',
        start: 'PT29M38.4S',
        end: 'PT29M40.98S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'it, that data item might be'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c846fe8c-8083-4c45-b091-e13b28574125',
        type: 'transcript',
        start: 'PT29M40.98S',
        end: 'PT29M43.99S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'invalid. I might be invalid.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '6b46e42a-2422-46a7-ae8a-d1b77b2a97cb',
        type: 'transcript',
        start: 'PT29M44.68S',
        end: 'PT29M48.57S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "So for example, let's think about something like this. Can"
        },
        hidden: false,
        userData: null
      },
      {
        id: 'afbb5091-fbfa-4ade-9fda-1a6a6ddf8ab7',
        type: 'transcript',
        start: 'PT29M48.57S',
        end: 'PT29M50.515S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'there be a data item?'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'fd98a1c2-1b3d-4616-ba98-2e15e965a54d',
        type: 'transcript',
        start: 'PT29M51.48S',
        end: 'PT29M55.776S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'That can there be a data item where the value of that'
        },
        hidden: false,
        userData: null
      },
      {
        id: '2dda5f1c-776a-4cae-87d0-b6545e2f4a51',
        type: 'transcript',
        start: 'PT29M55.776S',
        end: 'PT29M57.566S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'particular item can never be'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a6f9b581-a5a4-4f7e-9cbe-e62daaeb525a',
        type: 'transcript',
        start: 'PT29M57.566S',
        end: 'PT30M0.6S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'minus. Right can never be minus.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'dc154aa6-e3bb-4908-8e22-4647efed86f4',
        type: 'transcript',
        start: 'PT30M1.34S',
        end: 'PT30M4.937S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Maybe it is a number of employees in an organization or'
        },
        hidden: false,
        userData: null
      },
      {
        id: '865e8ec5-01e4-41eb-be60-760646e2a709',
        type: 'transcript',
        start: 'PT30M4.937S',
        end: 'PT30M9.188S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'something like that. Can it ever be minus no, right? But if an'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a230f71c-e89f-4206-a4c5-2c88591eb14e',
        type: 'transcript',
        start: 'PT30M9.188S',
        end: 'PT30M12.785S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'authorized user is trying to make this value of minus value?'
        },
        hidden: false,
        userData: null
      },
      {
        id: '91b83792-6a6e-46e3-866b-8211cdc8c671',
        type: 'transcript',
        start: 'PT30M13.85S',
        end: 'PT30M17.97S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'You understand if the authorized user or an authorized processes'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'fb26e554-802f-4147-b3a2-ad68933bd3a5',
        type: 'transcript',
        start: 'PT30M17.97S',
        end: 'PT30M22.502S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'trying to change this into a minus value. Can that happen?'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ddc84499-fe6e-4ab1-aa3b-fb219c4b9e12',
        type: 'transcript',
        start: 'PT30M22.502S',
        end: 'PT30M27.858S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'No, there can never be a minus value for that particular CBI or'
        },
        hidden: false,
        userData: null
      },
      {
        id: '0c860d96-ca36-4593-bd75-09302642d1d1',
        type: 'transcript',
        start: 'PT30M27.858S',
        end: 'PT30M30.742S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'constraint data item, so therefore improper modifications'
        },
        hidden: false,
        userData: null
      },
      {
        id: '89f9a1b3-8ef9-427a-81bc-a408ca0fdda3',
        type: 'transcript',
        start: 'PT30M30.742S',
        end: 'PT30M34.038S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'are prevented. So improper modifications are prevented even'
        },
        hidden: false,
        userData: null
      },
      {
        id: '986a7003-e7b3-46f0-b7b4-22b5b1d9fb0a',
        type: 'transcript',
        start: 'PT30M34.038S',
        end: 'PT30M37.746S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "if you are an authorized user. That's the idea."
        },
        hidden: false,
        userData: null
      },
      {
        id: 'cea4a8ac-5c32-4da1-bef4-945c7f414685',
        type: 'transcript',
        start: 'PT30M37.75S',
        end: 'PT30M42.599S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'And also it is very important that we have the CDI approach to'
        },
        hidden: false,
        userData: null
      },
      {
        id: '0339bb21-b7bd-4228-8a48-5ab1b7a06ac4',
        type: 'transcript',
        start: 'PT30M42.599S',
        end: 'PT30M45.583S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'maintain internal and external consistency right right internal'
        },
        hidden: false,
        userData: null
      },
      {
        id: '713f6e1c-8130-462e-b902-e4402df98267',
        type: 'transcript',
        start: 'PT30M45.583S',
        end: 'PT30M50.432S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'and external consistency. So how do we do this? We want to do'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'd825fe76-7f05-4a36-b47f-7b6614062e4e',
        type: 'transcript',
        start: 'PT30M50.432S',
        end: 'PT30M54.535S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'this by separation of duties. So separation of duties can be'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'b4b688b7-cfe4-4ac1-b3b0-062e68a1f8e0',
        type: 'transcript',
        start: 'PT30M54.535S',
        end: 'PT30M57.519S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'achieved using what we call using authentication concepts.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '2021f44a-1ac8-4919-8973-ce5b4e9133bb',
        type: 'transcript',
        start: 'PT30M57.519S',
        end: 'PT31M2.368S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'So that means we want to make sure that the user has somehow'
        },
        hidden: false,
        userData: null
      },
      {
        id: '90f5d16f-1cee-44e4-8250-1a27bbea857b',
        type: 'transcript',
        start: 'PT31M2.368S',
        end: 'PT31M6.844S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'proved to the system that this user is them usually done by'
        },
        hidden: false,
        userData: null
      },
      {
        id: '3bc88717-89f1-42ab-96f6-92085d39be22',
        type: 'transcript',
        start: 'PT31M6.844S',
        end: 'PT31M9.828S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'username, password. Not only authentication is enough. We'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a9948bab-6d15-4518-962f-86cb7e53b580',
        type: 'transcript',
        start: 'PT31M9.828S',
        end: 'PT31M15.39S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'also have. What we call CD constraints for the data changes'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a8f51af2-7797-466e-b141-8f365f0f7d56',
        type: 'transcript',
        start: 'PT31M15.39S',
        end: 'PT31M20.69S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'or modifications along with the access control list along with'
        },
        hidden: false,
        userData: null
      },
      {
        id: '6c836e28-89e2-4dcc-bf65-5b17942e2591',
        type: 'transcript',
        start: 'PT31M20.69S',
        end: 'PT31M26.52S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'an access control list or ACL matrix ACL matrix, so access'
        },
        hidden: false,
        userData: null
      },
      {
        id: '9777bdea-b766-4af1-881e-9d9baa11fac2',
        type: 'transcript',
        start: 'PT31M26.52S',
        end: 'PT31M28.64S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'control list matrix allows'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'dcfb36a5-c586-4aeb-b1a1-65424636d9ca',
        type: 'transcript',
        start: 'PT31M28.64S',
        end: 'PT31M31.315S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'allows. What we call what we'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'fc030718-0903-4578-aa70-00be3a8063d2',
        type: 'transcript',
        start: 'PT31M31.315S',
        end: 'PT31M36.748S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'call this. Authorized users to go through a set of conditions'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'b5ce51d1-7780-4ed2-b408-1b50a41ce684',
        type: 'transcript',
        start: 'PT31M36.748S',
        end: 'PT31M41.068S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'and check whether they are allowed to do these things'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a5698097-6bf7-4b4b-9632-380492e14693',
        type: 'transcript',
        start: 'PT31M41.068S',
        end: 'PT31M46.684S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'right. So this is basically what happens in a CDI. So in CDI'
        },
        hidden: false,
        userData: null
      },
      {
        id: '530a5eee-8709-4815-9bdb-bea676989b4c',
        type: 'transcript',
        start: 'PT31M46.684S',
        end: 'PT31M50.14S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "o'clock Wilson environments every data item will have"
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c0fc3303-58ed-4fa2-9553-57660c5ad275',
        type: 'transcript',
        start: 'PT31M50.14S',
        end: 'PT31M53.596S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'constraints attached to it. Constraint attached to it,'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'cffb51bb-0af6-489a-901d-b5e5c1356ef6',
        type: 'transcript',
        start: 'PT31M53.596S',
        end: 'PT31M58.348S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'right? So usually one other example that I can very quickly'
        },
        hidden: false,
        userData: null
      },
      {
        id: '5f9f3683-52eb-4109-8c11-d63b5a201b5e',
        type: 'transcript',
        start: 'PT31M58.348S',
        end: 'PT32M1.804S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'think of is ineco banking application, ineco banking'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a9475728-19d7-49ce-ab3b-3ccdd4f2f6f8',
        type: 'transcript',
        start: 'PT32M1.804S',
        end: 'PT32M3.1S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "applications today's deposits."
        },
        hidden: false,
        userData: null
      },
      {
        id: '5d6a03da-4d39-4d98-ab21-d21d3240bac0',
        type: 'transcript',
        start: 'PT32M3.11S',
        end: 'PT32M6.8S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "Write today's deposit now. I think there's an example here."
        },
        hidden: false,
        userData: null
      },
      {
        id: '0f6805f7-189f-4231-9b16-061161e110db',
        type: 'transcript',
        start: 'PT32M6.8S',
        end: 'PT32M11.228S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "Yes, so as you can see, let's define and integrity through a"
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c8a5bb81-a1c1-489c-b21c-cdde70841158',
        type: 'transcript',
        start: 'PT32M11.228S',
        end: 'PT32M12.704S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'constraint for this, OK?'
        },
        hidden: false,
        userData: null
      },
      {
        id: '7d810e29-9396-44ff-9c0d-d4a8a862ea25',
        type: 'transcript',
        start: 'PT32M13.64S',
        end: 'PT32M16.409S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "So today's deposits."
        },
        hidden: false,
        userData: null
      },
      {
        id: 'aefd9cc1-29ab-4e50-9778-26faaa31d67a',
        type: 'transcript',
        start: 'PT32M17.86S',
        end: 'PT32M20.149S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Withdrawals today OK?'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'cb3a54ea-3c07-4b69-8443-c75c9f586bbf',
        type: 'transcript',
        start: 'PT32M20.87S',
        end: 'PT32M25.84S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "So today's balance can be defined. Today's balance can be"
        },
        hidden: false,
        userData: null
      },
      {
        id: '5b778a98-7025-4a9b-8793-ba054e4e6228',
        type: 'transcript',
        start: 'PT32M25.84S',
        end: 'PT32M29.816S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "defined as today's deposits added to yesterday's balance."
        },
        hidden: false,
        userData: null
      },
      {
        id: '07860c86-551e-4817-87a1-8e93df7ca561',
        type: 'transcript',
        start: 'PT32M30.44S',
        end: 'PT32M32.198S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "Minus today's withdrawals."
        },
        hidden: false,
        userData: null
      },
      {
        id: 'af828ac8-618c-4de4-b079-4d9d6deac473',
        type: 'transcript',
        start: 'PT32M33.09S',
        end: 'PT32M38.663S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Right? So that means for the current balance, the term'
        },
        hidden: false,
        userData: null
      },
      {
        id: '4c7aeef8-13c2-43de-a655-272a9f31bb59',
        type: 'transcript',
        start: 'PT32M38.663S',
        end: 'PT32M42.559S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'current balance in a very important core banking'
        },
        hidden: false,
        userData: null
      },
      {
        id: '390418aa-d410-44f0-88c1-1ad4461d50a5',
        type: 'transcript',
        start: 'PT32M42.559S',
        end: 'PT32M45.968S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'application. If someone is trying to make.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'dc08d08e-2a7f-442c-9de7-32f64ee7622a',
        type: 'transcript',
        start: 'PT32M45.99S',
        end: 'PT32M49.86S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'Change to the current balance without properly modifying the'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a5437b2d-2535-4dc2-bf99-26bda603ca25',
        type: 'transcript',
        start: 'PT32M49.86S',
        end: 'PT32M54.16S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "values for these three right? So yesterday's balance you can't"
        },
        hidden: false,
        userData: null
      },
      {
        id: 'fa113a03-03bc-4d4c-9ca2-e217f1b790cd',
        type: 'transcript',
        start: 'PT32M54.16S',
        end: 'PT32M58.89S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'modify, but you can modify deposits as well as we draw'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'f8160f13-dcf3-49a3-870e-d67ef6b5374f',
        type: 'transcript',
        start: 'PT32M58.89S',
        end: 'PT33M2.76S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'words today, right? This might be happening automatically. You'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'f7aebff1-6809-40b7-a4a0-deebf04bb898',
        type: 'transcript',
        start: 'PT33M2.76S',
        end: 'PT33M7.49S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "don't need a human involvement for this, right? The amount in"
        },
        hidden: false,
        userData: null
      },
      {
        id: '6a2fabcd-23aa-404d-87aa-ab1ff29c95c9',
        type: 'transcript',
        start: 'PT33M7.49S',
        end: 'PT33M10.93S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'the withdrawal will change depending on the ATM'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ca6f4f24-efaf-4668-ae81-e9e3b27d68d6',
        type: 'transcript',
        start: 'PT33M10.93S',
        end: 'PT33M14.37S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'transactions happening, right? So you know ATM transaction'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'fd30fbcd-7089-4780-a24d-9607e2df033c',
        type: 'transcript',
        start: 'PT33M14.37S',
        end: 'PT33M16.09S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'happens, or 50,000. Someone'
        },
        hidden: false,
        userData: null
      },
      {
        id: '5f1ad8ea-2870-4351-9eee-3cce188a2719',
        type: 'transcript',
        start: 'PT33M16.09S',
        end: 'PT33M21.391S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'just. Two 50,000 cash out, so this W will be plus 50,000.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'e1d442f0-0776-488d-87d6-53abd0c2695b',
        type: 'transcript',
        start: 'PT33M22.07S',
        end: 'PT33M26.798S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'Right and then another person comes to the bank and use this'
        },
        hidden: false,
        userData: null
      },
      {
        id: '75df39e2-c439-4dcc-9a25-860db47e0201',
        type: 'transcript',
        start: 'PT33M26.798S',
        end: 'PT33M30.738S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'cash deposit machine and enter 25,000 so that becomes plus'
        },
        hidden: false,
        userData: null
      },
      {
        id: '52dc6601-9ec6-4277-a9db-e285f49d87e1',
        type: 'transcript',
        start: 'PT33M30.738S',
        end: 'PT33M32.314S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: '25,000, whatever it is.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'be476329-9833-44a7-a778-48b65ee72602',
        type: 'transcript',
        start: 'PT33M33.45S',
        end: 'PT33M38.79S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "Today's balance, today's balance is a data item that we can put"
        },
        hidden: false,
        userData: null
      },
      {
        id: '93fae436-658e-4bf7-8ac1-02ac9fc96607',
        type: 'transcript',
        start: 'PT33M38.79S',
        end: 'PT33M40.125S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'this constraint into.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '518f39f1-9648-49ec-86a8-4e0f3b660d3b',
        type: 'transcript',
        start: 'PT33M40.66S',
        end: 'PT33M43.522S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "Because it should always match. Today's balance should always"
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a251d4d0-8ab4-4a17-9a30-997f87567d8e',
        type: 'transcript',
        start: 'PT33M43.522S',
        end: 'PT33M47.02S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'match this constraint. So if someone is trying to make an'
        },
        hidden: false,
        userData: null
      },
      {
        id: '69f3539a-7050-4ece-be56-e65d973d2475',
        type: 'transcript',
        start: 'PT33M47.02S',
        end: 'PT33M50.2S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'improper change, even if they have permission, they will not'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'f8f2ffd4-fa20-4646-aa5b-0ae1d11b03bf',
        type: 'transcript',
        start: 'PT33M50.2S',
        end: 'PT33M54.016S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'be able to do it because there is an integrity constraint. You'
        },
        hidden: false,
        userData: null
      },
      {
        id: '2e4e5e2e-d1fd-4411-bb29-c0ebf90d7b3b',
        type: 'transcript',
        start: 'PT33M54.016S',
        end: 'PT33M57.514S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'will get an error message. You will get an error message.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '9d74bed4-b1a6-4023-aed5-0831d1d281f3',
        type: 'transcript',
        start: 'PT33M58.8S',
        end: 'PT34M3.91S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "Right, so this is another model, but we don't want to go into the"
        },
        hidden: false,
        userData: null
      },
      {
        id: '15a8a438-2241-4108-8377-06ba8b56d15b',
        type: 'transcript',
        start: 'PT34M3.91S',
        end: 'PT34M7.925S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "details of Brewer Nash because it's a little bit are older"
        },
        hidden: false,
        userData: null
      },
      {
        id: '12874381-13b0-402e-b978-075de81cfbfb',
        type: 'transcript',
        start: 'PT34M7.925S',
        end: 'PT34M12.305S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'model, but usually the Brewer Nash model is also known as the'
        },
        hidden: false,
        userData: null
      },
      {
        id: '815518ed-5194-4a7a-821d-c2565748f34e',
        type: 'transcript',
        start: 'PT34M12.305S',
        end: 'PT34M16.32S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'Chinese wall model was developed to make sure that the companies'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'fdb5f2f0-dce3-4718-a0cb-62f5a96cd3a5',
        type: 'transcript',
        start: 'PT34M16.32S',
        end: 'PT34M20.335S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'have conflict of interests, especially if you are if you are'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'e55f5764-e26b-410d-9e0a-1eb17a8c035a',
        type: 'transcript',
        start: 'PT34M20.335S',
        end: 'PT34M23.62S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'to organisations that are competing with each other but'
        },
        hidden: false,
        userData: null
      },
      {
        id: '15ac5434-e0e1-4e37-856a-f81048bec3b5',
        type: 'transcript',
        start: 'PT34M23.62S',
        end: 'PT34M27.27S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'your data, how a database is actually utilized by both'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ed78186f-fee5-4b0a-9174-f7a1825106fe',
        type: 'transcript',
        start: 'PT34M27.27S',
        end: 'PT34M28.73S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'companies utilized the same'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'dd939752-582a-434a-a028-945eb63693ae',
        type: 'transcript',
        start: 'PT34M28.73S',
        end: 'PT34M31.915S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'database. Right, so this is just a diagram for this.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '6fb1434f-5290-4f7d-ad44-c6cda69def1e',
        type: 'transcript',
        start: 'PT34M32.79S',
        end: 'PT34M34.77S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'As you can see.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '4933a2e9-4fd5-4c1d-ae41-ec413a10ec13',
        type: 'transcript',
        start: 'PT34M35.71S',
        end: 'PT34M39.42S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Cooperate data is may be maintained by the same database,'
        },
        hidden: false,
        userData: null
      },
      {
        id: '9fc45732-6565-45a3-a843-15549f04042e',
        type: 'transcript',
        start: 'PT34M39.42S',
        end: 'PT34M44.614S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'so then we have to make sure that employees of bank a do not'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'b6ad663a-d8b8-4535-bfd4-f2890a6ba374',
        type: 'transcript',
        start: 'PT34M44.614S',
        end: 'PT34M48.324S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'get the access to employed. SoftBank be just a simple'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'fddcb2b0-43a6-468f-b2ae-19ad41fd51bc',
        type: 'transcript',
        start: 'PT34M48.324S',
        end: 'PT34M52.405S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "representation. But that's the idea here, right? So we want to"
        },
        hidden: false,
        userData: null
      },
      {
        id: 'fb88a49c-9f90-4639-bf3f-afed7fe9ef3b',
        type: 'transcript',
        start: 'PT34M52.405S',
        end: 'PT34M57.228S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'make sure that although it is in the same system, we need to'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'f5226b3d-d1e0-4b34-b4f7-22ccae76e9c5',
        type: 'transcript',
        start: 'PT34M57.228S',
        end: 'PT35M1.309S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'implement once again the way to implement this is through access'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'e68ee5df-dbde-46b6-a873-00c84843cf70',
        type: 'transcript',
        start: 'PT35M1.309S',
        end: 'PT35M2.793S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'control mechanisims ACL metrics.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'b8d9e63e-8b7a-474c-9d77-37c0443c25c5',
        type: 'transcript',
        start: 'PT35M3.35S',
        end: 'PT35M7.83S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'So take grant model is also another alternative model. This'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'd1d011de-6f92-4b9a-8f37-71e98d203a7f',
        type: 'transcript',
        start: 'PT35M7.83S',
        end: 'PT35M12.758S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'is not necessarily used for designing of software, but it is'
        },
        hidden: false,
        userData: null
      },
      {
        id: '5ce299e2-f24e-4e78-b280-ede82bb2a03e',
        type: 'transcript',
        start: 'PT35M12.758S',
        end: 'PT35M18.134S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'to analyze what is happening to a certain piece of data, right'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'e1a67e6f-a575-4f31-bffd-9e6aa517e496',
        type: 'transcript',
        start: 'PT35M18.134S',
        end: 'PT35M23.062S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'or an item so you can also use to understand whether'
        },
        hidden: false,
        userData: null
      },
      {
        id: '3842f947-c49e-4a63-86e8-278cf4f14dcb',
        type: 'transcript',
        start: 'PT35M23.062S',
        end: 'PT35M26.646S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'information can be leaked through the current privilege,'
        },
        hidden: false,
        userData: null
      },
      {
        id: '02ceb4e8-50f0-46c6-9257-8c6f3887b0bd',
        type: 'transcript',
        start: 'PT35M26.646S',
        end: 'PT35M31.126S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "an current authorization or ACL mechanism, right? We don't want"
        },
        hidden: false,
        userData: null
      },
      {
        id: 'bb6eba00-de25-4ba1-a13b-e464560794e3',
        type: 'transcript',
        start: 'PT35M31.126S',
        end: 'PT35M36.054S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "to go into the details, it's just there for your reference."
        },
        hidden: false,
        userData: null
      },
      {
        id: '87095aa1-a1ac-4b98-b4df-82fbbac0da62',
        type: 'transcript',
        start: 'PT35M36.2S',
        end: 'PT35M40.964S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'But just to give you a very quick idea about the take'
        },
        hidden: false,
        userData: null
      },
      {
        id: '74acb275-f976-432b-a46f-557609295b2e',
        type: 'transcript',
        start: 'PT35M40.964S',
        end: 'PT35M44.934S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'grant model, once again it is based on 4 rules.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '34c152ec-78d4-47ff-9032-33b7932f6a81',
        type: 'transcript',
        start: 'PT35M46.26S',
        end: 'PT35M50.836S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'Take Grant model is based on take rule which is it allows the'
        },
        hidden: false,
        userData: null
      },
      {
        id: '1d067f92-db2d-4de7-84a2-9fd1e62206d1',
        type: 'transcript',
        start: 'PT35M50.836S',
        end: 'PT35M54.708S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'subject it allows any subject to take the rights of another'
        },
        hidden: false,
        userData: null
      },
      {
        id: '050a56e4-0902-4e35-abef-5fdeca43e1b3',
        type: 'transcript',
        start: 'PT35M54.708S',
        end: 'PT35M59.98S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'subject. Another object, sorry, so it allows the subject so that'
        },
        hidden: false,
        userData: null
      },
      {
        id: '55532ec2-b38f-44c2-8e70-01eaadd18f37',
        type: 'transcript',
        start: 'PT35M59.98S',
        end: 'PT36M5.02S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'means it can be a user or another process depending on the'
        },
        hidden: false,
        userData: null
      },
      {
        id: '2738941f-80c8-495e-b324-acc18728ed57',
        type: 'transcript',
        start: 'PT36M5.02S',
        end: 'PT36M9.22S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'objects rights that user. If that uses given the correct'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a20b5b8a-4dbe-490f-b018-a7601e5e8631',
        type: 'transcript',
        start: 'PT36M9.22S',
        end: 'PT36M13.84S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'permission that user can take the rights of that object that'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'e11de506-439c-4a2d-9773-fcbd24f1b29e',
        type: 'transcript',
        start: 'PT36M13.84S',
        end: 'PT36M18.46S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'they are interacting with. Grant rule means a subject can grant.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '99b3ce01-f52b-4ac0-828d-7b2063ba9f55',
        type: 'transcript',
        start: 'PT36M19.32S',
        end: 'PT36M20.88S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'A subject can grant.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a0b9e2c0-d1e2-4fb4-9c69-63dd7b32e0ea',
        type: 'transcript',
        start: 'PT36M21.82S',
        end: 'PT36M26.818S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'Its own rights to another object so it fit is a file. This file'
        },
        hidden: false,
        userData: null
      },
      {
        id: '7e3145c2-d9ea-428d-9734-2abfa88515b2',
        type: 'transcript',
        start: 'PT36M26.818S',
        end: 'PT36M31.102S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'can be a high integrity file because this is a high integrity'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a7993ab3-8540-4217-922f-eca2b936b11f',
        type: 'transcript',
        start: 'PT36M31.102S',
        end: 'PT36M34.672S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'process that is creating this file. If a high integrity'
        },
        hidden: false,
        userData: null
      },
      {
        id: '562e76c2-4f5f-45ef-8794-24ed21a51c33',
        type: 'transcript',
        start: 'PT36M34.672S',
        end: 'PT36M38.956S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'process is creating a file, that should be a high integrity fide.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '350c1571-a07b-426a-a411-6ad34f57e036',
        type: 'transcript',
        start: 'PT36M38.956S',
        end: 'PT36M42.883S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "That's the idea, right? So then suddenly you have the same"
        },
        hidden: false,
        userData: null
      },
      {
        id: '2e38b506-4f64-4963-b5e6-1ac637870e6d',
        type: 'transcript',
        start: 'PT36M42.883S',
        end: 'PT36M47.167S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'rights OK and then you have a create role create role create'
        },
        hidden: false,
        userData: null
      },
      {
        id: '4baafd72-3217-4cb0-a3e9-53c98890327d',
        type: 'transcript',
        start: 'PT36M47.167S',
        end: 'PT36M51.451S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'role is it allows the subject to create new objects and remove'
        },
        hidden: false,
        userData: null
      },
      {
        id: '31c6d830-a1c8-40da-a4ea-3f3c8baad5ac',
        type: 'transcript',
        start: 'PT36M51.451S',
        end: 'PT36M55.882S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'rule. It allows the subject to remove rights right? Not'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'b3a08f75-0c1f-46f2-ba06-7dc5821a0326',
        type: 'transcript',
        start: 'PT36M55.882S',
        end: 'PT36M59.466S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'totally remove, not just remove objects, remove writes'
        },
        hidden: false,
        userData: null
      },
      {
        id: '78aa817d-65df-4927-93f1-b52f83a01c14',
        type: 'transcript',
        start: 'PT36M59.466S',
        end: 'PT37M4.394S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'it has on another object so you can remove your rights.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '9047c7d8-2d2e-4377-b9c2-91bd17d58f19',
        type: 'transcript',
        start: 'PT37M6.61S',
        end: 'PT37M10.783S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "So this is just a test ground is there for reference, but it's"
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c8c137f8-19b5-40fc-bc48-3808d19f4532',
        type: 'transcript',
        start: 'PT37M10.783S',
        end: 'PT37M13.993S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "just not commonly used so therefore you don't need to"
        },
        hidden: false,
        userData: null
      },
      {
        id: 'e90b7440-6e69-4ab1-b0d6-5c9c97350040',
        type: 'transcript',
        start: 'PT37M13.993S',
        end: 'PT37M15.277S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'worry about, but still.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '3c7d38de-cbf2-4058-9846-18efa29b0df3',
        type: 'transcript',
        start: 'PT37M15.91S',
        end: 'PT37M20.03S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'The other models, especially blep, can be by integrity model.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '55aef4fc-49a8-439e-9807-936e5671dd4f',
        type: 'transcript',
        start: 'PT37M20.03S',
        end: 'PT37M25.386S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'You should be familiar with and so now we talked about this ACS'
        },
        hidden: false,
        userData: null
      },
      {
        id: '01de46f8-5ee4-410c-b5f6-f1724246adef',
        type: 'transcript',
        start: 'PT37M25.386S',
        end: 'PT37M28.27S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'access control mechanisms, so implementing access controls'
        },
        hidden: false,
        userData: null
      },
      {
        id: '523c60b9-7618-4158-be2d-fe5034f0f4be',
        type: 'transcript',
        start: 'PT37M28.27S',
        end: 'PT37M32.39S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'once again can actually be a painstaking task, so therefore'
        },
        hidden: false,
        userData: null
      },
      {
        id: '020dd98a-ea40-4dd0-9e80-7198b66bab27',
        type: 'transcript',
        start: 'PT37M32.39S',
        end: 'PT37M37.746S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'we need proper. We need a proper approach for this, so one such'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'fcad867b-659e-495f-aec2-a58a8abc1771',
        type: 'transcript',
        start: 'PT37M37.746S',
        end: 'PT37M42.69S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'approach that we can use is to use access control models, so'
        },
        hidden: false,
        userData: null
      },
      {
        id: '395e25f1-5530-4117-87eb-817197c73de9',
        type: 'transcript',
        start: 'PT37M42.69S',
        end: 'PT37M47.222S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'access control models we can go to different types of access'
        },
        hidden: false,
        userData: null
      },
      {
        id: '82507baf-e5da-4e01-bc52-67ac4b420534',
        type: 'transcript',
        start: 'PT37M47.222S',
        end: 'PT37M49.694S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'control models, but we will try'
        },
        hidden: false,
        userData: null
      },
      {
        id: '94632238-df18-4026-9765-daca8a421672',
        type: 'transcript',
        start: 'PT37M49.694S',
        end: 'PT37M53.759S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'to. Stick to three types that we want to talk about, right'
        },
        hidden: false,
        userData: null
      },
      {
        id: '6501169c-c927-4fa0-9175-020a76ac9e87',
        type: 'transcript',
        start: 'PT37M53.759S',
        end: 'PT37M58.036S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'so we will talk about DAC Mac, an RBAC, right? So these are'
        },
        hidden: false,
        userData: null
      },
      {
        id: '345ce4dc-15f9-4cac-9cdf-48a884fd0b94',
        type: 'transcript',
        start: 'PT37M58.036S',
        end: 'PT38M1.984S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'the most 3 common ones these days, but you also have others'
        },
        hidden: false,
        userData: null
      },
      {
        id: '884ba6de-03b6-4b66-8b1f-cab894f85f51',
        type: 'transcript',
        start: 'PT38M1.984S',
        end: 'PT38M5.603S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'like you know, rule based access control, but we want to'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'd49b89ba-a153-4ac2-8461-c0c4459e6f60',
        type: 'transcript',
        start: 'PT38M5.603S',
        end: 'PT38M9.222S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'look at the role based access control. But first of all,'
        },
        hidden: false,
        userData: null
      },
      {
        id: '79c4b745-cfb8-49f2-8465-f8372df981c8',
        type: 'transcript',
        start: 'PT38M9.222S',
        end: 'PT38M11.525S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "we'll start with these two security cybersecurity"
        },
        hidden: false,
        userData: null
      },
      {
        id: '58a5088f-c876-445a-8383-4f39fc32edc3',
        type: 'transcript',
        start: 'PT38M11.525S',
        end: 'PT38M14.157S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'students might be already familiar with these access'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'd7b6ae29-bfb2-4f3a-86d7-80928e8c8b92',
        type: 'transcript',
        start: 'PT38M14.157S',
        end: 'PT38M17.447S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "control modes, but it's always good to very quickly refresh"
        },
        hidden: false,
        userData: null
      },
      {
        id: '240fd247-bf74-4a7c-9cc0-cc649c3dcb57',
        type: 'transcript',
        start: 'PT38M17.447S',
        end: 'PT38M20.408S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'your memory, so these access control models are quite'
        },
        hidden: false,
        userData: null
      },
      {
        id: '9b9f8a3b-2420-4ea1-b14e-d813a65f2b51',
        type: 'transcript',
        start: 'PT38M20.408S',
        end: 'PT38M23.369S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "commonly used, so we'll start with the discretionary access"
        },
        hidden: false,
        userData: null
      },
      {
        id: '347cd3de-6cdd-4c9d-ba34-3d4c1b93f904',
        type: 'transcript',
        start: 'PT38M23.369S',
        end: 'PT38M23.698S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'control.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '9865c0c1-8b93-4528-92ea-b8c8a4323099',
        type: 'transcript',
        start: 'PT38M24.98S',
        end: 'PT38M30.92S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'So discretionary access control is basically when you have an'
        },
        hidden: false,
        userData: null
      },
      {
        id: '0ae68dc6-0c5a-40f0-84eb-253ead981643',
        type: 'transcript',
        start: 'PT38M30.92S',
        end: 'PT38M36.266S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'object and the object security level can be defined.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '59a53367-5c12-4c53-90f4-c62d91430657',
        type: 'transcript',
        start: 'PT38M36.97S',
        end: 'PT38M39.994S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'And labeled by the owner of the'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c5c2323f-198d-42bb-80b9-7b7fc8ca790d',
        type: 'transcript',
        start: 'PT38M39.994S',
        end: 'PT38M45.08S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'object. Right, so one of the object is capable of providing'
        },
        hidden: false,
        userData: null
      },
      {
        id: '3fd50df9-df1a-4a1a-bf67-6005fb94991c',
        type: 'transcript',
        start: 'PT38M45.08S',
        end: 'PT38M49.784S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'the security label or level for the object that they create or'
        },
        hidden: false,
        userData: null
      },
      {
        id: '84b671d4-9ce7-4bcf-891d-7e66eeb5161c',
        type: 'transcript',
        start: 'PT38M49.784S',
        end: 'PT38M51.744S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'that an object that already'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a4be68f7-6187-4a23-bd25-73ed59056e30',
        type: 'transcript',
        start: 'PT38M51.744S',
        end: 'PT38M57.397S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'exist. So I hope that is clear. So how do we prevent others from'
        },
        hidden: false,
        userData: null
      },
      {
        id: '6bbc7c0c-0312-4dac-8a13-ab48eb0a5eec',
        type: 'transcript',
        start: 'PT38M57.397S',
        end: 'PT39M1.346S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'accessing these objects if they do not have the security level?'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ed18dedb-477a-48b1-9c38-34546e844b05',
        type: 'transcript',
        start: 'PT39M1.346S',
        end: 'PT39M5.295S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'Well, we have to implement an access control list, right? So'
        },
        hidden: false,
        userData: null
      },
      {
        id: '59f92d45-a34d-4f33-a7bd-85ab7be867dc',
        type: 'transcript',
        start: 'PT39M5.295S',
        end: 'PT39M9.244S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'this is done through an ACL. Access is granted through an'
        },
        hidden: false,
        userData: null
      },
      {
        id: '9bbc94de-40a2-4b58-a317-738514109188',
        type: 'transcript',
        start: 'PT39M9.244S',
        end: 'PT39M11.757S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'access control list very commonly implemented in'
        },
        hidden: false,
        userData: null
      },
      {
        id: '870be89b-3df1-4d08-b487-e7ee3a1bf6ff',
        type: 'transcript',
        start: 'PT39M11.757S',
        end: 'PT39M14.988S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'commercial products, and almost all the client based systems,'
        },
        hidden: false,
        userData: null
      },
      {
        id: '8d875c6f-a060-4006-a6ce-fde49f5119ec',
        type: 'transcript',
        start: 'PT39M14.988S',
        end: 'PT39M18.937S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "right? So this is based on identity, so every user who's"
        },
        hidden: false,
        userData: null
      },
      {
        id: 'e6bb5ed5-e934-44f4-9669-e1d43c973816',
        type: 'transcript',
        start: 'PT39M18.937S',
        end: 'PT39M22.886S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'accessing the system will have an identity, right? So they have'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'da077b00-341e-405e-a718-4a279222293b',
        type: 'transcript',
        start: 'PT39M22.886S',
        end: 'PT39M25.04S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'an identity and they have the.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '1dd91b15-5083-4828-a4fc-9282d1ec9f21',
        type: 'transcript',
        start: 'PT39M25.09S',
        end: 'PT39M30.298S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'They have their own rights to it, so now if you are not really'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'fbbd84bc-9bc4-4e94-b5af-d9667d70741f',
        type: 'transcript',
        start: 'PT39M30.298S',
        end: 'PT39M34.762S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'clear about what this actually means, let me tell you all the'
        },
        hidden: false,
        userData: null
      },
      {
        id: '30f5041b-ad7c-4fb0-9a36-c7018dccd9c9',
        type: 'transcript',
        start: 'PT39M34.762S',
        end: 'PT39M37.366S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'operating system, specially Windows operating systems that'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'e3c95670-c483-4afc-9e8a-9d4a453b05bd',
        type: 'transcript',
        start: 'PT39M37.366S',
        end: 'PT39M39.598S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "you are using it's based on."
        },
        hidden: false,
        userData: null
      },
      {
        id: '75206de4-a433-428e-84f1-e4ebd940c0aa',
        type: 'transcript',
        start: 'PT39M40.31S',
        end: 'PT39M43.11S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "Discretionary access control. That's why you are the"
        },
        hidden: false,
        userData: null
      },
      {
        id: '8d9df74d-f329-4a68-8094-95540064612a',
        type: 'transcript',
        start: 'PT39M43.11S',
        end: 'PT39M46.61S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'administrator of the operating system. You can create a new'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c2ee2faf-d94d-461d-af49-bfde5f37c954',
        type: 'transcript',
        start: 'PT39M46.61S',
        end: 'PT39M51.16S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'user in the system and you can tell that you can even define'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'cc919e66-b043-4b9b-ae5d-35c2a9efb173',
        type: 'transcript',
        start: 'PT39M51.16S',
        end: 'PT39M54.31S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'whether that user is an administrator user or not.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'fc3a16af-e641-4617-b8ee-11a67b1c682c',
        type: 'transcript',
        start: 'PT39M55.49S',
        end: 'PT40M0.011S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Right, you can define if that you say is an administrative'
        },
        hidden: false,
        userData: null
      },
      {
        id: '6c997da1-6cc0-4226-8432-edce272cc56c',
        type: 'transcript',
        start: 'PT40M0.011S',
        end: 'PT40M5.354S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "user or not, so it adds the IT completely. It's at the owner's"
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a5291864-da76-4844-86ea-f0a285aaa1e7',
        type: 'transcript',
        start: 'PT40M5.354S',
        end: 'PT40M9.053S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'discretion. Owner gets to choose the security level of'
        },
        hidden: false,
        userData: null
      },
      {
        id: '6eab225e-3d88-4b80-96c5-4adfa921dbc5',
        type: 'transcript',
        start: 'PT40M9.053S',
        end: 'PT40M13.163S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'the objects that they create, so even all Unix based'
        },
        hidden: false,
        userData: null
      },
      {
        id: '6bea3499-b72a-4a0b-b25a-d98abbcee49f',
        type: 'transcript',
        start: 'PT40M13.163S',
        end: 'PT40M15.629S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'operating systems are discretionary access control'
        },
        hidden: false,
        userData: null
      },
      {
        id: '5372def5-c704-456b-8665-d02ac86f6f7d',
        type: 'transcript',
        start: 'PT40M15.629S',
        end: 'PT40M16.04S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'mechanisms.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ef40418f-99e2-4276-a2be-a9d21a245428',
        type: 'transcript',
        start: 'PT40M17.17S',
        end: 'PT40M21.91S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'On the other hand, you can have a little bit more tighter'
        },
        hidden: false,
        userData: null
      },
      {
        id: '7ca2557d-5677-4b0a-9d89-cd0f58cb7cb0',
        type: 'transcript',
        start: 'PT40M21.91S',
        end: 'PT40M25.86S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'version of security. Write a bit more tighter version of'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'e1398848-aa16-408d-86a5-3073308e7b9b',
        type: 'transcript',
        start: 'PT40M25.86S',
        end: 'PT40M28.625S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'security. This is called mandatory access control.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'dac953cb-a326-4a6e-acf0-6d7088923f0a',
        type: 'transcript',
        start: 'PT40M29.19S',
        end: 'PT40M33.87S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'Mandatory access controls. This mechanism is based on where data'
        },
        hidden: false,
        userData: null
      },
      {
        id: '42322b41-17be-473f-81f3-12feaae013ec',
        type: 'transcript',
        start: 'PT40M33.87S',
        end: 'PT40M36.678S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "owners they don't get to grant"
        },
        hidden: false,
        userData: null
      },
      {
        id: '57c5e8b6-3e28-4d0f-bae8-c61612c8f479',
        type: 'transcript',
        start: 'PT40M36.678S',
        end: 'PT40M41.508S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'access. Right, so data owners cannot grant access.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'e8b1cb38-229d-4a73-aa23-bdf922bf0f74',
        type: 'transcript',
        start: 'PT40M42.03S',
        end: 'PT40M47.74S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'Operating system will make the decision based on the labels.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '64464ab2-84da-4f15-ab09-b2704f238f3b',
        type: 'transcript',
        start: 'PT40M48.33S',
        end: 'PT40M50.038S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Right, So what labels?'
        },
        hidden: false,
        userData: null
      },
      {
        id: '7e6d16e1-7218-4f60-b26f-63dc227c4978',
        type: 'transcript',
        start: 'PT40M50.66S',
        end: 'PT40M54.845S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Subject security label and the object security label right.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '5b1c5f9a-1a93-45e8-8d9e-7a99d5cade2a',
        type: 'transcript',
        start: 'PT40M55.48S',
        end: 'PT40M59.57S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "So you can have different security levels right now. Let's"
        },
        hidden: false,
        userData: null
      },
      {
        id: 'fc59631f-17f6-445a-a75b-9c602639cfa1',
        type: 'transcript',
        start: 'PT40M59.57S',
        end: 'PT41M4.069S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'think about users and subjects and objects so subjects can be'
        },
        hidden: false,
        userData: null
      },
      {
        id: '61be1f67-6de9-476f-bf08-c8a81cf1057f',
        type: 'transcript',
        start: 'PT41M4.069S',
        end: 'PT41M5.705S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'there are confidential secret'
        },
        hidden: false,
        userData: null
      },
      {
        id: '4ad9a852-0734-453c-b592-5a06620d53f5',
        type: 'transcript',
        start: 'PT41M5.705S',
        end: 'PT41M9.694S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'top secret. Right and then objects can also be there'
        },
        hidden: false,
        userData: null
      },
      {
        id: '3748807e-7b94-410f-b8fd-3fa7580357e6',
        type: 'transcript',
        start: 'PT41M9.694S',
        end: 'PT41M13.63S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'confidential, secret and top secret 3 levels. Or it can be 4'
        },
        hidden: false,
        userData: null
      },
      {
        id: '4f4fa3f9-0d6d-46f7-a992-a83909645da3',
        type: 'transcript',
        start: 'PT41M13.63S',
        end: 'PT41M18.086S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'levels, right? So subject should always have a.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c8d01b52-bbb1-4f21-be47-7ca8b17075f2',
        type: 'transcript',
        start: 'PT41M18.75S',
        end: 'PT41M23.736S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Higher, higher or equal equal higher security label to'
        },
        hidden: false,
        userData: null
      },
      {
        id: '7ed12577-a466-4760-9c1d-a908bdc77a1a',
        type: 'transcript',
        start: 'PT41M23.736S',
        end: 'PT41M26.506S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'dominate or interact with the'
        },
        hidden: false,
        userData: null
      },
      {
        id: '6fb5057b-bd35-4ee5-91de-25d923cc0c3c',
        type: 'transcript',
        start: 'PT41M26.506S',
        end: 'PT41M31.48S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'object. Right, so how do you implement this? Well, you have'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'afc93cb9-a9f6-477d-86d1-7b16a590d975',
        type: 'transcript',
        start: 'PT41M31.48S',
        end: 'PT41M36.44S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'to. Configure the rules which access rules are needed for this'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'd6fe788a-9021-4781-a254-a1505192b58d',
        type: 'transcript',
        start: 'PT41M36.44S',
        end: 'PT41M39.646S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'particular environment, right? A security officer should'
        },
        hidden: false,
        userData: null
      },
      {
        id: '2c3a74ac-ab46-4abf-99ed-c222e8a5c530',
        type: 'transcript',
        start: 'PT41M39.646S',
        end: 'PT41M44.226S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'configure it and it will be enforced by the operating'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'cabb9d02-5e32-42e8-8e30-4d46e4f2070f',
        type: 'transcript',
        start: 'PT41M44.226S',
        end: 'PT41M49.722S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'system, but understand that the subject or the user will not be'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ff89abda-7bf0-40e3-b51f-1df6b1e8db15',
        type: 'transcript',
        start: 'PT41M49.722S',
        end: 'PT41M54.302S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'able to define security levels. It happens at the administration'
        },
        hidden: false,
        userData: null
      },
      {
        id: '2a5690c2-8799-4512-b9b5-a4c3e14ad49c',
        type: 'transcript',
        start: 'PT41M54.302S',
        end: 'PT41M57.508S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'level, it happens at the administration level.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '6057ef9c-9975-4672-857d-509afb60b822',
        type: 'transcript',
        start: 'PT41M57.508S',
        end: 'PT42M1.172S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'Administration will define the security levels and therefore'
        },
        hidden: false,
        userData: null
      },
      {
        id: '4f717494-0bc7-4f2a-805b-89f7c4bfacdf',
        type: 'transcript',
        start: 'PT42M1.172S',
        end: 'PT42M5.478S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'the users. System users will either get access to an object'
        },
        hidden: false,
        userData: null
      },
      {
        id: '1b7fdc8c-2887-4b11-8571-930972ddd5d4',
        type: 'transcript',
        start: 'PT42M5.478S',
        end: 'PT42M9.942S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'or they want right? Simple as that, right? This model is not'
        },
        hidden: false,
        userData: null
      },
      {
        id: '85fe1098-e11f-46e2-8302-88bb3a322334',
        type: 'transcript',
        start: 'PT42M9.942S',
        end: 'PT42M13.29S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'that scalable. It will work perfectly if your organization'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c715abfc-d051-4a4e-b57d-49b7be5f6a39',
        type: 'transcript',
        start: 'PT42M13.29S',
        end: 'PT42M17.382S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'owns all the files. If your organization does not own all'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'e65718c8-781a-4287-9ff0-bd735a94281e',
        type: 'transcript',
        start: 'PT42M17.382S',
        end: 'PT42M21.102S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'the files and if your organization is also talking to'
        },
        hidden: false,
        userData: null
      },
      {
        id: '88d49949-88fe-4549-b2fa-416749dc309a',
        type: 'transcript',
        start: 'PT42M21.102S',
        end: 'PT42M25.194S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'a third party cloud server, an getting third party data into'
        },
        hidden: false,
        userData: null
      },
      {
        id: '7d53a9b9-14c1-458c-82d4-91bb9e6cb523',
        type: 'transcript',
        start: 'PT42M25.194S',
        end: 'PT42M29.58S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'your system. Off the third party data that is coming into your'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'd4d86a0a-de5b-4d60-969f-1ac26712f37d',
        type: 'transcript',
        start: 'PT42M29.58S',
        end: 'PT42M32.62S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'system for interaction, how can you define security labels for'
        },
        hidden: false,
        userData: null
      },
      {
        id: '55bb79a8-b24f-42bc-bbe1-f5da7296825d',
        type: 'transcript',
        start: 'PT42M32.62S',
        end: 'PT42M34.444S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'them? Because it does not belong'
        },
        hidden: false,
        userData: null
      },
      {
        id: '8ed61ca1-6539-4a6e-8520-5a5e7403db1c',
        type: 'transcript',
        start: 'PT42M34.444S',
        end: 'PT42M40.595S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'to you. So therefore mandatory access control. Its idea if your'
        },
        hidden: false,
        userData: null
      },
      {
        id: '6706e059-c53a-4899-a62e-93492edf700b',
        type: 'transcript',
        start: 'PT42M40.595S',
        end: 'PT42M43.32S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'organization owns all the data.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '19432c5b-ff34-4453-ba61-0a3ce7483586',
        type: 'transcript',
        start: 'PT42M43.83S',
        end: 'PT42M46.87S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'And if your organization handles all the subjects.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'bba0da41-6f64-4a05-8c23-db22bb292b8a',
        type: 'transcript',
        start: 'PT42M47.37S',
        end: 'PT42M50.799S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Security labeling of all the subjects within your premises.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '8252299e-ed78-45c6-b335-ee5528fd6cab',
        type: 'transcript',
        start: 'PT42M50.799S',
        end: 'PT42M54.609S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'But if you have other remote interactions, Mac or mandatory'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'e4f6aa5d-4a87-4c91-a2a4-f2b4164175b6',
        type: 'transcript',
        start: 'PT42M54.609S',
        end: 'PT42M56.514S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'access control is not idea'
        },
        hidden: false,
        userData: null
      },
      {
        id: '82546dc2-3988-423e-9207-3bcc3f79f84e',
        type: 'transcript',
        start: 'PT42M56.514S',
        end: 'PT43M1.723S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'right. So as I said, Mac is used when the classification and'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'e517d548-03a9-4aa8-83fe-e2669d8f2f4e',
        type: 'transcript',
        start: 'PT43M1.723S',
        end: 'PT43M5.253S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'confidentiality is at most well. The best example is military'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'cbe7061e-49f1-4a9e-84f0-849510f6994e',
        type: 'transcript',
        start: 'PT43M5.253S',
        end: 'PT43M8.783S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'right? In military environment, usually the data and the files'
        },
        hidden: false,
        userData: null
      },
      {
        id: '037cc3de-df3a-4235-bfd7-d219f18613b7',
        type: 'transcript',
        start: 'PT43M8.783S',
        end: 'PT43M11.607S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'that are generated in that particular environment or'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'bc8c3ad8-2004-4272-9e3d-084c313cab7c',
        type: 'transcript',
        start: 'PT43M11.607S',
        end: 'PT43M14.784S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'platforms are usually owned by the organization. Therefore we'
        },
        hidden: false,
        userData: null
      },
      {
        id: '325a33ea-1f3b-46da-b34f-be7bc48368e9',
        type: 'transcript',
        start: 'PT43M14.784S',
        end: 'PT43M18.314S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'can actually implement rules for that. We can implement security'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'd2cfd542-2a13-4c2d-b49d-bc1888cfd606',
        type: 'transcript',
        start: 'PT43M18.314S',
        end: 'PT43M21.138S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "labels for that, right? So that's the idea."
        },
        hidden: false,
        userData: null
      },
      {
        id: '9364fc05-cb85-496d-bacb-5608ba5c3bfd',
        type: 'transcript',
        start: 'PT43M21.9S',
        end: 'PT43M28.596S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'OK, and generally when it is come to Mac system, so mandatory'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'f12e5056-711b-4237-baeb-b4f8d30994f0',
        type: 'transcript',
        start: 'PT43M28.596S',
        end: 'PT43M30.27S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'access control systems.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '97d1e698-379e-4552-9380-12891e68a3b9',
        type: 'transcript',
        start: 'PT43M31.02S',
        end: 'PT43M34.491S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "We don't specifically"
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a8ea1691-e211-4a82-a99e-1ea27988193f',
        type: 'transcript',
        start: 'PT43M34.491S',
        end: 'PT43M40.486S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'have. Out of off the shelf solutions now, for example'
        },
        hidden: false,
        userData: null
      },
      {
        id: '0daf1b2c-2731-4521-bb65-652f843c177b',
        type: 'transcript',
        start: 'PT43M40.486S',
        end: 'PT43M43.524S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "discretionary access control systems don't actually do"
        },
        hidden: false,
        userData: null
      },
      {
        id: '20a7b074-cd1f-4ae1-accc-fffd8902438f',
        type: 'transcript',
        start: 'PT43M43.524S',
        end: 'PT43M48.298S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'mandatory access control. If it is a DAC based solution, map'
        },
        hidden: false,
        userData: null
      },
      {
        id: '88e9830c-4408-41cd-b0ea-6dd68eb9f5a8',
        type: 'transcript',
        start: 'PT43M48.298S',
        end: 'PT43M49.6S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'cannot be implemented.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '94da0085-4b46-49dd-99aa-74b8057d4e84',
        type: 'transcript',
        start: 'PT43M50.34S',
        end: 'PT43M55.32S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'Right, so we have a security enhanced Linux trusted Solaris,'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'd16f74c6-5eeb-4c58-bf6b-894569507e24',
        type: 'transcript',
        start: 'PT43M55.32S',
        end: 'PT43M59.802S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'so now called Solaris with trusted extensions. These are'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a94f76a3-f6cf-424b-bbc8-025414908989',
        type: 'transcript',
        start: 'PT43M59.802S',
        end: 'PT44M5.778S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'some of the examples right, but if you are thinking about your'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'e04fc3ca-583a-4988-aa28-17f54ceb7e65',
        type: 'transcript',
        start: 'PT44M5.778S',
        end: 'PT44M10.26S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'day today using Windows and Linux environments, they are'
        },
        hidden: false,
        userData: null
      },
      {
        id: '32987701-354c-4c43-b441-e104b4c9567c',
        type: 'transcript',
        start: 'PT44M10.26S',
        end: 'PT44M13.248S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'definitely based on discretionary access control.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'cf0c54f7-a60e-429f-8d49-04f384640a0c',
        type: 'transcript',
        start: 'PT44M13.37S',
        end: 'PT44M16.026S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'So going further down to mandatory access control'
        },
        hidden: false,
        userData: null
      },
      {
        id: '758a92c6-7c1b-44b5-a26a-e7a79cad4f66',
        type: 'transcript',
        start: 'PT44M16.026S',
        end: 'PT44M19.014S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'sensitivity labels right so we talked about different labels,'
        },
        hidden: false,
        userData: null
      },
      {
        id: '4bcc6c40-0d0f-4536-9472-ed2c632869da',
        type: 'transcript',
        start: 'PT44M19.014S',
        end: 'PT44M22.334S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'though all objects in Mac systems must have a security'
        },
        hidden: false,
        userData: null
      },
      {
        id: '5a807600-8f76-4606-8839-5fbfdcc6835e',
        type: 'transcript',
        start: 'PT44M22.334S',
        end: 'PT44M25.986S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'label, right? And how those labels can be defined? That is'
        },
        hidden: false,
        userData: null
      },
      {
        id: '0772db07-ef55-41b4-82f7-bd3e4c37a422',
        type: 'transcript',
        start: 'PT44M25.986S',
        end: 'PT44M29.97S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'up to the organization and they also need to need to have'
        },
        hidden: false,
        userData: null
      },
      {
        id: '067c88cd-5a55-4bda-af06-3acc8c5b5237',
        type: 'transcript',
        start: 'PT44M29.97S',
        end: 'PT44M33.954S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'categories to support. Need to know at a certain level. So what'
        },
        hidden: false,
        userData: null
      },
      {
        id: '41cb96bb-823d-41c6-b9d0-2e66187cf252',
        type: 'transcript',
        start: 'PT44M33.954S',
        end: 'PT44M38.27S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'do we mean by need to know? That means different types of users'
        },
        hidden: false,
        userData: null
      },
      {
        id: '45d9e127-2ca3-4900-afc1-ae28a5751e5a',
        type: 'transcript',
        start: 'PT44M38.27S',
        end: 'PT44M42.586S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'will get a need to know level. Need to know means OK depending'
        },
        hidden: false,
        userData: null
      },
      {
        id: '32c17360-23c5-4554-baa4-b8e520d22620',
        type: 'transcript',
        start: 'PT44M42.586S',
        end: 'PT44M44.246S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'on your security clearance. That'
        },
        hidden: false,
        userData: null
      },
      {
        id: '4b7808e3-754f-4db3-a1e6-58eff4563ee5',
        type: 'transcript',
        start: 'PT44M44.246S',
        end: 'PT44M48.458S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'means you can. Need you can weave or read.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'b54cd682-7421-401a-bc4c-6f190b83af93',
        type: 'transcript',
        start: 'PT44M49.01S',
        end: 'PT44M52.77S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Data up to this security layer objects objects that are'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'bf5204ba-1934-4e32-8cf8-a81c261ce308',
        type: 'transcript',
        start: 'PT44M52.77S',
        end: 'PT44M56.53S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'belonging to that security clearance level or below can be'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'd174117a-385f-4557-ad3d-09336c6d8799',
        type: 'transcript',
        start: 'PT44M56.53S',
        end: 'PT45M1.042S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'accessed by this user because they have a need to know level'
        },
        hidden: false,
        userData: null
      },
      {
        id: '990ade72-4eb6-4d9b-a88f-ee582aa8e005',
        type: 'transcript',
        start: 'PT45M1.042S',
        end: 'PT45M6.306S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'right, so every user will have a need to know level and based on'
        },
        hidden: false,
        userData: null
      },
      {
        id: '3143ed28-5ac8-402b-81fc-774168f41062',
        type: 'transcript',
        start: 'PT45M6.306S',
        end: 'PT45M10.818S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'that need to know level. You can decide that will define what'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'fae9cbce-99d8-43ec-8c9d-a8310df53fe7',
        type: 'transcript',
        start: 'PT45M10.818S',
        end: 'PT45M13.074S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'kind of objects that they can'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c2eb9c66-4e2e-403c-9782-4f6bd8e55c9e',
        type: 'transcript',
        start: 'PT45M13.074S',
        end: 'PT45M16.665S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'interact with. So depending on the organization,'
        },
        hidden: false,
        userData: null
      },
      {
        id: '7a27e2bb-69b8-48fc-8d04-11bf450c309b',
        type: 'transcript',
        start: 'PT45M16.665S',
        end: 'PT45M17.964S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'categories can change.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '669512f7-221c-4f49-b326-28f2812f466d',
        type: 'transcript',
        start: 'PT45M19.74S',
        end: 'PT45M24.4S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'However, the most commonly and most modern approach of access'
        },
        hidden: false,
        userData: null
      },
      {
        id: '73bb8212-f883-4e84-9c12-841c0dabf873',
        type: 'transcript',
        start: 'PT45M24.4S',
        end: 'PT45M29.06S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'control is not DAC or MSE. Instead, most organisations are'
        },
        hidden: false,
        userData: null
      },
      {
        id: '24e05fc6-418c-4eeb-a2a7-2bc4692ff547',
        type: 'transcript',
        start: 'PT45M29.06S',
        end: 'PT45M33.72S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'moving towards what we called the role based access control'
        },
        hidden: false,
        userData: null
      },
      {
        id: '365b2c09-9183-453f-825c-98ec1e105042',
        type: 'transcript',
        start: 'PT45M33.72S',
        end: 'PT45M37.914S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'method. So role based access control method is where'
        },
        hidden: false,
        userData: null
      },
      {
        id: '53ec9745-734d-4eb1-8edb-a55c7e4193af',
        type: 'transcript',
        start: 'PT45M37.914S',
        end: 'PT45M43.04S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'individually you are not treated as a subject. Instead you belong'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'b6272bce-9195-4709-94fc-c0586daf7556',
        type: 'transcript',
        start: 'PT45M43.04S',
        end: 'PT45M48.632S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'to a category of subjects. For example, in this example you can'
        },
        hidden: false,
        userData: null
      },
      {
        id: '1cd71a95-5e21-4b0e-8259-52672dbaefaa',
        type: 'transcript',
        start: 'PT45M48.632S',
        end: 'PT45M50.962S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'see Sarah, Bob and Steve.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'e225ad4d-827c-429b-896c-6b953bd3fe3f',
        type: 'transcript',
        start: 'PT45M51.02S',
        end: 'PT45M55.332S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'They are all all subjects that want to interact with the'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'f6ff397a-5211-415d-ab39-4ecb37b1d00f',
        type: 'transcript',
        start: 'PT45M55.332S',
        end: 'PT45M58.86S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'overall system, but there are security level and their'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'd6911d28-63d3-4a72-9853-3af1f627792e',
        type: 'transcript',
        start: 'PT45M58.86S',
        end: 'PT46M2.78S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "capabilities are defined by what we call the accountant's role."
        },
        hidden: false,
        userData: null
      },
      {
        id: '1db8680a-5b58-49e8-9725-f494e975508a',
        type: 'transcript',
        start: 'PT46M2.78S',
        end: 'PT46M5.132S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'So now we create an accountant'
        },
        hidden: false,
        userData: null
      },
      {
        id: '582d370c-cd4e-48fb-803b-323658e6ca95',
        type: 'transcript',
        start: 'PT46M5.132S',
        end: 'PT46M11.06S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'group. And to group that group we can allocate users, right?'
        },
        hidden: false,
        userData: null
      },
      {
        id: '66087067-c0bc-4ab0-adec-0767a9949231',
        type: 'transcript',
        start: 'PT46M12.11S',
        end: 'PT46M17.934S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'So. That accountant group or the accountant role?'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'd51f32e2-0bd2-4280-865c-b820e66febfa',
        type: 'transcript',
        start: 'PT46M18.48S',
        end: 'PT46M21.531S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Can do different things to different objects, like for'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a60e5807-7370-4fdf-9c40-5f34ebd73c88',
        type: 'transcript',
        start: 'PT46M21.531S',
        end: 'PT46M24.921S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'example here the accountant group is given read and write'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a55a7924-3812-424c-bfe6-33ff7f153131',
        type: 'transcript',
        start: 'PT46M24.921S',
        end: 'PT46M26.616S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'permission to budget dot text'
        },
        hidden: false,
        userData: null
      },
      {
        id: '480311cc-9e24-4916-8f2b-4bee0a8b09e6',
        type: 'transcript',
        start: 'PT46M26.616S',
        end: 'PT46M31.936S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'file. This is a very nice solution, so budget text if you'
        },
        hidden: false,
        userData: null
      },
      {
        id: '6d3142d6-b63e-434a-bbde-b19d158228e9',
        type: 'transcript',
        start: 'PT46M31.936S',
        end: 'PT46M36.824S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'want to have access to that then you need to be an accountant.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '6ab5a071-4808-4726-a34a-3107a436b94f',
        type: 'transcript',
        start: 'PT46M36.824S',
        end: 'PT46M41.336S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'Simple as that. You need to be an accountant and when Sarah,'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ae9ec217-1541-4d49-8081-72be72872d88',
        type: 'transcript',
        start: 'PT46M41.336S',
        end: 'PT46M45.096S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Bob and Steve, when the accountants that means they have'
        },
        hidden: false,
        userData: null
      },
      {
        id: '1c466a6a-e75b-475b-a22d-f5dea152278a',
        type: 'transcript',
        start: 'PT46M45.096S',
        end: 'PT46M49.608S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'permission to access the budget dot text file right? So this is'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'aca57fa8-fe14-4787-b840-f3b7bb99bed0',
        type: 'transcript',
        start: 'PT46M49.608S',
        end: 'PT46M53.744S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'based on a set of controls to determine how subjects and'
        },
        hidden: false,
        userData: null
      },
      {
        id: '3625d77c-a82c-4290-87af-62684e76be6e',
        type: 'transcript',
        start: 'PT46M53.744S',
        end: 'PT46M57.128S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "objects interact, right? We don't give users permissions or"
        },
        hidden: false,
        userData: null
      },
      {
        id: '80ebd287-a44b-4e0a-8dc5-5e78da47c999',
        type: 'transcript',
        start: 'PT46M57.128S',
        end: 'PT47M0.136S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'rights directly. Instead we create roles like accountant.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '4391b7ba-99ab-4274-bb10-caab94bcc8db',
        type: 'transcript',
        start: 'PT47M0.71S',
        end: 'PT47M5.388S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Marketing. Finance you guest user right external user admin'
        },
        hidden: false,
        userData: null
      },
      {
        id: '776f82a1-5699-49d4-8b40-9ef3fec7883a',
        type: 'transcript',
        start: 'PT47M5.388S',
        end: 'PT47M9.634S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'like that. You have different roles created an you can put'
        },
        hidden: false,
        userData: null
      },
      {
        id: '1248f8ed-e06e-44c7-bb0a-4e176f20ef48',
        type: 'transcript',
        start: 'PT47M9.634S',
        end: 'PT47M14.652S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'people into these roles and they get the rights based on the role'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ae895a10-6072-452b-8175-0839c1b6896c',
        type: 'transcript',
        start: 'PT47M14.652S',
        end: 'PT47M19.67S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "right? So that's why we call it role based access control or we"
        },
        hidden: false,
        userData: null
      },
      {
        id: '494e1f72-ff78-40cf-a7cc-113ae99e5c2e',
        type: 'transcript',
        start: 'PT47M19.67S',
        end: 'PT47M23.916S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'call them our BSE assign users to roles rather than providing'
        },
        hidden: false,
        userData: null
      },
      {
        id: '7b4f4768-e1ec-4923-b171-b221a239c8aa',
        type: 'transcript',
        start: 'PT47M23.916S',
        end: 'PT47M27.39S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'users with direct privileges. What are the advantages? Well'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'bef09b7d-3625-4631-81e5-b9a9ab1597a3',
        type: 'transcript',
        start: 'PT47M27.39S',
        end: 'PT47M31.636S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'this is perfect for a large scale organization. If we think'
        },
        hidden: false,
        userData: null
      },
      {
        id: '5be42afc-5cae-40fa-ba80-f4638366f80f',
        type: 'transcript',
        start: 'PT47M31.636S',
        end: 'PT47M32.794S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'about 1000 employees.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'df5577bf-1283-4eab-b470-0b5ac569f017',
        type: 'transcript',
        start: 'PT47M32.83S',
        end: 'PT47M36.2S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'These thousand employees will be long, will belong to most'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ac014e96-c6f7-491b-9001-14364dcec949',
        type: 'transcript',
        start: 'PT47M36.2S',
        end: 'PT47M39.57S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'probably most highly likely they will belong to ten categories,'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c059833c-afbd-429d-9181-a6d3c5f9470a',
        type: 'transcript',
        start: 'PT47M39.57S',
        end: 'PT47M43.951S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: '10 or 15. So all we have to define his security rules and'
        },
        hidden: false,
        userData: null
      },
      {
        id: '1eb284bb-cc48-4f10-9e40-d194955f83e6',
        type: 'transcript',
        start: 'PT47M43.951S',
        end: 'PT47M46.647S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'conditions. An access control for 10 different roles.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '8522d507-9524-4034-9a6b-ba651b96d2f2',
        type: 'transcript',
        start: 'PT47M47.29S',
        end: 'PT47M51.72S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "10 different roles. We don't have to configure for 1000"
        },
        hidden: false,
        userData: null
      },
      {
        id: 'f05bba54-5564-4985-b5fd-aa652df0174e',
        type: 'transcript',
        start: 'PT47M51.72S',
        end: 'PT47M53.492S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'people right? And therefore?'
        },
        hidden: false,
        userData: null
      },
      {
        id: '64c02bfd-72ea-4656-adf6-20718d76a927',
        type: 'transcript',
        start: 'PT47M54.28S',
        end: 'PT47M57.934S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'We put all these thousand employees into these 15'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ef759216-50f5-4628-9daa-878faba16a86',
        type: 'transcript',
        start: 'PT47M57.934S',
        end: 'PT48M1.588S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'categories. We have security access control in place right'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ec3a12b7-c2f4-4869-9021-d45819411905',
        type: 'transcript',
        start: 'PT48M1.588S',
        end: 'PT48M7.678S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "and it is also ideal for a type of a user, specially if it's a"
        },
        hidden: false,
        userData: null
      },
      {
        id: '89a3c8c2-406c-4258-8fd1-11b736b797da',
        type: 'transcript',
        start: 'PT48M7.678S',
        end: 'PT48M11.738S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'bad user who would like to misuse their permissions. Who'
        },
        hidden: false,
        userData: null
      },
      {
        id: '540e1ae8-ac23-4e1a-bac3-39162eece3ca',
        type: 'transcript',
        start: 'PT48M11.738S',
        end: 'PT48M16.204S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'would like to misuse their permission and try to reach to'
        },
        hidden: false,
        userData: null
      },
      {
        id: '4317b361-8ce1-4d77-b41d-dd0a1f65c3a4',
        type: 'transcript',
        start: 'PT48M16.204S',
        end: 'PT48M19.858S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'an upper level of permission? Higher permissions. This is'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c7e0664e-9d1d-4a3e-a136-1aabfff35c61',
        type: 'transcript',
        start: 'PT48M19.858S',
        end: 'PT48M23.512S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'usually cold as authorization creep. Authorization creep is a'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c924a780-321a-467d-921d-91705a8ec266',
        type: 'transcript',
        start: 'PT48M23.512S',
        end: 'PT48M28.198S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'word where. Some users will try to escalate their privileges.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '704c1b58-e8f0-450d-8713-1e3cc09042d4',
        type: 'transcript',
        start: 'PT48M28.198S',
        end: 'PT48M32.958S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'This is very difficult in our BSE environment because they'
        },
        hidden: false,
        userData: null
      },
      {
        id: '459c44b3-2e42-40d6-a016-5f6609b07043',
        type: 'transcript',
        start: 'PT48M32.958S',
        end: 'PT48M37.718S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'have a very generic set of Rights and privileges because'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'e78e87d1-31a7-4a07-b947-f1b6f1a20c9a',
        type: 'transcript',
        start: 'PT48M37.718S',
        end: 'PT48M42.954S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "they belong to a category. So that's an advantage. But of"
        },
        hidden: false,
        userData: null
      },
      {
        id: '2137182b-6dd9-411c-9abd-9a2197c6b4b9',
        type: 'transcript',
        start: 'PT48M42.954S',
        end: 'PT48M47.714S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'course are busy role based access control has a main'
        },
        hidden: false,
        userData: null
      },
      {
        id: '7988bd8a-bdea-4480-9abd-28f6ee254389',
        type: 'transcript',
        start: 'PT48M47.714S',
        end: 'PT48M49.142S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'disadvantage, right? Main'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'e341bc61-d170-407e-907a-983a2c297c2a',
        type: 'transcript',
        start: 'PT48M49.142S',
        end: 'PT48M54.406S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'disadvantage. But we want to first of all talk about when are'
        },
        hidden: false,
        userData: null
      },
      {
        id: '60bcfc9b-d747-4d65-8fb1-e7309cd26965',
        type: 'transcript',
        start: 'PT48M54.406S',
        end: 'PT49M0.046S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "BS is OK to use. Well, the best thing is when you don't have any"
        },
        hidden: false,
        userData: null
      },
      {
        id: '050ac2cd-3e42-4535-a1df-e1248fce6425',
        type: 'transcript',
        start: 'PT49M0.046S',
        end: 'PT49M3.054S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'centralized access. Sorry. When you have centralized access,'
        },
        hidden: false,
        userData: null
      },
      {
        id: '188222d7-a2bc-465a-8fc4-d57796b6404c',
        type: 'transcript',
        start: 'PT49M3.054S',
        end: 'PT49M7.566S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'like for example you have a database in the middle of the'
        },
        hidden: false,
        userData: null
      },
      {
        id: '58ba12ef-8495-4740-a807-615e66262263',
        type: 'transcript',
        start: 'PT49M7.566S',
        end: 'PT49M11.326S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'organization that is holding all the financial files, budget dot'
        },
        hidden: false,
        userData: null
      },
      {
        id: '0bb486b1-c7c2-4f51-ac69-33aa59982dd7',
        type: 'transcript',
        start: 'PT49M11.326S',
        end: 'PT49M16.59S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'TXT budget dot XLO or else it can be accounts. So you have a'
        },
        hidden: false,
        userData: null
      },
      {
        id: '40c893c8-f854-460d-baa4-faea4fe3812a',
        type: 'transcript',
        start: 'PT49M16.59S',
        end: 'PT49M20.35S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'centralized system and you have roles that are accessing this'
        },
        hidden: false,
        userData: null
      },
      {
        id: '0caa759f-6855-42f9-a103-6146c97af0ab',
        type: 'transcript',
        start: 'PT49M20.35S',
        end: 'PT49M23.79S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'system. So that way if we were going to give individual'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a192e40c-e0c9-48c6-8b51-c88062168976',
        type: 'transcript',
        start: 'PT49M23.79S',
        end: 'PT49M26.82S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'permission, we will have to write access control rules for'
        },
        hidden: false,
        userData: null
      },
      {
        id: '58e6ef82-5c8f-4007-84a4-72927f24d4e5',
        type: 'transcript',
        start: 'PT49M26.82S',
        end: 'PT49M28.335S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "individuals. But now we don't"
        },
        hidden: false,
        userData: null
      },
      {
        id: 'f9806579-1c82-456c-b98c-22ad9c100a47',
        type: 'transcript',
        start: 'PT49M28.335S',
        end: 'PT49M31.558S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "have to. Because it's centralized, everyone has to"
        },
        hidden: false,
        userData: null
      },
      {
        id: '4b3e4c00-850a-473e-ad0a-a39fabc9f497',
        type: 'transcript',
        start: 'PT49M31.558S',
        end: 'PT49M35.038S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'access that system, but if it was decentralized and everyone'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'cf1d6923-b88e-4921-a635-5a86799304a7',
        type: 'transcript',
        start: 'PT49M35.038S',
        end: 'PT49M39.562S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "was keeping a copy of it, maybe you don't need that. So that's"
        },
        hidden: false,
        userData: null
      },
      {
        id: '6acadb3f-4ae7-4f13-99c8-9fdb3a165a42',
        type: 'transcript',
        start: 'PT49M39.562S',
        end: 'PT49M42.346S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'why centralized access. The best solution is RPC.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a65dab73-346f-4251-8fd0-6d0fcd75bacd',
        type: 'transcript',
        start: 'PT49M43.7S',
        end: 'PT49M47.938S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'And of course, if you do not need this Mac level or mandatory'
        },
        hidden: false,
        userData: null
      },
      {
        id: '2d42a244-6480-4dae-9cc1-17550007fa2a',
        type: 'transcript',
        start: 'PT49M47.938S',
        end: 'PT49M51.524S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'access control level, very high level security. As I said, if'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'cdd4aa98-2f07-416d-9dd6-a64188b5c54a',
        type: 'transcript',
        start: 'PT49M51.524S',
        end: 'PT49M55.11S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'this is when your organization owns all the data and the'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c5b78519-c476-4f7d-a12a-fa06f4969467',
        type: 'transcript',
        start: 'PT49M55.11S',
        end: 'PT49M58.044S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'security or confidentiality is the highest priority and all'
        },
        hidden: false,
        userData: null
      },
      {
        id: '90df078c-5747-4817-8c26-50d76e4f92bd',
        type: 'transcript',
        start: 'PT49M58.044S',
        end: 'PT50M0.978S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'those things become the utmost priority, clearance levels are'
        },
        hidden: false,
        userData: null
      },
      {
        id: '22e59610-e441-481b-826f-c48583dc0e9d',
        type: 'transcript',
        start: 'PT50M0.978S',
        end: 'PT50M4.238S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "clearly defined, then you can't use role based access control."
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c91f4006-2500-451c-83d1-e5109d085a54',
        type: 'transcript',
        start: 'PT50M4.238S',
        end: 'PT50M8.802S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "Then you can go for Mac. But if you don't need Mac, the best"
        },
        hidden: false,
        userData: null
      },
      {
        id: '67baf919-d4db-41d1-a4c4-46be51cbe984',
        type: 'transcript',
        start: 'PT50M8.802S',
        end: 'PT50M12.388S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'solution out there is role based access control, specially as I'
        },
        hidden: false,
        userData: null
      },
      {
        id: '0add66f4-b339-4143-911e-2889d6e51efb',
        type: 'transcript',
        start: 'PT50M12.388S',
        end: 'PT50M14.344S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'said, if you have high turnover'
        },
        hidden: false,
        userData: null
      },
      {
        id: '9eabbd9b-73fe-494c-99ca-47aef51ce576',
        type: 'transcript',
        start: 'PT50M14.344S',
        end: 'PT50M17.71S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'and large. Number of employees, maybe thousands,'
        },
        hidden: false,
        userData: null
      },
      {
        id: '19f13a07-2952-40d6-a680-6fd684d0763f',
        type: 'transcript',
        start: 'PT50M17.71S',
        end: 'PT50M19.846S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'then RBCS idea, right?'
        },
        hidden: false,
        userData: null
      },
      {
        id: '56dd2bb4-117f-4f10-9f85-46c5dade7c82',
        type: 'transcript',
        start: 'PT50M21.11S',
        end: 'PT50M25.29S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'OK, Anne, of course you should see about the disadvantages of'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ed2c9768-492e-479a-b142-01edf79b2ad5',
        type: 'transcript',
        start: 'PT50M25.29S',
        end: 'PT50M29.09S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'our BSE or oil based access control disadvantage of role'
        },
        hidden: false,
        userData: null
      },
      {
        id: '9e53f754-5c76-4251-98fc-84a00d8f5c7a',
        type: 'transcript',
        start: 'PT50M29.09S',
        end: 'PT50M30.99S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'based access control is that.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'bd3f5d47-091d-4f9a-890e-6d81fc20fb7f',
        type: 'transcript',
        start: 'PT50M31.55S',
        end: 'PT50M36.27S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'If you are an accountant, your rights and privileges are'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'd81f2a84-746c-47fa-b238-fe4341fbc032',
        type: 'transcript',
        start: 'PT50M36.27S',
        end: 'PT50M38.63S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'limited to an account, right?'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'f2e9e349-6788-4f19-85ad-aa14c3d1b64f',
        type: 'transcript',
        start: 'PT50M39.14S',
        end: 'PT50M44.216S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'But what we what happens if we have an accountant who would'
        },
        hidden: false,
        userData: null
      },
      {
        id: '6b7b3bbd-2a6d-4aff-ada7-29e0a4af790b',
        type: 'transcript',
        start: 'PT50M44.216S',
        end: 'PT50M48.869S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'also like to look at the last two years marketing figures?'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'f26894d8-51c1-446d-a375-d30db71f951c',
        type: 'transcript',
        start: 'PT50M48.869S',
        end: 'PT50M53.099S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'Maybe that information cannot be accessed by the accountant due'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c782425d-95af-40d5-95e4-1a88d3fe1e3b',
        type: 'transcript',
        start: 'PT50M53.099S',
        end: 'PT50M54.368S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'to the restrictions.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '7030a823-7fae-448b-8dca-c9741a82adb5',
        type: 'transcript',
        start: 'PT50M55S',
        end: 'PT51M0.325S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "So then if we want to do that, we want to make this, let's say"
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a7651d53-96c2-4d9e-898f-f8fb270d5170',
        type: 'transcript',
        start: 'PT51M0.325S',
        end: 'PT51M5.65S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'Bob not only an account and we will also have to put him in the'
        },
        hidden: false,
        userData: null
      },
      {
        id: '425ac8c3-d080-44ab-a2a3-3dc94d01f226',
        type: 'transcript',
        start: 'PT51M5.65S',
        end: 'PT51M9.2S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'marketing role. So then it becomes little bit difficult to'
        },
        hidden: false,
        userData: null
      },
      {
        id: '0ce64189-341f-4a84-bbb4-61d945512ff2',
        type: 'transcript',
        start: 'PT51M9.2S',
        end: 'PT51M13.105S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'handle right? So flexibility is not that much because we are'
        },
        hidden: false,
        userData: null
      },
      {
        id: '8f7ce735-0e54-4fbd-812d-8a8c5ac5b904',
        type: 'transcript',
        start: 'PT51M13.105S',
        end: 'PT51M15.59S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'putting everyone into categories. So flexibility is'
        },
        hidden: false,
        userData: null
      },
      {
        id: '485b1a8b-248f-4284-96d5-723d52b8d8c7',
        type: 'transcript',
        start: 'PT51M15.59S',
        end: 'PT51M19.85S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'not there. You might get a manager who needs to access this'
        },
        hidden: false,
        userData: null
      },
      {
        id: '3c561fd9-6492-4812-a591-3ec7a1ea9e60',
        type: 'transcript',
        start: 'PT51M19.85S',
        end: 'PT51M24.465S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "file. That file and that file. But then he's the only that type"
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a6a08bfa-d244-40dc-a604-208af79a5639',
        type: 'transcript',
        start: 'PT51M24.465S',
        end: 'PT51M25.53S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'of a manager.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'e3f3a9e7-a8ca-4c53-bb82-50fa01b76f30',
        type: 'transcript',
        start: 'PT51M25.53S',
        end: 'PT51M30.01S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'So then how do we do it? We have to create a new role, right? We'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ef898659-aad3-47c0-b72e-5f0e962d258a',
        type: 'transcript',
        start: 'PT51M30.01S',
        end: 'PT51M33.93S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'have to create a new role. I hope that is clear. So so all'
        },
        hidden: false,
        userData: null
      },
      {
        id: '3704c3be-9c4d-4fe4-9df7-80551642fef9',
        type: 'transcript',
        start: 'PT51M33.93S',
        end: 'PT51M37.01S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'these things that we want to talk about these security models'
        },
        hidden: false,
        userData: null
      },
      {
        id: '31696df9-ad61-45a2-ab98-41688263b774',
        type: 'transcript',
        start: 'PT51M37.01S',
        end: 'PT51M39.81S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'and access controls and all these things are discussed for'
        },
        hidden: false,
        userData: null
      },
      {
        id: '1fa560c0-da44-44c8-85f6-7fe6f70ea637',
        type: 'transcript',
        start: 'PT51M39.81S',
        end: 'PT51M44.971S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'one purpose. Because we are at the end of the day trying to'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ce0bce3c-e7a4-4fef-beb2-e7be592b88c5',
        type: 'transcript',
        start: 'PT51M44.971S',
        end: 'PT51M47.859S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'prevent adversaries from damage ING hours, applications and'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'd5d97a59-f4f3-4355-99a6-e4c119cc82b6',
        type: 'transcript',
        start: 'PT51M47.859S',
        end: 'PT51M51.83S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'systems right? So who are adversaries? So we can have many'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'e6e7a3be-c2ef-4975-8134-de9b9c7b6a17',
        type: 'transcript',
        start: 'PT51M51.83S',
        end: 'PT51M55.44S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'different types of adversaries, and script kiddies are one of'
        },
        hidden: false,
        userData: null
      },
      {
        id: '94296341-5733-4f2a-9485-df2c8254dd2d',
        type: 'transcript',
        start: 'PT51M55.44S',
        end: 'PT51M59.05S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'the most common type of adversities that we are facing.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'cce50613-c0f8-48b8-b4e6-f810729f0108',
        type: 'transcript',
        start: 'PT51M59.05S',
        end: 'PT52M3.382S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'Right? Script kiddies are one of the most common types who are'
        },
        hidden: false,
        userData: null
      },
      {
        id: '1d4d555d-7a07-4a19-94dd-28cd3c52fe36',
        type: 'transcript',
        start: 'PT52M3.382S',
        end: 'PT52M5.909S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'script kiddies cybersecurity students might know. Well,'
        },
        hidden: false,
        userData: null
      },
      {
        id: '076865fa-aa39-433f-adf8-c17c0005c69b',
        type: 'transcript',
        start: 'PT52M5.909S',
        end: 'PT52M9.88S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "script kiddies are anyone? It doesn't necessarily have to be a"
        },
        hidden: false,
        userData: null
      },
      {
        id: '20c2bb27-3f50-4285-81e2-656f48addbbd',
        type: 'transcript',
        start: 'PT52M9.88S',
        end: 'PT52M11.324S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'younger age child, anyone?'
        },
        hidden: false,
        userData: null
      },
      {
        id: '4d10a27d-5eed-4352-ba7e-892e032301d6',
        type: 'transcript',
        start: 'PT52M11.35S',
        end: 'PT52M13.378S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Who can just about use the'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c9a09cb9-c45e-4516-8dab-0ead6a46c818',
        type: 'transcript',
        start: 'PT52M13.378S',
        end: 'PT52M17.308S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'computer? Maybe Google search some of the hacking tools'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c9bfdf0a-8167-4755-8efb-7385e1ea7c0d',
        type: 'transcript',
        start: 'PT52M17.308S',
        end: 'PT52M21.499S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'attacking tools, download them and use them to attack a victim,'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'cbe7c399-58e9-4e5b-b680-a924258f9ec3',
        type: 'transcript',
        start: 'PT52M21.499S',
        end: 'PT52M25.69S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'right? So this particular person does not write any script, they'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ecd894e3-2440-43fa-a8e2-2014433736cd',
        type: 'transcript',
        start: 'PT52M25.69S',
        end: 'PT52M29.881S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "don't know how to hack code. They don't have the advanced"
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c0eb372a-5162-44c5-92d7-cf49a8b97622',
        type: 'transcript',
        start: 'PT52M29.881S',
        end: 'PT52M34.072S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'knowledge, but instead what they do is they download third party'
        },
        hidden: false,
        userData: null
      },
      {
        id: '91c8ba33-22aa-4370-a0f6-9ab0d11411cb',
        type: 'transcript',
        start: 'PT52M34.072S',
        end: 'PT52M39.406S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'script and run and then they can do damage or else you can have'
        },
        hidden: false,
        userData: null
      },
      {
        id: '0d3ccb3c-f080-4ca5-afcd-8bfd6a557d97',
        type: 'transcript',
        start: 'PT52M39.406S',
        end: 'PT52M42.835S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'hackers. You can have very serious hackers that actually'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'cd929951-dcb3-471c-bc7d-b9a954e308ca',
        type: 'transcript',
        start: 'PT52M42.835S',
        end: 'PT52M47.026S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'they do it for criminal purposes or you can have very.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '0ce01851-142a-4b8e-9ecd-912aa221351a',
        type: 'transcript',
        start: 'PT52M47.07S',
        end: 'PT52M50.607S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Elite level adversaries such as you know, state sponsored'
        },
        hidden: false,
        userData: null
      },
      {
        id: '73e6d559-e328-475f-8b66-08613d15ffeb',
        type: 'transcript',
        start: 'PT52M50.607S',
        end: 'PT52M53.751S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'attackers. Some governments are sponsoring certain in certain'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ac3c7c29-7a82-4519-9113-97179746073b',
        type: 'transcript',
        start: 'PT52M53.751S',
        end: 'PT52M57.681S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'cases right? So non structured attackers are there. That means'
        },
        hidden: false,
        userData: null
      },
      {
        id: '1b16f2e6-149a-45ab-bd0c-99d7763e8bb1',
        type: 'transcript',
        start: 'PT52M57.681S',
        end: 'PT53M1.611S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "they don't have any particular approach right? They don't have"
        },
        hidden: false,
        userData: null
      },
      {
        id: '3da18158-8906-4dc1-bdc4-c76ce13d1852',
        type: 'transcript',
        start: 'PT53M1.611S',
        end: 'PT53M6.327S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'any particular approach, but they do it in the way that they'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a7b970e7-b906-44fe-b18e-2da82241928f',
        type: 'transcript',
        start: 'PT53M6.327S',
        end: 'PT53M9.864S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: "won't right? So maybe a particular system is targeted"
        },
        hidden: false,
        userData: null
      },
      {
        id: '8ca4096a-7f76-444e-8f0a-e9b534d4bc1a',
        type: 'transcript',
        start: 'PT53M9.864S',
        end: 'PT53M15.366S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'for one day and then they will give up on the target. But if'
        },
        hidden: false,
        userData: null
      },
      {
        id: '51a6b3e8-42b6-4ed8-a9d2-ec4a288538e4',
        type: 'transcript',
        start: 'PT53M15.366S',
        end: 'PT53M19.296S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'you go for structured and highly structured kind of attacks.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '407369ce-804f-4dd9-bf43-ff1a14c3bf37',
        type: 'transcript',
        start: 'PT53M19.39S',
        end: 'PT53M22.91S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'They will take years and months of preparation. We call them'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ced9d8f7-69f0-45fc-9603-73dae3fae653',
        type: 'transcript',
        start: 'PT53M22.91S',
        end: 'PT53M25.47S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'reconnaissance so reconnaissance will be done about the'
        },
        hidden: false,
        userData: null
      },
      {
        id: '0c4fe9d8-5884-4cb8-be0a-18e20024b55e',
        type: 'transcript',
        start: 'PT53M25.47S',
        end: 'PT53M28.99S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'application and the software how it is implemented. What are the'
        },
        hidden: false,
        userData: null
      },
      {
        id: '5ad66879-7f07-4ab4-bb20-8051ec1893d2',
        type: 'transcript',
        start: 'PT53M28.99S',
        end: 'PT53M32.83S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'internals of it? If they can find out all those details and'
        },
        hidden: false,
        userData: null
      },
      {
        id: '43b0edc8-46ae-45c5-9a3e-8fb01e97a363',
        type: 'transcript',
        start: 'PT53M32.83S',
        end: 'PT53M36.35S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'they do a little bit of social engineering, they talk to'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'de9eefa1-fe1d-40dd-83b5-2dec215f4492',
        type: 'transcript',
        start: 'PT53M36.35S',
        end: 'PT53M39.23S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'employees who are using the system through different ways,'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'cce98c6b-24b8-4dfd-8072-e5b0b4644818',
        type: 'transcript',
        start: 'PT53M39.23S',
        end: 'PT53M43.07S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'maybe through emails or phone calls. Get a very good idea, a'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'dd80aeb3-facd-4117-8ab8-7778ac2bb636',
        type: 'transcript',
        start: 'PT53M43.07S',
        end: 'PT53M46.27S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'structured attack or a highly structured attack is based on'
        },
        hidden: false,
        userData: null
      },
      {
        id: '50fb1ff4-6758-464b-803a-b83d6b6ef676',
        type: 'transcript',
        start: 'PT53M46.27S',
        end: 'PT53M49.47S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'that. And as I said, even countries can actually be.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '0ae050fa-605d-4c07-83fb-059551c69cb9',
        type: 'transcript',
        start: 'PT53M49.54S',
        end: 'PT53M53.632S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'Our adversaries, right? So there are so many examples going on'
        },
        hidden: false,
        userData: null
      },
      {
        id: '15ff7b20-85fa-4886-be4b-150860406ab1',
        type: 'transcript',
        start: 'PT53M53.632S',
        end: 'PT53M57.352S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'these days we are. Countries are fighting against each other,'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'f5105f81-45bb-4954-99b1-7c21e018201f',
        type: 'transcript',
        start: 'PT53M57.352S',
        end: 'PT54M1.816S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'right? So the only question is we sometimes we need to know'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a4e8a890-e8ca-4774-868a-d8850ec888d0',
        type: 'transcript',
        start: 'PT54M1.816S',
        end: 'PT54M5.164S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'whether the target is an organization or whether the'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'f9d567d0-c75c-4d24-b293-d4fa082cb9e8',
        type: 'transcript',
        start: 'PT54M5.164S',
        end: 'PT54M10S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "target is a country or whether the target is a person. So it's"
        },
        hidden: false,
        userData: null
      },
      {
        id: '6d0e662a-e08b-4545-85d4-3af03245640e',
        type: 'transcript',
        start: 'PT54M10S',
        end: 'PT54M13.348S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'very difficult to differentiate between these things anyway, so'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'cd5dd384-ef55-4cf8-bd8c-57738c89cd2c',
        type: 'transcript',
        start: 'PT54M13.348S',
        end: 'PT54M15.952S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'whole purposes these Access Control Mechanisims these'
        },
        hidden: false,
        userData: null
      },
      {
        id: '7d8a054c-ac30-4903-a933-ce92d637f38f',
        type: 'transcript',
        start: 'PT54M15.952S',
        end: 'PT54M20.416S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'security models that we talked about, why we want them in the'
        },
        hidden: false,
        userData: null
      },
      {
        id: '1d706323-2f59-4f19-9a8f-cc826d093b81',
        type: 'transcript',
        start: 'PT54M20.416S',
        end: 'PT54M25.79S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'first place. Is to make sure that we want to protect our'
        },
        hidden: false,
        userData: null
      },
      {
        id: '77840a45-d191-4846-a6cd-9ffd62ca267c',
        type: 'transcript',
        start: 'PT54M25.79S',
        end: 'PT54M28.526S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'systems, applications, software platforms against these'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'f7a24836-da24-4202-8de7-7f3395593883',
        type: 'transcript',
        start: 'PT54M28.526S',
        end: 'PT54M32.63S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'different types of adversaries. OK, these different types of'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c40aa080-897a-40a4-a190-bc62d951e2b7',
        type: 'transcript',
        start: 'PT54M32.63S',
        end: 'PT54M36.278S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'adversaries. Sometimes these adversaries can even come from'
        },
        hidden: false,
        userData: null
      },
      {
        id: '81254835-e647-4f30-8aff-523aae5eb9de',
        type: 'transcript',
        start: 'PT54M36.278S',
        end: 'PT54M40.382S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'within your organization. That is the most challenging one.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'f0e5966c-66d0-4434-9c2f-b2b5a57d94d2',
        type: 'transcript',
        start: 'PT54M40.382S',
        end: 'PT54M44.03S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'Internal attackers within your organization, and then suddenly'
        },
        hidden: false,
        userData: null
      },
      {
        id: '6ae87791-d56f-4e50-8953-68e917322079',
        type: 'transcript',
        start: 'PT54M44.03S',
        end: 'PT54M47.222S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'this application security principles are whole, fully'
        },
        hidden: false,
        userData: null
      },
      {
        id: '28e55c62-5fed-4c30-9942-0cd1110905ca',
        type: 'transcript',
        start: 'PT54M47.222S',
        end: 'PT54M50.87S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'built on the concept of outsiders. Untrusted insiders'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'ab0f2785-9f0c-467e-b66b-0dde8153b6a2',
        type: 'transcript',
        start: 'PT54M50.87S',
        end: 'PT54M54.512S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'are trusted. And suddenly you have an untrusted person inside.'
        },
        hidden: false,
        userData: null
      },
      {
        id: '67742b35-86c7-4c6b-8793-7e89a33a6f02',
        type: 'transcript',
        start: 'PT54M54.512S',
        end: 'PT55M0.275S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'So what do we do now? What do we do now? So these are some of the'
        },
        hidden: false,
        userData: null
      },
      {
        id: '28ae400a-eeb3-4147-9e0b-dad5e13ae25f',
        type: 'transcript',
        start: 'PT55M0.275S',
        end: 'PT55M4.343S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'discussions that we need to have in the future in the coming'
        },
        hidden: false,
        userData: null
      },
      {
        id: '35bf2ffc-28b8-4482-a9d3-4f1b33f6eca7',
        type: 'transcript',
        start: 'PT55M4.343S',
        end: 'PT55M8.75S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'weeks, but for today I think so. Up until this point we have'
        },
        hidden: false,
        userData: null
      },
      {
        id: '22413c5b-74df-4e08-8e24-9bee9370aafe',
        type: 'transcript',
        start: 'PT55M8.75S',
        end: 'PT55M12.479S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'covered the CIA triad security tenants was discussed and I also'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'c2905623-4018-4da6-9d90-b9dc6ad02faa',
        type: 'transcript',
        start: 'PT55M12.479S',
        end: 'PT55M15.53S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'introduce you to the concept of security architectures. Security'
        },
        hidden: false,
        userData: null
      },
      {
        id: '7309f41c-125c-4005-ba0b-9bf8362773f1',
        type: 'transcript',
        start: 'PT55M15.53S',
        end: 'PT55M16.547S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'models, including BLP.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'a98cd830-b380-4305-97f5-ebf692faf165',
        type: 'transcript',
        start: 'PT55M17.28S',
        end: 'PT55M21.438S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'And also we talked about be by integrity model, Chinese wall'
        },
        hidden: false,
        userData: null
      },
      {
        id: '2f01ee87-42cd-4781-abd8-be9bb057d8df',
        type: 'transcript',
        start: 'PT55M21.438S',
        end: 'PT55M25.974S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'model and then we talked about access control such as, you know'
        },
        hidden: false,
        userData: null
      },
      {
        id: '86ed933d-1c30-474b-a81e-f9ce83f78f71',
        type: 'transcript',
        start: 'PT55M25.974S',
        end: 'PT55M28.62S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'mandatory access control, discretionary access control as'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'b1595c67-e4f4-4b61-a1ef-cbd1d71e1afd',
        type: 'transcript',
        start: 'PT55M28.62S',
        end: 'PT55M32.778S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'well as rule based role based access control, right? So this'
        },
        hidden: false,
        userData: null
      },
      {
        id: '59a789cf-22a6-4828-b898-ebd8b84adf34',
        type: 'transcript',
        start: 'PT55M32.778S',
        end: 'PT55M37.692S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'is basically a review of what we need to know up until this'
        },
        hidden: false,
        userData: null
      },
      {
        id: '4be97f15-97d4-422a-a110-b3f497fee6a2',
        type: 'transcript',
        start: 'PT55M37.692S',
        end: 'PT55M41.85S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'point. And so the next discussion will be based on how'
        },
        hidden: false,
        userData: null
      },
      {
        id: '81c19e15-529c-4d7d-acfa-e2f4f663e7c0',
        type: 'transcript',
        start: 'PT55M41.85S',
        end: 'PT55M45.63S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'we define security requirements. Where is the origin of security'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'cfa43d18-0515-4ab0-85ab-b13b0b154174',
        type: 'transcript',
        start: 'PT55M45.63S',
        end: 'PT55M49.032S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'requirements? Because as I said at the beginning today.'
        },
        hidden: false,
        userData: null
      },
      {
        id: 'e9e407c1-b372-48fd-8b3d-fe0d15f386f3',
        type: 'transcript',
        start: 'PT55M49.06S',
        end: 'PT55M52.372S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'Security requirements are not usually something that the users'
        },
        hidden: false,
        userData: null
      },
      {
        id: '5bfd714b-309f-499a-9b7c-048c4d07b528',
        type: 'transcript',
        start: 'PT55M52.372S',
        end: 'PT55M56.96S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "give us. It's usually something we have to derive from something"
        },
        hidden: false,
        userData: null
      },
      {
        id: '86a313dc-6336-437c-9765-208d778b9467',
        type: 'transcript',
        start: 'PT55M56.96S',
        end: 'PT56M1.77S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'else. So what is that something else and how do we come from'
        },
        hidden: false,
        userData: null
      },
      {
        id: '0efb8cc1-2f0f-4993-9089-d25f76b5ef57',
        type: 'transcript',
        start: 'PT56M1.77S',
        end: 'PT56M3.62S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'that? Something else too very?'
        },
        hidden: false,
        userData: null
      },
      {
        id: '31fe06fe-db1e-4566-b1dd-dca9da53d4df',
        type: 'transcript',
        start: 'PT56M3.64S',
        end: 'PT56M6.573S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'Deployable testable security requirements from which two'
        },
        hidden: false,
        userData: null
      },
      {
        id: '551df559-bdb6-4f3b-bee1-da4b537f1732',
        type: 'transcript',
        start: 'PT56M6.573S',
        end: 'PT56M10.763S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            'security requirements, so that will be our next discussion. So'
        },
        hidden: false,
        userData: null
      },
      {
        id: '63bfb253-238e-4b31-81e5-9e5ba6286940',
        type: 'transcript',
        start: 'PT56M10.763S',
        end: 'PT56M14.953S',
        eventData: {
          type: 'caption',
          language: 'en',
          text:
            "hopefully you got something out of today's discussion and thank"
        },
        hidden: false,
        userData: null
      },
      {
        id: 'bedc18a1-4923-4620-a850-266c7b7d2492',
        type: 'transcript',
        start: 'PT56M14.953S',
        end: 'PT56M17.048S',
        eventData: {
          type: 'caption',
          language: 'en',
          text: 'you for joining. Thank you.'
        },
        hidden: false,
        userData: null
      }
    ]
  };
 array=[];
  constructor() {

    this.name.value.forEach(name=>{
      this.array.push(name.eventData.text);
      console.log(name.eventData.text);
    })
  }
}
