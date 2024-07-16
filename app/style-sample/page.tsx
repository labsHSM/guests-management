import SearchInput from '@/components/SearchInput';

export default function StyleSample() {
  return (
    <div className="h-fit w-screen p-10 flex flex-col items-center">
      <div className="text-center mb-4 custom-h3">Buttons</div>
      <div className="mb-14 flex flex-row items-center">
        <button type="button" className="btn btn-primary w-auto">Primary</button>
        <button type="button" className="btn btn-light w-auto">Light/Normal</button>
        <button type="button" className="btn btn-dark w-auto">Dark</button>
      </div>
      <div className="text-center mb-4 custom-h3">Inputs</div>
      <div className="w-4/6 mb-14 flex flex-col items-center">
        <div className="form-row">
          {/* 가로 길이와 label 클래스 지정 */}
          <label htmlFor="email" className="w-3/12 label">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="w-4/6 custom-input" // 가로 길이와 custom-input 클래스 지정
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="first_input" className="w-3/12 label">
            Long Input
          </label>
          <input
            type="text"
            id="first_input"
            className="w-4/6 custom-input"
            placeholder="w-3/12"
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="second_input" className="w-3/12 label">
            Medium Input
          </label>
          <input
            type="text"
            id="second_input"
            className="w-3/6 custom-input"
            placeholder="w-3/6"
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="third_input" className="w-3/12 label">
            Short Input
          </label>
          <input
            type="text"
            id="third_input"
            className="w-2/5 custom-input"
            placeholder="w-2/5"
            required
          />
        </div>
      </div>
      <div className="text-center mb-4 custom-h3">Search Inputs</div>
      <div className="w-4/6 mb-14 flex flex-col items-center">
        <SearchInput className="w-full max-w-lg mb-3" />
        <SearchInput className="w-full max-w-sm" />
      </div>
      <div className="text-center mb-4 custom-h3">Titles</div>
      <div className="mb-10 flex flex-row items-center">
        <div className="mr-10 custom-h1">H1입니다</div>
        <div className="mr-10 custom-h2">H2입니다</div>
        <div className="mr-10 custom-h3">H3입니다</div>
        <div className="custom-h4">H4입니다</div>
      </div>
    </div>
  );
}
